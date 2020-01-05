export function getJson(response){
    const statusResponse = response.status;
    if (statusResponse >= 200 && statusResponse < 300)
        return response.json();
    else{
        const error = new Error("MARCHE PAS");
        error.code = statusResponse;
        throw error;
    }
}