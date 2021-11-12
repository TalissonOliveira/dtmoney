import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 17.400,00</strong>
            </div>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>R$ 1.259,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 16.141,00</strong>
            </div>
        </Container>
    )
}