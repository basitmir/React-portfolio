import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import ImportantDevicesTwoToneIcon from '@material-ui/icons/ImportantDevicesTwoTone';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import PermContactCalendarTwoToneIcon from '@material-ui/icons/PermContactCalendarTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import React from 'react';
import profile from '../assets/self.jpg';
import backgroundImage from '../assets/bg1.png'

export const about={
    firstName:'BASIT',
    lastName:'MIR',
    profile:['Software Engineer','Application Developer','Programmer'],
    qoute:'If you can imagine it, I can make it...',
    backgroundImage: backgroundImage
}

export const avatar={
    profileImage: profile
}

export const sideBar={
    //keep options with their icons in same order
    options:['HOME', 'ABOUT', 'EDUCATION', 'SKILLS', 'WORK', 'CONTACT'],
    icons:[<HomeTwoToneIcon />,<InfoTwoToneIcon />,<SchoolTwoToneIcon />,
           <ImportantDevicesTwoToneIcon />, <StarsRoundedIcon />,<PermContactCalendarTwoToneIcon />
          ]
}

export const socialDetails={
    linkedin:"https://in.linkedin.com/in/basitmir",
    github:"https://github.com/basitmir",
    instagram:"https://www.instagram.com/basit_mir/",
    facebook:"https://www.facebook.com/basit.mir.9",
    twitter:"https://twitter.com/iambasitmir",
    email:"iammirbasit@gmail.com",
}
