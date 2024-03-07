import React from "react";
import "./profile.css";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { girl } from "../../../asserts/sharedFile";
import profile from "../../../asserts/json_file/profileData.json";

const Profile = () => {
  console.log(profile, " $$ profile");
  return (
    <div className="container">
      <div className="main-hero">
        <div className="intro">
          <h2>{profile.Name}</h2>
          <p>{profile.summary}</p>
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sravani-linguberi-ab04b5156/"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
