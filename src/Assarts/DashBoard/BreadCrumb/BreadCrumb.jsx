import React from 'react'
import "./BreadCrumb.scss"
import { Link } from 'react-router-dom'
import { BreadcrumbArrow } from '../../../images/SvgExport/SvgExport'

function BreadCrumb({ data }) {
    return (
        <section className='custom-bread-crumb'>
            <nav aria-label="breadcrumb">
                <ul className='d-flex ps-0 align-items-center'>
                    {data?.map((item, i) => {
                        console.log(item);
                        return (
                            <li key={i}>
                                <Link to={item.path}><span className='mx-2'><BreadcrumbArrow /></span> {item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </section>
    )
}

export default BreadCrumb