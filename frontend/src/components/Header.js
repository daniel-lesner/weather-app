import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 0',
    width: '100%',
    backgroundColor: '#1976d2',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    width: 50,
    height: 'auto',
    animation: '$logo-spin infinite 10s linear',
  },
  '@keyframes logo-spin': {
    from: { transform: 'rotate(360deg)' },
    to: { transform: 'rotate(0deg)' },
  },
  clouds: {
    width: 100,
    height: 'auto',
    float: 'right',
    zIndex: '10',
    position: 'absolute',
    top: 0,
    animation: '$clouds-run linear infinite 15s',
  },
  '@keyframes clouds-run': {
    '0%': {
      left: '10%',
    },
    '50%': {
      left: '40%',
    },
    '100%': {
      left: '10%',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h4" color="yellow">
          Weather App
        </Typography>
        <img className={classes.clouds} src="/clouds.png" alt="clouds" />
      </div>
      <img className={classes.logo} src="/icon.png" alt="logo" />
    </div>
  );
};

export default Header;
