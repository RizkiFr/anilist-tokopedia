import { Anime } from '../models/anime';
import * as actions from './actions';

export const initialState: any = {
  animeList: [],
  pageInfo: {
    currentPage: 1
  },
  animeDetail: {},
  collections: [],
  collectionNames: []
};

export default function reducer(state = initialState, { type, payload }: { type: string, payload: any }) {
  switch (type) {
    case actions.SAVE_ANIME_LIST:
      return {
        ...state,
        animeList: payload.data
      };
    case actions.ADD_TO_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, payload.data]
      };
    case actions.UPDATE_TO_COLLECTION:
      return {
        ...state,
        collections: payload.data
      };
    case actions.REMOVE_FROM_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter((v: Anime) => v.id !== payload.id)
      };
    case actions.ADD_COLLECTION:
      return {
        ...state,
        collectionNames: [...state.collectionNames, payload.name]
      };
    case actions.REMOVE_COLLECTION:
      return {
        ...state,
        collectionNames: state.collectionNames.filter((v: string) => v !== payload.name)
      };
    case actions.SAVE_PAGE_INFO:
      return {
        ...state,
        pageInfo: payload.data
      };
    default:
      return state;
  }
}
