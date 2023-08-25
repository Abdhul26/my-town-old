import React from 'react'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const contacts = [
  {
    id: 1,
    name: 'Contact 1',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '123-456-7890',
  },
  {
    id: 2,
    name: 'Contact 2',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
  {
    id: 3,
    name: 'Contact 3',
    description: 'Description',
    image: 'path_to_image',
    contactNumber: '987-654-3210',
  },
]

export default function Home() {
  return (
    <div
      style={{
        // maxWidth: '90vw',

        flexGrow: 1,
        flexWrap: 'wrap',
        // height: '100%',
        justifyContent: 'space-evenly',
        display: 'flex',
        margin: '5%',
      }}
    >
      {contacts.map((contact) => (
        <Card style={{ maxWidth: 345, margin: '1%' }} key={contact.id}>
          <CardActionArea>
            <CardMedia
              style={{ height: 140 }}
              image={contact.image}
              title={contact.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='h2'
                style={{ color: 'black' }}
              >
                {contact.name}
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                style={{ color: 'black' }}
              >
                {contact.description}
              </Typography>
              <br />
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                style={{ color: 'black' }}
              >
                Contact Number:{contact.number}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary' style={{ color: 'black' }}>
              Share
            </Button>
            <Button size='small' color='primary' style={{ color: 'black' }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}
