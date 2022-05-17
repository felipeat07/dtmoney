import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){

    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, [])



    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">€5000</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- €500</td>
                        <td>pagamento</td>
                        <td>22/04/2022</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td>€5000</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2022</td>
                    </tr>
                </tbody>

            </table>
        </Container>
    );
}