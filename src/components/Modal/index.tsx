import { ModalContainer, ModalTitulo, Overlay, X } from "./styles";

interface ModalProps {
  onFechar: () => void;
  xp: number;
  custoXp: number;
  onGastarXp: () => void;
}

function Modal({ onFechar, xp, custoXp, onGastarXp }: ModalProps) {
  return (
    <Overlay onClick={onFechar}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitulo>XP disponivel: {xp}</ModalTitulo>
        <p>Custo: {custoXp} XP</p>
        <button onClick={onGastarXp}>Confirmar</button>
        <X onClick={onFechar}>X</X>
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
