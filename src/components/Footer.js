import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 3 }} component="footer">
      <Container maxWidth="lg" rowSpacing={10}>
        <Grid container>
          <Grid item xs={12}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YouTubeIcon />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              Conditions of Use
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Privacy & Policy
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Press Room
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              © 2021 MovieBox by Adriana Eka Prayudha
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { Footer }
