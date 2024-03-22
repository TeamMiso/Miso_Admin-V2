export interface ModalProps {
  isOpen: boolean;
  title: string;
  content1: string;
  content2: string;
  button: string;
  id: number;
  mainText: string;
  closeModal: () => void;
}
