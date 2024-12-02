import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const quotes = [
  {
    law: 'Law #14: Law of Candor',
    quote: "When you admit a negative, your consumers are more likely to believe everything the company says.",
    example: "Example: Tata Salt acknowledged that excessive salt intake can be harmful. Following this, their Lite (low sodium) variant gained popularity.",
  },
  {
    law: 'Law #15: Law of Singularity',
    quote: "Often, just a single move can produce significant results, even though it might take time to identify.",
    example: "Example: Jio's move of offering free 4G and voice calls undercut competitors and sparked a digital revolution.",
  },
  {
    law: 'Law #16: Law of Unpredictability',
    quote: "The future is unpredictable, so stay adaptable and never get too comfortable in your core area.",
    example: "Example: Jet Airways faced financial turmoil, allowing competitors to capitalize with new routes and promotions.",
  },
  {
    law: 'Law #17: Law of Success',
    quote: "Success often breeds arrogance, which can lead to failure if you're not careful.",
    example: "Example: Nokia's resistance to adopt Android led to its downfall despite initial success.",
  },
  {
    law: 'Law #18: Law of Exclusivity',
    quote: "Two companies can’t own the same word in the prospect’s mind.",
    example: "Example: Maggi remains India's top choice for noodles despite competition from Yippee and Top Ramen.",
  },
  {
    law: 'Law #19: Law of Failure',
    quote: "Some products, initiatives will fail; accept it quickly and pivot ruthlessly.",
    example: "Example: Despite the initial buzz, Tata Nano couldn't overcome safety and quality concerns, leading to its market failure.",
  },
  {
    law: 'Law #20: Law of Hype',
    quote: "Situation is often opposite of the way it appears in the press.",
    example: "Example: The buzz around Reliance's JioMart's launch was immense, but sustained service quality determined long-term success.",
  },
  {
    law: 'Law #21: Law of Acceleration',
    quote: "The long-term success of consistent branding over chasing short-lived trends.",
    example: "Example: Maruti Suzuki maintained longevity for its models, ensuring reliability in the minds of consumers.",
  },
];


const GreenButton = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.palette.success.main,
  color: theme.palette.success.contrastText,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 'bold',
  fontSize: '1.4rem',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const NavigationDots = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(3),
  '& > div': {
    width: 10,
    height: 10,
    borderRadius: '50%',
    margin: '0 5px',
    backgroundColor: theme.palette.grey[400],
    cursor: 'pointer',
    '&.active': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const HomeFeature = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        backgroundColor: '#f8f9fa', // Light grey background
        color: '#004085',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Title Section */}
      <Box sx={{ width: '100%', maxWidth: '800px', mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main', fontSize: '3rem', mb: 2 }}>
          Get 1% Better Daily
        </Typography>
        <Box
          sx={{
            height: 5, // Rod thickness
            backgroundColor: '#6ec1e4', // Light blue rod
            width: { xs: '90%', md: '60%' },
            mx: 'auto',
            my: 2,
            borderRadius: 3, // Rod corners
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            color: '#FFA500', // Orange/yellow color for readability
            fontStyle: 'italic',
            fontSize: '1.5rem', // Larger size for emphasis
            fontWeight: 'bold',
          }}
        >
          Immutable Laws of Leadership
        </Typography>
        <Box
          sx={{
            height: 5, // Rod thickness
            backgroundColor: '#6ec1e4', // Light blue rod
            width: { xs: '90%', md: '60%' },
            mx: 'auto',
            my: 2,
            borderRadius: 3, // Rod corners
          }}
        />
      </Box>

      {/* Slider Section */}
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: 2,
          px: 4,
          py: 6,
          width: { xs: '90%', md: '60%' },
          position: 'relative',
          boxShadow: 3,
          border: '1px solid #cce5ff',
        }}
      >
        <GreenButton>{quotes[currentIndex].law}</GreenButton>
        <Typography variant="body1" sx={{ fontSize: '1.6rem', color: '#004085', mb: 3, fontWeight: 'bold' }}>
          {quotes[currentIndex].quote}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '1.3rem', color: '#FFA500', fontWeight: 'bold' }}>
          {quotes[currentIndex].example}
        </Typography>

        {/* Navigation Arrows */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: -40,
            transform: 'translateY(-50%)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <IconButton onClick={handlePrev} sx={{ color: '#004085' }}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: -40,
            transform: 'translateY(-50%)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <IconButton onClick={handleNext} sx={{ color: '#004085' }}>
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* Navigation Dots */}
      <NavigationDots>
        {quotes.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </NavigationDots>

      {/* Join WhatsApp Section */}
      <Box sx={{ width: '100%', maxWidth: '800px', mt: 4 }}>
        <Box
          sx={{
            height: 5, // Rod thickness
            backgroundColor: '#6ec1e4', // Light blue rod
            width: { xs: '90%', md: '60%' },
            mx: 'auto',
            my: 2,
            borderRadius: 3, // Rod corners
          }}
        />
        <Typography variant="body2" sx={{ fontSize: '1.2rem', color: '#004085' }}>
          Join our{' '}
          <a
            href="https://chat.whatsapp.com/your-link" // Replace with your WhatsApp group link
            style={{ color: '#FFA500', fontWeight: 'bold', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Community
          </a>{' '}
          and get daily updates!
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeFeature;