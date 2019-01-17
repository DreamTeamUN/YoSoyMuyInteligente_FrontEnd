import { API_CREATE_DOCENTE_PROGRAMA, API_LIST_DOCENTES, API_CREATE_AULA } from '../config/const';
import { AsyncStorage } from 'react-native';

const ID_DOCENTE = 'id_docente';
const ID_DOCENTE_PROGRAMA = 'id_docente_programa'

const storeUserData = async (id_Docente) => {
    try {
        AsyncStorage.setItem(ID_DOCENTE, id_Docente.toString());
    } catch (error) {
        console.log("storeUserData | Something went wrong")
    }
}

export const getID_Docente = async (id_user) => {
    await SAVE_ID_DOCENTE(id_user);

    try {
        let idDocente = await AsyncStorage.getItem(ID_DOCENTE);
        return idDocente;
    } catch (error) {
        console.error("get ID_Docente | Something went wrong" + error)
    }
}

export const storeIdDocentePrograma = async (id_docente_programa) => {
    try {
        console.log(id_docente_programa);
        AsyncStorage.setItem(ID_DOCENTE_PROGRAMA, id_docente_programa.toString());
    } catch (error) {
        console.log("storeIdDocentePrograma | Something went wrong: ")
    }
}

export const getID_Docente_Programa = async () => {

    try {
        let idDocentePrograma = await AsyncStorage.getItem(ID_DOCENTE_PROGRAMA);
        return idDocentePrograma;
    } catch (error) {
        console.error("get ID_Docente_programa | Something went wrong: " + error)
    }
}

export const CREATE_DOCENTE_PROGRAMA = async (idUser, idPrograma) => {

    let idDocente = await getID_Docente(idUser);
    const URL = API_CREATE_DOCENTE_PROGRAMA.concat("/" + idPrograma).concat("/docentes/" + idDocente).concat("/docente_programas");
  
    return fetch (URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
    });
}

export const CREATE_AULA = async (nombreAula, descripcion) => {

    let idDocentePrograma = await getID_Docente_Programa();

    console.log("Nombre: " + nombreAula + " Decripcion: " + descripcion);;

    const URL = API_CREATE_AULA.concat('/' + idDocentePrograma).concat('/aulas');
    console.log(URL);
    return fetch (URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "aula": {
            "nombre": nombreAula,
            "descripcion": descripcion
          }
        })
    });
}

export const SAVE_ID_DOCENTE = async (idUser) => {
    
    try {
        var i = 1;
        let docentes;
        do {
            let URL = API_LIST_DOCENTES.concat("/"+i)
            const response = await fetch(URL);
            const responseJson = await response.json();
            
            docentes = responseJson;

            for (var j = 0; j < docentes.length; j++) {
                var id = docentes[j].usuario_id;
                if (idUser == id) {
                    
                    await storeUserData(docentes[j].id);
                    return responseJson;
                }
            }
            i++;
        } while (docentes.length != 0);
        
    }
    catch (error) {
    console.error(error);
    return -1;
    }
}

