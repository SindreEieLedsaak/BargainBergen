import React from "react";
import { User, Link } from "@nextui-org/react";

const ProfileComponent = ({ profile }) => { 
  return (
    <User   
      name={profile.name}
      description={(
        <Link href={profile.link} size="sm" isExternal>
          @{profile.username}
        </Link>
      )}
      avatarProps={{
        src: profile.avatarProps.src,
      }}
    />
  );
}

export default ProfileComponent;
