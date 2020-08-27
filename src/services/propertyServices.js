const URL = "localhost:3000";

async function getPropertyDetail(idProperty){
    const response = await fetch(`URL/${idProperty}`);
    const data = await response.json();
    return data;
}
