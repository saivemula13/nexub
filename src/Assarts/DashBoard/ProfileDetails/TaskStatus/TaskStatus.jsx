import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./TaskStatus.scss"
import { TaskCompletionStatusIcon } from '../../../../images/SvgExport/SvgExport'
export const TaskStatus = () => {
    return (
        <section className='task-status'>
            <Row className='align-items-center'>
                <Col lg="5" className='d-flex py-4 py-lg-0 align-items-center justify-content-center'>
                    <span>
                        <TaskCompletionStatusIcon />
                    </span>
                </Col>
                <Col lg="7">
                    <div className="right-section h-100 px-3 py-5">
                        <h5>All task by complete status</h5>
                        <h6><span className='blue'>55%</span> Completed Task</h6>
                        <h6><span className='orange'>30%</span> Incompleted Task</h6>
                        <h6><span className='cream'>15%</span> Over due</h6>
                    </div>
                </Col>
            </Row>
        </section>
    )
}
