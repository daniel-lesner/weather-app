import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0px 15px 35px rgb(14 24 68 / 4%)',
    height: '50vh',
    marginTop: '10vh',
  },
}));

const WeatherCard = ({ cityData }) => {
  const classes = useStyles();
  console.log(cityData);

  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="sm">
        {cityData?.name}
        {cityData?.main?.temp}
      </Container>
    </React.Fragment>
  );
};

export default WeatherCard;
