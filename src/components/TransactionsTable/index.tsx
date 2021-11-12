import { Container } from "./styles";

export function TransactionsTable() {
    return (
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
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>15/11/2021</td>
                    </tr>
                    <tr>
                        <td>Pizza</td>
                        <td className="withdraw">- R$ 59,00</td>
                        <td>Alimentação</td>
                        <td>12/11/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.200,00</td>
                        <td>Casa</td>
                        <td>10/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}