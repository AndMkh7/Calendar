import React from "react";


const  Clock =()=>{
    let time =()=>{
        setInterval(function () {
            var now = new Date();
            var clock = document.getElementById("clock");
            clock.innerHTML = now.toLocaleTimeString();
        }, 1000);
    }
    return(
        <div>

            <span id="clock"
                  style="background-color: #2F4F4F; color: #00FF7F; border:4px outset #FFA500; padding:5px 20px;">
                {time()}
            </span>
        </div>
    )
}

export default Clock;