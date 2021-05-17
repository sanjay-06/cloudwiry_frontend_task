import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Button from 'react-bootstrap/Button'
import ModalForm from './ModalForm'
import Modalseller from './Modal'
import Card from './card';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
function Products() {
    const [modalShow, setModalShow] = useState(false);
  return (
    <div>
       <Navbar />
        <div>
          <div className="add-products">
              <Card 
              button={
                <Button variant="primary" onClick={() => setModalShow(true)} className="modalbutton">
                  <AddCircleOutlineIcon />{" "}Add Item
                </Button>}
              text={'Add items to the buyer section'}
              title={'Add items section'}
              heading={'sell Items'}
              />
          </div>

      <Modalseller
        show={modalShow}
        value={<ModalForm />}
        title="Add to Buyer Page"

        onHide={() => setModalShow(false)}
      />
        </div>
    </div>
  );
}

export default Products;