import { NavLink } from "react-router-dom";

export function CourseCard({ Titolo, Descrizione, Durata, Id }) {
    return (
        <div className="card mt-3 mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{Titolo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{Descrizione}</h6>
                <p className="card-text">Durata: {Durata} ore</p>
                <NavLink className="btn btn-primary" to ={`course/${Id}`}>
                    Vai al corso
                </NavLink>
            </div>
        </div>
    );
}