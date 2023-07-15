import { Component } from "react";
class Post extends Component{
    render(){
        return (<div className="posts-section">
            {[1,2,3].map((a,b) => <div key={b} className="post-bar"></div>)}
          </div>)
}}
export default Post;  