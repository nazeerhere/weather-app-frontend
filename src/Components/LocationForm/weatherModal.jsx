import React from "react"

export default function weatherModal({ Forcasts, setForcasts }) {

    function runMe() {
        setForcasts([])
    }

    return(
        <div className="weatherModal">
            {   
                Forcasts.map(obj => {         
                    return(
                        <div className="unit">
                            <span id="title" > {obj.date.split("T")[0]} </span>
                            <br/>
                            Day: 
                            <br/>
                            {obj.Day.IconPhrase}
                            <p style={{opacity: obj.Day.HasProcipitation ? "1" : "0"}} >Has Procipitation</p>
                            <br/>
                            Night:
                            <br/>
                            {obj.Night.IconPhrase}
                            <p style={{opacity: obj.Night.HasProcipitation ? "1" : "0"}} >Has Procipitation</p>
                            <br/>

                            Temperature:
                            <span> {obj.Temp.max.Value} </span>    
                            <span> {obj.Temp.min.Value} </span>
                        </div>
                    )
                })
            }
            <button onClick={runMe} >Try A New City</button>
        </div>
    )
}