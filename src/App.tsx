import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';


Modal.setAppElement('#root');



export function App() {

  const[isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransationModal (){
      setIsNewTransationModalOpen(true);
  }

  function handleCloseNewTransationModal (){
      setIsNewTransationModalOpen(false);
  }


  return (
    <TransactionsProvider>

      <Header onOpenNewTransationModal={handleOpenNewTransationModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransationModalOpen} onRequestClose={handleCloseNewTransationModal}/>
      

    </TransactionsProvider>
  );
}

