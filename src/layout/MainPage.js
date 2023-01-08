import React from "react";
import ContentPage from "./ContentPage";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Slidebar from "./Slidebar";

const MainPage = () => {
  return (
    <>
      {/* <div id="loading">
        <div id="loading-center"></div>
      </div> */}
      <div className="wrapper">
        <Slidebar />
        <Searchbar />
        <ContentPage />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
