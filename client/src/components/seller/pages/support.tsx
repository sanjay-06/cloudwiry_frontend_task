import React from 'react'
import { Alert } from 'react-bootstrap'
import Navbar from '../components/Navbar'

export default function support() {
    return (
        <div>
            <Navbar />
            <div className="all">
            <Alert variant='success' className="alert" style={{textAlign:"center"}}>
                <h2> Need help?</h2>
            </Alert>
            </div>
            <div className="alert-div">
            <Alert variant='info' className="alert">
                <h3> Add products</h3>
                 <h5>It can be added in products section</h5>
            </Alert>
            <Alert variant='warning' className="alert">
                 <h3> View products</h3>
                 <h5>It can be viewed in products section</h5>
            </Alert>
            <Alert variant='danger' className="alert">
                 <h3> Remove products</h3>
                 <h5>It can be removed in reports section</h5>
            </Alert>
            <Alert variant='secondary' className="alert">
                 <h3>Shop with us</h3>
                 <h5>Login in buyers section</h5>
            </Alert>
            </div>
        </div>
    )
}
