/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ANIME_LIST } from "../../queries/anime-query";
import { Anime } from "../../models/anime";
import Context from "../../state/Context";
import { saveAnimeList, savePageInfo } from "../../state/actions";
import AnimeCard from "../../components/AnimeCard";
import { usePagination } from "../../hook/usePagination";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

type Props = {};

const AnimeList = (props: Props) => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [variables, setVariables] = useState({
    page: 1,
    perPage: 10,
  });
  const { loading, data } = useQuery(ANIME_LIST, { variables });

  const pagination = usePagination({
    currentPage: variables.page,
    totalCount: data?.Page.pageInfo.total,
    siblingCount: 2,
    pageSize: variables.perPage,
  });

  useEffect(() => {
    if (data?.Page) {
      dispatch(saveAnimeList(data.Page.media));
    }
  }, [data, dispatch]);

  useEffect(() => {
    setVariables((prev) => ({ ...prev, page: state.pageInfo?.currentPage }))
  }, [state.pageInfo?.currentPage]);

  if (loading) return <Loading />;

  return (
    <div>
      <Pagination
        pagination={pagination}
        onClick={(page) => {
          dispatch(savePageInfo({currentPage: page}))
        }}
        currentPage={variables.page}
        />
      {state.animeList?.map((v: Anime, i: number) => {
        return <AnimeCard key={i} data={v} />;
      })}
      <Pagination
        pagination={pagination}
        onClick={(page) => {
          dispatch(savePageInfo({currentPage: page}))
        }}
        currentPage={variables.page}
      />
    </div>
  );
};

export default AnimeList;
