import React, { useEffect, useState } from 'react'
import { Button,Accordion, Card} from 'react-bootstrap';

export default function accordian(props:{list:any,call:any}) {
   
    return (
        <div>
            <Accordion defaultActiveKey="0" className="acc">
            <div className="cart">
              <ul className="cart-items">
                {props.list.map((item:any) => (
                <div>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Card className="accordian">
                            <li key={item._id}>
                            <div>
                                <img src={item.image} alt={item.title}></img>
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div className="right">
                                {"\u20A8 "} {item.price}
                                </div>
                            </div>
                            </li>
                        </Card>
                    </Accordion.Toggle>
                    <Card>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Button variant="danger" id={item._id} onClick={() =>{
                               props.call(item)
                            }}>Remove product</Button>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </div>
                ))}
                </ul>
                </div>
            </Accordion>
         </div>
    )
}
