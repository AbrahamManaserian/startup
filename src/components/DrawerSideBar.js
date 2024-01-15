import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import SideBar from './Sidebar';
import { MenuIcon } from './SVGIcons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function DrawerSideBar() {
  const [state, setState] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // console.log(location);
    setState(false);
  }, [location]);
  return (
    <div>
      <Box sx={{ cursor: 'pointer', display: { xs: 'block', lg: 'none' } }} onClick={() => setState(true)}>
        <MenuIcon />
      </Box>
      <Drawer open={state} anchor="left" onClose={() => setState(false)}>
        <Box
          //   onClick={() => setState(false)}
          onKeyDown={() => setState(false)}
        >
          {/* <Typography>Abraham</Typography> */}
          <SideBar hide={false} />
        </Box>
      </Drawer>
    </div>
  );
}
