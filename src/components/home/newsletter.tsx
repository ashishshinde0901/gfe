import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const HomeBookSummary: FC = () => {
  return (
    <Box
      id='books'
      sx={{
        backgroundColor: '#ffffff', // White background
        py: { xs: 8, md: 12 }, // Increased padding for height
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Book Image Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                overflow: 'hidden',
                textAlign: 'center',
                mx: 'auto',
              }}
            >
              <img
                src="/images/newsletter.jpg" // Replace with the actual image path
                alt="How to Talk to Anyone"
                style={{
                  width: '100%',
                  maxWidth: '250px', // Increased max width for larger image
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  mt: 2,
                  fontWeight: 'bold',
                  color: '#43a047', // Green text
                }}
              >
                This Week's Featured Book
              </Typography>
            </Box>
          </Grid>

          {/* Text and Links Section */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#555',
                mb: 3,
                fontSize: '1.4rem', // Slightly larger font for readability
                lineHeight: 1.6,
              }}
            >
              Read some insightful summaries
              <br />
              from one of the top-selling books across the world.
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: '#1a237e', // Completely blue
                mb: 4,
                fontSize: { xs: '2.4rem', md: '3rem' }, // Huge font for better emphasis
              }}
            >
              New Book Summary every week!
            </Typography>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: '#1a237e', // Blue background
                color: '#ffffff',
                borderRadius: 1,
                px: 4,
                py: 1.5, // Increased padding for better spacing
                fontWeight: 'bold',
                fontSize: '1.2rem', // Larger font size
                mb: 5,
              }}
            >
              Subscribe to our <span style={{ color: '#ffd600' }}>NEWSLETTER</span> and never miss an update.
            </Box>
            <Box>
              <Link
                href="#all-summaries"
                underline="hover"
                sx={{
                  color: '#1a237e',
                  fontWeight: 'bold',
                  fontSize: '1.2rem', // Larger font for better visibility
                }}
              >
                Read all previous Summaries
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeBookSummary;