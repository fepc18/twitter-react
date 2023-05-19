import { Row, Container, Col, Button } from "react-bootstrap";
import LogoWhiteTwitter from "../../assets/png/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUsers, faComment } from "@fortawesome/free-solid-svg-icons";

import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";

import "./SingInSingUp.scss";
import { useState } from "react";



export default function SingInSingUp(props) {

    const { setRefreshCheckLogin } = props;

    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }

    return (
        <>
            <Container className="signin-signup" fluid>
                <Row>
                    <LeftComponent />
                    <RightComponent
                        openModal={openModal}
                        setShowModal={setShowModal}
                        setRefreshCheckLogin={setRefreshCheckLogin}
                    />
                </Row>
            </Container>
            <BasicModal show={showModal} setShow={setShowModal}>
                {contentModal}
            </BasicModal>
        </>
    )
}

function LeftComponent() {
    return (
        <Col className="signin-signup__left " xs={6}>

            <div>
                <h2>
                    <FontAwesomeIcon icon={faSearch} />
                    Sigue lo que te interesa.
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faUsers} />
                    Mira lo que esta pasando en el mundo en este momento
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faComment} />
                    Unete a Twitter hoy mismo.

                </h2>
            </div>
        </Col>
    );
}
function RightComponent(props) {
    const { openModal, setShowModal,setRefreshCheckLogin } = props;
    return (
        <Col className="signin-signup__right col-lg-6" xs={6}>
            <div>
                <img src={LogoWhiteTwitter} alt="Twitter" />
                <h2>Mira lo que esta pasando en el mundo en este momento</h2>
                <h3>Unete a Twitter hoy mismo.</h3>
                <br />
                <Button
                    variant="primary"
                    onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
                >
                    Registrate
                </Button>
                <Button
                    variant="outline-primary"
                    onClick={() => openModal(<SignInForm setRefreshCheckLogin={setRefreshCheckLogin} />)}
                >
                    Iniciar sesión
                </Button>
            </div>
        </Col>
    );
}


