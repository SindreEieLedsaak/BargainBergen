import { User, Link } from "@nextui-org/react";
import React from "react";

const ProfileComponent = ({ profile }) => {
  return (
    <User
      name={profile.name}
      description={
        <Link href={profile.link} size="sm" isExternal>
          @{profile.username}
        </Link>
      }
      avatarProps={{
        src: profile.avatarProps.src,
      }}
    />
  );
};

export default ProfileComponent;
