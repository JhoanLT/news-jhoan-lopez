import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import RedirectButton from "../commons/RedirectButton";
import vars from "../commons/variables";
import PropTypes from "prop-types";

//Obtener la fecha inicial para el primer listado de noticias
let current_datetime = new Date();
let formatted_date =
	current_datetime.getFullYear() +
	"-" +
	(current_datetime.getMonth() + 1) +
	"-" +
	current_datetime.getDate();

//Opciones de navegación
const menu = [
	{
		id: "home-item",
		name: "Home",
		category: "Hoy",
		fetch: `/latest/${formatted_date}`,
		redirect: "/",
		selected: false,
	},
	{
		id: "popular-item",
		name: "Popular",
		category: "Popular",
		fetch: "/popular",
		redirect: "/popular",
		selected: false,
	},
	{
		id: "politics-item",
		name: "Política",
		category: "Política",
		fetch: "/news/category/1",
		redirect: "/categoria/politica",
		selected: false,
	},
	{
		id: "international-item",
		name: "Internacionales",
		category: "Internacionales",
		fetch: "/news/category/2",
		redirect: "/categoria/internacionales",
		selected: false,
	},
	{
		id: "tech-item",
		name: "Tecnología",
		category: "Tecnología",
		fetch: "/news/category/3",
		redirect: "/categoria/tecnologia",
		selected: false,
	},
	{
		id: "shows-item",
		name: "Espectáculos",
		category: "Espectáculos",
		fetch: "/news/category/4",
		redirect: "/categoria/espectaculos",
		selected: false,
	},
	{
		id: "sports-item",
		name: "Deportes",
		category: "Deportes",
		fetch: "/news/category/5",
		redirect: "/categoria/deportes",
	},
];

const useStyles = makeStyles((theme) => ({
	navbar: {
		flexGrow: 1,
		borderBottom: "solid",
		borderBottomColor: vars.colors.greyLight,
		borderBottomWidth: "thin",
	},
	contentButton: {
		display: "flex",
		justifyContent: "center",
	},
}));

/**
 * Componente de navegación entre categorías
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const NavBar = ({ handleSelected }) => {
	const classes = useStyles();

	const selectedItem = (select) => {
		menu.map((item) => {
			if (item.id === select.id) {
				item.selected = true;
			} else {
				item.selected = false;
			}
			return item;
		});
		handleSelected(select);
	};

	return (
		<Grid item xs={12} className={classes.navbar}>
			<Grid container justify="center">
				{menu.map((i) => (
					<Grid
						item
						key={i.id}
						xs={12}
						md={1}
						className={classes.contentButton}
					>
						<RedirectButton
							fontSizeIcon="large"
							item={i}
							handleSelected={selectedItem}
							selected={i.selected}
						/>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

NavBar.propTypes = {
	handleSelected: PropTypes.func,
};

export default NavBar;
