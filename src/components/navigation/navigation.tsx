// import React, { FC } from 'react'
// import Box from '@mui/material/Box'
// import { Link as ScrollLink } from 'react-scroll'
// import { navigations } from './navigation.data'

// const Navigation: FC = () => {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
//       {navigations.map(({ path: destination, label }) => (
//         <Box
//           component={ScrollLink}
//           key={destination}
//           activeClass="current"
//           to={destination}
//           spy={true}
//           smooth={true}
//           duration={350}
//           sx={{
//             position: 'relative',
//             color: 'text.disabled',
//             cursor: 'pointer',
//             fontWeight: 600,
//             display: 'inline-flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             px: { xs: 0, md: 3 },
//             mb: { xs: 3, md: 0 },
//             fontSize: { xs: '1.2rem', md: 'inherit' },
//             ...(destination === '/' && {
//               color: 'primary.main',
//             }),

//             '& > div': { display: 'none' },

//             '&.current>div': { display: 'block' },

//             '&:hover': {
//               color: 'primary.main',
//               '&>div': {
//                 display: 'block',
//               },
//             },
//           }}
//         >
//           <Box
//             sx={{
//               position: 'absolute',
//               top: 12,
//               transform: 'rotate(3deg)',
//               '& img': { width: 44, height: 'auto' },
//             }}
//           >
//             {/* eslint-disable-next-line */}
//             <img src="/images/headline-curve.svg" alt="Headline curve" />
//           </Box>
//           {label}
//         </Box>
//       ))}
//     </Box>
//   )
// }

// export default Navigation

import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { navigations } from './navigation.data';

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => {
        const isExternal = destination.startsWith('/'); // Check if the destination is an external route

        return isExternal ? (
          // Handle external routing using Next.js Link
          <Link key={destination} href={destination} passHref>
            <Box
              component="a"
              sx={{
                position: 'relative',
                color: 'text.disabled',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 0, md: 3 },
                mb: { xs: 3, md: 0 },
                fontSize: { xs: '1.2rem', md: 'inherit' },
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                  '& .headline-curve': {
                    display: 'block',
                  },
                },
              }}
            >
              {label}
              {/* Headline curve */}
              <Box
                className="headline-curve"
                sx={{
                  position: 'absolute',
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'none',
                  '& img': { width: 60, height: 'auto' },
                }}
              >
                <img src="/images/headline-curve.svg" alt="Headline curve" />
              </Box>
            </Box>
          </Link>
        ) : (
          // Handle internal scrolling using react-scroll
          <Box
            component={ScrollLink}
            key={destination}
            activeClass="current"
            to={destination}
            spy={true}
            smooth={true}
            duration={350}
            sx={{
              position: 'relative',
              color: 'text.disabled',
              cursor: 'pointer',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 0, md: 3 },
              mb: { xs: 3, md: 0 },
              fontSize: { xs: '1.2rem', md: 'inherit' },
              '&.current': {
                color: 'primary.main',
                '& .headline-curve': {
                  display: 'block',
                },
              },
              '&:hover': {
                color: 'primary.main',
                '& .headline-curve': {
                  display: 'block',
                },
              },
            }}
          >
            {label}
            {/* Headline curve */}
            <Box
              className="headline-curve"
              sx={{
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'none',
                '& img': { width: 60, height: 'auto' },
              }}
            >
              <img src="/images/headline-curve.svg" alt="Headline curve" />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Navigation;