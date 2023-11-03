import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/home"
import About from "./page/about"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router