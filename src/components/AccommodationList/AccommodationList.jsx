import './AccommodationList.scss'

import { datas } from '../../datas/datas'
import { Link } from 'react-router-dom'
// import { useParams } from "react-router-dom"

export default function AccommodationList() {
    return (
        <div className="accommodationList">
            <div className="accommodationList_grid">
                {datas.slice(0, 6).map((data) => {
                    return (
                        <Link
                            key={data.id}
                            to={`/accommodation/${data.id}`}
                            onClick={() => {}}
                        >
                            <div className="accommodationList_grid_item">
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
