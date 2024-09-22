import React from 'react'
import profile1 from "../../../images/profile-1.png"
import "./ProfileCard.scss"
import { ProfileGreenDot, ProfileRedDot, ProfileRing } from '../../../images/SvgExport/SvgExport'
export const ProfileCard = () => {
    return (
        <section className='profile-card p-4 text-center cream'>
            <div className='position-relative profile-div d-inline-block'>
                <span className='profile-ring position-absolute top-50 start-50 translate-middle '><ProfileRing /></span>
                <img src={profile1} alt="" className='img-fluid' />
                <span className='profile-dot position-absolute translate-middle'>{true ? <ProfileGreenDot /> : <ProfileRedDot /> }</span>
            </div>
            <h5 className='mt-3'>Victor</h5>
            <p>Ui Ux Team Lead</p>
            <button className='p-1'>Visit Profile</button>
        </section>
    )
}
