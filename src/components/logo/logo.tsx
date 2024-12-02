import React, { FC } from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  const size = variant === 'secondary' ? { width: 48, height: 36 } : { width: 84, height: 63 }

  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      <Image
        src="/images/logo.png"
        width={size.width}
        height={size.height}
        quality={100}
        alt="LOGO"
      />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
