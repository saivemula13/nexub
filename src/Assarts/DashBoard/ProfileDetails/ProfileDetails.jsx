import React, { useState } from 'react'
import "./ProfileDetails.scss"
import profileDetails1 from "../../../images/profile-details1.png"
import { Col, Row } from 'react-bootstrap'
import { RatingCard } from './RatingCard/RatingCard'
import { TaskStatus } from './TaskStatus/TaskStatus'
import { TaskUpdates } from './TaskUpdates/TaskUpdates'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

export const ProfileDetails = () => {
    const [breadCrumbData, setbreadCrumbData] = useState([
        { text: "Project Frontend", path: "" },
        { text: "Project Members", path: "/project-frontend" },
        { text: "Project Members", path: "" }
    ])
    return (
        <section className='profile-details'>
            <BreadCrumb data={breadCrumbData} />
            <div className="d-flex mb-4 justify-content-center justify-content-sm-start align-items-center">
                <h2 className='mb-0 me-4 '>Employee Details</h2>
            </div>
            <div className='d-sm-flex text-center text-sm-start align-items-center'>
                <img src={profileDetails1} className='img-fluid' alt="" />
                <div className='ms-3'>
                    <span className='menber px-2 mb-2 d-inline-block'>Member</span>
                    <h3>Welcome, Alexa</h3>
                    <p>Manage your info, privacy, and security to make Frontend work better for you. <a href="#">Learn more</a></p>
                </div>
            </div>
            <Row className='my-4'>
                <Col lg="6">
                    <RatingCard />
                </Col>
                <Col lg="6">
                    <TaskStatus />
                </Col>
            </Row>
            <Row className='my-4'>
                <Col lg="4">
                    <TaskUpdates headding="Current & Upcoming" />
                </Col>
                <Col lg="4">
                    <TaskUpdates headding="Completed" status="complete" />
                </Col>
                <Col lg="4">
                    <TaskUpdates headding="Failed" status="failed" />
                </Col>
            </Row>
        </section>
    )
}
