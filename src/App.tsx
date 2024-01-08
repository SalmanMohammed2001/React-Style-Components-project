import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Project from "./components/Project.tsx";
// import './App.css'
import Header from "./components/header/Header.tsx";
import styled from "styled-components";

const App = () => {

    /*version 6*/
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        }, {
            path: "/about",
            element: <About/>
        }, {
            path: "/contact",
            element: <Contact/>
        }, {
            path: '/project',
            element: <Project/>
        }
    ])

    return (
        <AppContainer>
        <Header/>
            <RouterProvider router={router}/>
        </AppContainer>
    )

}
export default App
const AppContainer=styled.main`
  
    width: 100vw;
  overflow-x: hidden;

`
