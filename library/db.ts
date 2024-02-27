const movieUrl = "https://api.themoviedb.org/3"

export const fetchData = async (url: string) => {
    console.log("URL", url)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_MOVIE_DB_URL}/${url}`, {
            method: "GET",
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to be caught by the caller
    }
}

export const fetchResults = async (url:string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_MOVIE_DB_URL}${url}`, {
        method: "GET",
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION}`
        }
    })

    const formatResponse = await response.json()
    const results = formatResponse.results
    return results

    return formatResponse.results
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}