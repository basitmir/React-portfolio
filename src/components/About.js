import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SocialButtons from './SocialButtons';
import Typewriter from 'typewriter-effect';
import { Container } from '@material-ui/core';
import {about} from '../config/details';
import {colorNames} from '../config/colors'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundImage: `url(${about.backgroundImage})`,
		backgroundSize: 'cover',
		padding: 24,
		height: '100vh',
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		[theme.breakpoints.down('xs')]: {
			padding: 18
		},
	},
	mainHead: {
		fontWeight: 600,
		marginBottom: 0,
		color: 'white',
		[theme.breakpoints.down('xs')]: {
			fontSize: '3.8rem'
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: '4.2rem'
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: '5.6rem'
		}
	},
	subHead: {
		color: 'white',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.6rem'
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: '2.125rem'
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: '2.125rem'
		}
	},
	lowerHead: {
		color: colorNames.SOCIAL_ICONS_INACTIVE,
		fontWeight: 'bold'
	},
	section: {
		height: '40vh',
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	}
}));

export default function About() {
	const classes = useStyles();

	return (

		<div className={classes.root}>
			<Container className={classes.section}>
				<Typography variant="h1" component="h2" gutterBottom className={classes.mainHead}>
					<span style={{ color: colorNames.NAME_COLOR }}> {about.firstName} </span> {about.lastName}
      </Typography>

				<Typography variant="h4" gutterBottom className={classes.subHead}>

					<Typewriter

						options={{
							autoStart: true,
							loop: true,
						}}
						onInit={(typewriter) => {
							typewriter.typeString(`<span style="color:${colorNames.NAME_COLOR}"}}> I'm </span>`)
							typewriter.typeString(about.profile[0])
								.deleteChars(17)
							typewriter.typeString(about.profile[1])
								.deleteChars(21)
							typewriter.typeString(about.profile[2])
								.deleteChars(10)
								.start()

						}}
					/>

				</Typography>

				<Typography variant="body1" gutterBottom className={classes.lowerHead} mt={5}>
					{about.qoute}
      </Typography>
			</Container>
			<div>
				<SocialButtons />
			</div>

		</div>

	);
}
