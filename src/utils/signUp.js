

export const sendDataToSignUp = (url, username, password, fullName, email) => {

    // Axios version:
    // axios.post(API_SIGN_UP_ADULT, {
    //   "usuario": {
    //     "user": this.state.username,
    //     "password": this.state.password,
    //     "nombre": this.state.username,
    //     "email": this.state.email,
    //     "archivo_id": 0
    //   }
    // });

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