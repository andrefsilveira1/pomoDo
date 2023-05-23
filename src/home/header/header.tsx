import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './header.css';
import image  from './pomo.png'
import pomo from './francisco.jpeg'
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {

    useEffect(() => {
        const observer = new IntersectionObserver(values => {
            Array.from(values).forEach(entry => {
                if (entry.intersectionRatio >= 0.5) {
                    entry.target.classList.add('init-hidden-off');
                }
            })
        }, {
            threshold : [0.5]
        });

        Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
            observer.observe(element)
        })
    }, [])

    return (
        <Container>
            <Row className='card-row' style={{height: '50%'}}>
                <Col xs className="firstLabel">
                    <Card style={{ width: '100%', height: '50%' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Não conhece pomodoro?</Card.Title>
                        <Card.Text>
                            <p>"A técnica Pomodoro, desenvolvida em 1988 pelo italiano Francisco Cirillo, é um método de gestão de tempo que pode ser aplicado
                                 para diversas tarefas, seja nos estudos, seja no trabalho." </p>
                        </Card.Text>
                        <Button variant="primary" ><Link to="/sobre">Quero saber mais!</Link></Button>
                    </Card.Body>
                    </Card>
                </Col>
                {/* <Col xs sx={{ order: 12 }}> Second, but last</Col> */}
                <Col className="secondLabel" xs sx={{ order: 1}}> <img src={pomo} alt="pomodoro"/></Col>
            </Row>
            <div className="textBox mb-5 init-hidden">
                <article >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis vulputate lacus sollicitudin facilisis. In malesuada orci mollis risus mollis, vitae finibus est venenatis. Curabitur molestie sollicitudin enim vitae accumsan. Duis eget convallis eros. Maecenas non vulputate nulla, a imperdiet libero. Suspendisse eu ex nec augue laoreet mattis. Quisque non sem sit amet purus fermentum bibendum at nec ligula. Aenean at sodales purus. Nullam eu porttitor dui, at rhoncus ex. Mauris ultrices hendrerit arcu. Proin id diam at velit porttitor rhoncus quis sed libero. Phasellus facilisis consectetur augue, in tristique nisl fringilla eu.
                Aliquam sem risus, rutrum id eros sed, rutrum venenatis nunc. Praesent elementum ipsum venenatis fermentum convallis. Vestibulum aliquet interdum mauris, ut hendrerit felis aliquet ut. Integer dapibus aliquam lorem, vitae viverra tortor euismod quis. Phasellus porta sapien dolor, eu volutpat nunc imperdiet quis. Fusce imperdiet congue turpis vel facilisis. Vivamus lobortis vel mauris a lobortis. Cras quis turpis vel dolor imperdiet gravida sed quis nisi. Cras luctus, risus aliquam suscipit sodales, ex dui sodales velit, a ultrices arcu lectus non velit. Sed id tincidunt ante, sed sagittis dolor. Nulla facilisi.
                Donec eu massa eu nisi finibus tempor. Curabitur et justo quis tellus tempor convallis non in est. Pellentesque id purus id ante tincidunt malesuada ut non quam. Quisque consequat interdum ipsum, vitae dapibus sem blandit sed. Donec tempor tincidunt suscipit. Aliquam erat volutpat. Vestibulum ultricies elit in purus viverra lacinia. Pellentesque imperdiet quis velit eget accumsan. In egestas ipsum nec odio sodales bibendum. Ut eget commodo est. Proin interdum posuere turpis ut mollis. Vestibulum scelerisque, turpis eget congue posuere, ipsum mauris aliquet neque, eget sagittis dolor ligula eget tellus. Maecenas odio libero, faucibus a efficitur ut, imperdiet eu elit.
                Ut volutpat diam lectus, eu porttitor dolor euismod sit amet. Sed tempor rhoncus ultricies. Proin sed sapien at felis pretium mattis eu ut purus. Curabitur sapien augue, tempus at turpis vel, blandit luctus nunc. Sed semper dapibus eros sed fringilla. Proin malesuada maximus diam vel vehicula. Proin tempus auctor libero, in mattis massa accumsan fringilla. Aenean dignissim, eros et placerat tempus, lacus lectus dapibus leo, nec ullamcorper lorem ipsum id urna. Suspendisse efficitur libero at tincidunt porttitor.
P               raesent efficitur sapien sit amet lacus porta, id pellentesque elit consequat. Vivamus eget faucibus dolor. Phasellus vehicula pellentesque lorem, ut posuere risus vehicula aliquet. Vivamus in vestibulum diam. Cras feugiat vel dolor vitae maximus. Morbi nec maximus lacus. Curabitur faucibus ipsum sed aliquet porttitor. Curabitur facilisis at neque eget elementum. 
                </article>
            </div>
        </Container>
    )
}