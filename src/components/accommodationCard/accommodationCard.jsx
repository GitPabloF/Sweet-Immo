import { Link } from 'react-router-dom'

export default function AccommodationCard({dataID, dataTitle, dataCover}) {
    return (
        <Link
            key={dataID}
            to={`/accommodation/${dataID}`}
        >
            <div className="accommodationList_grid_item">
                <div className="grey-gradient"></div>
                <h2> {dataTitle}</h2>
                <img src={dataCover} alt={dataTitle} />
            </div>
        </Link>
    )
}
