import Banner from '../../components/Banner/Banner'
import AccommodationList from '../../components/AccommodationList/AccommodationList'
import { useState } from 'react'


export default function Home(){

    const [dataInfo, setDataInfo ] = useState([])
    console.log('dataInfo Home' + dataInfo)

    return(
        <div>
            <Banner title='Chez vous, partout et ailleurs' bannerClass='banner banner_home'/>
            <AccommodationList dataInfo={dataInfo} setDataInfo={setDataInfo} />
        </div>
    )
}