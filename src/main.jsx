import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import User from './components/user/User.jsx'
import Github, { githubinfoloader } from './components/Github/Github.jsx'


// const router=createBrowserRouter([
//     {
//         path: '/',
//         element:<Layout/>,
//         children:[
//             {
//                 path:"",
//                 element:<Home/>
//             },{
//                 path:"/about",
//                 element:<About/>
//             }
//         ]

//     }
// ])

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>} />
            <Route path='about' element={<About/>}/>
            <Route path='user/:uid' element={<User/>} />
            <Route path='github' element={<Github/>}
            loader={
                githubinfoloader
            }

            />
        </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>


)
