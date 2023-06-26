import Banner from '../../components/Banner/Banner'
import AccommodationList from '../../components/AccommodationList/AccommodationList'

export default function Home(){
    return(
        <div>
            <Banner title='Chez vous, partout et ailleurs' bannerClass='banner banner_home'/>
            <AccommodationList />
        </div>
    )
}