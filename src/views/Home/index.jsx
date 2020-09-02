import React from "react";
import Menu from "../../components/Menu";
import InteractiveButton from "../../components/InteractiveButton";
import InterfaceContainer from "../../components/InterfaceContainer";
import Carousel from "../../components/Carousel";
import "./main.css";

export default () => {
  return (
    <div className="container">
      <Menu></Menu>
      <InterfaceContainer>
        <Carousel>
          <div>
            <img src="https://i.redd.it/5vh4mp5q9lv41.png" />
            <h2></h2>
          </div>
          <div>
            <img src="https://sadanduseless.b-cdn.net/wp-content/uploads/2019/01/creepy-sheep6.jpg" />
            <h2></h2>
          </div>
          <div>
            <img src="http://cdn.pastemagazine.com/www/articles/2015/06/22/My%20Dear%20Ancestors.jpg" />
            <h2></h2>
          </div>
        </Carousel>
        <div className="options-container">
          <InteractiveButton
            img="https://i.redd.it/5vh4mp5q9lv41.png"
            text="Kaguya scream"
            path="/about"
          ></InteractiveButton>
          <InteractiveButton
            img="https://sadanduseless.b-cdn.net/wp-content/uploads/2019/01/creepy-sheep6.jpg"
            text="Creepy sheeps"
            path="/about"
          ></InteractiveButton>
          <InteractiveButton
            img="https://i.pinimg.com/564x/fe/8d/bd/fe8dbd89f2e4152d5109dfba8e8e83d7.jpg"
            text="Creepy Art"
            path="/about"
          ></InteractiveButton>
          <InteractiveButton
            img="http://cdn.pastemagazine.com/www/articles/2015/06/22/My%20Dear%20Ancestors.jpg"
            text="Junji Ito"
            path="/about"
          ></InteractiveButton>
        </div>
      </InterfaceContainer>
    </div>
  );
};
