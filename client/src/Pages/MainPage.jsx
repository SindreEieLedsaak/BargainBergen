import CardCollection from "../Components/CardCollection";
import Item from "../Classes/Item";
import Category from "../Classes/Category";
import Profile from "../Classes/Profile";
import ProfileCollection from "../Components/ProfileCollection";
import React from "react";

const items = [
  new Item("Sweater", "", "20", "clothing"),
  new Item("Shirt", "", "15", "clothing"),
  new Item("Pants", "", "25", "clothing"),
];
const categories = [
  new Category("Clothing", ""),
  new Category("Electronics", ""),
  new Category("Books", ""),
];
const profiles = [
  new Profile(
    "johndoe123",
    "John Doe",
    "Software Engineer",
    "https://www.example.com/johndoe123",
    { src: "https://www.exampleimage.com/avatar1.png" }
  ),
  new Profile(
    "janedoe123",
    "Jane Doe",
    "Graphic Designer",
    "https://www.example.com/janedoe123",
    { src: "https://www.exampleimage.com/avatar2.png" }
  ),
  new Profile(
    "mikesmith123",
    "Mike Smith",
    "Digital Marketer",
    "https://www.example.com/mikesmith123",
    { src: "https://www.exampleimage.com/avatar3.png" }
  ),
  new Profile(
    "sarahbrown123",
    "Sarah Brown",
    "Content Writer",
    "https://www.example.com/sarahbrown123",
    { src: "https://www.exampleimage.com/avatar4.png" }
  ),
];

const MainPage = ({ serverStatus }) => {
  return (
    <div className="bg-white-to-green h-full w-full">
      <div className="bg-white-to-green min-h-screen ">
        <h1 className="text-3xl text-primary text-center">Server Status</h1>
        <p className="text-center">{serverStatus}</p>
        <div className="container mx-auto">
          <CardCollection title={"Hot products"} items={items} cols={3} />
          <CardCollection
            title={"Popular categories"}
            items={categories}
            cols={3}
          />
          <CardCollection title={"Near me"} items={items} cols={3} />
          <ProfileCollection
            profiles={profiles}
            header={"Recommended profiles"}
          />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
