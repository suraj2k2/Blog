
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img  src="./our-story.png" alt="" />

          <p>
          Yoga is a holistic practice that originated in ancient India. It encompasses physical postures (asanas), breath control (pranayama), meditation, and ethical principles. The word "yoga" means union or connection, referring to the union of mind, body, and spirit.

Yoga offers numerous benefits for overall well-being. It improves flexibility, strength, and balance, enhances mental clarity and focus, reduces stress, and promotes relaxation. Regular practice of yoga can also contribute to better sleep, increased energy levels, improved cardiovascular health, and a strengthened immune system.
          </p>

       </div>

       <div className="sidebarItem">
       <span className="sidebarTitle">CATEGORIES</span>
       
       <ul className="sidebarList">
       <li className="sidebarListItem">Life</li>
       <li className="sidebarListItem">music</li>
       <li className="sidebarListItem">sport</li>
       <li className="sidebarListItem">chenema</li>
       <li className="sidebarListItem">tech</li>
        
       </ul>
    </div>
       <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
       </div>

    </div>
  );
}
