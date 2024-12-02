import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const videos = [
  {
    title: 'Eat That Frog: Key Takeaways',
    videoUrl: 'https://www.youtube.com/embed/KYVVp6hh-Zg?si=Xd6kbyhbH0IiMtl-',
  },
  {
    title: 'Is Doglapan also a Doglapan?',
    videoUrl: 'https://www.youtube.com/embed/wDv7tCUQ-VU?si=izcoFqvnBXD760tB',
  },
  {
    title: 'Insights from a World-Class Researcher',
    videoUrl: 'https://www.youtube.com/embed/087UYKoItsw?si=O4kEWqeOdjudfLJU',
  },
  {
    title: 'Enemies of Start-up Success',
    videoUrl: 'https://www.youtube.com/embed/FRWHVdFF0es?si=knWOQ6hpwWFTiVHY',
  },
];

const VideosPage = () => {
  return (
    <Box
      id='videos'
      sx={{
        py: 6,
        px: 2,
        backgroundColor: '#f9f9f9', // Light grey background
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* First Layer: Text and Video Card */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '2.8rem',
                  color: '#333',
                  mb: 2,
                }}
              >
                Featured Videos
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#555',
                  mb: 3,
                  fontSize: '1.2rem',
                }}
              >
                "Learn from our experience. Subscribe to our YouTube channel and get valuable insights into the
                business world."
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FF0000',
                  color: '#fff',
                  mb: 4,
                  px: 4,
                  py: 1.2,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#CC0000',
                  },
                }}
                href="https://www.youtube.com/@getfundedeasily" // Replace with your YouTube channel link
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe to our YouTube channel
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Single Video Card */}
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%', // Aspect ratio for 16:9 videos
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src={videos[0].videoUrl}
                  title={videos[0].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px',
                  }}
                ></iframe>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  {videos[0].title}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Second Layer: Three Video Cards */}
          <Grid item xs={12}>
            <Grid container spacing={4}>
              {videos.slice(1).map((video, index) => (
                <Grid key={index} item xs={12} sm={4}>
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        paddingTop: '56.25%', // Aspect ratio for 16:9 videos
                        overflow: 'hidden',
                      }}
                    >
                      <iframe
                        src={video.videoUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          borderRadius: '12px',
                        }}
                      ></iframe>
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'rgba(0,0,0,0.7)',
                        color: '#fff',
                        p: 2,
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          lineHeight: 1.3,
                        }}
                      >
                        {video.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VideosPage;