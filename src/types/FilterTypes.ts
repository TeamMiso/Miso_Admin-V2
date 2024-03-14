export interface FilterProps {
  isOpen: boolean;
  isReviewChecked: boolean;
  setIsReviewChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerChecked: boolean;
  setIsAnswerChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
