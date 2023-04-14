import React from "react";
import NavBar from "../components/NavBar";
import Box from "../components/Box"
require("./Home.css")

const Home = () => {

    return(
        
    <div class = "page">
        <NavBar />
        <div class="wrapper">
            <div class="one"></div>
            <div class="two">Two</div>
            <div class="three"><Box /></div>
            <div class="four">Four</div>
            <div class="five">Five</div>
        </div>
    </div>

    )


}


export default Home