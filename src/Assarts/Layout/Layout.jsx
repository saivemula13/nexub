import React from 'react'
import { NavBar } from './NavBar/NavBar'
import { Sidebar } from './SideBar/Sidebar'
import { DashBoard } from '../DashBoard/DashBoard'

export const Layout = () => {
    return (
        <>
            <nav><NavBar /></nav>
            <Sidebar />
            <DashBoard/>
        </>
    )
}
