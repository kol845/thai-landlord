import React, { useState } from "react"
import { styled, useTheme } from "@mui/material/styles"

import { useRouter } from "next/router"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"

import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import LoginIcon from "@mui/icons-material/Login"

import { ButtonContainer } from "./styled"
import { DRAWER_WIDTH } from "@definitions/constants"

import { userIsLoggedIn, signOut } from "@firebase/utils"

const Main = styled("div", { shouldForwardProp: prop => prop !== "open" })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

export default function PersistentDrawerLeft({ children }: { children: any }) {
  const theme = useTheme()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navigate = (nextPath: string) => {
    router.push(nextPath)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div style={{ position: "absolute" }}>
        <ButtonContainer>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </ButtonContainer>
      </div>

      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {userIsLoggedIn() ? (
            <ListItem
              button
              onClick={() => {
                signOut()
                navigate("/")
                handleDrawerClose()
              }}
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary={"Sign out"} />
            </ListItem>
          ) : (
            <ListItem
              button
              onClick={() => {
                navigate("/login")
                handleDrawerClose()
              }}
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary={"Sign in"} />
            </ListItem>
          )}
        </List>
      </Drawer>
      <Main open={open}>{children}</Main>
    </Box>
  )
}
