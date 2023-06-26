export default function Collapse({title, description}){
    return(
    <div className="collapse">
        <div className="collapse_title">
            <h2>{title}Titre</h2>
            <button>/</button>
        </div>
        <div className="collapse_description">
            <p>{description}loremIpsum</p>
        </div>
    </div>
    )
}