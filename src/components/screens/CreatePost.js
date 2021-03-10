import React,{ useState} from "react";

export default function CreatePost() {
    const [title,setTitle] =useState("");
    const[body,setBody] = useState("")
    const [image,setImage] = useState("")
    const fetchImage =() =>{
        const data = new FormData();
        data.append("file",image)
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
      <button className="btn waves-effect waves-light #42a5f5 blue lighten-1">Submit</button>
    </div>
  );
}
