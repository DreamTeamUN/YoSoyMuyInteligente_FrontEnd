

export const sendDataToSignUp = (url, username, password, fullName, email) => {


    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "usuario": {
                "user": username,
                "password": password,
                "nombre": fullName,
                "email": email,
                "archivo_id": 0
            }
        })
    })
        .then((res) => {
            return res;
        })
}