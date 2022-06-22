import "./post.css";
import { Link } from "react-router-dom";

export default function post({ post }) {
  const expresshost = process.env.REACT_APP_EXPRESS_HOST;
  const port = process.env.REACT_APP_EXPRESS_PORT;
  const url = `http://${expresshost}:${port}/images/`;
  const PF = url;
  console.log("HEEEE");

  console.log(PF + post.photo);

  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt=""></img>
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((e) => (
            <span className="postCat">{e}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
