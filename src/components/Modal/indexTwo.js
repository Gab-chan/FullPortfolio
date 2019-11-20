import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./modal.css"



const ModalExample2 = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>{buttonLabel}<h3>Technologies/Skills</h3></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="header-component" toggle={toggle}>Proficiencies</ModalHeader>
        <ModalBody>
          <p className="text">
          1. HTML5<br></br>
          2. JavaScript<br></br>
          3. React.js<br></br>
          4. Node.js<br></br>
          5. Microsoft Visual Studio Code<br></br>
          6. Critical Thinking<br></br>
          7. Skilled Multi-tasker<br></br>
          8. Presentation Skills<br></br>
          9. Great with Teamwork<br></br>
          10. Bilingual<br></br>
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

export default ModalExample2;