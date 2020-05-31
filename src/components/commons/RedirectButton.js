import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: 12,
		padding: 12,
		width: "auto",
		fontWeight: "bold",
	},
	selected: {
		margin: 12,
		padding: 12,
		width: "auto",
		fontWeight: "bold",
		color: "#00bcd4",
	},
}));

/**
 * Componente para las opciones de la barra de navegación entre categorías (Button)
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const RedirectButton = ({
	size = "small",
	variant = "text",
	item,
	handleSelected,
	selected,
}) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Button
				size={size}
				className={selected ? classes.selected : classes.button}
				variant={variant}
				onClick={() => handleSelected(item)}
			>
				{item.name}
			</Button>
		</React.Fragment>
	);
};

RedirectButton.propTypes = {
	size: PropTypes.string,
	variant: PropTypes.string,
	item: PropTypes.object,
	handleSelected: PropTypes.func,
	selected: PropTypes.bool,
};

export default RedirectButton;
