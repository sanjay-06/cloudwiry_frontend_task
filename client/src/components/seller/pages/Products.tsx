import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Button from 'react-bootstrap/Button'
import ModalForm from './ModalForm'
import Modalseller from './Modal'
function Products() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
       <Navbar />
        <div className="hello">
        <Button variant="primary" onClick={() => setModalShow(true)}>
       Launch vertically center
      </Button>

      <Modalseller
        show={modalShow}
        value={<ModalForm />}
        title="Add to seller Page"

        onHide={() => setModalShow(false)}
      />
        </div>
    </div>
  );
}

export default Products;