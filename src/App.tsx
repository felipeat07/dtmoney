import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';


Modal.setAppElement('#root');



export function App() {

  //usando react-modal
  const[isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransationModal (){
      setIsNewTransationModalOpen(true);
  }

  function handleCloseNewTransationModal (){
      setIsNewTransationModalOpen(false);
  }


  return (
    <>

      <Header onOpenNewTransationModal={handleOpenNewTransationModal} />
      <Dashboard />
      <GlobalStyle />

      <Modal
        isOpen={isNewTransationModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      >
                
          <h2>Cadastrar Transação</h2>

      </Modal>

    </>
  );
}

