import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnimeList from '../modules/anime/AnimeList'
import AnimeDetail from '../modules/anime/AnimeDetail'
import CollectionList from '../modules/anime/CollectionList'
import CollectionDetail from '../modules/anime/CollectionDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AnimeList />} />
      <Route path="/anime/:id" element={<AnimeDetail />} />
      <Route path="/collections" element={<CollectionList />} />
      <Route path="/collections/:name" element={<CollectionDetail />} />
    </Routes>
  )
}