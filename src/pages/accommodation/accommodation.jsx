import { useParams } from "react-router-dom"
import { datas } from '../../datas/datas'
import './Accommodation.scss'
import Collapse from "../../components/Collapse/Collapse"

// à retirer 
import testimg from "../../assets/Img-source.png"
import testing2 from "../../assets/Img-source.png"

export default function Accommodation(){

  let {id} = useParams()
  console.log(id)

    return(
        <div className="accommodation">
            <div className="accommodation_img">
                <img id="accommodation_img-1"src={testimg} alt=''/>
                <img id="accommodation_img-2"src={testimg} alt=''/>
                <img id="accommodation_img-3"src={testimg} alt=''/>
                <span><i className="fa-solid fa-angle-left"></i></span>
                <span><i className="fa-solid fa-angle-right"></i></span>
            </div>

            <div className="accommodation_info">
                <div className="accommodation_main-info">
                    <h1>{datas[1].title}</h1>
                    <p>Paris, Île-de-France</p>
                    <div className="accommodation_tags">
                        <span>Cozy</span>
                        <span>Canal</span>
                        <span>Paris 10</span>
                    </div>
                </div>
                <div className="accommodation_host-rating">
                    <div className="accommodation_host">
                        <span>Alexandre <br/>Dumas</span>
                        <div className="accommodation_host_img">
                            <img src={testimg} alt="photo de l'hôte"/>
                        </div>
                    </div>

                    <div className="accommodation_rating">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star accommodation_rating_star_grey"></i></span>
                    </div>
                </div>
            </div>

            <div className="accommodation_collapse">
                <Collapse/>
                <Collapse />
            </div>
        </div>
    )
}