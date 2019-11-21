import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./modal.css"



const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>{buttonLabel}<h3>Contact info</h3></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="header-component" toggle={toggle}>Contact information</ModalHeader>
        <ModalBody>
          <p className="text">
          Name: Pedro Gabriel Murillo Costa<br></br>
          Email: pedromurillo96@gmail.com<br></br>
          <a className="text" href="https://github.com/Gab-chan">GitHub: https://github.com/Gab-chan</a><br></br>
          <a className="text" href="https://www.linkedin.com/in/pedro-murillo-568697188/">LinkedIn: https://www.linkedin.com/in/pedro-murillo-568697188/</a><br></br>
          </p>
        </ModalBody>
        <ModalFooter className="footer-component">
          <Button color="success" onClick={toggle}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;