import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
          className="singlePostImg"
        ></img>
      </div>
      <h1 className="singlePostTitle">
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>Milton</b>
        </span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour There
        are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour There
        are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour There
        are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour There
        are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour
      </p>
    </div>
  );
}
