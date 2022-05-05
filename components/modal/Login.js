import {useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import { ClientOnly } from "components/extra";
const Login = () => {
  useEffect(() => {
    setTimeout(() => {
      var myModalEl = document.getElementById("modal-login");
      console.log(myModalEl);
    }, 2000);
  }, [])
  
  return (
    <ClientOnly>
      <Modal backdrop="static" centered id="modal-login">
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
    </ClientOnly>
  );
};

export default Login;