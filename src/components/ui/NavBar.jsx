import React from 'react';
import { AppBar, Menu, MenuItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdownType, setDropdownType] = React.useState(null);

  const handleClick = (event, type) => {
    setAnchorEl(event.currentTarget);
    setDropdownType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDropdownType(null);
  };

  const renderDropdownMenu = () => {
    switch (dropdownType) {
      case 'forms':
        return (
          <Menu 
            id="forms-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem style={{ fontFamily: 'Google Sans'}} onClick={handleClose} component={Link} to="/check-up">
              Check-Up
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}} onClick={handleClose} component={Link} to="/admission">
              Admission
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}} onClick={handleClose} component={Link} to="/discharge">
              Discharge
            </MenuItem>
          </Menu>
        );
      case 'records':
        return (
          <Menu
            id="records-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
           <MenuItem style={{ fontFamily: 'Google Sans'}} onClick={handleClose} component={Link} to="/entry-cards">
              Entry Cards
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}} onClick={handleClose} component={Link} to="/check-ups">
              Check-Ups
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}}
              onClick={handleClose}
              component={Link}
              to="/regular-patients"
            >
              Regular Patients
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}}
              onClick={handleClose}
              component={Link}
              to="/admitted-patients"
            >
              Admitted Patients
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}}
              onClick={handleClose}
              component={Link}
              to="/operated-patients"
            >
              Operated Patients
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}}
              onClick={handleClose}
              component={Link}
              to="/discharged-patients"
            >
              Discharged Patients
            </MenuItem>
          </Menu>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
          <img src="public/logozoomed.png" alt="Home" style={{ width: '40px', height: '40px' }} />
          </Button>
          <Typography variant="h6" style={{ fontFamily: 'Google Sans', flexGrow: 1, textAlign: 'left' }}>
            XYZ Hospital Management System
          </Typography>
          <Button style={{ fontFamily: 'Google Sans'}}
            color="inherit"
            aria-controls="about-menu"
            aria-haspopup="true"
            onClick={(event) => handleClick(event, 'about')}
          >
            About XYZH
          </Button>
          <Menu
            id="about-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl) && dropdownType === 'about'}
            onClose={handleClose}
          >
            <MenuItem style={{ fontFamily: 'Google Sans'}} onClick={handleClose} component={Link} to="/departments">
              Departments
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}} onClick={handleClose} component={Link} to="/rooms">
              Rooms
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}} onClick={handleClose} component={Link} to="/regular-doctors">
              Regular Doctors
            </MenuItem>
            <MenuItem style={{ fontFamily: 'Google Sans'}} onClick={handleClose} component={Link} to="/doctors-on-call">
              Doctors on Call
            </MenuItem>
          </Menu>
          <Button style={{ fontFamily: 'Google Sans'}}
            color="inherit"
            aria-controls="forms-menu"
            aria-haspopup="true"
            onClick={(event) => handleClick(event, 'forms')}
          >
            Forms
          </Button>
          {dropdownType === 'forms' && renderDropdownMenu()}
          <Button style={{ fontFamily: 'Google Sans'}}
            color="inherit"
            aria-controls="records-menu"
            aria-haspopup="true"
            onClick={(event) => handleClick(event, 'records')}
          >
            Records
          </Button>
          {dropdownType === 'records' && renderDropdownMenu()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
