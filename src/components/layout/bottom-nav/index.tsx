import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { useRouter } from "next/router"

import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Paper from "@mui/material/Paper"

import DashboardIcon from "@mui/icons-material/Dashboard"
import ApartmentIcon from "@mui/icons-material/Apartment"
import AddIcon from "@mui/icons-material/Add"
import PeopleIcon from "@mui/icons-material/People"
import SettingsIcon from "@mui/icons-material/Settings"

const navs = ["/", "/properties", "/tenants", "/settings"]

export const BottomNav: React.FC = () => {
  const router = useRouter()
  const [value, setValue] = useState("home")

  const navigate = (nextPath: string) => {
    router.push(nextPath)
  }

  useEffect(() => {
    if (!navs.includes(router.asPath)) setValue("")
  }, [router.asPath])

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
          if (newValue !== "add") {
            if (newValue === "home") {
              // Ensure that 'home' is translated to root path '/'
              newValue = ""
            }
            navigate("/" + newValue)
          }
        }}
      >
        <BottomNavigationActionStyled
          value="home"
          label="Home"
          icon={<DashboardIcon />}
        />
        <BottomNavigationActionStyled
          value="properties"
          label="Properties"
          icon={<ApartmentIcon />}
        />
        <BottomNavigationActionStyled
          value="add"
          label="Add"
          icon={<AddIcon />}
        />
        <BottomNavigationActionStyled
          value="tenants"
          label="Tenants"
          icon={<PeopleIcon />}
        />
        <BottomNavigationActionStyled
          value="settings"
          label="Settings"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
}

const BottomNavigationActionStyled = styled(BottomNavigationAction)`
  min-width: 0px;
`
