import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, IconButton } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    // textAlign:'center',
    '& > *': {
      margin: theme.spacing(1),
    },

    [theme.breakpoints.down('xs')]: {
      '& > *': {
        margin: theme.spacing(0.5),
      },
      paddingLeft:'10px'
     },

    paddingLeft:'15px'
     
  },
  button: {
  //  border:'10px solid blue',
   borderRadius:'50%',
   height:'42px',
   width:'42px',
   background: 'linear-gradient(55deg, #00695c 30%, #26a69a  55%)',
  },
  icons:{
    color:'#e0f2f1'
  }
}));

export default function SocialButtons() {
  const classes = useStyles();

  return (
    // <Divider variant="inset"/>
    <div className={classes.root} mt={10}>
   
     
      <IconButton aria-label="delete" className={classes.button}>
        <LinkedInIcon className={classes.icons}/>
     </IconButton>
     
      <IconButton aria-label="delete" className={classes.button}>
        <GitHubIcon className={classes.icons}/>
     </IconButton>
     <IconButton aria-label="delete" className={classes.button}>
        <InstagramIcon className={classes.icons}/>
     </IconButton>
     <IconButton aria-label="delete" className={classes.button}>
        <FacebookIcon className={classes.icons}/>
     </IconButton>
     <IconButton aria-label="delete" className={classes.button}>
        <TwitterIcon className={classes.icons}/>
     </IconButton>
      <IconButton aria-label="delete" className={classes.button}>
        <EmailIcon className={classes.icons}/>
     </IconButton>
     {/* <Divider variant="inset"/> */}
    
  
    
    </div>

  );
}
