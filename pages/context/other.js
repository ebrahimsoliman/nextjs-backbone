import {useContext} from "react";
import AppContext   from "../../Context/AppContext";

import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";

import Link         from "next/link";


export default function other(props) {
    const value = useContext(AppContext);
    let {
            navbarAboutLink,
            navbarContactLink
        }                  = value.state.languages;
    let {languageSelected} = value.state;
    let {
            homeTitle,
            homeContent
        }       = value.state.languages;


    return (
        <div><Navbar collapseOnSelect
                     expand="lg"
                     bg="light"
                     variant="light">
            <Container>
                <Link href="/">
                    <a className="navbar-brand">Next Context API</a>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Link href="context/other">
                            <a className="nav-link">{navbarAboutLink}</a>
                        </Link>
                        <Link href="/context">
                            <a className="nav-link">{navbarContactLink}</a>
                        </Link>
                        <NavDropdown
                            title={languageSelected.toUpperCase()}
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item onClick={() => value.setLanguageSelected("en")}>
                                English
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item onClick={() => value.setLanguageSelected("es")}>
                                Spanish
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
            <h2>{homeTitle}</h2>
            <p>{homeContent}</p>
        </div>
    );
}
