import React from 'react';
import { Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { isEmpty } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0px 15px 35px rgb(14 24 68 / 4%)',
    height: '50vh',
    width: 'min(60vh, 60vw)',
    margin: '10vh auto 0',
    textAlign: 'center',
    overflow: 'scroll',
  },
  title: {
    padding: '3rem 0 0.5rem',
    fontWeight: 'bolder',
  },
  text: {
    padding: '0.5rem',
  },
  minMaxContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const WeatherCard = ({ cityData }) => {
  const classes = useStyles();

  console.log(cityData);
  const { name, main } = cityData || {};
  const { temp, temp_min, temp_max, humidity } = main || {};

  return (
    <div className={classes.root}>
      {isEmpty(cityData) ? (
        <React.Fragment>
          <Typography className={classes.title} variant="h5">
            Please allow the app to access your location or type a city in the
            form above!
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography className={classes.title} variant="h4">
            {name}
          </Typography>
          <Divider>
            <Typography>Temperature Now</Typography>
          </Divider>
          <Typography className={classes.text} variant="h6">
            {`${temp} °C`}
          </Typography>
          <Divider>
            <Typography>Min-Max Range</Typography>
          </Divider>
          <div className={classes.minMaxContainer}>
            <Typography className={classes.text} variant="h6">
              {`${temp_min} °C`}
            </Typography>
            <Typography className={classes.text} variant="h6">
              {`${temp_max} °C`}
            </Typography>
          </div>
          <Divider>
            <Typography>Humidity</Typography>
          </Divider>
          <Typography className={classes.text} variant="h6">
            {`${humidity} %`}
          </Typography>
        </React.Fragment>
      )}
    </div>
  );
};

export default WeatherCard;
