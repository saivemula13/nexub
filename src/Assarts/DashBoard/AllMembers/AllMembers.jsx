import React from 'react'
import "./AllMembers.scss"
import { Form } from 'react-router-dom'
import { SearchLogo } from '../../../images/SvgExport/SvgExport'
import { Col, Row } from 'react-bootstrap'
import { ProfileCard } from '../ProfileCard/ProfileCard'
export const AllMembers = () => {
    return (
        <div className="cards-section">
            <div className="d-flex mb-4 align-items-center">
                <h2 className='mb-0 me-4'>Project Members</h2>
                <Form className="position-relative searchbar">
                    <Form.Label className='position-absolute d-flex align-items-center mb-0 top-50 start-0 translate-middle-y ps-3'>
                        <span>
                            <SearchLogo />
                        </span>
                    </Form.Label>
                    <Form.Control
                        type="search"
                        placeholder="search 08 employees"
                        className="me-2 ps-5"
                        aria-label="Search"
                    />
                </Form>
            </div>
            <Row>
                <Col md="6" lg="3" className='mb-3'>
                    <ProfileCard />
                </Col>
            </Row>
        </div>
    )
}
