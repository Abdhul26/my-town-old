import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import { Card, CardContent, Grid, Typography } from '@mui/material'

function Doctor() {
  const doctors = [
    {
      name: 'Dr. Parthasarathy',
      location: 'Parangipettai',
      contact: '123-456-7890',
      availability: 'Monday, Wednesday, Friday',
      famousFor: 'Treatment of general diseases',
    },
    {
      name: 'Dr. John Smith',
      location: 'Pondicherry',
      contact: '123-456-7890',
      availability: 'Monday, Wednesday, Friday',
      famousFor: 'Treatment of heart diseases',
    },
    {
      name: 'Dr. John Smith',
      location: 'Pondicherry',
      contact: '123-456-7890',
      availability: 'Monday, Wednesday, Friday',
      famousFor: 'Treatment of heart diseases',
    },
    // other doctors
  ]

  const handleCall = (number) => {
    window.location.href = `tel:${number}`
  }

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      display='flex'
      flexDirection='column'
      margin={1}
    >
      {doctors.map((doctor) => (
        <Grid
          item
          sm={6}
          margin={1}
          md={4}
          key={doctor.name}
          alignItems='center'
          justifyContent='center'
          display='flex'
          flexDirection='column'
        >
          <Card>
            <CardContent>
              <Typography variant='h5'>{doctor.name}</Typography>
              <Typography>Location: {doctor.location}</Typography>
              <Typography>
                Contact: {doctor.contact}{' '}
                <PhoneEnabledIcon onClick={() => handleCall(doctor.contact)} />
              </Typography>
              <Typography>Availability: {doctor.availability}</Typography>
              <Typography>Famous for: {doctor.famousFor}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Doctor
