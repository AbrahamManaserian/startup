import { Box, Drawer, Grid, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from '../images Paul/logo-new.png';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useState } from 'react';

export default function BarMenu() {
  const location = useLocation();
  console.log(location);
  const [openDrawer, setOPenDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOPenDrawer(open);
  };
  return (
    <Grid
      item
      xs={12}
      container
      sx={{ bgcolor: 'black', height: '77px', position: 'sticky', top: 0 }}
      alignItems="center"
    >
      <Box sx={{ marginLeft: { xs: '15px', sm: '38px' } }}>
        <Link to="/test">
          <img src={LogoImage} style={{ width: 'auto', height: '6vh' }} />
        </Link>
      </Box>
      <Grid
        sx={{ height: '100%', display: { xs: 'none', sm: 'flex' } }}
        item
        xs
        container
        justifyContent="flex-end"
        alignItems="center"
      >
        {/* <Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}> */}
        <Link
          style={{ color: location.pathname.includes('about') ? 'rgb(255, 215, 0)' : '' }}
          className="link-rout"
          to="/test/about"
        >
          About Us
        </Link>
        <Link
          style={{ color: location.pathname.includes('services') ? 'rgb(255, 215, 0)' : '' }}
          className="link-rout"
          to="/test/services"
        >
          Services
        </Link>
        <Link
          style={{ color: location.pathname.includes('blog') ? 'rgb(255, 215, 0)' : '' }}
          className="link-rout"
          to="/test/blog"
        >
          Blog
        </Link>
        <Link
          style={{ color: location.pathname.includes('contact') ? 'rgb(255, 215, 0)' : '' }}
          className="link-rout"
          to="/test/contact"
        >
          Contact
        </Link>
      </Grid>
      <Box
        sx={{
          marginRight: '15px',
          flexGrow: 1,
          display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none', justifyContent: 'flex-end' },
        }}
      >
        <FormatListBulletedIcon
          sx={{ color: 'white', fontSize: '40px' }}
          cursor="pointer"
          onClick={toggleDrawer(true)}
        />
      </Box>
      <Drawer
        sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black' } }}
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Link
            style={{ color: location.pathname.includes('about') ? 'rgb(255, 215, 0)' : '' }}
            className="link-rout"
            to="/test/about"
          >
            About Us
          </Link>
          <Link
            style={{ color: location.pathname.includes('services') ? 'rgb(255, 215, 0)' : '' }}
            className="link-rout"
            to="/test/services"
          >
            Services
          </Link>
          <Link
            style={{ color: location.pathname.includes('blog') ? 'rgb(255, 215, 0)' : '' }}
            className="link-rout"
            to="/test/blog"
          >
            Blog
          </Link>
          <Link
            style={{ color: location.pathname.includes('contact') ? 'rgb(255, 215, 0)' : '' }}
            className="link-rout"
            to="/test/contact"
          >
            Contact
          </Link>
        </Box>
      </Drawer>
    </Grid>
  );
}
