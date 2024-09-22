import React from 'react'
import "./NetProfitCard.scss"
import { Processbar } from './Processbar/Processbar'
export const NetProfitCard = () => {
    return (
        <section className='p-3 h-100 dashboard-card net-profit-card d-sm-flex align-items-center justify-content-between'>
            <div>
                <p>Net Profit</p>
                <h1>$ 6759.25</h1>
                <span className='ms-4 green'>3%</span>
            </div>
            <div className='text-center'>
                <Processbar />
                <h6 className='mt-1'>*The value has been rounded off</h6>
            </div>
        </section>
    )
}
