import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import CardItem from "./CardItem";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	root: {
		justifyContent: "center",
		marginTop: 36,
	},
	contentTitle: {
		padding: theme.spacing(2),
		marginLeft: 8,
	},
	linear: {
		width: 140,
		height: 3,
		display: "block",
		marginTop: 12,
		marginRight: 12,
		marginBottom: 12,
		background:
			"linear-gradient(to right, #00bcd4 0%, rgba(255, 255, 255, 0.01) 100%)",
	},
	contentBox: {
		justifyContent: "center",
		display: "flex",
		flexWrap: "wrap",
	},
	contentCard: {
		margin: 16,
	},
}));

/**
 * Contenedor de la sección de noticias
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const ContentNews = ({ data, categoryTitle, loading }) => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item xs={12} md={9}>
				<div className={classes.contentTitle}>
					<div>
						<Typography variant="h3">{categoryTitle}</Typography>
					</div>
					<div className={classes.linear}></div>
				</div>
				<div className={classes.contentBox}>
					{data.length > 0
						? data.map((item) => (
								<Box className={classes.contentCard} key={item.news_id}>
									<CardItem item={item} />
								</Box>
						  ))
						: data.length === 0 &&
						  !loading && (
								<Typography>
									No se encontraron resultados con la busqueda especificada!
								</Typography>
						  )}
				</div>
			</Grid>
		</Grid>
	);
};

ContentNews.propTypes = {
	data: PropTypes.array,
	categoryTitle: PropTypes.string,
	loading: PropTypes.bool,
};

export default ContentNews;
