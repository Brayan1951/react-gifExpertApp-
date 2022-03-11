export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=n5g5uNYnvoFnaHxhJoSAyARZeukTGkMg`;
  //   const apiKey = "n5g5uNYnvoFnaHxhJoSAyARZeukTGkMg";

  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gif = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gif;
};
