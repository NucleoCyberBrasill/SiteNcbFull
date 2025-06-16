import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"
export function GridCard() {
    return (
        <div className="grid_card">

            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ width: "auto", height: "auto" }} variant="top" src="/imgs/gran_geek.png" />
                <Card.Body>
                    <Card.Title>Domingo Gran Geek</Card.Title>
                    <Card.Text>
                        Participação no Domingo Gran Geek, onde divulgamos o NCB juntamente com o coordenador Miguel. Foi um momento muito importante para o nosso início!

                        Nossa participação começa em 01:06:27.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ width: "auto", height: "auto" }} variant="top" src="/imgs/e-book-ncb.jpeg" />
                <Card.Body>
                    <Card.Title>E-book NCB</Card.Title>
                    <Card.Text>
                        Escrevemos o nosso primeiro e-book, um guia introdutório sobre Segurança da Informação. Esse foi um projeto incrível, feito com muito carinho.
                        O livro pode ser acessado na biblioteca da faculdade (basta pesquisar por Núcleo Cyber Brasil).
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ width: "auto", height: "auto" }} variant="top" src="/imgs/gran_jornada.png" />
                <Card.Body>
                    <Card.Title>Lançamento oficial do E-book</Card.Title>
                    <Card.Text>
                        Após a escrita, tivemos o lançamento oficial do livro!
                        A Julia representou o NCB no evento e também apresentou uma palestra sobre conceitos introdutórios de Segurança da Informação.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ width: "auto", height: "auto" }} variant="top" src="/imgs/carreira.png" />
                <Card.Body>
                    <Card.Title>Carreira e Empregabilidade</Card.Title>
                    <Card.Text>
                        Um encontro super produtivo com a Larissa Brito, especialista em carreira e empregabilidade da Gran Faculdade. A reunião gerou insights valiosos para quem deseja aprimorar o perfil profissional
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
}

