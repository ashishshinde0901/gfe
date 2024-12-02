import React, { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const pastEvents = [
  {
    title: "Exclusive Founder’s Event in San Francisco",
    image: "/images/events/1.jpeg", // Replace with actual image path
    link: "#",
  },
  {
    title: "Leveraging Creative Economy for Founders with CA Rachana Ranade",
    image: "/images/events/2.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Best Practices in Onboarding the Right Angel Investor",
    image: "/images/events/3.jpg", // Replace with actual image path
    link: "#",
  },
  {
    title: "How to Set Up a Right Board for Your Startup",
    image: "/images/events/4.png", // Replace with actual image path
    link: "#",
  },
];

const FeaturedEventsPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  return (
    <Box
      id="events"
      sx={{
        pt: 6,
        pb: 6,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: 36, md: 42 },
            fontWeight: 'bold',
            color: 'green',
            mb: { xs: 4, md: 6 },
          }}
        >
          Featured Events
        </Typography>
        <Grid container spacing={4}>
          {/* Featured Event Section */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => handleOpen("/images/events/main.jpeg")} // Main image for enlargement
            >
              <Image
                src="/images/events/main.jpeg" // Replace with your image path
                width={800}
                height={400}
                alt="Featured Event"
                style={{ borderRadius: '8px' }}
              />
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontSize: { xs: 22, md: 28 }, fontWeight: 'bold' }}
                >
                  Panel Discussion - Exploring the Generative AI Frontier for Businesses
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2, fontSize: { xs: 14, md: 16 } }}
                >
                  Saturday, August 19, 2023 (9:00 AM to 11:00 AM)
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  paragraph
                  sx={{ fontSize: { xs: 14, md: 16 } }}
                >
                  Venue: Office No. 3, 1st Floor, Gokhale Sanchit, BMCC Road, Deccan Gymkhana, Pune 411004, India
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      backgroundColor: '#003178',
                      color: '#fff',
                      width: { xs: '100%', md: '200px' },
                      '&:hover': { backgroundColor: '#002060' },
                    }}
                    href="https://www.youtube.com/watch?v=bCiAye5jOxU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch the Recording
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Past Events Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: 20, md: 24 },
                color: 'green',
                fontWeight: 'bold',
              }}
            >
              Past Events
            </Typography>
            <Box sx={{ mt: 2 }}>
              {pastEvents.map((event, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid #ddd',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpen(event.image)} // Enlarges the clicked event image
                >
                  <Box sx={{ flexShrink: 0, mr: 2 }}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={80}
                      height={80}
                      style={{ borderRadius: '8px' }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: 16, md: 18 },
                        fontWeight: 'bold',
                      }}
                    >
                      <Link href={event.link} underline="hover" color="inherit">
                        {event.title}
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              ))}
              <Link href="#" underline="hover" sx={{ fontSize: { xs: 14, md: 16 }, color: 'primary.main' }}>
                Click here to view more...
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Modal for Enlarged Image */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            outline: 'none',
            maxWidth: '90%',
            maxHeight: '90%',
          }}
        >
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Enlarged Event"
              width={800}
              height={800}
              style={{
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default FeaturedEventsPage;