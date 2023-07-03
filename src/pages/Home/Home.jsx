import Banner from '../../components/Banner/Banner'
import AccommodationList from '../../components/AccommodationList/AccommodationList'
import { useState } from 'react'
import Header from '../../components/Header/Header'

export default function Home(){

    const isHomePage = true

    const [dataInfo, setDataInfo ] = useState([])

    return(
        <div>
            <Header isHomePage={true}/>
            <Banner title='Chez vous, partout et ailleurs' bannerClass='banner banner_home'/>
            <AccommodationList dataInfo={dataInfo} setDataInfo={setDataInfo} />
        </div>
    )
}