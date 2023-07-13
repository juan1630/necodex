
export  const useFetch = async ( url: string ) => {
   const resp = await fetch( `https://api.openalex.org/authors?search=${url}` );
       const data = await resp.json();
       return data.results;  
}