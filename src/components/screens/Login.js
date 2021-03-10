import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import { GoogleLogin } from 'react-google-login';
export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const SignIn = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "Invalid Email", classes: "#e53935 red darken-1" });
      return;
    }

    fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#e53935 red darken-1" });
        } else {
          localStorage.setItem("jwt",data.token);
          localStorage.setItem("user",JSON.stringify(data.user));
          M.toast({
            html: "Signed In successfully",
            classes: "#43a047 green darken-1",
          });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const responseGoogle = (response) => {
    setEmail(response.profileObj.email);
    // setName(response.profileObj.name);
    console.log("ress>>>",response);
  }
  return (
    <div className="mycard">
      <div className="card auth-card input-field ">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #42a5f5 blue lighten-1"
          onClick={() => SignIn()}
        >
          LOGIN
        </button>

        <h6>
          <Link to="/signup"> Don't have account please signup</Link>
        </h6>
        {/* <GoogleLogin
    clientId="923017104635-2c4ac83bi5ju5c1ng8e2k3tpcmoqvtut.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /> */}


      </div>
    </div>
  );
}
