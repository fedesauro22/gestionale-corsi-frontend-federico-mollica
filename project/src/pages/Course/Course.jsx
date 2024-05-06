import { useParams } from "react-router-dom";
export function Course() {
    //Verranno sostituiti dalla fetch
    const courses = [
        {
            id: 1,
            nomeCorso: "Corso 1",
            descrizioneBreve: "Descrizione breve 1",
            descrizioneCompleta: "Descrizione completa 1",
            durata: 12,
            idCategoria: 1,
        },
        {
            id: 2,
            nomeCorso: "Corso 2",
            descrizioneBreve: "Descrizione breve 2",
            descrizioneCompleta: "Descrizione completa 2",
            durata: 10,
            idCategoria: 2,
        },
        {
            id: 3,
            nomeCorso: "Corso 3",
            descrizioneBreve: "Descrizione breve 3",
            descrizioneCompleta: "Descrizione completa 3",
            durata: 11,
            idCategoria: 3,
        },
    ];
    const { id } = useParams();
    console.log(id);
    const course = courses.find((course) => course.id == id); 

    if (!course) {
        return <div>Corso non trovato</div>;
    }

    return (
        <div className="container-fluid mt-3">
            <h1>{course.nomeCorso}</h1>
            <h3>{course.descrizioneBreve}</h3>
            <p>{course.descrizioneCompleta}</p>
            <p>Durata: {course.durata} ore</p>
            <p>Categoria: {course.idCategoria}</p>
        </div>
    );
}
