import './Banner.scss'

export default function Banner({title, bannerClass}){

    return(
        <div className={bannerClass}>
            <h1>{title}</h1>
        </div>
    )
}