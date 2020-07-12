import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
// import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import ImportantDevicesTwoToneIcon from '@material-ui/icons/ImportantDevicesTwoTone';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import PermContactCalendarTwoToneIcon from '@material-ui/icons/PermContactCalendarTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageAvator from '../components/Avatar'
import About from './About';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  drawer: {
   
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
  },
  appBar: {
    background: 'linear-gradient(55deg, #00695c 30%, #26a69a  55%)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      
    },
  },
  menuButton: {
      
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
      
    width: drawerWidth,
    alignItems:'center',
    justifyContent:'center',
    background: 'linear-gradient(55deg, #00695c 30%, #26a69a  55%)',
    color:'#b2dfdb',
  },
  content: {
      
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fontChange:{
      fontWeight:600
  },
  sideDrawMobile: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const selectIcon=(index)=>{
    switch(index){
        case 'HOME':return <HomeTwoToneIcon/>
        case 'ABOUT':return <InfoTwoToneIcon/>
        case 'EDUCATION':return <SchoolTwoToneIcon/>
        case 'SKILLS':return <ImportantDevicesTwoToneIcon/>
        case 'WORK': return <StarsRoundedIcon/>
        case 'CONTACT': return <PermContactCalendarTwoToneIcon/>
        default: return null
    }
}

  const drawer = (
    <div className={classes.sideDrawMobile}>
      <List >
          <ImageAvator/>
        {['HOME', 'ABOUT', 'EDUCATION','SKILLS', 'WORK', 'CONTACT'].map((text, index) => (
          <ListItem button key={text}  >
            <ListItemIcon style={{minWidth:35,color:'#b2dfdb'}}>{selectIcon(text)}</ListItemIcon>
            <ListItemText primary={text}  primaryTypographyProps={{ style: {fontWeight:'bold',textAlign:'start'} }}/>
          </ListItem>
        ))}
      </List>
    </div>
  );
 
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smUp implementation="css">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon style={{color:'#b2dfdb'}}/>
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      </Hidden>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
          
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} style={{padding:0}}>
        {/* <div className={classes.toolbar} /> */}
        <Container  disableGutters>
        <About/>
        </Container>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
