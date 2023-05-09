import React from "react";
import Button from "react-bootstrap/Button";
require("./Help.css")

const Help = () => {

    return(
        
    <div id = "Hpage">
        <div className ="Hwrapper">
            <div className ="Hone">
                &nbsp;
                <p class = "infoText">
                    A number which has never been thought of. How hard can that be? Should be easy, right?. 
                    It may surprise you how big the number will have to be. We are looking for a number with a 99% probability of never being thought of. 
                    Let’s dig into some math.
                </p>
                    <br/>
                    <br/>
                    &nbsp;
                    <p class = "infoText">
                        Think about how often numbers are thought about in our daily lives. 
                        Let’s say a person thinks of a number every 2 mins. During a 1 hr. period, a human would think of about 30 numbers. 
                        Now what about the average lifespan of a human? We will say the average lifespan is 73 years. 
                        What about when we are sleeping? Well we can’t think of numbers when we are sleeping (I wonder if counting sheep would count). 
                        So, we have roughly 2/3 of the 24 hrs. in a day (16hrs) that we could be thinking of numbers.
                    </p>
                    <br/>
                    <br/>
                    &nbsp;
                    <p class = "infoText">
                        So, with those three numbers we could figure out how many numbers are thought of over a lifetime.
                    </p>
                    <br/>
                    <br/>
                    &nbsp;
                    <p class = "infoText">
                        73 years * 365.25 days * 16hrs * 30 times/hr = 12.8 million 
                        times a number is thought of per person.
                    </p>
                    <br/>
                    <br/>
                    &nbsp;
                    <p class = "infoText">
                        That is a lot of time for a single person. If we are trying to think of a number never thought of, 
                        then we need to think of how many people have ever existed. There have been studies trying to figure this out. 
                        They have concluded at the time of this experiment, there have been 117 billion people who have ever lived. 
                        With this number we can calculate cumulative numbers ever thought of:
                    </p>
                    <br/>
                    <br/>
                    &nbsp;
                    <p class = "infoText">
                        12.8 million times a number has been thought of/person * 117 billion (total people in existence) =
                        1.5 * 10<sup>18</sup> times a number has been thought of.
                    </p>
                    <br/>
                    <br/>
                    &nbsp;
                    <p class = "infoText">
                        Is this number bigger than your previous number? May want to pick a number bigger than that.
                        Feel free to use different numbers to figure out the current time as each year this number will get bigger.
                    </p>
            </div>

            <div className ="Htwo">
                <div class="graph1"></div>
                <br/>
                <p class = "infoText">
                This graph shows the distribution of numbers being picked. 
                We can see the lower numbers will be picked more than the higher numbers (These numbers are multiped by 10 to a power). 
                Now, the graph shows a number around 22 and 34 (number *10<sup>22</sup> ; number * 10<sup>34</sup>) are pretty low and therefore, would be a good choice. 
                But we are thinking of a number that has never been thought of. Let’s consult the probability graph below.  
                </p>
            </div>

            <div className = "Hthree">
                <div class = "graph2"></div>
                <p class = "infoText">
                    We can see that if you pick a number less than 45 * 10<sup>45</sup>, you have less than 50% chance of the number being thought of.  
                    Now after looking at this graph, do you think you can find a number which will give a 99% chance of never being thought of? 
                </p>
                <a href="#page"><Button
                    variant="primary"
                    style={{ float: "right", marginTop: "230px", marginRight: "20px", height: "54px", width: "125px" }}
                    >
                    Return Home
                    </Button>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Help