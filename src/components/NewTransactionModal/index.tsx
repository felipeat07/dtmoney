import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModal{
    isOpen: boolean,
    onRequestClose: ()=> void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModal){
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >

        <button type='button' onClick={onRequestClose} className='react-modal-close' >
            <img src={CloseImg} alt="Fechar modal" />
        </button>


        <Container>
          <h2>Cadastrar Transação</h2>

          <input placeholder='Título' />

          <input type="number" 
                 placeholder='Valor'   
          />


            <TransactionTypeContainer>

                <button
                 type='button'   
                >
                <img src={IncomeImg} alt="Entrada" />
                <span>Entrada</span>
                </button>

                <button
                 type='button'   
                >
                <img src={OutcomeImg} alt="Saída" />
                <span>Saída</span>
                </button>



            </TransactionTypeContainer>
          
          
          <input placeholder='Categoria' />

          <button type="submit">
              Cadastrar
          </button>
            
        </Container>      
          
      </Modal>
    );
}