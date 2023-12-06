import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import ScoreCardList from "./Components/ScoreCardList";
import News from "./Components/News";
import SecondNews from "./Components/SecondNews";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <ScoreCardList />
      <News />
      <SecondNews />
      <Footer />
    </>
  );
}

export default App;
