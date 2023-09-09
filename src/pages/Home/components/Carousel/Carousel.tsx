import React from 'react'
import { Slider } from 'components/Slider/Slider'
import classes from "./Carousel.module.scss"
import { Link } from 'react-router-dom';
import { MyButton } from 'components';
import Bedroom from "assets/page-Home/Carousel/imgBedRoom.webp";
import LivingRoom from "assets/page-Home/Carousel/imgLivingRoom.webp";
import Kitchen from "assets/page-Home/Carousel/imgKitchen.webp";
import KidRoom from "assets/page-Home/Carousel/imgKidRoom.webp";


interface ICharacteristics {
  number: number;
  type: string;
  name: string;
}

export const Carousel = () => {

  const characteristics: ICharacteristics[] = [
    {
      number: 1,
      type: 'Bed Room',
      name: 'Inner Peace',
    },
    {
      number: 2,
      type: 'Living',
      name: 'Comfy',
    },
    {
      number: 3,
      type: 'Kitchen',
      name: 'Paris',
    },
    {
      number: 4,
      type: 'Children Room',
      name: 'Sun Place',
    }
  ]

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <p className={classes.firstLevelText}>
        50+ Beautiful rooms<br/>
        inspiration
        </p>
        <p className={classes.secondLevelText}>
        Our designer already made a lot of beautiful<br/>
        prototipe of rooms that inspire you
        </p>
        <Link to={"/shop"} style={{ textDecoration: 'none' }}>
            <MyButton 
            className={classes.button} 
            variant='fill-orange'>
              Explore More
            </MyButton>
          </Link>
      </div>
      <Slider characteristics={characteristics} PAGE_WIDTH={404} PAGE_WIDTH_STICK={217}>
        <img className={classes.img} src={Bedroom}/>
        <img className={classes.img} src={LivingRoom}/>
        <img className={classes.img} src={Kitchen}/>
        <img className={classes.img} src={KidRoom}/>
      </Slider>
    </div>
  )
}
