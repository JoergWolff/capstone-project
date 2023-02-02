import styled from "styled-components";

export default function ModalDelete({ book }) {
  return (
    <>
      <h1>ModalDelete</h1>
      <StyledModal>
        <StyledModalContent>
          <h1>Are you sure?</h1>
          <h2>{book?.author}</h2>
          <h3>{book?.title}</h3>
          <StyledModalButton>Cancel</StyledModalButton>
          <StyledModalButton>OK</StyledModalButton>
        </StyledModalContent>
      </StyledModal>
    </>
  );
}

const StyledModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 100%, 50%, 0.5);
  color: white;
  border: 1px solid lime;
  z-index: 1;
`;

const StyledModalContent = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  left: 5%;
  padding: 10px;
  background-color: blue;
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
