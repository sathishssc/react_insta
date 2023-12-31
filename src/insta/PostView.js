import { useEffect, useState } from "react"
import "./post.css"
import { Link } from "react-router-dom";
import icon from "./images/icon@2x.png"
import camera from "./images/camera@2x.png"
import like from "./images/heart@2x.png";
import share from "./images/share@2x.png"
export default function PostView(){

let [data , setdata] = useState([]);
let [loading ,setLoading] = useState(true)


    
    useEffect(()=>{
        setTimeout(() =>{
            fetch("https://instagram-backend-6ykv.onrender.com/data").then(
                res => res.json()
            ).then(ss =>{
                setdata(ss.data);
                setLoading(false);
            }).catch(err =>{
                console.log(err);
                setLoading(false);
            });
        },2000)
        
    },[])
    return <div>
    <div>
    
    {loading ? <div className="spinnerContainer"><div className="spinner"></div></div>:<div><header >
        <div id="headerpv"><img id="icon" src={icon} alt=""></img><h1>instagram </h1>
        <Link id="link" to="/CreatePost"><img id="camera" src={camera} alt="not available"></img></Link></div>
       </header>
       
       <main id="mainpv">
       {data.map(post =>(
        <div className="mainpv2" key={post._id}><div className="name">{post.name}<div className="location"> {post.location}</div></div>
         <br></br>    
        <div id="imgdiv"><img className="postImage" src={`https://instagram-backend-6ykv.onrender.com/uploads/${post.image}`} alt="not available"></img></div>
        <div><img id="likeImg" src={like} alt="like symbel"></img><img id="share" src={share} alt="share"></img> <div className="date">{post.date}</div></div>
        <div className="likes">{post.likes} likes</div>
       <div id="desc">{post.description}</div>
        </div>    

       ) )}
       </main></div>}

    </div>
    

       
      
           </div>
}