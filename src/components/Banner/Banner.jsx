import './Banner.scss'

export default function Banner({title, bannerClass}){

    return(
        <div className={bannerClass}>
            <p>{title}</p>
        </div>
    )
}