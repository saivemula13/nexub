import React from 'react'
import "./Sidebar.scss"
import { Link, NavLink } from 'react-router-dom'
import { Accordion, Nav } from 'react-bootstrap'
import { AccordionArrow, MenuIconfive, MenuIconfour, MenuIconOne, MenuIconThree, MenuIconTwo } from '../../../images/SvgExport/SvgExport'

function Sidebar() {
    return (
        <section className='custom-sidebar' justify variant="tabs" defaultActiveKey="/home">
            <div className='item mt-4'>
                <NavLink to="/project-frontend" className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconOne />
                    </span>
                    Menu One
                </NavLink>
            </div>
            <div className='item mb-3'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <a className="pe-3 mx-2">
                                <span className='accordion-arrow bg-transparent position-absolute me-0 top-50'><AccordionArrow /></span>
                                <span className='me-2'>
                                    <MenuIconTwo />
                                </span>
                                Menu Two
                            </a>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="/settings" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two one
                            </NavLink>
                            <NavLink to="/wallet" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two Two
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='item'>
                <NavLink to="/note" className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconThree />
                    </span>
                    Menu Three
                </NavLink>
            </div>
            <div className='item'>
                <NavLink to="/store" className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfour />
                    </span>
                    Menu Four
                </NavLink>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item mb-3'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <a className="pe-3 mx-2">
                                <span className='accordion-arrow bg-transparent position-absolute me-0 top-50'><AccordionArrow /></span>
                                <span className='me-2'>
                                    <MenuIconTwo />
                                </span>
                                Menu disabled
                            </a>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two one
                            </NavLink>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two Two
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>    <div className='item mb-3'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <a className="pe-3 mx-2">
                                <span className='accordion-arrow bg-transparent position-absolute me-0 top-50'><AccordionArrow /></span>
                                <span className='me-2'>
                                    <MenuIconTwo />
                                </span>
                                Menu disabled
                            </a>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two one
                            </NavLink>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two Two
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item mb-3'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <a className="pe-3 mx-2">
                                <span className='accordion-arrow bg-transparent position-absolute me-0 top-50'><AccordionArrow /></span>
                                <span className='me-2'>
                                    <MenuIconTwo />
                                </span>
                                Menu disabled
                            </a>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two one
                            </NavLink>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two Two
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='item mb-3'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <a className="pe-3 mx-2">
                                <span className='accordion-arrow bg-transparent position-absolute me-0 top-50'><AccordionArrow /></span>
                                <span className='me-2'>
                                    <MenuIconTwo />
                                </span>
                                Menu disabled
                            </a>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two one
                            </NavLink>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two Two
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='item mb-3'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <a className="pe-3 mx-2">
                                <span className='accordion-arrow bg-transparent position-absolute me-0 top-50'><AccordionArrow /></span>
                                <span className='me-2'>
                                    <MenuIconTwo />
                                </span>
                                Menu Two
                            </a>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two one
                            </NavLink>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two Two
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='item mb-3'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <a className="pe-3 mx-2">
                                <span className='accordion-arrow bg-transparent position-absolute me-0 top-50'><AccordionArrow /></span>
                                <span className='me-2'>
                                    <MenuIconTwo />
                                </span>
                                Menu Two
                            </a>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two one
                            </NavLink>
                            <NavLink to="" className="py-0 pe-3 mx-2 ms-5">
                                Menu Two Two
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
            <div className='item'>
                <a className="pe-3 mb-3 mx-2">
                    <span className='me-2'>
                        <MenuIconfive />
                    </span>
                    Menu diasbled
                </a>
            </div>
        </section>
    )
}

export default Sidebar 