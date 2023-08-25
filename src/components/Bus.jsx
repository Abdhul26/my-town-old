import React, { useState } from 'react'
import { Tabs, Tab, Paper, Typography } from '@mui/material'
import SwapVertIcon from '@mui/icons-material/SwapVert'

const busData = {
  PNOtoCDM: [
    {
      type: 'Private',
      busName: 'CTP',
      departureTime: '4.25 AM',
      arrivalTime: '5.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 B (B)',
      departureTime: '5.40 AM',
      arrivalTime: '6.40 AM',
      from: 'Samiyar pettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (C)',
      departureTime: '5.45 AM',
      from: 'AnnangKovil',
      to: 'Annamalai Nagar',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (A)',
      departureTime: '6.10 AM',
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'Public',
      busName: '5 A (A)',
      departureTime: '6.30 AM',
      from: 'Vathiyapalli',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (B)',
      departureTime: '6.55 AM',
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'Saibaba',
      departureTime: '7.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: 'CTP',
      departureTime: '7.30 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (D)',
      departureTime: '7.35 AM',
      from: 'Ayyampettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (A)',
      departureTime: '8.00 AM',
      from: 'Govt.Hospital',
      to: 'Annamalai Nagar',
      route: 'C.Mutlur',
    },
    {
      type: 'private',
      busName: 'Sri Senthil Kumar',
      departureTime: '8.20 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 B (B)',
      departureTime: '8.25 AM',
      from: 'Samiyar pettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'Vigneshwarah',
      departureTime: '8.50 AM',
      from: 'Bus Stand',
      to: 'KattumannarKudi',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (C)',
      departureTime: '8.55 AM',
      from: 'Puthukuppam',
      to: 'Annamalai Nagar',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (B)',
      departureTime: '9.00 AM',
      from: 'Marine Biology',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'VRM(iniya) Sambathkumar',
      departureTime: '9.25 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 A (A)',
      departureTime: '9.25 AM',
      from: 'Vathiyapalli',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'Inthumathy',
      departureTime: '9.40 AM',
      from: 'Bus Stand',
      to: 'காடரக்கால்',
      route: 'Chidambaram',
    },
    {
      type: 'private',
      busName: 'NT',
      departureTime: '9.45 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (A)',
      departureTime: '9.55 AM',
      from: 'Marine Biology',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'Public',
      busName: '5 (D)',
      departureTime: '10.30 AM',
      from: 'Puthukuppam',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '17',
      departureTime: '10.40 AM',
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'private',
      busName: 'Sri Krishna',
      departureTime: 0.4479166666666667,
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (B)',
      departureTime: 0.4513888888888889,
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 B (B)',
      departureTime: 0.4618055555555556,
      from: 'Samiyar pettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'Sushmitha',
      departureTime: 0.46875,
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 A (A)',
      departureTime: 0.4791666666666667,
      from: 'Vathiyapalli',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'JayaKrishna',
      departureTime: 0.4895833333333333,
      from: 'C.Puthupettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (A)',
      departureTime: 0.5,
      from: 'Govt.Hospital',
      to: 'Annamalai Nagar',
      route: 'C.Mutlur',
    },
    {
      type: 'Public',
      busName: '5 (C)',
      departureTime: 0.5,
      from: 'AnnangKovil',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'Sushmitha',
      departureTime: 0.5173611111111112,
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'Sri SenthilKumar',
      departureTime: 0.5208333333333334,
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '43',
      departureTime: 0.5243055555555556,
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'CTP',
      departureTime: 0.041666666666666664,
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (B)',
      departureTime: 0.04513888888888889,
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (D)',
      departureTime: 0.05555555555555555,
      from: 'MadavaPallam',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 A (A)',
      departureTime: 0.0625,
      from: 'Vathiyapalli',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '6',
      departureTime: 0.0763888888888889,
      from: 'Samiyar pettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (A)',
      departureTime: 0.0798611111111111,
      from: 'Govt.Hospital',
      to: 'Annamalai Nagar',
      route: 'C.Mutlur',
    },
    {
      type: 'private',
      busName: 'CTP',
      departureTime: 0.10416666666666667,
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (B)',
      departureTime: 0.12152777777777778,
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 B (B)',
      departureTime: '3.10.00 AM',
      from: 'Samiyar pettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (C)',
      departureTime: '3.15.00 AM',
      from: 'Puthukuppam',
      to: 'Annamalai Nagar',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'NT',
      departureTime: '3.20.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'VRM(iniya) Sambathkumar',
      departureTime: '3.50.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 A (A)',
      departureTime: '3.50.00 AM',
      from: 'Vathiyapalli',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'Saibaba',
      departureTime: '4.05.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (A)',
      departureTime: '4.00.00 AM',
      from: 'Marine Biology',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'Public',
      busName: '288 ECR',
      departureTime: '4.10.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'Public',
      busName: '5 (D)',
      departureTime: '4.30.00 AM',
      from: 'MadavaPallam',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '17',
      departureTime: '4.35.00 AM',
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'Public',
      busName: '5 (B)',
      departureTime: '5.00.00 AM',
      from: 'Marine Biology',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'JayaKrishna',
      departureTime: '5.20.00 AM',
      from: 'C.Puthupettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'Sri Krishna',
      departureTime: '5.30.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 A (A)',
      departureTime: '5.45.00 AM',
      from: 'Vathiyapalli',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '226 A',
      departureTime: '6.00.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'Public',
      busName: '5 B (B)',
      departureTime: '6.10.00 AM',
      from: 'Samiyar pettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (C)',
      departureTime: '6.25.00 AM',
      from: 'AnnangKovil',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'CTP',
      departureTime: '6.30.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (A)',
      departureTime: '6.55.00 AM',
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'Public',
      busName: '5 (B)',
      departureTime: '7.05.00 AM',
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (D)',
      departureTime: '7.20.00 AM',
      from: 'Ayyampettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '17',
      departureTime: '7.25.00 AM',
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'private',
      busName: 'JayaKrishna',
      departureTime: '7.45.00 AM',
      from: 'C.Puthupettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 A (A)',
      departureTime: '8.00.00 AM',
      from: 'Vathiyapalli',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (A)',
      departureTime: '8.45.00 AM',
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'C.Mutlur',
    },
    {
      type: 'Public',
      busName: '5 B (B)',
      departureTime: '8.50.00 AM',
      from: 'Samiyar pettai',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (C)',
      departureTime: '9.00.00 AM',
      from: 'Puthukuppam',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'VRM(iniya) Sambathkumar',
      departureTime: '9.10.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'NT',
      departureTime: '9.30.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (B)',
      departureTime: '9.35.00 AM',
      from: 'Govt.Hospital',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'Public',
      busName: '5 (D)',
      departureTime: '10.30.00 AM',
      from: 'MadavaPallam',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
    {
      type: 'private',
      busName: 'Lakhsmi Narayanan LNC',
      departureTime: '12.20.00 AM',
      from: 'Bus Stand',
      to: 'Chidambaram',
      route: 'Bhuvanagiri',
    },
  ],
  CDMtoPNO: [
    {
      busName: 'Bus 3',
      from: 'Chennai',
      to: 'Pondicherry',
      departureTime: '11:00 AM',
      arrivalTime: '1:00 PM',
      type: 'Public',
    },
    {
      busName: 'Bus 4',
      from: 'Chennai',
      to: 'Pondicherry',
      departureTime: '4:00 PM',
      arrivalTime: '6:00 PM',
      type: 'Private',
    },
  ],
  PNOtoCUDD: [
    {
      busName: 'Bus 5',
      from: 'Pondicherry',
      to: 'Cuddalore',
      departureTime: '9:00 AM',
      arrivalTime: '12:00 PM',
      type: 'Public',
    },
    {
      busName: 'Bus 6',
      from: 'Pondicherry',
      to: 'Cuddalore',
      departureTime: '2:00 PM',
      arrivalTime: '5:00 PM',
      type: 'Private',
    },
  ],
  CUDDtoPNO: [
    {
      busName: 'N.T',
      from: 'Cuddalore',
      to: 'Parangipettai',
      departureTime: '1:00 PM',
      arrivalTime: '2:00 PM',
      type: 'private',
    },
    {
      busName: 'Bus 8',
      from: 'Cuddalore',
      to: 'Pondicherry',
      departureTime: '4:00 PM',
      arrivalTime: '6:00 PM',
      type: 'Private',
    },
    {
      busName: 'Bus 7',
      from: 'Cuddalore',
      to: 'Pondicherry',
      departureTime: '11:00 AM',
      arrivalTime: '1:00 PM',
      type: 'Public',
    },
    {
      busName: 'Bus 8',
      from: 'Cuddalore',
      to: 'Pondicherry',
      departureTime: '4:00 PM',
      arrivalTime: '6:00 PM',
      type: 'Private',
    },
  ],
}

function Bus() {
  const [tab, setTab] = useState(0)
  const tabsLabels = Object.keys(busData)
  const handleTabChange = (event, newTab) => {
    setTab(newTab)
  }

  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'lightcyan',
        marginTop: '5%',
      }}
    >
      <Tabs
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '',
          color: 'white',
        }}
        value={tab}
        onChange={handleTabChange}
      >
        {tabsLabels.map((label, index) => (
          <Tab label={tabsLabels[index].split('').join('')} key={index} />
        ))}
      </Tabs>
      {busData[tabsLabels[tab]].map((bus, index) => (
        <Paper
          key={index}
          style={{
            margin: '1% 1%',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h5'>{bus.busName}</Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              <Typography>
                From: {bus.from}{' '}
                <SwapVertIcon
                  style={{
                    // justifycontent: 'center',
                    display: 'flex',
                    // flexdirection: 'column',
                    alignItems: 'center',
                  }}
                />
                <span>To: {bus.to}</span>
              </Typography>
            </span>
            <Typography
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                color: bus.type === 'Public' ? 'green' : 'red',
              }}
            >
              Type: {bus.type}
              <br />
              Route:{bus.route}
            </Typography>
            <span style={{ display: 'flex', flexdirection: 'column' }}>
              <Typography>
                Departure Time: {bus.departureTime}{' '}
                <SwapVertIcon
                  style={{
                    justifycontent: 'center',
                    display: 'flex',
                    flexdirection: 'column',
                    alignItems: 'center',
                  }}
                />
                <span>Arrival Time: {bus.arrivalTime}</span>
              </Typography>
            </span>
          </div>
        </Paper>
      ))}
    </div>
  )
}

export default Bus
