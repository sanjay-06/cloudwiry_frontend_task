import React, { useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import  FormControl  from 'react-bootstrap/FormControl'
import  InputGroup  from 'react-bootstrap/InputGroup'

export default function ModalForm() {
    const [des,setdes]=useState("")
    const [title,settitle]=useState("")
    const [image,setimage]=useState("")
    const [price,setprice]=useState(0)
    const handlesubmit=()=>{
       // event.preventDefault()
        const formData={
            "title":title,
            "image":image,
            "description":des,
            "price":price
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*", 'Accept': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch('http://localhost:8000/data', requestOptions)
            .then(response => console.log(response.json()))
    }   
    return (
        <div>
        <form onSubmit={handlesubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Title to display</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e:any) => settitle(e.currentTarget.value)}
                required
                />
            </InputGroup>
            <br />

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>Description</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e:any) => setdes(e.currentTarget.value)}
                required
                />
            </InputGroup>
            <br />
            
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Image URL</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e:any) => setimage(e.currentTarget.value)}
                required
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Price</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e:any) => setprice(e.currentTarget.value)}
                required
                />
            </InputGroup>
            <br />
            <Button variant="primary" type="submit" className="modal-submit">
                 Submit
            </Button>
        </form>
        </div>
    )
}
