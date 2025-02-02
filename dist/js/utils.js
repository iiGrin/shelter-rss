const getResource = async (url) => {
    try {
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${request.status}`);
        }
        const response = await request.json();
        return response;
    } catch (error) {
        console.error('Error: ', error);
        throw new Error(error);
    }
};

export { getResource };