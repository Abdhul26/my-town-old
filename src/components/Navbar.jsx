import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Bus from './Bus'
import Doctor from './Doctor'
import Market from './Market'
import Home from './Home'
import Technicians from './Technicians'

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Router>
      <div style={{ flexGrow: 1, backgroundColor: 'lightcyan' }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              style={{ marginRight: 16 }}
              color='inherit'
              aria-label='open menu'
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                position: 'absolute',

                borderRadius: 50,
                backgroundColor: '#f5f5f5',
                // margin: '0 0 0 auto',
                right: '10%',
                width: '40%',
              }}
            >
              <div
                style={{
                  padding: '0 8px',
                  height: '100%',
                  position: 'absolute',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'black',
                  justifyContent: 'space-around',
                }}
              >
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                style={{
                  padding: '8px 8px 8px 24px',
                  width: '100%',
                  color: 'black',
                  marginLeft: '10%',
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Grid container justify='flex-end'>
              <Avatar
                style={{
                  right: '10px',
                  marginLeft: '98%',
                }}
                alt='User'
                onClick={handleClick}
              />
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Setting</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          open={open}
          onClose={handleDrawerClose}
          style={{ width: 250, padding: 16 }}
        >
          <div
            role='presentation'
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
            style={{
              width: 250,
              padding: 16,
              backgroundColor: 'lightcoral',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '5%',
            }}
          >
            <h1>Welcome</h1>

            <List style={{ padding: 40 }}>
              <ListItem button style={{ cursor: 'pointer' }}>
                <Link
                  to='/home'
                  style={{ textDecoration: 'none', color: 'black' }}
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary='Home' />
                </Link>
              </ListItem>

              <ListItem button style={{ cursor: 'pointer' }}>
                <Link
                  to='/bus'
                  style={{ textDecoration: 'none', color: 'black' }}
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary='Bus Info' />
                </Link>
              </ListItem>

              <ListItem button style={{ cursor: 'pointer' }}>
                <Link
                  to='/doctor'
                  style={{ textDecoration: 'none', color: 'black' }}
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary='Doctor Info' />
                </Link>
              </ListItem>

              <ListItem button style={{ cursor: 'pointer' }}>
                <Link
                  to='/market'
                  style={{ textDecoration: 'none', color: 'black' }}
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary='Market Info' />
                </Link>
              </ListItem>

              <ListItem button style={{ cursor: 'pointer' }}>
                <Link
                  to='/technicians'
                  style={{ textDecoration: 'none', color: 'black' }}
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary='Technicians Info' />
                </Link>
              </ListItem>
            </List>
          </div>
        </Drawer>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route path='/bus' element={<Bus />} />
          <Route path='/doctor' element={<Doctor />} />
          <Route path='/market' element={<Market />} />
          <Route path='/technicians' element={<Technicians />} />
        </Routes>
      </div>
    </Router>
  )
}
