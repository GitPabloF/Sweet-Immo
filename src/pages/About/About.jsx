import './about.scss'
import Banner from '../../components/banner/banner'
import Collapse from '../../components/collapse/collapse'
import Header from '../../components/header/header'
import {dataAbout} from '../../datas/data-about'

export default function About() {
    return (
        <div className="about container">
            <Header isAboutPage={true}/> 
            <Banner title="" bannerClass="banner banner_about" />
            <div className="about_container">
                {dataAbout.map((data, i) => {
                    return(
                        <Collapse
                        key={`${data.name}-${i}`}
                        title={data.name}
                        description={
                            <p>{data.description}</p>
                        }
                    />
                    )
                })}
            </div>
        </div>
    )
}
