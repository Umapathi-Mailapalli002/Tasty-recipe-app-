// api id 
const API_ID = `8461ec6f`;
const API_KEY = `c9694eea9636fbe30de4a3763c032a96`;



export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=${limit}&`;
    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id){
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${API_ID}&app_key=${API_KEY}`
    
    const response = await fetch(url)
    
    const data = await response.json();
    
    return data[0];
    }