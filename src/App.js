import React from "react";
import Footer from "./componenets/Footer";
import MainContent from "./componenets/MainContent";
import TakeControl from "./componenets/TakeControl";
import TopNav from "./componenets/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <TakeControl />
      <MainContent />

      <Footer />
    </>
  );
}

export default App;
