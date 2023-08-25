import React from 'react'
import { Grid, Typography, Card, CardContent, IconButton } from '@mui/material'
import { Phone } from '@mui/icons-material'

function Market() {
  const supermarkets = [
    {
      name: 'SuperMart',
      location: 'Pondicherry',
      timing: '9:00 AM - 9:00 PM',
      contactNumber: '123-456-7890',
      availability: 'Open',
    },
    {
      name: 'Big Bazaar',
      location: 'Chennai',
      timing: '10:00 AM - 10:00 PM',
      contactNumber: '098-765-4321',
      availability: 'Open',
    },
    {
      name: 'HyperCity',
      location: 'Cuddalore',
      timing: '8:00 AM - 8:00 PM',
      contactNumber: '111-222-3333',
      availability: 'Closed',
    },
  ]

  const handleClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <Grid
      container
      spacing={3}
      // justify='center'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1%',
      }}
    >
      {supermarkets.map((supermarket) => (
        <Grid item xs={12} sm={6} md={4} key={supermarket.name}>
          <Card>
            <CardContent>
              <Typography variant='h5' align='center'>
                {supermarket.name}
              </Typography>
              <Typography align='center'>
                Location: {supermarket.location}
              </Typography>
              <Typography align='center'>
                Timing: {supermarket.timing}
              </Typography>
              <Typography align='center'>
                Contact Number: {supermarket.contactNumber}
              </Typography>
              <Typography align='center'>
                Call here:
                <IconButton
                  onClick={() => handleClick(supermarket.contactNumber)}
                >
                  <Phone />
                </IconButton>
              </Typography>
              <Typography align='center'>
                Availability: {supermarket.availability}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Market
