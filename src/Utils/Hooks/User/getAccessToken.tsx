

export const getAccessToken = async () => {
    let response;
    try {
        response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/refreshtoken`, {
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