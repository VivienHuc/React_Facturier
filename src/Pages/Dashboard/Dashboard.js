import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate, Link } from "react-router-dom"
import { auth, db, logout } from "../../Config/Firebase"
import { query, collection, getDocs, where } from "firebase/firestore"

import "./Dashboard.css"

function Dashboard() {
	const [user, loading, error] = useAuthState(auth)
	const [name, setName] = useState("")
	const navigate = useNavigate()
	const fetchUserName = async () => {
		try {
			const doc = await getDocs(
				query(collection(db, "users"), where("uid", "==", user?.uid))
			)
			const data = doc.docs[0].data()
			setName(data.name)
		} catch (err) {
			console.error(err)
			alert("An error occured while fetching user data")
		}
	}

	useEffect(() => {
		if (loading) return
		if (!user) return navigate("/login")
		fetchUserName()
	}, [user, loading])
	return (
		<div className="dashboard_page">
			<div className="dashboard_container">
				Connecté en tant que :<div>{name}</div>
				<div>{user?.email}</div>
				<button className="btn btn_bleu" onClick={logout}>
					Déconnexion
				</button>
				<div className="dashboard_customers_container">
					<Link className="btn btn_bleu" to={"/customers"}>
						Clients
					</Link>
					<Link className="btn btn_bleu" to={"/customers/create"}>
						Ajouter un Client
					</Link>
				</div>
				<div className="dashboard_services_container">
					<Link className="btn btn_bleu" to={"/services"}>
						Prestations
					</Link>
					<Link className="btn btn_bleu" to={"/services/create"}>
						Ajouter une Prestation
					</Link>
				</div>
				<div className="dashboard_invoices_container">
					<Link className="btn btn_bleu" to={"/invoices"}>
						Factures
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Dashboard
