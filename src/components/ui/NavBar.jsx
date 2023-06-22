import React from 'react';
import { AppBar, Menu, MenuItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            XYZH App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit">About XYZH</Button>
          <Button color="inherit">Forms</Button>
          <Button
            color="inherit"
            aria-controls="records-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Records
          </Button>
          <Menu
            id="records-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/entry-cards">
              Entry Cards
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/check-ups">
              Check-Ups
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/regular-patients"
            >
              Regular Patients
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/admitted-patients"
            >
              Admitted Patients
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/operated-patients"
            >
              Operated Patients
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/discharged-patients"
            >
              Discharged Patients
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
