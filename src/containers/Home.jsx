import React from "react";
import InfoCard from "../components/InfoCard";
import AboutCard from "../components/AboutCard"
import VideoBox from "../components/VideoBox"
import InputBox from "../components/InputBox"

require("./Home.css")

const Home = () => {

    return(
        
    <div class = "page">
        <div class="wrapper">
            <div class="logo"></div>
            <div class="two"><InfoCard /></div>
            <div class="three"><AboutCard/></div>
            <div class="four"><VideoBox/></div>
            <div class="five"><InputBox/></div>
        </div>
    </div>

    )
}

export default Home