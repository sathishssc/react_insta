import { useEffect, useState } from "react"
import "./post.css"
import { Link } from "react-router-dom";

export default function PostView(){

let [data , setdata] = useState([]);
    useEffect(()=>{
        fetch("https://instagram-clone-lh1w.onrender.com/data").then(
            res => res.json()
        ).then(ss =>{
            setdata(ss.data);
        }).catch(err =>{
            console.log(err);
        });
    },[])
    return <div>
        <h1>instagram </h1>
        <Link to="/CreatePost">CreatePost</Link>
       {/* {data[0].name} */}
       <head>
        <div></div>
       </head>
       {data.map(post =>(
        <div className="main" key={post._id}><div className="name">name:{post.name}</div>
         <br></br>
        <div className="location"> {post.location}</div>
        
        <div><img className="postImage" src="https://d3eizkexujvlb4.cloudfront.net/2021/10/24131917/Cursive-Instruction-Sample-Images.jpg" alt="not available"></img></div>
        <div className="likes">{post.likes}</div>
        <div className="date">{post.date}</div>
        </div>    

       ) )}
           </div>
}