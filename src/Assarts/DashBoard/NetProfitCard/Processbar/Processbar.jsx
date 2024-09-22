import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "./Processbar.scss"

export const Processbar = () => {
    const percentage = 70;

    return (
        <div className='pocess-bar position-relative'>
            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: '#7294ff',
                    trailColor: '#2a3368',
                })}
            />
            <h6 className='position-absolute top-50 start-50 translate-middle'><span className='d-block'>{percentage}%</span> Goal Completed</h6>
        </div>
    );
}
