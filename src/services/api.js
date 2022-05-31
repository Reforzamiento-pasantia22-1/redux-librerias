const token ='563492ad6f9170000100000145bb78e6e8b64279a7233e7331240309';
const api = "https://api.pexels.com/v1/search?query=nature&per_page=10";

export const getImages = async () => {
    const response = await fetch(api, {
        method: "GET",
        headers: {
            Authorization: `${token}`
        }
    });
    const data = await response.json();
    return data;
}