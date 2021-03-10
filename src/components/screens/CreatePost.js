import React,{ useState,useEffect} from "react";
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
export default function CreatePost() {
  const history = useHistory()
    const [title,setTitle] =useState("");
    const[body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
      if(url){
       fetch("http://localhost:5000/createpost",{
           method:"post",
           headers:{
               "Content-Type":"application/json",
               "Authorization":localStorage.getItem("jwt")

           },
           body:JSON.stringify({
               title,
               body,
               photo:url
           })
       }).then(res=>res.json())
       .then(data=>{
   
          if(data.error){
             M.toast({html: data.error,classes:"#c62828 red darken-3"})
          }
          else{
              M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
              history.push('/')
          }
       }).catch(err=>{
           console.log(err)
       })
   }
   },[url])
    const fetchImage =() =>{
        const data = new FormData();
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","dfkipvqtb")
        fetch("https://api.cloudinary.com/v1_1/dfkipvqtb/image/upload",{
          method:"post",
          body:data,
        }).then(res=>res.json())
        .then(data=>{
          setUrl(data.url);
          console.log(data);
        }).catch(err=>{
          console.log(err);
        })
        
    }
  return (
    <div className="card input-filed" style={{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"}}>
      <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)}/>

      <div className="file-field input-field">
        <div className="btn #42a5f5 blue lighten-1">
          <span>Upload Image</span>
          <input type="file" onChange={(e)=>setImage(e.target.files[0])}/> 
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
            placeholder="Upload one or more files"
          />
        </div>
      </div>
      <button className="btn waves-effect waves-light #42a5f5 blue lighten-1" onClick={()=>fetchImage()}>Submit</button>
    </div>
  );
}
