import styled from "styled-components";

export default function ModalDelete({ book, onDelete, onCancel, isVisible }) {
  if (isVisible) {
    return (
      <StyledModal>
        <StyledModalContent>
          <h2>Are you sure to delete:</h2>
          <h3>{book?.author}</h3>
          <h4>{book?.title}</h4>
          <StyledModalButton onClick={() => onCancel()}>
            Cancel
          </StyledModalButton>
          <StyledModalButton onClick={() => onDelete(book)}>
            OK
          </StyledModalButton>
        </StyledModalContent>
      </StyledModal>
    );
  } else {
    return;
  }
}

const StyledModal = styled.div`
  transition: all 5000ms ease-in;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.38);
  border: 1px solid lime;
  z-index: 1;
`;

const StyledModalContent = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  left: 5%;
  padding: 10px;
  background-color: red;
  color: white;
  border: 1px solid lime;
  border-radius: 10px;
`;

const StyledModalButton = styled.button`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: var(--main-link-button-padding);
  width: var(--main-link-button-width);
  color: var(--main-link-button-color);
  margin: 20px;
`;
