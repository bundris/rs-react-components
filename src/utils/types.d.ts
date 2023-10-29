export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string;
  url: string;
  created: string;
}

export interface IResults {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ICharacter[];
}

export interface IAppState {
  cards: ICharacter[];
  loading: boolean;
  error: boolean;
  errorMsg: string;
}

export interface SearchProps {
  updateData: () => void;
}

export interface SearchState {
  value: string;
}
