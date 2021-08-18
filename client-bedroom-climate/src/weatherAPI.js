export const weatherGET = async (zip) => {
    const url = "https://aerisweather1.p.rapidapi.com/observations/" + zip;
    let response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d23b9abf43mshe94d954c4bf72f8p18a887jsn0a654919e3ea",
            "x-rapidapi-host": "aerisweather1.p.rapidapi.com"
        }
    })
    if (response.ok) {
        response = response.json();
        return response;
    }
    else console.log("GET ERROR");
        return "ERR";

}