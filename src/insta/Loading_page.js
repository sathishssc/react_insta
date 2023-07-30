import { Link } from "react-router-dom";


export default function Loading_page(){
    return <div>
        <h6>this is loading page</h6>
        <Link to="/PostView">PostView</Link>
        <Link to="/CreatePost">CreatePost</Link>
    </div>
}