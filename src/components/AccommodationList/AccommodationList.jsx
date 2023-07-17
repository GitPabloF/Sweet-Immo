import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './accommodationList.scss'
import { datas } from '../../datas/datas'

export default function AccommodationList() {
    const [accommodationsDatas, setAccommodationsDatas] = useState([])

    const [page, setPage] = useState(0)

    function getPaginatedData(start, end){
        if(datas){
            const datasSliced = datas.slice(start, end)
            setAccommodationsDatas(datasSliced)
        }else{
            console.log('error : datas not found')
        }
    }

    useEffect(() => {
        getPaginatedData(page, page+6)
    }, [])

    return (
        <div className="accommodationList">
            <div className="accommodationList_grid">
                {accommodationsDatas.map((data, i) => {
                    return (
                        <Link
                            key={data.id}
                            id={`accommodationList_grid_item-${i + 1}`}
                            to={`/accommodation/${data.id}`}
                        >
                            <div className="accommodationList_grid_item">
                                <div className="grey-gradient"></div>
                                <h2> {data.title}</h2>
                                <img src={data.cover} alt={data.title} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
