import Advice from 'pages/Advice'
import Home from 'pages/Home'
import React from 'react'
import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="advice" element={<Advice />} />
    </>
  )
)

export default router
