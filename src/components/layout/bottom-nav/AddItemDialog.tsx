import React from "react"
import { styled } from "@mui/material/styles"

import Dialog from "@mui/material/Dialog"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import AddBusinessIcon from "@mui/icons-material/AddBusiness"

export interface DialogProps {
  open: boolean
  onClose: () => void
  navigate: (path: string) => void
}

export const AddItemDialog = (props: DialogProps) => {
  const { open, onClose, navigate } = props

  const _navigate = (path: string) => {
    onClose()
    navigate(path)
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <ListStyled>
        <ListItem button onClick={() => _navigate("/properties/add")}>
          <ListItemIcon>
            <AddBusinessIcon />
          </ListItemIcon>
          <ListItemText primary={"Add Property"} />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => _navigate("/tenants/add")}>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary={"Add Tenant"} />
        </ListItem>
      </ListStyled>
    </Dialog>
  )
}

const ListStyled = styled(List)`
  background-color: white;
`
