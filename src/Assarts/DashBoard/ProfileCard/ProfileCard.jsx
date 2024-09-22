import React from 'react'
import profile1 from "../../../images/profile-1.png"
import "./ProfileCard.scss"
import { ProfileGreenDot, ProfileRedDot, ProfileRing } from '../../../images/SvgExport/SvgExport'
import { Link } from 'react-router-dom'


export const ProfileCard = ({data}) => {
    return (
        <section className={`profile-card p-4 text-center ${data.classname}`}>
            <div className='position-relative profile-div d-inline-block'>
                <span className='profile-ring position-absolute top-50 start-50 translate-middle '><ProfileRing /></span>
                <img src={data.image} alt="" className='img-fluid' />
                <span className='profile-dot position-absolute translate-middle'>{data.active ? <ProfileGreenDot /> : <ProfileRedDot /> }</span>
            </div>
            <h5 className='mt-3'>{data.names}</h5>
            <p>{data.designation}</p>
            <Link to={data.path} className='p-1'>Visit Profile</Link>
        </section>
    )
}
