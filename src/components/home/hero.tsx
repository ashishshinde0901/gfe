import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as ScrollLink } from 'react-scroll'

const exps: Array<{ label: string; value: string }> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Mentors',
    value: '10+',
  },
]

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Empowering
                  </Typography>
                  <br />
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Founders
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 2.2 }}>
                  {
                    "by Unlocking Insights, Business Opportunities and Funding with Industry Leaders"
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      width: { xs: '100%', md: '200px' },
                      backgroundColor: '#003178',
                      '&:hover': { backgroundColor: '#002060' }, // Darker blue on hover
                    }}
                  >
                    Discover Events
                  </Button>
                </ScrollLink>
                <ScrollLink to="community-section" spy={true} smooth={true} offset={0} duration={350}>
                  <Button
                    size="large"
                    variant="outlined"
                    sx={{
                      width: { xs: '100%', md: '200px' },
                      borderColor: '#003178',
                      color: '#003178',
                      '&:hover': {
                        backgroundColor: '#003178',
                        color: '#fff',
                      },
                    }}
                  >
                    Join Community
                  </Button>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            <Box sx={{ lineHeight: 0 }}>
              <Image src="/images/home-self2.png" width={775} height={787} alt="Hero img" />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
                  <Typography
                    sx={{
                      color: 'secondary.main',
                      mb: { xs: 1, md: 2 },
                      fontSize: { xs: 34, md: 44 },
                      fontWeight: 'bold',
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography color="text.secondary" variant="h5">
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero
