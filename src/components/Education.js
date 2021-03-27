import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { about } from '../config/details';
import Typography from '@material-ui/core/Typography';
import { colorNames } from '../config/colors';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import Slide from 'react-reveal/Slide';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '15px 5px',
		background: `linear-gradient(55deg, ${colorNames.SIDEBAR_GRADIENT1} 30%, ${colorNames.SIDEBAR_GRADIENT2}  55%)`,
		color: colorNames.SIDEBAR_TEXT,
	},
	secondaryTail: {
		backgroundColor: colorNames.SIDEBAR_TEXT,
		height: '50px',
	},
	timeLineDot: {
		backgroundColor: colorNames.WHITE,
	},
	root: {
		width: '100%',
		backgroundImage: `url(${about.backgroundImage})`,
		/* Add the blur effect */
		// filter: 'blur(8px)',
		// -webkit-filter: blur('8px'),
		backgroundSize: 'cover',
		padding: 24,
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.down('xs')]: {
			padding: 18,
			overflow: 'hidden',
			paddingTop: '110px',
		},
	},
	section: {
		height: '40vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	details: {
		textAlign: 'center',
		fontSize:'10px',
		fontWeight:'bold'
	},
	typography: {
		color: colorNames.BLACK,
		fontWeight: 'bold',
		fontSize: '12px',
	},
}));

export default function Education() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Slide left cascade>
				<Container className={classes.section} >
					<Timeline align="alternate">
						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot variant="outlined" />
								<TimelineConnector className={classes.secondaryTail} />
							</TimelineSeparator>
							<TimelineContent></TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent>
								<Typography
									variant="body2"
									color="textSecondary"
									className={classes.typography}
								>
									2009
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot className={classes.timeLineDot}>
									<SchoolIcon
										style={{
											fontSize: 30,
											color: colorNames.NAME_COLOR,
										}}
									/>
								</TimelineDot>
								<TimelineConnector className={classes.secondaryTail} />
							</TimelineSeparator>
							<TimelineContent>
								<Paper elevation={3} className={classes.paper}>
									<a
										href="http://basitmir.github.io/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: 'none',
											color: colorNames.SIDEBAR_TEXT,
										}}
									>
										<Typography
											variant="h6"
											component="h6"
											className={classes.details}
										>
											SRINAGR BRITISH SCHOOL
										</Typography>
									</a>
									{/* <Typography>Because you need strength</Typography> */}
								</Paper>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent>
								<Typography
									variant="body2"
									color="textSecondary"
									className={classes.typography}
								>
									2011
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot className={classes.timeLineDot}>
									<MenuBookOutlinedIcon
										style={{ fontSize: 30, color: colorNames.NAME_COLOR }}
									/>
								</TimelineDot>
								<TimelineConnector className={classes.secondaryTail} />
							</TimelineSeparator>
							<TimelineContent>
								<Paper elevation={3} className={classes.paper}>
									<a
										href="http://sp-school.in/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: 'none',
											color: colorNames.SIDEBAR_TEXT,
										}}
									>
										<Typography
											variant="h6"
											component="h1"
											className={classes.details}
										>
											{' '}
											SRI PRATAP HIGHER SECONDARY
										</Typography>{' '}
									</a>
									{/* <Typography>Because it&apos;s awesome!</Typography> */}
								</Paper>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent>
								<Typography
									variant="body2"
									color="textSecondary"
									className={classes.typography}
								>
									2015
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot className={classes.timeLineDot}>
									<ImportantDevicesIcon
										style={{ fontSize: 30, color: colorNames.NAME_COLOR }}
									/>
								</TimelineDot>
								<TimelineConnector className={classes.secondaryTail} />
							</TimelineSeparator>
							<TimelineContent>
								<Paper elevation={3} className={classes.paper}>
									<a
										href="http://www.casetcollege.in/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: 'none',
											color: colorNames.SIDEBAR_TEXT,
										}}
									>
										<Typography
											variant="h6"
											component="h1"
											className={classes.details}
										>
											CASET COLLEGE OF COMPUTER SCIENCE AND ENGINEERING
										</Typography>
										{/* <Typography>Because it&apos;s awesome!</Typography> */}
									</a>
								</Paper>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent>
								<Typography
									variant="body2"
									color="textSecondary"
									className={classes.typography}
								>
									2018
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot className={classes.timeLineDot}>
									<CastForEducationIcon
										style={{ fontSize: 30, color: colorNames.NAME_COLOR }}
									/>
								</TimelineDot>
								<TimelineConnector className={classes.secondaryTail} />
							</TimelineSeparator>
							<TimelineContent>
								<Paper elevation={3} className={classes.paper}>
									<a
										href="https://www.kashmiruniversity.net/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: 'none',
											color: colorNames.SIDEBAR_TEXT,
										}}
									>
										<Typography
											variant="h6"
											component="h1"
											className={classes.details}
										>
											UNIVERSITY OF KASHMIR
										</Typography>
										{/* <Typography>Because you need rest</Typography> */}
									</a>
								</Paper>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot className={classes.timeLineDot}>
									{/* <RepeatIcon /> */}
								</TimelineDot>
							</TimelineSeparator>
							<TimelineContent></TimelineContent>
						</TimelineItem>
					</Timeline>
				</Container>
			</Slide>
		</div>
	);
}
