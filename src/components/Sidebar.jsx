import React, { useState } from 'react'
import { Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemText } from '@mui/material'
import Bus from './Bus'
import Doctor from './Doctor'
import Market from './Market'
import Home from './Home'
// import { useLocation } from 'react-router'

function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [feed, setFeed] = useState('home')

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleFeedChange = (newFeed) => {
    setFeed(newFeed)
  }

  return (
    <div>
      <IconButton onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <Drawer variant='permanent' open={drawerOpen} width={40}>
        <List>
          <ListItem button onClick={() => handleFeedChange('home')}>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleFeedChange('bus')}>
            <ListItemText>Bus</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleFeedChange('doctor')}>
            <ListItemText>Doctor</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleFeedChange('market')}>
            <ListItemText>Market</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div>
        {feed === 'home' && <Home />}
        {feed === 'bus' && <Bus />}
        {feed === 'doctor' && <Doctor />}
        {feed === 'market' && <Market />}
      </div>
    </div>
  )
}

export default Sidebar

// import { useTheme } from '@mui/material/styles'
// import useMediaQuery from '@mui/material/useMediaQuery'
// import styled from 'styled-components'

// const StyledDrawer = styled(Drawer)`
//   width: 250px;
// `

// const StyledIconButton = styled(IconButton)`
//   margin-right: 16px;
// `

// function Sidebar() {
//   const theme = useTheme()
//   const matches = useMediaQuery(theme.breakpoints.up('sm'))
//   const [open, setOpen] = useState(matches)
//   let history = useHistory()

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return
//     }
//     setOpen(open)
//   }

//   const navigate = (path) => {
//     history.push(path)
//     setOpen(false)
//   }

//   const sideList = () => (
//     <List>
//       <ListItem button onClick={() => navigate('/')}>
//         <ListItemText primary='Home' />
//       </ListItem>
//       <ListItem button onClick={() => navigate('/bus')}>
//         <ListItemText primary='Bus' />
//       </ListItem>
//       <ListItem button onClick={() => navigate('/doctor')}>
//         <ListItemText primary='Doctor' />
//       </ListItem>
//       <ListItem button onClick={() => navigate('/market')}>
//         <ListItemText primary='Market' />
//       </ListItem>
//     </List>
//   )

//   return (
//     <div>
//       <StyledIconButton
//         edge='start'
//         color='inherit'
//         aria-label='menu'
//         onClick={toggleDrawer(true)}
//       >
//         <MenuIcon />
//       </StyledIconButton>
//       <StyledDrawer open={open} onClose={toggleDrawer(false)}>
//         {sideList()}
//       </StyledDrawer>
//     </div>
//   )
// }
// export default Sidebar
