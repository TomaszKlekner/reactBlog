import Sidebar from "../../components/sidebar/Sidebar";
import sidebarAboutMe from "../../assets/sidebar_about_me.jpg";
import "./setting.scss";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Settings = () => {
  const {
    state: { user },
  } = useContext(UserContext);

  return (
    <div className="settings container">
      <div className="settings__panel">
        <div className="settings__title">
          <span className="settings__title--update">Update account</span>
          <span className="settings__title--delete">Delete account</span>
        </div>
        <form className="settings__form">
          <div className="settings__profile">
            <label>Profile Picture</label>
            <div className="settings__profile--update">
              <img
                src={user?.profilePicture || sidebarAboutMe}
                alt={user?.username}
                className="settings__profile-picture"
                title="Profile picture"
              />
              <label
                htmlFor="profile-picture"
                className="settings__profile-picture-label"
                title="Update user image"
              >
                <FaUserAlt />
              </label>
              <input
                type="file"
                id="profile-picture"
                className="settings__profile-picture-input"
              />
            </div>

            <div className="settings__profile--details">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" defaultValue={user?.username} />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" defaultValue={user?.email} />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="settings__submit">
              Update
            </button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
