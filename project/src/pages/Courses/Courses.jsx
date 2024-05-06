import { CourseCard } from "../../components/CourseCard/CourseCard";

export function Courses() {
    const courses = [
        {
            nomeCorso: "Corso 1",
            descrizioneBreve: "Descrizione breve 1",
            descrizioneCompleta: "Descrizione completa 1",
            durata: 12,
            idCategoria: 1,
        },
        {
            nomeCorso: "Corso 2",
            descrizioneBreve: "Descrizione breve 2",
            descrizioneCompleta: "Descrizione completa 2",
            durata: 10,
            idCategoria: 2,
        },
        {
            nomeCorso: "Corso 3",
            descrizioneBreve: "Descrizione breve 3",
            descrizioneCompleta: "Descrizione completa 3",
            durata: 11,
            idCategoria: 3,
        },
    ];

    return( 
        <div className="d-flex align-items-center flex-column mt-5">
            {courses.map((course) => (
                <CourseCard
                    Titolo={course.nomeCorso}
                    Descrizione={course.descrizioneBreve}
                    Durata={course.durata}
                />
            ))}
        </div>
    );
}
