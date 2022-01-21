
//para eliminar los espacios en la query tambien se puede usar .replace con expresion regular query.replace(/\s+/g, '+')
export const getGifs = async (category) => {
    const apiKey = 'qKbTiiVJ7JNUr3ptSRRl8ocadgJEQtoS';
    const query = category;
    const limit = '8';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(query)}&limit=${limit}&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}