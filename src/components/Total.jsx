import React, { useState } from 'react'
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Avatar,
  Menu,
  MenuItem,
  Card,
  Tab,
  makeStyles,
} from ' @mui/material'

import { Link, Route } from 'react-router-dom'
import ViewModuleOutlined from '@mui/icons-material/ViewModuleOutlined'
import Person from '@mui/icons-material/Person'
import Settings from '@mui/icons-material/Settings'
import ExitToApp from '@mui/icons-material/ExitToApp'
import LocalHospital from '@mui/icons-material/LocalHospital'
import LocalGroceryStore from '@mui/icons-material/LocalGroceryStore'
import Commute from '@mui/icons-material/Commute'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: 20,
  },
  search: {
    width: '50%',
  },
  avatar: {
    marginRight: 20,
  },
  sidebar: {
    width: '25%',
  },
})

const Total = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <AppBar position='static'>
        <IconButton
          className={classes.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ViewModuleOutlined />
        </IconButton>
        <TextField className={classes.search} label='Search' type='search' />
        <Avatar className={classes.avatar} onClick={handleClick}>
          <Person />
        </Avatar>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <Settings />
            <Link to='/settings'>Settings</Link>
          </MenuItem>
          <MenuItem>
            <ExitToApp />
            <Link to='/logout'>Logout</Link>
          </MenuItem>
        </Menu>
      </AppBar>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <List className={classes.sidebar}>
          <Link to='/doctor'>
            <ListItem button>
              <ListItemIcon>
                <LocalHospital />
              </ListItemIcon>
              <ListItemText primary='Doctor' />
            </ListItem>
          </Link>
          <Link to='/market'>
            <ListItem button>
              <ListItemIcon>
                <LocalGroceryStore />
              </ListItemIcon>
              <ListItemText primary='Market' />
            </ListItem>
          </Link>
          <Link to='/bus'>
            <ListItem button>
              <ListItemIcon>
                <Commute />
              </ListItemIcon>
              <ListItemText primary='Bus' />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Route path='/doctor' component={DoctorComponent} />
      <Route path='/market' component={MarketComponent} />
      <Route path='/bus' component={BusComponent} />
    </div>
  )
}

const DoctorComponent = () => {
  return (
    <div>
      <Card>
        <List>
          <ListItem>
            <ListItemText primary='Doctor Name' secondary='Location' />
            <ListItemText primary='Contact Number' />
          </ListItem>
        </List>
      </Card>
    </div>
  )
}

const MarketComponent = () => {
  return (
    <div>
      <Card>
        <List>
          <ListItem>
            <ListItemText primary='Supermarket Name' secondary='Location' />
            <ListItemText primary='Contact Number' />
            <ListItemText primary='Availability Time' />
          </ListItem>
        </List>
      </Card>
    </div>
  )
}

const BusComponent = () => {
  return (
    <div>
      <Tab label='PNO to CDM' />
      <Tab label='CDM to PNO' />
      <Tab label='PNO to CUDD' />
    </div>
  )
}

export default Total
