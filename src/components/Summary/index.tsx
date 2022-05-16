import { Container } from "./styles";
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'


export function Summary(){
    return(
        <Container>

            <div>
                <header>
                    <p>Entrada</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>
                    €800
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Entradas" />
                </header>
                <strong>
                    - €300
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>
                    €500
                </strong>
            </div>

        </Container>
    );
}