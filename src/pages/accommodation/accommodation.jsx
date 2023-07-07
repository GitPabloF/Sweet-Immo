import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { datas } from '../../datas/datas'
import './Accommodation.scss'
import Header from '../../components/Header/Header'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'

export default function Accommodation() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [accommodation, setAccommodation] = useState({})

    // TRY TO return to error page if id doesn't exist
    // const datasID = datas.map(data => data.id)
    // console.log(datasID[0])

    useEffect(() => {
        loadData(id)
    }, [])

    function loadData(id) {
        let found = false;
        datas.map((data, i) => {
            if (data.id === id) {
                setAccommodation(data)
                found = true
                console.log('if', data.id)
                return
            }
        })
        if (!found) {
            console.log('no', accommodation)
            navigate('/')
        }
    }

    // for(let i = 0; i < datasID.length ; i++ ){
    //     let number = 0
    //     if(id === datasID[i]){
    //         number++
    //     }
    //     console.log(number)
    //     if(number === 0){
    //         window.open('/')
    //     }
    // }

    // to get all the datas of the element where the id is the present
    const data = datas.find((item) => item.id === id)

    // to map the tags of the accommodation
    const dataTags = data.tags.map((tag) => {
        return <span>{tag}</span>
    })


    // based on the (1 to 5) rating return the gray class for the star if needed
    const dataRating = data.rating
    const star5 = dataRating === '5' ? '' : 'rating_star_grey'
    const star4 =
        dataRating === '5' || dataRating === '4' ? '' : 'rating_star_grey'
    const star3 =
        dataRating === '5' || dataRating === '4' || dataRating === '3'
            ? ''
            : 'rating_star_grey'
    const star2 =
        dataRating === '5' ||
        dataRating === '4' ||
        dataRating === '3' ||
        dataRating === '2'
            ? ''
            : 'rating_star_grey'
    const star1 =
        dataRating === '5' ||
        dataRating === '4' ||
        dataRating === '3' ||
        dataRating === '2' ||
        dataRating === '1'
            ? ''
            : 'rating_star_grey'

    // to map a list of the equipments
    const dataEquipments = data.equipments.map((equipment, index) => {
        return (
            <li
                key={`${equipment}${index}-`}
                className="accommodation_equipments_li"
            >
                {equipment}
            </li>
        )
    })

    // to save and uptdate the state of the picture

    const [imgStatus, updateImgStatus] = useState(0)

    const goToNext = () =>
        imgStatus >= data.pictures.length - 1
            ? updateImgStatus(0)
            : updateImgStatus(imgStatus + 1)
    const goToPrevious = () =>
        imgStatus <= 0
            ? updateImgStatus(data.pictures.length - 1)
            : updateImgStatus(imgStatus - 1)

    // to hide element when there is only one picture
    const isOneImage = data.pictures.length <= 1 ? 'hide' : ''

    return (
        <div className="accommodation">
            <Header />
            <div className="accommodation_container">
                <div className="accommodation_img">
                    <img
                        class="accommodation_img"
                        id={`accommodation_img-${imgStatus + 1}`}
                        src={data.pictures[imgStatus]}
                        alt={`logement photo ${imgStatus + 1}`}
                    />
                    <span className={isOneImage} id="img-status">
                        {imgStatus + 1}/{data.pictures.length}
                    </span>
                    <span onClick={goToPrevious}>
                        <i
                            className={`fa-solid fa-angle-left ${isOneImage}`}
                            title="naviguer vers l'image précédente"
                        ></i>
                    </span>
                    <span onClick={goToNext}>
                        <i
                            className={`fa-solid fa-angle-right ${isOneImage}`}
                            title="naviguer vers l'image suivante"
                        ></i>
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

                        <div
                            className="accommodation_rating"
                            title={`note du logement ${data.rating}/5`}
                        >
                            {[...Array(5).keys()].map((n)=>{
                                if(n+1 <= data.rating){
                                    <Rating isGrey='' key={n} />
                                }else{
                                    <Rating isGrey='rating_star_grey' key={n}/>
                                }
            
                            })}
                            {/* <Rating isGrey={star1} />
                            <Rating isGrey={star2} />
                            <Rating isGrey={star3} />
                            <Rating isGrey={star4} />
                            <Rating isGrey={star5} /> */}
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
        </div>
    )
}
