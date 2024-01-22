import { Button, Grid, Typography } from '@mui/material';
import InfiniteCarousel from '../components/SlideCarousel';
// import SlideCarousel from '../components/SlideCarousel';

export default function HomePage() {
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
  return (
    <Grid item xs={12} container>
      <Grid
        sx={{
          bgcolor: 'white',
          p: {
            xs: '50px 15px 20px 15px',
            sm: '50px',
          },
        }}
        item
        container
        alignContent="flex-start"
        xs={12}
        sm={6}
      >
        <Typography
          color="#37474f"
          sx={{ fontSize: { xs: '30px', sm: '47px' }, lineHeight: { xs: '37px', sm: '57px' }, pb: '30px' }}
          fontWeight={700}
        >
          20% Off For Your First Shopping
        </Typography>
        <Typography sx={{ fontSize: { xs: '14px', sm: '13px' }, lineHeight: '25px' }}>
          FREE Delivery in every City of Armenia. Days Easy Return Days Easy Return, Exchange and Refund
          Policy
        </Typography>
        <Button
          variant="contained"
          sx={{ textTransform: 'capitalize', bgcolor: '#c2185b', px: '30px', mt: '20px', fontSize: '18px' }}
        >
          Shop Now
        </Button>
      </Grid>
      <Grid
        p="20px 20px 50px 20px"
        item
        container
        justifyContent="center"
        alignContent="center"
        xs={12}
        sm={6}
      >
        <img
          style={{ width: '70%' }}
          src="https://www.mensjournal.com/.image/t_share/MTk2MTM1OTAxMjIyNjc1NjAx/apl-running-main.jpg"
        />
      </Grid>
      <InfiniteCarousel />
      <Typography mt={150}> Abraham </Typography>
    </Grid>
  );
}
