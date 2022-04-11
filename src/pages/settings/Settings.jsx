import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://avatars.githubusercontent.com/u/56884655?v=4"
              alt=""
            ></img>
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Milton Rodrigues"></input>
          <label>Email</label>
          <input type="email" placeholder="rodriguesmilton21@gmail.com"></input>
          <label>Password</label>
          <input type="password" placeholder="Milton Rodrigues"></input>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
}
