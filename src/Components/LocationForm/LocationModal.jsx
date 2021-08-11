import React, { useState } from "react"
import axios from "axios"

export default function LocationModal() {
    const [Location, setLocation] = useState("")

    const handleChange = (event) => {
        const {id, value} = event.target
        setLocation(prevState => {
            return {
                ...prevState,
                [id]: value,
            }
        })
        console.log(Location)
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post(
            `http://localhost:7001/`, 
            Location    
        )
        document.getElementById("location").innerHTML = ""
        console.log("HELLO FROM THE OTHER SIDE")
    }

    return(
        <div className="LocationModal">

            <form id="ModalContent" >
                <span id="LocationTitle" > Select Location </span>
                <input type="text"
                        placeholder="Type here.."
                        id="location"
                        onChange={handleChange}
                        required
                        />
                <button>Do something</button>
            </form>
        </div>
    )
}