import Banner from '../../components/banner/banner'
import AccommodationList from '../../components/accommodationList/accommodationList'
import { useState } from 'react'
import Header from '../../components/header/header'

export default function Home() {
    return (
        <div>
            <Header isHomePage={true} />
            <Banner
                title="Chez vous, partout et ailleurs"
                bannerClass="banner banner_home"
            />
            <AccommodationList />
        </div>
    )
}
