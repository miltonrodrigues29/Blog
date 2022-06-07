import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          width="80%"
          height="80%"
          src="https://avatars.githubusercontent.com/u/56884655?s=400&u=c7769f28958c29e46dceaed14ee295fcf183b126&v=4"
          alt=""
        ></img>
        <p>
          lore nsjcbsjhcb cnds cjkdnbc cjdnbckdjbcn bsaoida cxsiu d cdcd
          crereref dfdcdncvdsv cdckn
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((e) => (
            <li className="sidebarListItem">{e.name}</li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
