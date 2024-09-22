import React from 'react'
import "./NavBar.scss"
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import profile from "../../../images/profile.png"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { DotsIcon, MessagesIcon, NotificationIcon, SearchLogo } from '../../../images/SvgExport/SvgExport';


function NavBar() {
    return (
        <Navbar expand="sm" className='p-o'>
            <Container fluid>
                <Link className="navbar-brand" to="/project-frontend">
                    <h2 className='mb-0'>UI Frontend</h2>
                    <p className='text-end mb-0'>Test</p>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='d-sm-block flex-column flex-sm-row-reverse justify-content-between' id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0 d-flex flex-row justify-content-center justify-content-sm-end align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#" className='nav-link-icons'>
                            <span>
                                <MessagesIcon />
                            </span>
                        </Nav.Link>
                        <Nav.Link href="#" className='nav-link-icons'>
                            <span>
                                <DotsIcon />
                            </span>
                        </Nav.Link>
                        <Nav.Link href="#" className='nav-link-icons'>
                            <span>
                                <NotificationIcon />
                            </span>
                        </Nav.Link>
                        <Nav.Link href="#" className='p-0'>
                            <img src={profile} alt="" className="navbar-rifht-img mx-3" />
                        </Nav.Link>
                    </Nav>
                    <Form className="position-relative searchbar">
                        <Form.Label className='position-absolute d-flex align-items-center mb-0 top-50 start-0 translate-middle-y ps-3'>
                            <span>
                                <SearchLogo />
                            </span>
                        </Form.Label>
                        <Form.Control
                            type="search"
                            placeholder="Quick Search"
                            className="me-2 ps-5"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar