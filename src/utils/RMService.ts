export async function fetchData(q?: string) {
  let apiUrl = `https://rickandmortyapi.com/api/character`;
  if (q && q.trim().length > 0) {
    apiUrl += `/?name=${q}`;
  }
  return fetch(apiUrl).then((data) => {
    if (!data.ok) {
      throw new Error('Morty failed, wrong name');
    }
    return data.json();
  });
}
