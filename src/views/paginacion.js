import { useState } from "react";

export default function Paginacion(props) {
	const getPagina = () => {
		const resultado = [];
		for (var i = 0; i < props.total; i++) {
			let pagina = i + 1;
			resultado.push(
				<a
					onClick={() => props.onChange(pagina)}
					className={props.pagina === pagina ? 'active' : " "}
				>
					{pagina}
				</a>
			);
		}
		return resultado;
	};
	return (
		/* <>   </>  esta es una forma  de completar varios div.. poniendo tags vacios*/
		<div className="topbar-filter">
			<div className="pagination2">
				<span>
					Pagina {props.pagina} de {props.total}:
				</span>

				{getPagina()}
			</div>
		</div>
	);
}
