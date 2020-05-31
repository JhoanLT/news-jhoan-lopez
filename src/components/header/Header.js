import React from "react";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Typography, makeStyles, Grid, TextField } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import vars from "../commons/variables";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	header: {
		flexGrow: 1,
		paddingBottom: 12,
		borderBottom: "solid",
		borderBottomColor: "#eeeeee",
		borderBottomWidth: "thin",
	},
	newsIcon: {
		fontSize: 75,
		color: vars.colors.cyan,
	},
	searchIcon: {
		fontSize: 40,
	},
	item: {
		textAlign: "center",
		alignSelf: "center",
	},
	title: {
		fontSize: 30,
		color: vars.colors.cyan,
	},
	contentLoader: {
		minHeight: 4,
	},
	colorPrimary: {
		backgroundColor: vars.colors.teal,
	},
	barColorPrimary: {
		backgroundColor: vars.colors.cyan,
	},
	focused: {
		"&:after": {
			borderBottom: `2px solid ${vars.colors.cyan}`,
		},
	},
}));

/**
 * Header de la app, contiene tambien el buscador de noticias e indicador de carga
 * @author Jhoan Lopez <jhoanlt19@gmai.com>
 * @param {*} param0
 */
const Header = ({ loading, handleChangeSearch, handleSearch, searchValue }) => {
	const classes = useStyles();

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<Grid item xs={12} className={classes.header}>
			<div className={classes.contentLoader}>
				{loading && (
					<LinearProgress
						classes={{
							colorPrimary: classes.colorPrimary,
							barColorPrimary: classes.barColorPrimary,
						}}
					/>
				)}
			</div>
			<Grid container justify="center" style={{ marginTop: 12 }}>
				<Grid item xs={12} md={4} className={classes.item}>
					<Typography className={classes.title}>JL</Typography>
				</Grid>
				<Grid item xs={12} md={4} className={classes.item}>
					<LocalLibraryIcon className={classes.newsIcon} />
				</Grid>
				<Grid item xs={12} md={4} className={classes.item}>
					<TextField
						className={classes.textField}
						id="input-with-icon-textfield"
						placeholder="Buscar noticias"
						value={searchValue}
						onChange={handleChangeSearch}
						onKeyPress={handleKeyPress}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
							classes: {
								focused: classes.focused,
							},
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

Header.propTypes = {
	loading: PropTypes.bool,
	handleChangeSearch: PropTypes.func,
	handleSearch: PropTypes.func,
	searchValue: PropTypes.string,
};

export default Header;
