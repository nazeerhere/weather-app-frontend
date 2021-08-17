import React, { useEffect, useState } from "react"
import axios from "axios"
import url from "../../BackendUrl"

export default function LocationModal({ Forcasts, setForcasts }) {
    const [Location, setLocation] = useState({ Location: "" })

    const handleChange = (event) => {
        const {id, value} = event.target
        setLocation(prevState => {
            return {
                ...prevState,
                [id]: value,
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post(
            `http://localhost:${url.value}/history`, 
            Location
        )
        .then(res => {
            if(res.data.data.length > 0) {
                let newArr = res.data.data.slice(0, 3)
                setForcasts(newArr)
                setTimeout(() => {
                    console.log(Forcasts)
                }, 500)
                console.log(res.data.data[0])
                console.log(res)
                console.log("we got data!!")

            } else {
                console.log("something went wrong, Response: ")
                console.log(res.data.data)
            }
        })

        document.getElementById("Location").innerHTML = ""
        console.log("HELLO FROM THE OTHER SIDE")
        console.log(Location.Location)
    }

    return(
        <div className="LocationModal">

            <form id="ModalContent" >
                <span id="LocationTitle" > Select Location </span>
                <input type="text"
                        placeholder="Type here.."
                        id="Location"
                        onChange={handleChange}
                        required
                />
                <button
                    onClick={handleSubmit}
                >Do something</button>
            </form>
        </div>
    )
}