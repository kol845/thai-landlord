import React, { useState } from "react";
import styled from "styled-components";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

export const BottomNav: React.FC = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationActionStyled 
            label="Home" 
            icon={<DashboardIcon />} 
          />
          <BottomNavigationActionStyled label="Properties" icon={<ApartmentIcon />} />
          <BottomNavigationActionStyled label="Add" icon={<AddIcon />} />
          <BottomNavigationActionStyled label="Tenants" icon={<PeopleIcon />} />
          <BottomNavigationActionStyled label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
    </Paper>
  );
};

const BottomNavigationActionStyled = styled(BottomNavigationAction)`
  min-width:0px;
`;