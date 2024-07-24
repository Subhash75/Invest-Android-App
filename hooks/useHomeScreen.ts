import { useState } from "react";
import plansData from "../constants";

export interface ModalStateTypes {
  isOpen: boolean;
  planId: number;
}

function useHomeScreen() {
  const [modalState, setModalState] = useState<ModalStateTypes>({
    isOpen: false,
    planId: 1,
  });

  const handleModalState = (id: number) => {
    setModalState((prevState) => ({ isOpen: !prevState.isOpen, planId: id }));
  };

  const filteredPlan = plansData.filter(value => value.id === modalState.planId)

  return { modalState, handleModalState, filteredPlan };
}

export default useHomeScreen;
