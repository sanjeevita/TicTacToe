import Game from "./Game";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Context} from "./Context";

const App = () => {
  return (
  
    <Context>
      <Header/>
        <Game />
        <Footer/>
        </Context>
      
    
  );
};
export default App;