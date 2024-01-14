import {
  Box,
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import styled from '@emotion/styled';
import {
  AboutIcon,
  ArmFlag,
  BrandIcon,
  BuyIcon,
  CareItemnsIcon,
  ContactsIcon,
  FacebookIcon,
  HelpIcon,
  InsertsIcon,
  InstagramIcon,
  NewArmFlag,
  SaleIcon,
  SalesIcon,
  ShoeIcon,
  ShopIcon,
  SlippersIcon,
  SocialIcon,
  ViberIcon,
  WhatsappIcon,
} from './SVGIcons';
import { Link, useLocation } from 'react-router-dom';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const CostumeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: '32px',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  bgcolor: 'white',
  border: 1,
  borderStyle: 'dashed',
  borderColor: '#eeeeee',
  cursor: 'pointer',
  zIndex: 200,
}));

const socialObject = {
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  whatsapp: <WhatsappIcon />,
  viber: <ViberIcon />,
};

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const [openSlippers, setOpenSlippers] = useState(false);
  const [openSocial, setOpenSocial] = useState(false);
  const [sideBarSize, setSideBarSize] = useState(true);
  const location = useLocation();
  const url = new URL(window.location.href);
  // console.log(url.searchParams.get('asd'));
  function getColorOfIcon(urlPath) {
    if (urlPath === location.pathname) {
      return '#00c853';
    } else {
      return '#616161';
    }
  }
  // console.log(sideBarSize);
  return (
    <Grid
      borderRight={1}
      borderColor="#eeeeee"
      container
      item
      // xs
      flexDirection="column"
      height="100vh"
      width={sideBarSize ? '280px' : '90px'}
      sx={{
        // display: 'flex',
        // flexDirection: 'column',
        // height: '100vh',
        flexWrap: 'nowrap',
        overflow: 'scroll',
        borderRightStyle: 'dashed',
        p: sideBarSize ? '30px 10px 50px 15px' : '20px 5px 50px 5px',
      }}
    >
      <CostumeBox
        sx={{
          left: sideBarSize ? '267px' : '77px',
        }}
        onClick={() => setSideBarSize(!sideBarSize)}
      >
        {sideBarSize ? (
          <KeyboardArrowLeftIcon color="action" sx={{ fontSize: 16 }} />
        ) : (
          <KeyboardArrowRightIcon color="action" sx={{ fontSize: 16 }} />
        )}
      </CostumeBox>

      <Link to="/" style={{ paddingLeft: '10px' }}>
        <BuyIcon />
      </Link>

      <Typography
        sx={{
          fontSize: '12px',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: '#616161',
          p: '30px 10px 10px 10px',
        }}
      >
        Overview
      </Typography>

      <Link
        style={{
          justifyContent: sideBarSize ? '' : 'center',
          flexDirection: sideBarSize ? 'row' : 'column',
          minHeight: sideBarSize ? '45px' : '55px',
          backgroundColor: location.pathname === '/brands' ? '#e8f5e9' : '',
        }}
        className="linkSideBar"
        to="/brands"
      >
        <SaleIcon color="#f50057" />
        <Typography
          sx={{ fontWeight: 500 }}
          paddingLeft={sideBarSize ? '20px' : 0}
          color={getColorOfIcon('/brands')}
          fontSize={sideBarSize ? 15 : 9}
        >
          Brands
        </Typography>
      </Link>

      <Link
        style={{
          justifyContent: sideBarSize ? '' : 'center',
          flexDirection: sideBarSize ? 'row' : 'column',
          minHeight: sideBarSize ? '45px' : '55px',
          backgroundColor: location.pathname === '/shops' ? '#e8f5e9' : '',
        }}
        className="linkSideBar"
        to="/shops"
      >
        <ShopIcon />
        <Typography
          sx={{ fontWeight: 500 }}
          paddingLeft={sideBarSize ? '20px' : 0}
          color={getColorOfIcon('/shops')}
          fontSize={sideBarSize ? 15 : 9}
        >
          Shops
        </Typography>
      </Link>

      <Link
        style={{
          justifyContent: sideBarSize ? '' : 'center',
          flexDirection: sideBarSize ? 'row' : 'column',
          minHeight: sideBarSize ? '45px' : '55px',
          backgroundColor: location.pathname === '/sales' ? '#e8f5e9' : '',
        }}
        className="linkSideBar"
        to="/sales"
      >
        <SalesIcon />
        <Typography
          sx={{ fontWeight: 500 }}
          paddingLeft={sideBarSize ? '20px' : 0}
          color={getColorOfIcon('/sales')}
          fontSize={sideBarSize ? 15 : 9}
        >
          Sales
        </Typography>
      </Link>

      <Link
        style={{
          justifyContent: sideBarSize ? '' : 'center',
          flexDirection: sideBarSize ? 'row' : 'column',
          minHeight: sideBarSize ? '45px' : '55px',
          backgroundColor: location.pathname === '/armenian' ? '#e8f5e9' : '',
        }}
        className="linkSideBar"
        to="/armenian"
      >
        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', overflow: 'hidden', mx: '3px' }}>
          <NewArmFlag />
        </Box>
        <Typography
          sx={{ fontWeight: 500 }}
          paddingLeft={sideBarSize ? '20px' : 0}
          color={getColorOfIcon('/armenian')}
          fontSize={sideBarSize ? 15 : 9}
        >
          Armenian
        </Typography>
      </Link>

      <Typography
        sx={{
          fontSize: '12px',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: '#616161',
          p: '20px 0px 10px 10px',
        }}
      >
        Products
      </Typography>

      <Box
        onClick={() => setOpen(!open)}
        sx={{
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '8px',
          marginTop: '5px',
          padding: sideBarSize ? '0 10px 0 10px' : '0 10px 0 10px',
          alignItems: 'center',
          backgroundColor: ['/summer', '/winter', '/spring', '/autumn'].includes(location.pathname)
            ? '#e8f5e9'
            : open
            ? '#e0e0e0'
            : '',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: sideBarSize ? '' : 'center',
            flexDirection: sideBarSize ? 'row' : 'column',
            height: sideBarSize ? '45px' : '55px',
            alignItems: 'center',
          }}
        >
          <ShoeIcon />
          <Typography
            sx={{ fontWeight: 500 }}
            paddingLeft={sideBarSize ? '20px' : 0}
            color={
              ['/summer', '/winter', '/spring', '/autumn'].includes(location.pathname) ? '#00c853' : '#616161'
            }
            fontSize={sideBarSize ? 15 : 9}
          >
            Shoes
          </Typography>
        </Box>
        {open ? (
          <ExpandLess sx={{ fontSize: '16px' }} />
        ) : (
          <KeyboardArrowRightIcon sx={{ fontSize: '16px' }} />
        )}
      </Box>

      <div>
        <Collapse in={open} timeout={700} unmountOnExit>
          {['summer', 'winter', 'spring', 'autumn', 'all'].map((item, index) => {
            return (
              <Link
                key={item}
                style={{
                  justifyContent: sideBarSize ? '' : 'center',
                  flexDirection: sideBarSize ? 'row' : 'column',
                  height: sideBarSize ? '45px' : '45px',
                  color: location.pathname === `/${item}` ? 'black' : '#616161',
                  // paddingLeft: '20px',
                }}
                className="linkSideBar"
                to={`/${item}`}
              >
                <FiberManualRecordIcon
                  sx={{
                    width: '15px',
                    // height: '15px',
                    paddingLeft: sideBarSize ? '20px' : 0,
                    fontSize: location.pathname === `/${item}` ? '14px' : '6px',
                  }}
                />
                <Typography
                  sx={{ fontWeight: 500, textTransform: 'capitalize' }}
                  paddingLeft={sideBarSize ? '17px' : 0}
                  // color={getColorOfIcon('/s')}
                  fontSize={sideBarSize ? 15 : 9}
                >
                  {item}
                </Typography>
              </Link>
            );
          })}
        </Collapse>
      </div>

      <Box
        onClick={() => setOpenSlippers(!openSlippers)}
        sx={{
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '8px',
          marginTop: '5px',
          padding: sideBarSize ? '0 10px 0 10px' : '0 10px 0 10px',
          alignItems: 'center',
          backgroundColor: location.pathname === '/slippers' ? '#e8f5e9' : openSlippers ? '#e0e0e0' : '',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: sideBarSize ? '' : 'center',
            flexDirection: sideBarSize ? 'row' : 'column',
            height: sideBarSize ? '45px' : '55px',
            alignItems: 'center',
          }}
        >
          <SlippersIcon />
          <Typography
            sx={{ fontWeight: 500 }}
            paddingLeft={sideBarSize ? '20px' : 0}
            color={location.pathname === '/slippers' ? '#00c853' : '#616161'}
            fontSize={sideBarSize ? 15 : 9}
          >
            Slippers
          </Typography>
        </Box>
        {openSlippers ? (
          <ExpandLess sx={{ fontSize: '16px' }} />
        ) : (
          <KeyboardArrowRightIcon sx={{ fontSize: '16px' }} />
        )}
      </Box>

      <div>
        <Collapse in={openSlippers} timeout={350} unmountOnExit>
          {['women', 'men', 'all'].map((item, index) => {
            return (
              <Link
                key={item}
                style={{
                  justifyContent: sideBarSize ? '' : 'center',
                  flexDirection: sideBarSize ? 'row' : 'column',
                  height: sideBarSize ? '45px' : '45px',
                  color: url.searchParams.has(item) ? 'black' : '#616161',
                  // paddingLeft: '20px',
                }}
                className="linkSideBar"
                to={`/slippers?${item}=true`}
              >
                <FiberManualRecordIcon
                  sx={{
                    width: '15px',
                    // height: '15px',
                    paddingLeft: sideBarSize ? '20px' : 0,
                    fontSize: url.searchParams.has(item) ? '14px' : '6px',
                  }}
                />
                <Typography
                  sx={{ fontWeight: 500, textTransform: 'capitalize' }}
                  paddingLeft={sideBarSize ? '17px' : 0}
                  // color={getColorOfIcon('/s')}
                  fontSize={sideBarSize ? 15 : 9}
                >
                  {item}
                </Typography>
              </Link>
            );
          })}
        </Collapse>
      </div>

      <Link
        style={{
          justifyContent: sideBarSize ? '' : 'center',
          flexDirection: sideBarSize ? 'row' : 'column',
          minHeight: sideBarSize ? '45px' : '55px',
          backgroundColor: location.pathname === '/inserts' ? '#e8f5e9' : '',
        }}
        className="linkSideBar"
        to="/inserts"
      >
        <InsertsIcon />
        <Typography
          sx={{ fontWeight: 500 }}
          paddingLeft={sideBarSize ? '20px' : 0}
          color={getColorOfIcon('/inserts')}
          fontSize={sideBarSize ? 15 : 9}
        >
          Inserts
        </Typography>
      </Link>

      <Link
        style={{
          justifyContent: sideBarSize ? '' : 'center',
          flexDirection: sideBarSize ? 'row' : 'column',
          minHeight: sideBarSize ? '45px' : '55px',
          backgroundColor: location.pathname === '/care' ? '#e8f5e9' : '',
        }}
        className="linkSideBar"
        to="/care"
      >
        <CareItemnsIcon />
        <Typography
          sx={{ fontWeight: 500 }}
          paddingLeft={sideBarSize ? '20px' : 0}
          color={getColorOfIcon('/care')}
          fontSize={sideBarSize ? 15 : 9}
        >
          Care Items
        </Typography>
      </Link>
      <Typography
        sx={{
          fontSize: '12px',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: '#616161',
          p: '20px 0px 10px 10px',
        }}
      >
        Details
      </Typography>

      <Box
        onClick={() => setOpenSocial(!openSocial)}
        sx={{
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '8px',
          marginTop: '5px',
          padding: sideBarSize ? '0 10px 0 10px' : '0 10px 0 10px',
          alignItems: 'center',
          backgroundColor: openSocial ? '#e0e0e0' : '',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: sideBarSize ? '' : 'center',
            flexDirection: sideBarSize ? 'row' : 'column',
            height: sideBarSize ? '45px' : '55px',
            alignItems: 'center',
          }}
        >
          <SocialIcon />

          <Typography
            sx={{ fontWeight: 500 }}
            paddingLeft={sideBarSize ? '20px' : 0}
            color="#616161"
            fontSize={sideBarSize ? 15 : 9}
          >
            Social
          </Typography>
        </Box>
        {openSocial ? (
          <ExpandLess sx={{ fontSize: '16px' }} />
        ) : (
          <KeyboardArrowRightIcon sx={{ fontSize: '16px' }} />
        )}
      </Box>

      <div>
        <Collapse in={openSocial} timeout={350} unmountOnExit>
          <Link
            target="_blank"
            style={{
              justifyContent: sideBarSize ? '' : 'center',
              flexDirection: sideBarSize ? 'row' : 'column',
              minHeight: sideBarSize ? '45px' : '55px',
              // backgroundColor: location.pathname === '/about' ? '#e8f5e9' : '',
              padding: sideBarSize ? '0 10px 0 30px' : '0 10px 0 10px',
            }}
            className="linkSideBar"
            to="https://www.instagram.com/buyitnow_armenia/"
          >
            <InstagramIcon />
            <Typography
              sx={{ fontWeight: 500 }}
              paddingLeft={sideBarSize ? '20px' : 0}
              color="#616161"
              fontSize={sideBarSize ? 15 : 9}
            >
              Instagram
            </Typography>
          </Link>

          <Link
            target="_blank"
            style={{
              justifyContent: sideBarSize ? '' : 'center',
              flexDirection: sideBarSize ? 'row' : 'column',
              minHeight: sideBarSize ? '45px' : '55px',
              // backgroundColor: location.pathname === '/about' ? '#e8f5e9' : '',
              padding: sideBarSize ? '0 10px 0 30px' : '0 10px 0 10px',
            }}
            className="linkSideBar"
            to="https://www.facebook.com/"
          >
            <FacebookIcon />
            <Typography
              sx={{ fontWeight: 500 }}
              paddingLeft={sideBarSize ? '20px' : 0}
              color="#616161"
              fontSize={sideBarSize ? 15 : 9}
            >
              Facebook
            </Typography>
          </Link>

          <Link
            target="_blank"
            style={{
              justifyContent: sideBarSize ? '' : 'center',
              flexDirection: sideBarSize ? 'row' : 'column',
              minHeight: sideBarSize ? '45px' : '55px',
              // backgroundColor: location.pathname === '/about' ? '#e8f5e9' : '',
              padding: sideBarSize ? '0 10px 0 30px' : '0 10px 0 10px',
            }}
            className="linkSideBar"
            to="https://wa.me/37477055777"
          >
            <WhatsappIcon />
            <Typography
              sx={{ fontWeight: 500 }}
              paddingLeft={sideBarSize ? '20px' : 0}
              color="#616161"
              fontSize={sideBarSize ? 15 : 9}
            >
              WhatsApp
            </Typography>
          </Link>

          <Link
            target="_blank"
            style={{
              justifyContent: sideBarSize ? '' : 'center',
              flexDirection: sideBarSize ? 'row' : 'column',
              minHeight: sideBarSize ? '45px' : '55px',
              // backgroundColor: location.pathname === '/about' ? '#e8f5e9' : '',
              padding: sideBarSize ? '0 10px 0 30px' : '0 10px 0 10px',
            }}
            className="linkSideBar"
            to="viber://chat/?number=37477055777"
          >
            <ViberIcon />
            <Typography
              sx={{ fontWeight: 500 }}
              paddingLeft={sideBarSize ? '20px' : 0}
              color="#616161"
              fontSize={sideBarSize ? 15 : 9}
            >
              Viber
            </Typography>
          </Link>
        </Collapse>
      </div>
      <Link
        style={{
          justifyContent: sideBarSize ? '' : 'center',
          flexDirection: sideBarSize ? 'row' : 'column',
          minHeight: sideBarSize ? '45px' : '55px',
          backgroundColor: location.pathname === '/about' ? '#e8f5e9' : '',
        }}
        className="linkSideBar"
        to="/about"
      >
        <AboutIcon />
        <Typography
          sx={{ fontWeight: 500 }}
          paddingLeft={sideBarSize ? '20px' : 0}
          color={getColorOfIcon('/about')}
          fontSize={sideBarSize ? 15 : 9}
        >
          About
        </Typography>
      </Link>

      <Link
        style={{
          justifyContent: sideBarSize ? '' : 'center',
          flexDirection: sideBarSize ? 'row' : 'column',
          minHeight: sideBarSize ? '45px' : '55px',
          backgroundColor: location.pathname === '/contacts' ? '#e8f5e9' : '',
        }}
        className="linkSideBar"
        to="/contacts"
      >
        <ContactsIcon />

        <Typography
          sx={{ fontWeight: 500 }}
          paddingLeft={sideBarSize ? '20px' : 0}
          color={getColorOfIcon('/contacts')}
          fontSize={sideBarSize ? 15 : 9}
        >
          Contacts
        </Typography>
      </Link>
      <Link
        style={{
          justifyContent: sideBarSize ? '' : 'center',
          flexDirection: sideBarSize ? 'row' : 'column',
          minHeight: sideBarSize ? '45px' : '55px',
          backgroundColor: location.pathname === '/help' ? '#e8f5e9' : '',
        }}
        className="linkSideBar"
        to="/help"
      >
        <HelpIcon />
        <Typography
          sx={{ fontWeight: 500 }}
          paddingLeft={sideBarSize ? '20px' : 0}
          color={getColorOfIcon('/help')}
          fontSize={sideBarSize ? 15 : 9}
        >
          Help
        </Typography>
      </Link>
    </Grid>
  );
}
