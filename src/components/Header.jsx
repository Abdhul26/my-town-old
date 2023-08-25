import styled from '@emotion/styled'
import { Houseboat, Mail, Notifications } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: '1px solid gray',
  width: '20%',
}))

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  // backgroundColor: 'white',
}))

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h4' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Novo-Info
        </Typography>
        <Houseboat sx={{ display: { xs: 'block', sm: 'none' } }}></Houseboat>
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar onClick={(e) => setOpen(true)} />
        </Icons>
      </StyledToolBar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Header
