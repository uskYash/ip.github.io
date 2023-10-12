// Profile.js
import React from "react";

function Profile(props) {
  const { name, bio, location } = props;

  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>{location}</p>
    </div>
  );
}

export default Profile;
