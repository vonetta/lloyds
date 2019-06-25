import React from "react";
import Footer from "./componenets/Footer";
import MainContent from "./componenets/MainContent";
import TakeControl from "./componenets/TakeControl";
import MainNav from "./componenets/MainNav";
import TopNav from "./componenets/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <MainNav />
      <TakeControl />
      <MainContent />

      <Footer />
    </>
  );
}

export default App;
