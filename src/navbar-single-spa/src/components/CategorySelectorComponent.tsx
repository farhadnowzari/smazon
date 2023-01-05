import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Button, Menu, MenuItem, MenuProps } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 180,
    maxHeight: 400,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function CategorySelectorComponent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [ categoryText, setCategoryText ] = React.useState<null | string>(null);
  const open = Boolean(anchorEl);
  const categoryLabel = String(categoryText || 'All Departments');

  const categories = [
    "All Departments",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Global Store",
    "Amazon Warehouse",
    "Apps Games",
    "Audible Audiobooks",
    "Automotive",
    "Baby",
    "Books",
    "Camera Photo",
    "CDs Vinyl",
    "Classical Music",
    "Computers Accessories",
    "Digital Music",
    "DVD Blu-ray",
    "Electronics Photo",
    "Fashion",
    "Women",
    "Men",
    "Girls",
    "Boys",
    "Baby",
    "Garden Outdoors",
    "Gift Cards",
    "Grocery",
    "Handmade",
    "Health Personal Care",
    "Home Business Services",
    "Home Kitchen",
    "Home Improvement",
    "Industrial Scientific",
    "Kindle Store",
    "Large Appliances",
    "Lighting",
    "Luggage and travel gear",
    "Luxury Stores",
    "Magazines",
    "Musical Instruments DJ Equipment",
    "Office Products",
    "PC Video Games",
    "Perfume Cosmetic",
    "Pet Supplies",
    "Premium Beauty",
    "Prime Video",
    "Software",
    "Sports",
    "Games",
  ];
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
    setCategoryText(event.currentTarget.innerText);
  };
  const categoryMenuItems = [];
  for (let i = 0; i < categories.length; i++) {
    categoryMenuItems.push(
      <MenuItem onClick={handleClose} key={i} disableRipple>
        {categories[i]}
      </MenuItem>
    );
  }
  return (
    <div>
      <Button
      style={{
        whiteSpace: 'nowrap',
        textTransform: 'none',
        marginTop: '2px',
      }}
        variant="text"
        color="secondary"
        disableElevation
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
      >
        {categoryLabel}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {categoryMenuItems}
      </StyledMenu>
    </div>
  );
}

export default CategorySelectorComponent;
