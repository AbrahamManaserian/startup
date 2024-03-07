import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { SampleNextArrow, SamplePrevArrow } from './SlideCarousel';
import Slider from 'react-slick';

const dataSlide = [
  {
    image1:
      'https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/412757498_375470111671050_6778605640959051278_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=s3PTuo8D-r4AX8fcafI&_nc_ht=scontent.fevn2-1.fna&oh=00_AfCGmRq0jPupiYw170ov_Ok4zcyCXJNvolqwaYt6KD5Zng&oe=65B43CFA',
    image2:
      'https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/412757498_375470111671050_6778605640959051278_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=s3PTuo8D-r4AX8fcafI&_nc_ht=scontent.fevn2-1.fna&oh=00_AfCGmRq0jPupiYw170ov_Ok4zcyCXJNvolqwaYt6KD5Zng&oe=65B43CFA',
    image3:
      'https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/412919253_376173118267416_4910194720088244222_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=mG3TEH3aH1sAX9FrNHB&_nc_ht=scontent.fevn12-1.fna&oh=00_AfAia-mAK9CzNcOBFUNQ8gE0ZNiu_umFgvYo1QLnouuINQ&oe=65B388AB',
  },
];

const asd = [
  'https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/412757498_375470111671050_6778605640959051278_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=s3PTuo8D-r4AX8fcafI&_nc_ht=scontent.fevn2-1.fna&oh=00_AfCGmRq0jPupiYw170ov_Ok4zcyCXJNvolqwaYt6KD5Zng&oe=65B43CFA',
  'https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/412919253_376173118267416_4910194720088244222_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=mG3TEH3aH1sAX9FrNHB&_nc_ht=scontent.fevn12-1.fna&oh=00_AfAia-mAK9CzNcOBFUNQ8gE0ZNiu_umFgvYo1QLnouuINQ&oe=65B388AB',
  'https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/412872363_375470115004383_68626307178109454_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=fVl6f4_alHoAX8_kQjw&_nc_ht=scontent.fevn12-1.fna&oh=00_AfB4TYBKc3sxMoWEQWr4SBZ9MIlmBtXTLNH_ly4H1WFC0A&oe=65B3CDC7',
];
const asd1 = [
  'https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/415784054_380236854527709_8351956726811200078_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UM5h_SaDUMEAX-uvFOH&_nc_ht=scontent.fevn12-1.fna&oh=00_AfBNMqEYjroj5c76I45QvMQq42z_988Ut4F4G9NgNeCrXQ&oe=65B46FBF',
  'https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/414722034_379639804587414_1916129623989923447_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=fVWC1Xdxr28AX_eVq-u&_nc_ht=scontent.fevn12-1.fna&oh=00_AfDnVj4hNxeZhNP_s-OjTvACCXGn3Z2f5ERGrHigtuY34A&oe=65B4F560',
  'https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/413888849_378945634656831_4986689804257206742_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=oBf8orjw980AX_iQpj3&_nc_oc=AQnx7p2VBtQ5KfIwtxOmnQsZmz4qhcHPXswvj8AUNf6Y99K9WREE9iYi7Mnw_vCBwxs&_nc_ht=scontent.fevn2-1.fna&oh=00_AfB87Ei2d4QFYbudAQFiR9aD_3724nhdVLVax7JiEH4acw&oe=65B3D812',
];

export function CardCarousel({ images }) {
  return (
    <Grid item xs={12} sx={{ p: '10px', bgcolor: 'white', borderRadius: '10px' }}>
      <Box sx={{ display: 'flex', width: '99%', borderRadius: '5px', overflow: 'hidden' }}>
        {images.map((item, index) => {
          return <img key={index} src={item} style={{ width: '33.33%' }} />;
        })}
      </Box>
    </Grid>
  );
}

export default function SlideCarousel3Items() {
  const [showArrows, setShowArrows] = useState(false);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 800,
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
      item
      xs={12}
      sx={{
        p: {
          xs: '0 0 35px 15px',
          sm: '0 8px 35px 20px',
        },
      }}
    >
      <Grid container my="20px" alignItems="center" item xs={12}>
        {/* <BoltIcon color="error" /> */}
        <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#37474f' }}>Flash Deals</Typography>
      </Grid>
      <Slider {...settings}>
        <CardCarousel images={asd} />
        <CardCarousel images={asd1} />
        <CardCarousel images={asd} />
        <CardCarousel images={asd1} />
      </Slider>
    </Grid>
  );
}
