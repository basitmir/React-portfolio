import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

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
    border: '8px solid #4db6ac',
    
  },
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#212121',
      color: '#4db6ac',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid #9e9e9e',
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
      <Avatar  src="/assets/self.jpg" className={classes.large} />
      </StyledBadge>
    </div>
  );
}
