import React from "react";
import InfoCard from "../components/InfoCard";
import AboutCard from "../components/AboutCard"
import VideoBox from "../components/VideoBox"
import InputBox from "../components/InputBox"
import Help from "./Help"

require("./Home.css")

const Home = () => {

    return(
    <>
    <div id = "page">
        <div className ="wrapper">
            <div className ="logo"></div>
            <div className ="two"><InfoCard /></div>
            <div className ="three"><AboutCard/></div>
            <div className ="four"><VideoBox/></div>
            <div className ="five"><InputBox/></div>
        </div>
    </div>
    <Help/>
    </>

    )
}

export default Home