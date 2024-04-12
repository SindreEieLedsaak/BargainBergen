import ProfileComponent from "./ProfileComponent";
import React from "react";

const ProfileCollection = ({ profiles, header }) => {
  return (
    <div>
      <h1 className="text-3xl text-primary-900 px-3 mt-10">{header}</h1>
      <div className={`pt-4 px-3 gap-2 pb-12 grid grid-cols-4 sm:grid-cols-4`}>
        {profiles.map((profile) => (
          <ProfileComponent key={profile.username} profile={profile} />
        ))}
      </div>
    </div>
  );
};
export default ProfileCollection;
