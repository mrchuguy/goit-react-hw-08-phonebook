import { BackDrop } from './Modal.styled';
import { UpdateForm } from '../UpdateForm/UpdateForm';

export const Modal = ({ id, toggleModal }) => {

  return (
    <>
      <BackDrop>
        <UpdateForm toggleModal={toggleModal} id={id} />
      </BackDrop>
    </>
  );
};
