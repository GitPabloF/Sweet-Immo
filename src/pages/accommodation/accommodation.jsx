import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { datas } from '../../datas/datas'
import './Accommodation.scss'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'

export default function Accommodation() {
    let { id } = useParams()

    // to get all the datas of the element where the id is the present
    const data = datas.find((item) => item.id === id)

    // to map the tags of the accommodation
    const dataTags = data.tags.map((tag) => {
        return <span>{tag}</span>
    })

    // based on the (1 to 5) rating return the gray class for the star if needed
    const dataRating = data.rating
    const star5 = dataRating === '5' ? '' : 'rating_star_grey'
    const star4 = dataRating === '5' ||  dataRating === '4' ? '' : 'rating_star_grey'
    const star3 = dataRating === '5' ||  dataRating === '4' ||  dataRating === '3' ? '' : 'rating_star_grey'
    const star2 = dataRating === '5' ||  dataRating === '4' ||  dataRating === '3' ||  dataRating === '2' ? '' : 'rating_star_grey'
    const star1 = dataRating === '5' ||  dataRating === '4' ||  dataRating === '3' ||  dataRating === '2' ||  dataRating === '1' ? '' : 'rating_star_grey'

    // to map a list of the equipments
    const dataEquipments = data.equipments.map((equipment, index) => {
        return <li key={`${equipment}${index}-`}className="accommodation_equipments_li">{equipment}</li>
    })

    // to map the images
    const dataImg = data.pictures.map((picture, i) => {
        return <img class='accommodation_img' key={`accommodation_img-${i+1}`} id={`accommodation_img-${i+1}`} src={picture} alt="" />
    })
    
    
    // const [imgStatus, ]
    //  function goToNext(){
    //     imgStatus++
    //     console.log(imgStatus)
    //  } 
    

    return (
        <div className="accommodation">
            <div className="accommodation_img">
                {dataImg}
                <span>
                    <i className="fa-solid fa-angle-left"></i>
                </span>
                <span >
                    <i className="fa-solid fa-angle-right"></i>
                </span>
            </div>

            <div className="accommodation_info">
                <div className="accommodation_main-info">
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    <div className="accommodation_tags">{dataTags}</div>
                </div>
                <div className="accommodation_host-rating">
                    <div className="accommodation_host">
                        <span>{data.host.name}</span>
                        <div className="accommodation_host_img">
                            <img
                                src={data.host.picture}
                                alt={data.host.name}
                            />
                        </div>
                    </div>

                    <div className="accommodation_rating">
                        <Rating isGrey={star1}/>
                        <Rating isGrey={star2}/>
                        <Rating isGrey={star3}/>
                        <Rating isGrey={star4}/>
                        <Rating isGrey={star5}/>
                    </div>
                </div>
            </div>

            <div className="accommodation_collapse">
                <Collapse
                    title="Description"
                    description={<p>{data.description}</p>}
                />
                <Collapse
                    title="Équipements"
                    description={<ul>{dataEquipments}</ul>}
                />
            </div>
        </div>
    )
}
