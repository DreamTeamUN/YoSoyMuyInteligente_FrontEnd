import { API_TUTORS } from '../config/const';
import { AsyncStorage } from 'react-native';

const ID_TUTOR = 'id_tutor';

const storeUserData = async (id_tutor) => {
    try {
        AsyncStorage.setItem(ID_TUTOR, id_tutor.toString());
    } catch (error) {
        console.log("storeUserData | Something went wrong")
    }
}

export const CREATE_STUDENT = async (idUser, nombre, fechaNacimiento) => {
    
    let idTutor = await getID_TUTOR(idUser);
    const URL = API_TUTORS.concat('/' + idTutor).concat("/estudiantes");
    console.log("Feacha: " + fechaNacimiento);

    return fetch (URL, {
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

export const SAVE_ID_TUTOR = async (id_user) => {

    var i = 1;
    let tutores;

    do {
        try {
            const response = await fetch(API_TUTORS.concat("/" + i));
            const responseJson = await response.json();
            
            tutores = responseJson;
    
            for (var j = 0; j < tutores.length; j++) {
                
                var id = tutores[j].usuario_id;
                if (id_user == id) {    
                    await storeUserData(tutores[j].id);      
                    return responseJson;
                }
            }
            }
            catch (error) {
            console.error(error);
            return -1;
        }
        i++;
    } while (tutores.length != 0);
        
}

export const getID_TUTOR = async (id_user) => {
    await SAVE_ID_TUTOR(id_user);

    try {
        let id_tutor = await AsyncStorage.getItem(ID_TUTOR);
        return id_tutor;
    } catch (error) {
        console.log("getID_TUTOR | Something went wrong")
    }
}