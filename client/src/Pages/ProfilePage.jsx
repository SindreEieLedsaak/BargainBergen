import CardCollection from "../Components/CardCollection";
import { ScrollShadow } from "@nextui-org/react";

const ProfilePage = () => {
  return (
    <div className="bg-white-to-green min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl px-3 mt-10">Your listings </h1>
        <ScrollShadow orientation="horizontal" className="max-h-[230px]">
          <CardCollection
            items={[
              {
                title: "Profile Item 1",
                description: "This is the first item in the profile page.",
              },
              {
                title: "Profile Item 2",
                description: "This is the second item in the profile page.",
              },
              {
                title: "Profile Item 3",
                description: "This is the third item in the profile page.",
              },
              {
                title: "Profile Item 4",
                description: "This is the fourth item in the profile page.",
              },
              {
                title: "Profile Item 1",
                description: "This is the first item in the profile page.",
              },
              {
                title: "Profile Item 2",
                description: "This is the second item in the profile page.",
              },
              {
                title: "Profile Item 3",
                description: "This is the third item in the profile page.",
              },
              {
                title: "Profile Item 4",
                description: "This is the fourth item in the profile page.",
              },
            ]}
            cols={4}
          />
        </ScrollShadow>
      </div>
      <div className="container mx-auto pt-20">
        <h1 className="text-3xl px-3 mt-10">Your favorites </h1>
        <ScrollShadow orientation="horizontal" className="max-h-[230px]">
          <CardCollection
            items={[
              {
                title: "Profile Item 1",
                description: "This is the first item in the profile page.",
              },
              {
                title: "Profile Item 2",
                description: "This is the second item in the profile page.",
              },
              {
                title: "Profile Item 3",
                description: "This is the third item in the profile page.",
              },
              {
                title: "Profile Item 4",
                description: "This is the fourth item in the profile page.",
              },
              {
                title: "Profile Item 1",
                description: "This is the first item in the profile page.",
              },
              {
                title: "Profile Item 2",
                description: "This is the second item in the profile page.",
              },
              {
                title: "Profile Item 3",
                description: "This is the third item in the profile page.",
              },
              {
                title: "Profile Item 4",
                description: "This is the fourth item in the profile page.",
              },
            ]}
            cols={4}
          />
        </ScrollShadow>
      </div>
    </div>
  );
};

export default ProfilePage;
