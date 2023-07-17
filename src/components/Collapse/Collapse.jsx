import './collapse.scss'
import { useState } from 'react'

export default function Collapse({ title, description }) {
    const [isHidden, setHidden] = useState(true)

    const handleToggle = () => setHidden(!isHidden)

    return (
        <div className={`collapse ${isHidden ? 'collapse-hidden' : ''}`}>
            <div className="collapse_title">
                <h2>{title}</h2>
                <button
                    className={isHidden ? `chevron-hidden` : ''}
                    onClick={handleToggle}
                >
                    <i
                        className="fa-solid fa-chevron-down"
                        title="afficher/masquer les détails"
                    ></i>
                </button>
            </div>
            <div
                className={`collapse_description ${isHidden ? 'collapse_description-hidden' : '' }`}
                aria-hidden={isHidden ? 'true' : 'false'}
                aria-labelledby="collapse"
            >
                {description}
            </div>
        </div>
    )
}
