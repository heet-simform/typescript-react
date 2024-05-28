import { useEffect, useRef } from "react";
import { Session } from "./SessionList";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal, { ModelHandle } from "./UI/Modal";
import { useUpComingSession } from "../context/sessionContext";
import { useNavigate } from "react-router-dom";

function BookSession({
  session,
  onClose,
}: { session: Session } & { onClose: () => void }) {
  const modalRef = useRef<ModelHandle>(null);
  const navigate = useNavigate();

  const props = useUpComingSession();
  console.log(props);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  }, []);

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props?.add(session);
    onClose();
    navigate("/upcoming-session");
  };

  return (
    <div>
      <Modal ref={modalRef} onClose={onClose}>
        <form onSubmit={submitFormHandler}>
          <Input id="name" label="Name" />
          <Input id="email" label="Email" />
          <Button type="submit">Submit</Button>
        </form>
      </Modal>
    </div>
  );
}

export default BookSession;
