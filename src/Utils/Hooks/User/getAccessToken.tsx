

export const getAccessToken = async () => {
    let response;
    try {
        response = await fetch('http://localhost:3000/api/auth/refreshtoken', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        console.log(error)
    }

};