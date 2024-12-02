import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const StyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#a5d6a7',
    },
    '&:hover fieldset': {
      borderColor: '#81c784',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    countryCode: false,
    phone: false,
    message: false,
  });

  const validateForm = () => {
    const newErrors = {
      name: formData.name === '',
      email: !/\S+@\S+\.\S+/.test(formData.email), // Basic email regex
      countryCode: formData.countryCode === '' || isNaN(Number(formData.countryCode)),
      phone: formData.phone === '' || isNaN(Number(formData.phone)),
      message: formData.message === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error); // Return false if any error exists
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      country_code: formData.countryCode,
      phone: formData.phone,
      message: formData.message,
    };

    
      
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      id='about_us'
      component="footer"
      sx={{
        backgroundColor: '#e8f5e9',
        py: { xs: 8, md: 12 },
        color: '#1b5e20',
      }}
    >
      <Container>
        <Grid container spacing={6}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  color: '#2e7d32',
                  mb: 3,
                }}
              >
                About GetFundedEasily
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1976d2',
                  mb: 2,
                }}
              >
                Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  color: '#1b5e20',
                  mb: 4,
                }}
              >
                Empowering startups to flourish by bridging the gap between foundational ideas and industry expertise, while fostering collaborative growth opportunities.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1976d2',
                  mb: 2,
                }}
              >
                Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  color: '#1b5e20',
                }}
              >
                To selectively partner with promising founders, investing time and resources to elevate their potential, and to connect them with industry leaders for symbiotic work and collaboration opportunities.
                sustainable growth.
              </Typography>
            </Box>
          </Grid>

          {/* Right Section - Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 4,
                p: { xs: 4, md: 6 },
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  color: '#1b5e20',
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                Contact Us
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <StyledInput
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    helperText={errors.name ? 'Name is required' : ''}
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: '#81c784' },
                    }}
                  />
                </Box>
                <Box sx={{ mb: 3 }}>
                  <StyledInput
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    helperText={errors.email ? 'Enter a valid email' : ''}
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: '#81c784' },
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <StyledInput
                    label="Country Code"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    error={errors.countryCode}
                    helperText={errors.countryCode ? 'Enter a valid country code' : ''}
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: '#81c784' },
                    }}
                    sx={{ flex: 1 }}
                  />
                  <StyledInput
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    helperText={errors.phone ? 'Enter a valid phone number' : ''}
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: '#81c784' },
                    }}
                    sx={{ flex: 2 }}
                  />
                </Box>
                <Box sx={{ mb: 3 }}>
                  <StyledInput
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    helperText={errors.message ? 'Message is required' : ''}
                    multiline
                    rows={4}
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: '#81c784' },
                    }}
                  />
                </Box>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#2e7d32',
                    color: '#ffffff',
                    py: 1.2,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#1b5e20',
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;