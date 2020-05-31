import React from "react";
import HeaderApp from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import ContentNews from "../components/news/ContentNews";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
	getData,
	setCategoryTitle,
	setSearch,
} from "../store/actions/news.actions";
import PropTypes from "prop-types";

/**
 * Container de la aplicación
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 */
class AppContainer extends React.Component {
	constructor(props) {
		super();
		this.state = {
			initialRoute: "/latest/2020-05-25",
			search: false,
		};
		this.handleSelected = this.handleSelected.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleChangeSearch = this.handleChangeSearch.bind(this);
	}

	componentDidMount() {
		this.getNews();
	}

	//Obtener noticias
	getNews(endpoint = null) {
		this.props.getData(endpoint || this.state.initialRoute);
	}

	//Se ejecuta al seleccionar una categoría
	handleSelected(item) {
		const { history, setCategoryTitle, setSearch } = this.props;
		setCategoryTitle(item.category);
		setSearch("");
		history.push(item.redirect);
		this.getNews(item.fetch);
	}

	//Control de cambios del buscador de noticias
	handleChangeSearch({ target }) {
		this.props.setSearch(target.value);
	}

	//Se ejecuta al presionar la tecla enter para realizar la búsqueda de una noticia
	handleSearch() {
		const { history, setCategoryTitle, search } = this.props;
		history.push(`/search/${search}`);
		this.getNews(`/search/${search}`);
		setCategoryTitle(`Resultados para: ${search}`);
	}

	render() {
		const { news, categoryTitle, loading, search } = this.props;
		const sliceNews = news.slice(0, 12);

		return (
			<div>
				<header>
					<HeaderApp
						loading={loading}
						handleSearch={this.handleSearch}
						searchValue={search}
						handleChangeSearch={this.handleChangeSearch}
					/>
				</header>
				<section>
					<NavBar handleSelected={this.handleSelected} />
				</section>
				<section>
					<ContentNews
						data={sliceNews}
						categoryTitle={categoryTitle}
						loading={loading}
					/>
				</section>
			</div>
		);
	}
}

const mapStateToProps = ({
	news: { data, categoryTitle, loading, search },
}) => ({
	news: data,
	categoryTitle,
	loading,
	search,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			getData,
			setCategoryTitle,
			setSearch,
		},
		dispatch
	);

AppContainer.propTypes = {
	news: PropTypes.array,
	categoryTitle: PropTypes.string,
	loading: PropTypes.bool,
	search: PropTypes.string,
	getData: PropTypes.func,
	setCategoryTitle: PropTypes.func,
	setSearch: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
