import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import {avatar} from '../config/details';
import {colorNames} from '../config/colors'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},

	},
	large: {
		width: theme.spacing(19),
		height: theme.spacing(19),
		border: `8px solid ${colorNames.AVATAR_BORDER}`,

	},
}));

const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: colorNames.AVATAR_DOT[0],
		color: colorNames.AVATAR_DOT[1],
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 1.2s infinite ease-in-out',
			border: `1px solid ${colorNames.AVATAR_DOT[1]}`,
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))(Badge);

export default function ImageAvatars() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<StyledBadge
				overlap="circle"
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				variant="dot"
			>
				<Avatar src={avatar.profileImage} className={classes.large} />
			</StyledBadge>
		</div>
	);
}
