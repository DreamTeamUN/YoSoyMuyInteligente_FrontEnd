import { API_TUTORS } from '../config/const';

export const CREATE_STUDENT = async (idTutor, nombre, fechaNacimiento) => {

    return fetch (API_TUTORS.concat("/").concat(idTutor).concat("/estudiantes"), {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "nombre": nombre,
            "fecha_nacimiento": fechaNacimiento,
        })
    });
}