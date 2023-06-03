import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './art.css'
import '../fonts.css'
import '../AboutMe/aboutMe.css'

function srcset(image, size, rows = 1, cols = 1) {
  
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className='imagelist-container'>
        <h2 className='art-text'>{isEnglish ? "MY ART GALLERY" : "GALERÍA DE ARTE"}</h2>
    <ImageList className='imagelist2'
     sx={{ width: 600, height: 650, overflowX:"hidden",
      "@media (max-width: 500px)": {
        width: "300px",
        height: "650px",
      },
    "@media (max-width: 395px)": {
        left: "11%",
      },  
      "@media (max-width: 365px)": {
        left: "9%",
      },
    }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>      

    <div className="box-art">
            <span></span>
            <div className="content">
              <p>{isEnglish ? "I have experience using software such as Photoshop, Paint tool SAI, Adobe After Effects, Sony Vegas and Cinema 4D." : "Tengo experiencia utilizando programas como Photoshop, Paint Tool SAI, Adobe After Effects, Sony Vegas y Cinema 4D."}
              </p>
            </div>
          </div>
          <p className='details-p'>{isEnglish ? "Beauty lies in the smallest of details." : "La belleza está en los pequeños detalles."}</p>
          <img className="bubbletalk"
          src="../../images/bubletalk.png"
          alt="bubble talk" />
          <img className="astro4"
          src="../../images/astro4.png"
          alt="astro coffee" />

    <div className="bubbles">
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 24 }}></span>
        <span style={{ "--i": 10 }}></span>
        <span style={{ "--i": 14 }}></span>
        <span style={{ "--i": 23 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 25 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 21 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 26 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 13 }}></span>
        <span style={{ "--i": 28 }}></span>
      </div>


      
      </div>
  );
}

const itemData = [
  {
    img: "../../images/dg1.jpg",
    title: 'katana girl',
    rows: 3,
    cols: 3,
  },
  {
    img: "../../images/dg5.png",
    title: 'twitch banner',
  },
  {
    img: "../../images/dg.jpg",
    title: 'gamer girl',
  },
  {
    img: "../../images/dg3.jpg",
    title: 'banner csgo',
    cols: 1,
  },
  {
    img: "../../images/dg5.png",
    title: 'Hats',
    cols: 2,
  },
  {
    img: "../../images/dg2.jpg",
    title: 'Honey',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
  },
  {
    img: "../../images/dg7.png",
    title: 'Basketball',
  },
  {
    img: "../../images/dg8.png",
    title: 'Fern',
  },
  {
    img: "../../images/dg9.jpg",
    title: 'linkedin banner',
    rows: 1,
    cols: 2,
  },
];