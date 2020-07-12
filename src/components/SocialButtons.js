import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import '../App.css';

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
   borderRadius:'50%',
   height:'42px',
   width:'42px',
   background: 'linear-gradient(55deg, #00695c 30%, #26a69a  55%)',
  },
  hoverLinkedin:{
    '&:hover': {
      background: 'linear-gradient(55deg, #0079b6 30%, #299cdb  55%)',
  }
  },
  hoverGithub:{
    '&:hover': {
      background: 'linear-gradient(55deg, #211F1F 30%, #757575  55%)',
  }
  },
  hoverInstagram:{
    '&:hover': {
      background: 'linear-gradient(55deg, #FD1D1D 30%, #C13584  55%)',
  }
  },
  hoverTwitter:{
    '&:hover': {
      background: 'linear-gradient(55deg, #00ACEE 30%, #36D8FF  55%)',
  }
  },
  hoverFacebook:{
    '&:hover': {
      background: 'linear-gradient(55deg, #274986 30%, #4e69aa  55%)',
  }
  },
  hoverEmail:{
    '&:hover': {
      background: 'linear-gradient(55deg, #009688 30%, #80cbc4  55%)',
  }
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
   
     
      <IconButton aria-label="delete" className={[classes.button,classes.hoverLinkedin]}
       href="https://in.linkedin.com/in/basitmir" target="_blank">
        <LinkedInIcon className={classes.icons}/>
     </IconButton>
     
      <IconButton aria-label="delete" className={[classes.button,classes.hoverGithub]}
       href="https://github.com/basitmir" target="_blank">
        <GitHubIcon className={classes.icons}/>
     </IconButton>
     <IconButton aria-label="delete" className={[classes.button,classes.hoverInstagram]}
     href="https://www.instagram.com/basit_mir/" target="_blank">
        <InstagramIcon className={classes.icons}/>
     </IconButton>
     <IconButton aria-label="delete" className={[classes.button,classes.hoverFacebook]}
      href="https://www.facebook.com/basit.mir.9" target="_blank">
        <FacebookIcon className={classes.icons}/>
     </IconButton>
     <IconButton aria-label="delete" className={[classes.button,classes.hoverTwitter]}
      href="https://twitter.com/iambasitmir" target="_blank">
        <TwitterIcon className={classes.icons}/>
     </IconButton>
      <IconButton aria-label="delete" className={[classes.button,classes.hoverEmail]}
       href="mailto:iammirbasit@gmail.com" target="_blank">
        <EmailIcon className={classes.icons}/>
     </IconButton>
     {/* <Divider variant="inset"/> */}
    
  
    
    </div>

  );
}
