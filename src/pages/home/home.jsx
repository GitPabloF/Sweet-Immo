import Banner from '../../components/banner/banner'
import AccommodationList from '../../components/accommodationlist/accommodationlist'
import Header from '../../components/header/header'

export default function Home() {
    return (
        <div id='home' className='container'>
            <Header isHomePage={true} />
            <Banner
                title="Chez vous, partout et ailleurs"
                bannerClass="banner banner_home"
            />
            <AccommodationList />
        </div>
    )
}
