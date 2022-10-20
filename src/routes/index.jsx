import Advice from 'pages/Advice'
import Home from 'pages/Home'
import StatePreview from 'pages/StatePreview'
import React from 'react'
import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="advice" element={<Advice />} />
      <Route path="preview" element={<StatePreview />} />
    </>
  )
)

export default router
