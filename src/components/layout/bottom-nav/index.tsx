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

import { AddItemDialog } from "./AddItemDialog"

const getRootPath = path => {
  const rootPath = path.split("/")[1]
  return rootPath
}

const navs = ["", "properties", "tenants", "settings"]
const disabledDialogNavs = [navs[1], navs[2]]
export const BottomNav: React.FC = () => {
  const router = useRouter()
  const [value, setValue] = useState("home")
  const [disabledDialog, setDisabledDialog] = useState(false)
  const [openAddItemDialog, setOpenAddItemDialog] = React.useState(false)

  const navigate = (nextPath: string) => {
    router.push(nextPath)
  }

  useEffect(() => {
    const rootPath = getRootPath(router.asPath)

    if (!navs.includes(rootPath)) setValue("")
    else {
      let value = rootPath
      if (rootPath === "") {
        value = "home"
      }
      setValue(value)
    }
    setDisabledDialog(false)
    if (disabledDialogNavs.includes(rootPath)) {
      setDisabledDialog(true)
    }
  }, [router.asPath])

  const handleAddButtonClick = () => {
    const rootPath = getRootPath(router.asPath)
    if (disabledDialog) {
      if (rootPath === "properties") {
        navigate("/properties/add")
      } else if (rootPath === "tenants") {
        navigate("/tenants/add")
      }
    } else {
      setOpenAddItemDialog(true)
    }
  }

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
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
        <AddNavButtonContainer>
          <AddNavButton
            value="add"
            label="Add"
            icon={<AddIcon style={{ marginTop: "5px" }} />}
            onClick={handleAddButtonClick}
          />
        </AddNavButtonContainer>
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
      <AddItemDialog
        open={openAddItemDialog}
        onClose={() => {
          setOpenAddItemDialog(false)
        }}
        navigate={navigate}
      />
    </Paper>
  )
}

const BottomNavigationActionStyled = styled(BottomNavigationAction)`
  min-width: 0px;
`
const AddNavButtonContainer = styled.div`
  padding: 6px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 15px;
  margin-top: -15px;
  border-radius: 50%;
  height: 64px;
  width: 64px;
  display: flex;
`

const AddNavButton = styled(BottomNavigationActionStyled)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`
