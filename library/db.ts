const movieUrl = "https://api.themoviedb.org/3";

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MOVIE_DB_URL}/${url}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION}`,
        },
        cache: "no-store",
      }
    );
    // console.log("fetchdata response", response)
    // if (!response.ok) {
    //     throw new Error('Network response was not ok');
    // }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (url: string, data: {}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MOVIE_DB_URL}${url}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION}`,
        },
        body: JSON.stringify(data),
      }
    );

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getFetchApi = async (url: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MOVIE_DB_URL}${url}?api_key=26159e133fce51f3b8355cc25e0c2ff4`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    // console.log("fetchdata response", response)
    // if (!response.ok) {
    //     throw new Error('Network response was not ok');
    // }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postFetchApi = async (url: string, data: {}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MOVIE_DB_URL}${url}?api_key=26159e133fce51f3b8355cc25e0c2ff4`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          // api_key: `26159e133fce51f3b8355cc25e0c2ff4`,
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          // "Access-Control-Allow-Headers": "Content-Type, Authorization"
        },
        body: JSON.stringify(data),
      }
    );

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const localFetch = async (
  url: string,
  method: string = "GET",
  body?: {}
) => {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${url}`,
      options
    );
    // console.log( response)
    // if (!response.ok) {
    //     throw new Error(`Failed to fetch data from ${url}. Status: ${response.status}`);
    // }

    return Response.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const fetchResults = async (url: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MOVIE_DB_URL}${url}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION}`,
        },
      }
    );

    const formatResponse = await response.json();
    const results = formatResponse.results;
    return results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
