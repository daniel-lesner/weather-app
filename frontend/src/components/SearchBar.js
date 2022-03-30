import React, { useState } from 'react';
import {
  Paper,
  InputBase,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  Typography,
  Backdrop,
  Box,
  Fade,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { getCitiesArray, getCityWeather } from '../api/api';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const SearchBar = ({ setCityData }) => {
  const classes = useStyles();

  const [citiesArray, setCitiesArray] = useState([]);
  const [formValue, setFormValue] = useState('');
  const [open, setOpen] = useState(false);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (!formValue) return;
    setCitiesArray(await getCitiesArray(formValue));
    handleOpen();
  };

  const handleCityChoice = async (cityObject) => {
    setCityData(await getCityWeather(cityObject.lat, cityObject.lon));
    handleClose();
    setFormValue('');
  };

  const handleChange = (event) => setFormValue(event.target.value);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 'min(70vh, 70vw)',
        }}
        onSubmit={onFormSubmit}
      >
        <InputBase
          value={formValue}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type a city"
          inputProps={{ 'aria-label': 'type a city' }}
          onChange={handleChange}
        />
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={onFormSubmit}
          disabled={!formValue}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'max(30vh, 30vw)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {citiesArray.length
                ? 'Please select one of the cities below'
                : 'Oups, could not find the city, please try again!'}
            </Typography>
            <div id="transition-modal-description" sx={{ mt: 2 }}>
              <Grid className={classes.citiesListcontainer}>
                {citiesArray &&
                  citiesArray.map((item) => {
                    const { id, name, state, country } = item;
                    return (
                      <MenuItem
                        key={id}
                        value={item}
                        onClick={() => handleCityChoice(item)}
                      >
                        {`${name}, ${state ? state + ', ' : ''}${country}`}
                      </MenuItem>
                    );
                  })}
              </Grid>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SearchBar;
