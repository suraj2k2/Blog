import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
export default function Settings() {
  return (
    <div className="settings">
        <div className="settingWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
            <img  src="https://source.unsplash.com/900x550/?cloudy sun" alt="" className="writeImg" />
            <label htmlFor="fileInput">
             <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Safak" />
            <input type="email" placeholder="Safak@gmail.com" />
            <label>password</label>
            <input type="password"  />
            <button className="settingsSubmit">Update </button>
          </form>

        </div>
        <Sidebar/>
    </div>
  )
}

