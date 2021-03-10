import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
export default function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "Invalid Email", classes: "#e53935 red darken-1" });
      return;
    }

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#e53935 red darken-1" });
        } else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" });
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const componentClicked = (data) => {
    console.log(data);
  };
  const responseFacebook = (response) => {
    setEmail(response.email);
    setName(response.name);
    console.log(response);
  };

  const responseGoogle = (response) => {
    setEmail(response.profileObj.email);
    setName(response.profileObj.name);
    console.log("ress>>>", response);
  };
  return (
    <div className="mycard">
      <div className="card auth-card input-field ">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={() => PostData()}
        >
          SIGNUP
        </button>
        <h5>
          <Link to="/signin"> If you already have account login</Link>
        </h5>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <GoogleLogin
            clientId="923017104635-2c4ac83bi5ju5c1ng8e2k3tpcmoqvtut.apps.googleusercontent.com"
            buttonText="LOG IN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div style={{ display: "flex", marginRight: "20px" }}>
        <FacebookLogin
          appId="433851404552879"
          autoLoad={true}
          fields="name,email"
          onClick={componentClicked}
          callback={responseFacebook}
        />
         </div>
      </div>
    </div>
  );
}
