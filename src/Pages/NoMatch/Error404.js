import React from "react"
import { Link, useNavigate } from "react-router-dom"

import "./Error404.css"

function Error404() {
	const navigate = useNavigate()

	return (
		<div className="error_page">
			<div className="error_icon">
				<svg viewBox="0 0 512 512">
					<path
						d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5
            c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9
            c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4 451.5,400.7 437.5,386.6z"
					/>
				</svg>
			</div>
			<h1>Erreur 404 !</h1>
			<p>La page que vous recherchez est introuvable.</p>
			<div>
				<Link to="/" className="matter-button-contained btn_margin">
					Accueil
				</Link>

				<button
					className="matter-button-contained btn_margin"
					onClick={() => navigate(-1)}
				>
					Retour
				</button>
			</div>
		</div>
	)
}

export default Error404
