


  export const getGif = async (category) => {


    const url =`https://api.giphy.com/v1/gifs/search?api_key=gi9WcUg1k4eDKaGlquZ8REqC8R8OHq4e&q=${encodeURI (category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();


    const gifs = data.map(img => {

        

      return{

        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url


    }

    
    })


    return gifs;

    }


