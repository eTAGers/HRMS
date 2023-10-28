import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Badge from "@mui/material/Badge";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../Layout/Header.css"
import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `95%`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - 320px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Header() {
  //const location = useLocation();
  //const menu = [{ path: "/Dashboard", title: "Dashboard" }];

  //const [title, setTitle] = React.useState({ path: "", title: "" });
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setTitle(
  //     !menu.find((e) => e.path === location.pathname)
  //       ? { path: "", title: "" }
  //       : menu.find((e) => e.path === location.pathname)
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [navigate]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  //const theme = useTheme();
  const openProfileIcon = Boolean(anchorEl);
  const [open, setOpen] = React.useState(true);

  const menuId = "primary-search-account-menu";
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = (event) => {
    setAnchorEl(null);
  };

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  //   setOpenSub(false);
  //   setopenSubInner(false);
  // };

  const handleDrawer = () => {
    open === true ? setOpen(false) : setOpen(true);
    setOpenSub(false);
    setopenSubInner(false);
  };

  const [openSub, setOpenSub] = React.useState(false);
  const [openSubInner, setopenSubInner] = React.useState(false);

  const handleSubInnerClick = () => {
    openSubInner === true ? setopenSubInner(false) : setopenSubInner(true);
  };

  const handleClick = (e) => {
    console.log(e.target);
    console.log(e.currentTarget.textContent);
    openSub === true ? setOpenSub(false) : setOpenSub(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}  sx={{borderRadius: "10px",backgroundColor:"#fff",color:"#000",margin:"1em"}}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{ marginRight: 5 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              marginRight: 5
            }}
          >
            eTAGers HRMS
          </Typography> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openProfileIcon}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleProfileMenuClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Drawer
        variant="permanent"
        open={open}
        className="sidebarMenu"
        id="sidebarMenu"
      >
        <DrawerHeader>
          <Grid container spacing={2} sx={{ alignItems: "center", padding:"0.5em", marginTop:0,zIndex:1 }}>
            <Grid sm={12} md={12}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{textAlign:"center", ...(!open && { display: "none" }) }}
              >
                eTAGers HRMS
              </Typography>
            </Grid>
            <Grid sm={3} md={3}>
              {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawer}
                edge="start"
                sx={{ marginRight: 5 }}
              >
                <MenuIcon />
              </IconButton>
               <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>  */}
            </Grid>
          </Grid>
        </DrawerHeader>
        <Divider />
        <List>
          
          
          <RouterLink className="menuLink" to={"/Dashboard"}>
            <ListItemButton className="menuName">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboards" className="menuTitle"/>
            </ListItemButton>
          </RouterLink>
          <ListItemButton className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Approval" className="menuTitle" />
          </ListItemButton>

          <RouterLink className="menuLink" to={"/Chat"}>
            <ListItemButton className="menuName">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" className="menuTitle" />
            </ListItemButton>
          </RouterLink>
          <RouterLink className="menuLink" to={"/Calendar"}>
          <ListItemButton className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" className="menuTitle" />
          </ListItemButton>
          </RouterLink>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Employee & Users" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <RouterLink className="subMenuLink" to={"/Users"} style={{textDecoration:"none",color:"#000",fontSize:"0.8rem"}}>
                <ListItemButton sx={{ pl: 4 }} className="menuName">
                  <ListItemIcon><AdjustIcon/></ListItemIcon>
                  <ListItemText primary="Users" className="menuTitle" />
                </ListItemButton>
              </RouterLink>
              <RouterLink className="subMenuLink" to={"/Employee"}>
              <ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Employees" className="menuTitle" />
              </ListItemButton>
              </RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick}  className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Loan & Reimburs" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Loans"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Loans" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Reimbursements"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Reimbursements" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Payrolls" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Allpayslips"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="All Payslips" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Generatepayslips"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Generate PaySlips" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Payscales"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Pay Scale Setup" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Attedance"  className="menuTitle"/>
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Dailyattedance"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Daily Attendance" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Attedancereport"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Attendance Reports" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Leaves & Resignation" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Resignation"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Resignation" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Leaves"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Leaves" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Leaves/Addleaves"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Add Leave" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Employee Daily Tasks" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Assignwork"}> <ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Assign Work" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Employeereports"}> <ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Employee Reports" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Notification"}> <ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Notification" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Quote"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Quote" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Dailyexpance"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Daily Expense" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Performances" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Performance"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Performances" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Performancereports"}> <ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Performance Reports" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Certificates"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Generate Certificates" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Recruitment" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Jobs"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Jobs" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Candidates"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Candidates"  className="menuTitle"/>
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Assessments"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Assessments" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Questions"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Questions" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Offer & Other Letter" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Madeofferletter"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Made Offer Letter" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Createofferletter"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Create Offer Letter" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Otherletter"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Create Other Letters" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Customers & Invoice" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Customers"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Authorize Customer" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Invoices"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Create Invoice" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Items"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Input Invoice Items" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Projectmaterial"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Input Project Material" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Project & Materials" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Projectavailable"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Project Available" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Allotmentproject"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Allotment Project" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Projectrequest"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Project Request" className="menuTitle" />
              </ListItemButton></RouterLink>
              <RouterLink className="subMenuLink" to={"/Materialrequest"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Material Request" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick} className="menuName">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase Items" className="menuTitle" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RouterLink className="subMenuLink" to={"/Purchaseorders"}><ListItemButton sx={{ pl: 4 }} className="menuName">
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Input Purchase Order" className="menuTitle" />
              </ListItemButton></RouterLink>
            </List>
          </Collapse>
          {/* <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Roles & Permission" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Roles" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Assign Permissions" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Permission" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="System Setup" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handleSubInnerClick}>
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Panel Setting" />
                {openSubInner ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSubInner} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Roles" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Assign Permissions" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Permission" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton sx={{ pl: 4 }} onClick={handleSubInnerClick}>
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Policy Setting" />
                {openSubInner ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSubInner} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Roles" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Assign Permissions" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Permission" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton sx={{ pl: 4 }} onClick={handleSubInnerClick}>
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Department Setting" />
                {openSubInner ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSubInner} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Roles" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Assign Permissions" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Permission" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton sx={{ pl: 4 }} onClick={handleSubInnerClick}>
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="All Types Setting" />
                {openSubInner ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSubInner} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Roles" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Assign Permissions" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Permission" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton sx={{ pl: 4 }} onClick={handleSubInnerClick}>
                <ListItemIcon><AdjustIcon/></ListItemIcon>
                <ListItemText primary="Allowance & Tax" />
                {openSubInner ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSubInner} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Roles" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Assign Permissions" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon><AdjustIcon/></ListItemIcon>
                    <ListItemText primary="Permission" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Backups" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Activity Logs" />
          </ListItemButton> */}
        </List>
      </Drawer>
    </Box>
  );
}
