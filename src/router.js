import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/home"
import About from "./page/about"
import Test from "./page/test"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router