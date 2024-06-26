import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Product from './Components/Product/Product.jsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={ <Layout /> } >
      <Route path='' element={ <Home /> } />
      <Route path='About' element={ <About /> } />
      <Route path='Contanct' element={ <Contact /> } />
      <Route path='Product' element={ <Product /> } />
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
