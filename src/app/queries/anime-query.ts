import { gql } from "@apollo/client";

export const ANIME_LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME) {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        duration
      }
    }
  }
`;
export const ANIME_DETAIL = gql`
  query GetAnimeList($id: Int) {
    Media(id: $id) {
      id
      title {
        english
        native
      }
      coverImage {
        large
      }
      duration
      seasonYear
      averageScore
      genres
      description
    }
  }
`;