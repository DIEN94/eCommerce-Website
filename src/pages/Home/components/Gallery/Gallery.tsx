import React from 'react'
import img1 from "assets/page-Home/Gallery/img1.webp";
import img2 from "assets/page-Home/Gallery/img2.webp";
import img3 from "assets/page-Home/Gallery/img3.webp";
import img4 from "assets/page-Home/Gallery/img4.webp";
import img5 from "assets/page-Home/Gallery/img5.webp";
import img6 from "assets/page-Home/Gallery/img6.webp";
import img7 from "assets/page-Home/Gallery/img7.webp";
import img8 from "assets/page-Home/Gallery/img8.webp";
import img9 from "assets/page-Home/Gallery/img9.webp";
import classes from "./Gallery.module.scss"

export const Gallery = () => {
  return (
    <div className={classes.gallery}>
        <div className={classes.textContainer}>
        <p className={classes.firstLevelText}>
            Share your setup with
        </p>
        <h2 className={classes.secondLevelText}>
            #FuniroFurniture
        </h2>
        </div>
        <div className={classes.ImgBox}>
            <div className={classes.ImgContainer}>
                <div className={classes.ImgContainer1}>
                    <img src={img1}/>
                    <img src={img2}/>
                </div>
                <div className={classes.ImgContainer2}>
                    <img src={img3}/>
                    <img src={img4}/>
                </div>
            </div>
                <img src={img5} className={classes.middleImg}/>
            <div className={classes.ImgContainer}>
                <div className={classes.ImgContainer1}>
                    <img src={img6}/>
                    <img src={img7}/>
                </div>
                <div className={classes.ImgContainer2}>
                    <img src={img8}/>
                    <img src={img9}/>          
                </div>
            </div>
        </div>
    </div>   
  )
}


