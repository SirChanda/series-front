import React from "react";
import Menu from "../../components/Menu";
import InteractiveButton from "../../components/InteractiveButton";
import InterfaceContainer from "../../components/InterfaceContainer";
import Carousel from "../../components/Carousel";
import ListOption from "../../components/ListOption";
import "./main.css";

export default () => {
  const images = [
    {
      title: "one",
      img:
        "https://pm1.narvii.com/6087/326d47163f14bd8f62cb0f49769158bce882ae58_hq.jpg",
    },
    {
      title: "two",
      img:
        "https://pm1.narvii.com/6336/dd9865b1b6c029fc575ba4ad2770182db715f589_hq.jpg",
    },
    {
      title: "three",
      img:
        "https://cdn130.picsart.com/238878381063202.jpg?type=webp&to=min&r=640",
    },
    {
      title: "four",
      img:
        "https://i.pinimg.com/564x/df/aa/2c/dfaa2cb28ab4353732a2dfe2c20932eb.jpg",
    },
    {
      title: "five",
      img:
        "https://i.pinimg.com/564x/21/9f/0b/219f0b02654c802e36536e9fda228bb6.jpg",
    },
    {
      title: "six",
      img:
        "https://pbs.twimg.com/profile_images/861141593474056194/wxfDo7oG_400x400.jpg",
    },
    {
      title: "seven",
      img:
        "https://image.winudf.com/v2/image/Y29tLmltYWdlbmVzLmxvbGlrYXdhaWkubG9saXNrYXdhaWlfaWNvbl8xNTExNjU0NDI5XzAwNA/icon.png?w=170&fakeurl=1",
    },
    {
      title: "eight",
      img:
        "https://i.pinimg.com/564x/50/44/b7/5044b7b0935d562499b1858d1eae5f44.jpg",
    },
    {
      title: "nine",
      img:
        "https://i.pinimg.com/564x/af/86/9e/af869edded2b4d8ba64fc10ba5435b89.jpg",
    },
    {
      title: "teen",
      img:
        "https://scontent.feoh4-2.fna.fbcdn.net/v/t1.0-9/82860093_2978740588803143_9031019770429833216_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=INsHs1PSvjsAX__7u2f&_nc_ht=scontent.feoh4-2.fna&oh=fe4b4495a442c608420fbe39398f0396&oe=5F774D51",
    },
    {
      title: "eleven",
      img:
        "https://vignette.wikia.nocookie.net/anime-para-el-kokoro/images/a/a3/Chino_chan.jpg/revision/latest?cb=20160129211446&path-prefix=es",
    },
    {
      title: "twelve",
      img:
        "https://pm1.narvii.com/6511/834d73bd8bde4d85c67ff985d1bfc72fe65ed27e_hq.jpg",
    },
    {
      title: "thirdteen",
      img:
        "https://pm1.narvii.com/6511/18d848af5c1d9bb09d08633a4c2816c41200847f_hq.jpg",
    },
    {
      title: "fourteen",
      img:
        "https://pm1.narvii.com/6511/decdfcf15ee4c15c739e2b547aaef7e34f70f8c7_hq.jpg",
    },
    {
      title: "fiftteen",
      img:
        "https://pm1.narvii.com/6511/595198e12e543910e7c45fbf282c982bde6873c1_hq.jpg",
    },
    {
      title: "sixteen",
      img:
        "https://pm1.narvii.com/6511/55f30184480f329120e60d100982b081e94cf1db_hq.jpg",
    },
    {
      title: "seventeen",
      img:
        "https://i.pinimg.com/564x/e3/a9/c0/e3a9c031bd438deb979267e863ca00e8.jpg",
    },
  ];

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
        <div className="pending-series-container">
          <ul className="pending-series">
            {images.map((x) => {
              return (
                <ListOption img={x.img} path="/about">
                  {x.title}
                </ListOption>
              );
            })}
          </ul>
        </div>
      </InterfaceContainer>
    </div>
  );
};
