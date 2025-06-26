import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
       {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:id",
        element: <User />
      }
    ]
  }
])

//Other Way
// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<layout />} >
//     <Route path='' element={<Home  />} />
//     <Route path='about' element={<About />} />
//     <Route path='contact' element={<Contact />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
