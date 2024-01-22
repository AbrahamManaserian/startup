import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Grid, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import BoltIcon from '@mui/icons-material/Bolt';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { useState } from 'react';
import { DramIcon } from './SVGIcons';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';

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
  const [prefered, setPrefered] = useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0 1px 3px',
        borderRadius: '5px',
        p: '15px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          display: 'flex',
          justifyContent: 'center',
          p: '3px 3px',
          width: '60px',
          bgcolor: '#d81b60',
          borderRadius: '20px',
        }}
      >
        <Typography color="white" fontSize="11px" fontWeight={500}>
          25% off
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          // padding: '20px',
          height: '180px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img style={{ width: '70%', height: 'auto' }} src={image} />
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 0 0 ', height: '20px' }}>
        {['black', 'white', '#37474f'].map((item, index) => {
          return (
            <div
              key={item}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 2px',
                // margin: '2px',
                height: '18px',
                width: '18px',
                padding: 0,
                // backgroundColor: item,
                border: 'solid 0.5px',
                borderRadius: '50%',
              }}
            >
              <div
                style={{
                  backgroundColor: item,
                  borderRadius: '50%',
                  border: 'solid 0.5px',
                  height: '14px',
                  width: '14px',
                  margin: 0,
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <Typography sx={{ textAlign: 'center', fontSize: '19px', fontWeight: 700, my: '10px' }}>
        Geox
      </Typography>
      <Typography sx={{ fontSize: '15px', fontWeight: 500, textAlign: 'center' }}>
        Women's Gymnastics Shoes Sneakers
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          // flexWrap: 'nowrap',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingY: '10px',
        }}
      >
        <Typography sx={{ color: '#d81b60', fontSize: '15px', fontWeight: 500 }}>360000</Typography>
        <Typography sx={{ color: '#d81b60', fontSize: '9px', fontWeight: 500, m: '0 0 3px 3px' }}>
          AMD
        </Typography>

        <Typography sx={{ ml: '10px', color: '#78909c', fontSize: '15px', textDecoration: 'line-through' }}>
          470000
        </Typography>
        <Typography sx={{ color: '#78909c', fontSize: '9px', fontWeight: 500, m: '0 0 3px 3px' }}>
          AMD
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          pt: '15px',
        }}
      >
        <div style={{ cursor: 'pointer' }} onClick={() => setPrefered(!prefered)}>
          {prefered ? (
            <FavoriteOutlinedIcon sx={{ color: '#d81b60' }} />
          ) : (
            <FavoriteBorderTwoToneIcon sx={{ color: '#d81b60' }} />
          )}
        </div>
        <AddTwoToneIcon
          // onClick={() => console.log('assd')}
          sx={{
            color: '#d81b60',
            border: 0.1,
            borderColor: '#d81b60',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        />
      </Box>
    </Box>
  );
}

export default function InfiniteCarousel() {
  const [showArrows, setShowArrows] = useState(false);
  // console.log(showArrows);
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
      <Grid container my="20px" alignItems="center" item xs={12}>
        <BoltIcon color="error" />
        <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#37474f' }}>Flash Deals</Typography>
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
