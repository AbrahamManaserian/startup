import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Grid, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import BoltIcon from '@mui/icons-material/Bolt';
import { useState } from 'react';

const images = [
  'https://m.media-amazon.com/images/I/6118NuumHRL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/41GjN8K4muL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/71YGyFAcGnL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/617k4fPmCLL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/6118NuumHRL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/41GjN8K4muL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/71YGyFAcGnL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/617k4fPmCLL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/6118NuumHRL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/41GjN8K4muL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/71YGyFAcGnL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/617k4fPmCLL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/71iY2Tz9-hL._AC_UL640_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/71imrhSqctL._AC_UL640_FMwebp_QL65_.jpg',
  'https://4feetshoes.com/cdn/shop/products/Navy035480-01.jpg?v=1631908688',
  'https://4feetshoes.com/cdn/shop/products/Navy035480-01.jpg?v=1631908688',
  'https://4feetshoes.com/cdn/shop/products/Navy035480-01.jpg?v=1631908688',
  'https://4feetshoes.com/cdn/shop/products/Navy035480-01.jpg?v=1631908688',
  'https://4feetshoes.com/cdn/shop/products/Navy035480-01.jpg?v=1631908688',
  'https://4feetshoes.com/cdn/shop/products/Navy035480-01.jpg?v=1631908688',
];

function SampleNextArrow(props) {
  const { className, style, onClick, showArrow } = props;
  return (
    <div
      style={{
        position: 'absolute',
        right: showArrow ? '21px' : '16px',
        bottom: '50%',
        zIndex: 1,
        transition: 'all 0.3s ',

        visibility: showArrow ? 'visible' : 'hidden',
        opacity: showArrow ? 1 : 0,
        cursor: 'pointer',
        backgroundColor: '#37474f',
        padding: '3px',
      }}
    >
      <EastIcon style={{ ...style, color: 'white', fontSize: '24px' }} onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, showArrow } = props;
  return (
    <div
      style={{
        transition: 'all 0.3s ',
        position: 'absolute',
        left: showArrow ? '5px' : '0',
        bottom: '45%',
        zIndex: 1,
        visibility: showArrow ? 'visible' : 'hidden',
        opacity: showArrow ? 1 : 0,
        cursor: 'pointer',
        backgroundColor: '#37474f',
        padding: '3px',
      }}
    >
      <KeyboardBackspaceIcon style={{ ...style, color: 'white', fontSize: '24px' }} onClick={onClick} />
    </div>
  );
}

function Card1({ image, index }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0 1px 3px',
        borderRadius: '5px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          padding: '20px',
          height: '180px',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <img style={{ width: '80%', height: 'auto' }} src={image} />
      </Box>
      <h3>Dr. Scholl's Shoes</h3>
      <h3>Dr. </h3>
      {/* {index} */}
    </Box>
  );
}

export default function InfiniteCarousel() {
  const [showArrows, setShowArrows] = useState(false);
  console.log(showArrows);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerPadding: '0px',
    initialSlide: 0,
    nextArrow: <SampleNextArrow showArrow={showArrows} />,
    prevArrow: <SamplePrevArrow showArrow={showArrows} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Grid
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
      // p="0 5px 0 15px"
      item
      xs={12}
      sx={{
        p: {
          xs: '0 0 0 15px',
          sm: '0 8px 0 20px',
        },
      }}
      // height="300px"
      // sx={{ height: '300px' }}
      // alignItems="stretch"
    >
      {/* <h2>Flash Deals</h2> */}
      <Grid container py="10px" item xs={12}>
        <BoltIcon color="error" />
        <Typography sx={{ fontSize: '22px', fontWeight: 700, color: '#37474f' }}>Flash Deals</Typography>
      </Grid>
      <Slider {...settings}>
        {/* <div>
          <h3>1</h3>
          <Card1 />
        </div> */}
        {images.map((item, index) => {
          return (
            // <div key={index}>
            <Card1 key={index} index={index} image={item} />
            // {index}
            // </div>
          );
        })}
      </Slider>
    </Grid>
  );
}
