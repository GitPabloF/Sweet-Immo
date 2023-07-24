import { useState, useEffect } from 'react'
import './accommodationList.scss'
import AccommodationCard from '../accommodationCard/accommodationCard'
import { datas } from '../../datas/datas'

export default function AccommodationList() {
    const [accommodationsDatas, setAccommodationsDatas] = useState([])

    // store the data sliced in the state if there is data
    function getPaginatedData() {
        if (datas) {
            const datasSliced = datas.slice()
            setAccommodationsDatas(datasSliced)
        } else {
            console.log('error : datas not found')
        }
    }

    // call the function at the loading of the page
    useEffect(() => {
        getPaginatedData()
    }, [])

    return (
        <div className="accommodationList">
            <div className="accommodationList_grid">
                {accommodationsDatas.map((data, i) => {
                    return (
                        <AccommodationCard
                            dataID={data.id}
                            dataTitle={data.title}
                            dataCover={data.cover}
                        />
                    )
                })}
            </div>
        </div>
    )
}
