import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  
  const user=false;

  return (
    <div className="top">
       <div className="topLeft">
       <i className="topIcon fa-brands fa-square-facebook"></i>
       <i className="topIcon fa-brands fa-square-twitter"></i>
       <i className="topIcon fa-brands fa-pinterest"></i>
       <i className="topIcon fa-brands fa-square-instagram"></i>
       </div>

       <div className="topCenter">
         <ul className="topList">
            <li className="topListItem"><Link className="link" to="/" > HOME</Link> </li>
            <li className="topListItem"><Link className="link" to="/" > ABOUT</Link> </li>
            <li className="topListItem"><Link className="link" to="/" >CONTACT</Link> </li>
            <li className="topListItem"><Link className="link" to="/" >WRITE</Link> </li>
            <li className="topListItem">{user && "LOGOUT"} </li>
         </ul>

       </div>
       <div className="topRight">
       {
        user ? (
          <img className="topImg" src="https://source.unsplash.com/700x900/?Girls" alt="" />
        ) :(
          <ul className="topList">
           <li className="topListItem">
             <Link className="link" to="/login">LOGIN</Link> 
           </li>
           <li className="topListItem">
             <Link className="link" to="/register">REGISTER</Link>
           </li>
          </ul>
        )
       }
       
       </div>
    </div>
  )
}
