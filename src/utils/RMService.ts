class RickAndMortyAPI {
  baseUrl = `https://rickandmortyapi.com/api/character`;

  defaultPageSize = 20;

  pageSize = 20;

  maxPage = Math.floor(826 / 20);

  static async fetchData(query: string) {
    return fetch(query).then((data) => {
      if (!data.ok) {
        throw new Error('Morty failed, wrong name');
      }
      return data.json();
    });
  }

  setPageSize(newValue: number) {
    this.pageSize = newValue;
  }

  calcPageAndPos(page: string) {
    const lastEl = (Number(page) - 1) * this.pageSize;
    const realPage = Math.floor(lastEl / this.defaultPageSize) + 1;
    const realPos = lastEl % this.defaultPageSize;
    return [realPage, realPos];
  }

  async fetchPage(q?: string, page = '1') {
    let apiUrl = this.baseUrl;
    const query = q && q.trim().length > 0 ? q : undefined;
    const [realPage, realPos] = this.calcPageAndPos(page);

    apiUrl += `/?${
      query ? `name=${query}&page=${realPage}` : `page=${realPage}`
    }`;
    const data = await RickAndMortyAPI.fetchData(apiUrl).then(
      (res) => res.results
    );
    return data.slice(realPos);
  }

  async fetchCharacter(charId: string) {
    const apiUrl = `${this.baseUrl}/${charId}`;
    return RickAndMortyAPI.fetchData(apiUrl);
  }
}

export const RMAPI = new RickAndMortyAPI();
