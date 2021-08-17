import React, { useState } from "react"
import LocationModal from "./LocationForm/LocationModal"

export default function Home() {
    const [Forcasts, setForcasts] = useState([])
    console.log(Forcasts.length)
    const arr = [
        "something",
        "honor",
        "JID",
        "more",
    ]

    function runMe() {
        setForcasts([])
    }

    if (Forcasts.length <= 0) {
        return(
            <div className="Home">
                <LocationModal  Forcasts={Forcasts} setForcasts={setForcasts} />
            </div>
        )
    } else {

        return(
            <div className="Home">
                <div className="weatherCard">
                    {   
                        Forcasts.map(obj => {
                             
                            return(
                                <div className="unit">
                                    {obj.date}
                                </div>
                            )
                        })
                    }
                    <button onClick={runMe} >new City</button>
                </div>
                {/* <p style={{color: "green", fontSize: "20px"}}
                > {Forcasts[0]} </p> */}
                <p>J. cole</p>
            </div>
        )
    }
}