import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { datas } from '../../datas/datas'
import './accommodation.scss'
import Header from '../../components/header/header'
import Rating from '../../components/rating/rating'
import Collapse from '../../components/collapse/collapse'

export default function Accommodation() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [accommodationData, setAccommodationData] = useState(null)

    // redirect to error page if 'id' doesn't exist and store Data into State
    useEffect(() => {
        loadData(id)
    }, [id])

    let datasID = datas.map((data) => data.id)

    function loadData(id) {
        if (!datasID.includes(id)) {
            navigate('*')
        } else {
            const newData = datas.find((item) => item.id === id)
            setAccommodationData(newData)
        }
    }

    //  map the tags of the accommodation
    function renderTags() {
        return accommodationData.tags.map((tag, i) => {
            return <span key={`tag${i}`}>{tag}</span>
        })
    }

    // map a list of the equipments
    function renderEquipments() {
        return accommodationData.equipments.map((equipment, index) => {
            return (
                <li
                    key={`${equipment}${index}-`}
                    className="accommodation_equipments_li"
                >
                    {equipment}
                </li>
            )
        })
    }

    // save and uptdate the state of the picture
    const [imgStatus, updateImgStatus] = useState(0)

    const goToNext = () =>
        imgStatus >= accommodationData.pictures.length - 1
            ? updateImgStatus(0)
            : updateImgStatus(imgStatus + 1)

    const goToPrevious = () =>
        imgStatus <= 0
            ? updateImgStatus(accommodationData.pictures.length - 1)
            : updateImgStatus(imgStatus - 1)

    // hide element when there is only one picture
    function isOneImage() {
        return accommodationData.pictures.length <= 1 ? 'hide' : ''
    }

    return (
        <div className="accommodation container">
            <Header />

            {accommodationData && (
                <div className="accommodation_container">
                    <div className="accommodation_img">
                        <img
                            className="accommodation_img"
                            id={`accommodation_img-${imgStatus + 1}`}
                            src={accommodationData.pictures[imgStatus]}
                            alt={`logement photo ${imgStatus + 1}`}
                        />
                        <span className={isOneImage()} id="img-status">
                            {imgStatus + 1}/{accommodationData.pictures.length}
                        </span>
                        <span onClick={goToPrevious}>
                            <i
                                className={`fa-solid fa-angle-left ${isOneImage()}`}
                                title="naviguer vers l'image précédente"
                            ></i>
                        </span>
                        <span onClick={goToNext}>
                            <i
                                className={`fa-solid fa-angle-right ${isOneImage()}`}
                                title="naviguer vers l'image suivante"
                            ></i>
                        </span>
                    </div>

                    <div className="accommodation_info">
                        <div className="accommodation_main-info">
                            <h1>{accommodationData.title}</h1>
                            <p>{accommodationData.location}</p>
                            <div className="accommodation_tags">
                                {renderTags()}
                            </div>
                        </div>
                        <div className="accommodation_host-rating">
                            <div className="accommodation_host">
                                <span>{accommodationData.host.name}</span>
                                <div className="accommodation_host_img">
                                    <img
                                        src={accommodationData.host.picture}
                                        alt={accommodationData.host.name}
                                    />
                                </div>
                            </div>

                            <div
                                className="accommodation_rating"
                                title={`note du logement ${accommodationData.rating}/5`}
                            >
                                {[...Array(5).keys()].map((n) => (
                                    <Rating
                                        key={n}
                                        isGrey={
                                            n + 1 > accommodationData.rating
                                                ? 'rating_star_grey'
                                                : ''
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="accommodation_collapse">
                        <Collapse
                            title="Description"
                            description={<p>{accommodationData.description}</p>}
                        />
                        <Collapse
                            title="Équipements"
                            description={<ul>{renderEquipments()}</ul>}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
