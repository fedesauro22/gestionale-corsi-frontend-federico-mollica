export function CourseCard({ Titolo, Descrizione, Durata }) {
    return (
        <div className="card mt-5" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{Titolo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{Descrizione}</h6>
                <p className="card-text">Durata: {Durata} ore</p>
            </div>
        </div>
    );
}