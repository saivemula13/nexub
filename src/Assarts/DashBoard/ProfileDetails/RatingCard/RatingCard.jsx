import React from 'react'
import "./RatingCard.scss"
import { RatingEditIcon, StarRatingIcon } from '../../../../images/SvgExport/SvgExport'
import batosh from "../../../../images/batosh.png"
export const RatingCard = () => {
    return (
        <section className='rating-card p-3 text-center '>
            <div className='d-flex align-items-center justify-content-between'>
                <h5>Ratings</h5><span><RatingEditIcon /></span>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <img src={batosh} alt="" className="img-fluid" />
                <div className='text-start ms-2'>
                    <h5>Batosh</h5>
                    <p className='mb-0 blue'>CEO</p>
                </div>
            </div>
            <div>
                <StarRatingIcon />
                <StarRatingIcon />
                <StarRatingIcon />
                <StarRatingIcon />
                <StarRatingIcon />
            </div>
            <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos corrupti temporibus, quia saepe eveniet ad tempora distinctio voluptatem dolore, accusantium maxime perspiciatis. Vero voluptates doloremque exercitationem repudiandae, vel deleniti?</p>
        </section>
    )
}
