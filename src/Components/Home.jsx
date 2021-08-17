import React, { useState } from "react"
import WeatherModal from "./LocationForm/weatherModal"
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

    if (Forcasts.length <= 0) {
        return(
            <div className="Home">
                <LocationModal  Forcasts={Forcasts} setForcasts={setForcasts} />
            </div>
        )
    } else {

        return(
            <div className="Home">
                <WeatherModal Forcasts={Forcasts} setForcasts={setForcasts} />
                <p>J. cole</p>
            </div>
        )
    }
}