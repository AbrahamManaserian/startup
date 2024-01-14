import { Grid, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <Grid item xs container p={5}>
      Tihis home page
      <img
        style={{ width: '100%' }}
        src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0523/34aac753b5d7441a95eb3d6ed3c4ba99_ful.jpg"
      />
      <img
        style={{ width: '100%' }}
        src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP588/75fdb14723874d8c8a591a19655268d1_ful.jpg"
      />
      <img
        style={{ width: '100%' }}
        src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0523/34aac753b5d7441a95eb3d6ed3c4ba99_ful.jpg"
      />
      <img
        style={{ width: '100%' }}
        src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0523/34aac753b5d7441a95eb3d6ed3c4ba99_ful.jpg"
      />
    </Grid>
  );
}
