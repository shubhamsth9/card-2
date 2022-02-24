import React from "react"
import Info from "./Components/Info.js"
import About from "./Components/About.js"
import Interests from "./Components/Interests.js"
import Footer from "./Components/Footer.js"

export default function App(){
    return (
        <div className="Card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}