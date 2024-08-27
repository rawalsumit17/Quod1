import React from "react";
import Offer from "../Components/Offer/Offer";
import Hero from "../Components/Hero/Hero";
import HeroLower from "../Components/Hero/HeroLower";
import Collection_Container from "../Components/Collection_Container/Collection_Container";
import Lorem_container from "../Components/Lorem_container/Lorem_container";
import Middle_Part_MainPage from "../Components/Middle_Part_MainPage/Middle_Part_MainPage";
import data from "../Components/Assets/main-page/data";
import DivineDecadence from "../Components/Divine Decadence/DivineDecadence";
import FollowQUOD from "../Components/FollowQUOD/FollowQUOD";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Offer />
      <Hero />
      <HeroLower />
      <Collection_Container cards={data.slice(0, 2)} />
      <Lorem_container />
      <Middle_Part_MainPage />
      <Collection_Container cards={data.slice(2, 4)} />
      <DivineDecadence />
      <FollowQUOD />
      <Collection_Container cards={data.slice(4, 6)} />
    </div>
  );
};

export default MainPage;
