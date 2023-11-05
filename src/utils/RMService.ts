class RickAndMortyAPI {
  baseUrl = `https://rickandmortyapi.com/api/character`;

  static async fetchData(query: string) {
    return fetch(query).then((data) => {
      if (!data.ok) {
        throw new Error('Morty failed, wrong name');
      }
      return data.json();
    });
  }

  async fetchPage(q?: string, page = '1') {
    let apiUrl = this.baseUrl;
    if (q && q.trim().length > 0) {
      apiUrl += `/?name=${q}&page=${page}`;
    }
    return RickAndMortyAPI.fetchData(apiUrl);
  }

  async fetchCharacter(charId: string) {
    const apiUrl = `${this.baseUrl}/${charId}`;
    return RickAndMortyAPI.fetchData(apiUrl);
  }
}

export const RMAPI = new RickAndMortyAPI();
