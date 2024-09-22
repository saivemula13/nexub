import React from 'react'
import "./TaskUpdates.scss"
import { TaskUpdateIcon } from '../../../../images/SvgExport/SvgExport'
export const TaskUpdates = ({ headding, status }) => {
    return (
        <section className='task-updates'>
            <h2 className='p-3'>{headding}</h2>
            <div className="cards-section">
                <div className={`card-details mx-2 p-3 mb-2 ${status}`} >
                    <h5>ZEN Roadmap, Boards backlog & Test Hub</h5>
                    <p className='mb-0 d-flex align-items-center'><span className='me-2'><TaskUpdateIcon /></span> ZEN-01 <span className='high ms-2 px-2 py-1'>High</span></p>
                </div>
                <div className={`card-details mx-2 p-3 mb-2 ${status}`} >
                    <h5>ZEN Roadmap, Boards backlog & Test Hub</h5>
                    <p className='mb-0 d-flex align-items-center'><span className='me-2'><TaskUpdateIcon /></span> ZEN-01 <span className='medium ms-2 px-2 py-1'>Medium</span></p>
                </div>
                <div className={`card-details mx-2 p-3 mb-2 ${status}`} >
                    <h5>ZEN Roadmap, Boards backlog & Test Hub</h5>
                    <p className='mb-0 d-flex align-items-center'><span className='me-2'><TaskUpdateIcon /></span> ZEN-01 <span className='low ms-2 px-2 py-1'>Low</span></p>
                </div>
                <div className={`card-details mx-2 p-3 mb-2 ${status}`} >
                    <h5>ZEN Roadmap, Boards backlog & Test Hub</h5>
                    <p className='mb-0 d-flex align-items-center'><span className='me-2'><TaskUpdateIcon /></span> ZEN-01 <span className='low ms-2 px-2 py-1'>Low</span></p>
                </div>
                <div className={`card-details mx-2 p-3 mb-2 ${status}`} >
                    <h5>ZEN Roadmap, Boards backlog & Test Hub</h5>
                    <p className='mb-0 d-flex align-items-center'><span className='me-2'><TaskUpdateIcon /></span> ZEN-01 <span className='medium ms-2 px-2 py-1'>Medium</span></p>
                </div>
                <div className={`card-details mx-2 p-3 mb-2 ${status}`} >
                    <h5>ZEN Roadmap, Boards backlog & Test Hub</h5>
                    <p className='mb-0 d-flex align-items-center'><span className='me-2'><TaskUpdateIcon /></span> ZEN-01 <span className='low ms-2 px-2 py-1'>Low</span></p>
                </div>
                <div className={`card-details mx-2 p-3 mb-2 ${status}`} >
                    <h5>ZEN Roadmap, Boards backlog & Test Hub</h5>
                    <p className='mb-0 d-flex align-items-center'><span className='me-2'><TaskUpdateIcon /></span> ZEN-01 <span className='high ms-2 px-2 py-1'>High</span></p>
                </div>
                <div className={`card-details mx-2 p-3 mb-2 ${status}`} >
                    <h5>ZEN Roadmap, Boards backlog & Test Hub</h5>
                    <p className='mb-0 d-flex align-items-center'><span className='me-2'><TaskUpdateIcon /></span> ZEN-01 <span className='medium ms-2 px-2 py-1'>Medium</span></p>
                </div>
            </div>
        </section>
    )
}
