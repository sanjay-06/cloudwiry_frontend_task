import React from 'react'
import { Card } from 'react-bootstrap'
export default function card(props:{button:any,text:any,heading:any,title:any}) {
    return (
        <div>
            <Card className='cards'>
                <Card.Header as="h5">{props.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{props.heading}</Card.Title>
                  <Card.Text>
                     {props.text}
                  </Card.Text>
                  {props.button}
                </Card.Body>
              </Card>
        </div>
    )
}
