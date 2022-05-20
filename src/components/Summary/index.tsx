import { Container } from "./styles";
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";


export function Summary(){
const {transactions} = useContext(TransactionsContext);

// const totalDeposits = transactions.reduce((acc, transaction)=>{
//     if(transaction.type == 'deposit'){
//         return acc + transaction.amount;
//     }
//     return acc;
// }, 0)

const sumary = transactions.reduce((acc, transaction)=>{
    if(transaction.type == 'deposit'){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
    }else{
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
    }

    return acc;

}, {
    deposits:0,
    withdraws:0,
    total:0
})

console.log(transactions);

    return(
        <Container>

            <div>
                <header>
                    <p>Entrada</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt', {
                    style: 'currency',
                    currency: 'EUR'
                    }).format(sumary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Entradas" />
                </header>
                <strong>
                    -
                {new Intl.NumberFormat('pt', {
                    style: 'currency',
                    currency: 'EUR'
                    }).format(sumary.withdraws)}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt', {
                    style: 'currency',
                    currency: 'EUR'
                    }).format(sumary.total)}
                </strong>
            </div>

        </Container>
    );
}