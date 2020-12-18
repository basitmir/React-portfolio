import React, { useEffect } from 'react';
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
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageAvator from '../components/Avatar';
import Home from './Home';
import About from './About';
import Education from './Education';
import Contact from './Contact';
import Skills from './Skills';
import Work from './Work';
import { sideBar } from '../config/details';
import { colorNames } from '../config/colors';

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
		background: `linear-gradient(55deg, ${colorNames.SIDEBAR_GRADIENT1} 30%, ${colorNames.SIDEBAR_GRADIENT2}  55%)`,
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
		alignItems: 'center',
		justifyContent: 'center',
		background: `linear-gradient(55deg, ${colorNames.SIDEBAR_GRADIENT1} 30%, ${colorNames.SIDEBAR_GRADIENT2}  55%)`,
		color: colorNames.SIDEBAR_TEXT,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	fontChange: {
		fontWeight: 600,
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
	const [currentComponentName, setcurrentComponentName] = React.useState(
		'HOME'
	);
	const [CurrentComponent, setCurrentComponent] = React.useState(<Home />);

	useEffect(() => {
		switch (currentComponentName) {
			case 'ABOUT':
				return setCurrentComponent(<About />);
			case 'EDUCATION':
				return setCurrentComponent(<Education />);
			case 'SKILLS':
				return setCurrentComponent(<Skills />);
			case 'WORK':
				return setCurrentComponent(<Work />);
			case 'CONTACT':
				return setCurrentComponent(<Contact />);
			default:
				setCurrentComponent(<Home />);
		}
	}, [currentComponentName]);

	// swithc
	// useEffect(() => {
	// 	if (listRef) listRef.current[currentComponentName].focus();
	// }, [currentComponentName]);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const selectIcon = (index) => {
		switch (index) {
			case index:
				return sideBar.icons[index];
			default:
				return null;
		}
	};
	const drawer = (
		<div className={classes.sideDrawMobile}>
			<List>
				<ImageAvator />
				{sideBar.options.map((text, index) => (
					<ListItem
						// ref={(list) => (listRef.current[text] = list)}
						style={{ cursor: 'pointer' }}
						button={text === currentComponentName}
						key={text}
						autoFocus={text === currentComponentName}
						onClick={() => setcurrentComponentName(text)}
					>
						<ListItemIcon
							style={{ minWidth: 35, color: colorNames.SIDEBAR_TEXT }}
						>
							{selectIcon(index)}
						</ListItemIcon>
						<ListItemText
							primary={text}
							primaryTypographyProps={{
								style: { fontWeight: 'bold', textAlign: 'start' },
							}}
						/>
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

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
							<MenuIcon style={{ color: colorNames.SIDEBAR_TEXT }} />
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
			<main className={classes.content} style={{ padding: 0 }}>
				{/* <div className={classes.toolbar} /> */}
				<Container disableGutters>{CurrentComponent}</Container>
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
