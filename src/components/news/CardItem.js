import React from "react";
import { DateTime } from "luxon";
import {
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActionArea,
	makeStyles,
} from "@material-ui/core";
import vars from "../commons/variables";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	root: {
		"&:hover": {
			boxshadow: "0 25px 40px - 14px rgba(0, 0, 0, 0.25)",
			transform: "translateY(-5px)",
		},
	},
	area: {
		maxWidth: 345,
		minWidth: 345,
		maxHeight: 400,
	},
	content: {
		minHeight: 400,
	},
	media: {
		height: 200,
	},
	resource: {
		position: "absolute",
		top: 0,
		right: 0,
		background: vars.colors.cyan,
		color: "white",
		textTransform: "uppercase",
		padding: "4px 14px",
		borderRadius: "0 0 0 5px",
		fontSize: 14,
	},
	timeSource: {
		marginTop: 10,
		fontWeight: 400,
		fontSize: 18,
		color: "grey",
	},
	spacer: {
		margin: "0 4px",
	},
	a: {
		textDecoration: "none",
	},
}));

/**
 * Componente para representar una noticia (Imagen, título, hora y recurso)
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const CardItem = ({ item }) => {
	const classes = useStyles();
	const dateObj = DateTime.fromMillis(item.date * 1000);
	const cardDate = dateObj.toFormat("HH:mm");

	return (
		<a
			href={item.url}
			rel="noopener noreferrer"
			target="_blank"
			className={classes.a}
		>
			<Card className={classes.root}>
				<CardActionArea className={classes.area}>
					<div className={classes.resource}>{item.source_name}</div>
					<CardMedia
						component="img"
						className={classes.media}
						image={item.img_url}
						src={item.img_url}
					/>
					<CardContent className={classes.content}>
						<Typography color="textPrimary">{item.title}</Typography>
						<div className={classes.timeSource}>
							<span>{cardDate}</span>
							<span className={classes.spacer}>|</span>
							<span>{item.source_name}</span>
						</div>
					</CardContent>
				</CardActionArea>
			</Card>
		</a>
	);
};

CardItem.propTypes = {
	item: PropTypes.shape({
		bayes_category_id: PropTypes.number,
		category: PropTypes.string,
		content_views_count: PropTypes.any,
		date: PropTypes.any,
		img_url: PropTypes.string,
		news_id: PropTypes.number,
		reactions: PropTypes.array,
		reactions_count: PropTypes.any,
		source_id: PropTypes.number,
		source_name: PropTypes.string,
		title: PropTypes.string,
		url: PropTypes.string,
	}),
};

export default CardItem;
