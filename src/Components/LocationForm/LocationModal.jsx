import React, { useState } from "react"
import axios from "axios"
import url from "../../BackendUrl"

export default function LocationModal() {
const initialState = {
    Location: ""
}

    const [Location, setLocation] = useState(initialState)
    const [data, setData] = useState({})

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
                if(res.data.length < 0) {
                    setData(res.data)
                    console.log(data)
                    console.log("we got data!!")
                } else {
                    console.log("something went wrong")
                }
            })

        document.getElementById("Location").innerHTML = ""
        console.log("HELLO FROM THE OTHER SIDE")
        console.log(Location.Location)

        // document.location.href = `${Location.location}-weather`
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