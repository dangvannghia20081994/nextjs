import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
const Login = () => {
  const showModalLogin = useSelector((state) => state.modal.showModalLogin);
  return (
    <Modal show={showModalLogin} backdrop="static" centered>
      <Modal.Header>
        <Modal.Title>Custom Modal Styling</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
