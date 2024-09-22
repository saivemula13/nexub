import React, { useState } from 'react'
import "./AllMembers.scss"
import { SearchLogo } from '../../../images/SvgExport/SvgExport'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import CustomPagenation from '../CustomPagenation/CustomPagenation'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import profile1 from "../../../images/profile-1.png"
import profile2 from "../../../images/profile-2.png"
import profile3 from "../../../images/profile-3.png"
import profile4 from "../../../images/profile-4.png"
import profile5 from "../../../images/profile-5.png"
import profile6 from "../../../images/profile-6.png"
import profile7 from "../../../images/profile-7.png"
import profile8 from "../../../images/profile-8.png"

export const AllMembers = () => {
    const [breadCrumbData, setbreadCrumbData] = useState([
        { text: "Project Frontend", path: "" },
        { text: "Project Members", path: "/project-frontend" }
    ])
    const data = [
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile1, classname: "cream", names: "Victor", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile2, classname: "cream", names: "Alexa", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile3, classname: "", names: "Juliet", designation: "Blockchain Dev. Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile4, classname: "", names: "Hina", designation: "QA Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile5, classname: "cream", names: "Steve", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile6, classname: "", names: "Andrielle", designation: "Ui Ux Team Lead", active: true, path: "/project-frontend/employee-details" },
        { image: profile7, classname: "cream", names: "Billie", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
        { image: profile8, classname: "", names: "Alita", designation: "Ui Ux Team Lead", active: false, path: "/project-frontend/employee-details" },
    ]
    return (
        <div className="cards-section">
            <BreadCrumb data={breadCrumbData} />
            <div className="d-flex flex-column flex-md-row mb-4 align-items-center">
                <h2 className='mb-md-0 me-4'>Project Members</h2>
                <Form className="position-relative">
                    <Form.Label className='position-absolute d-flex align-items-center mb-0 top-50 start-0 translate-middle-y ps-3'>
                        <span>
                            <SearchLogo />
                        </span>
                    </Form.Label>
                    <Form.Control
                        type="search"
                        placeholder="search 08 employees"
                        className="me-2 ps-5"
                    />
                </Form>
            </div>
            <Container fluid>
                <Row>
                    {data.map((item,i) => {
                        console.log(item)
                        return (
                            <Col key={i} sm="6" lg="3" className='mb-3'>
                                <ProfileCard data={item} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
