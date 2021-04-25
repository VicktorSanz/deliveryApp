
export const options = (authRequired) => {
    let options = {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }

    if (authRequired) {
        let token = localStorage.getItem('jwtToken')
        let authorizationHeaders = {
            "Authorization": `Bearer: ${token}`
        }
        options = { ...options, headers: { ...options.headers, ...authorizationHeaders } }
    }

    return options
}