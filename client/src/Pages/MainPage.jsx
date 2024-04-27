import { CardCollection } from "../Components/CardCollection";
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
  new Category(
    "Clothing",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ),
  new Category(
    "Electronics",
    "https://plus.unsplash.com/premium_photo-1665203485797-6fe4e8755beb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ),
  new Category(
    "Books",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ),
];
const profiles = [
  new Profile(
    "johndoe123",
    "John Doe",
    "Software Engineer",
    "https://www.example.com/johndoe123",
    {
      src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ),
  new Profile(
    "janedoe123",
    "Jane Doe",
    "Graphic Designer",
    "https://www.example.com/janedoe123",
    {
      src: "https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ),
  new Profile(
    "mikesmith123",
    "Mike Smith",
    "Digital Marketer",
    "https://www.example.com/mikesmith123",
    {
      src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ),
  new Profile(
    "sarahbrown123",
    "Sarah Brown",
    "Content Writer",
    "https://www.example.com/sarahbrown123",
    {
      src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ),
];

const MainPage = ({ serverStatus }) => {
  return (
    <div className="min-h-screen bg-white-to-green">
      <h1 className="text-3xl text-primary text-center">Server Status</h1>
      <p className="text-center">{serverStatus}</p>
      <CardCollection title={"Hot products"} items={items} category={true} />
      <CardCollection
        title={"Popular categories"}
        items={categories}
        category={true}
      />
      <CardCollection title={"Near me"} items={items} category={true} />
      <ProfileCollection profiles={profiles} header={"Recommended profiles"} />
    </div>
  );
};
export default MainPage;
