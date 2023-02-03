
import React, { useEffect, useState } from "react";
//import "./App.css";
import PageWrapper from "./PageWrapper";
import Paginacion from "./paginacion";
import Pelicula from "./pelicula";

function ListadoPeliculas() {
	const [paginaActual, setPaginaActual] = useState(1);
	const [peliculas, setPeliculas] = useState([]);
	const totalPorPagina = 5;
	useEffect(() => {
		buscarPeliculas();
	}, []);
	const buscarPeliculas = async () => {
		let url =
			" https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json";
		let respuesta = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Origin: "https://raw.githubusercontent.com/",
				// "Access-Control-Allow-Origin": "*",
			},
		});
		let json = await respuesta.json();
		setPeliculas(json);
	};

;
	const getTotalPg = () => {
		let cantidadTotalPeli = peliculas.length;
		return Math.ceil(cantidadTotalPeli / totalPorPagina);
	};

	let peliculaPorPagina = peliculas.slice(
		(paginaActual - 1) * totalPorPagina,
		paginaActual * totalPorPagina
	);

	return (
		<PageWrapper>
			{peliculaPorPagina.map((pelicula) => (
				<Pelicula
					titulo={pelicula.titulo}
					puntuacion={pelicula.puntuacion}
					director={pelicula.director}
					lanzamiento={pelicula.lanzamiento}
					actores={pelicula.actores}
					duracion={pelicula.duracion}
					imagen={pelicula.imagen}
				>
					{pelicula.descripcion}
				</Pelicula>
			))}

			<Paginacion
				pagina={paginaActual}
				total={getTotalPg()}
				onChange={(pagina) => {
					setPaginaActual(pagina);
				}}
			/>
		</PageWrapper>
	);
}
export default ListadoPeliculas;
