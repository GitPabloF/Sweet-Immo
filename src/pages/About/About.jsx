import Banner from '../../components/banner/banner'
import './about.scss'
import Collapse from '../../components/collapse/collapse'
import Header from '../../components/header/header'

export default function About() {
    return (
        <div className="about container">
            <Header isAboutPage={true}/> 
            <Banner title="" bannerClass="banner banner_about" />
            <div className="about_container">
                <Collapse
                    title="Fiabilité"
                    description={
                        <p>
                            Les annonces postées sur Kasa garantissent une
                            fiabilité totale. Les photos sont conformes aux
                            logements, et toutes les informations sont
                            régulièrement vérifiées par nos équipes.
                        </p>
                    }
                />
                <Collapse
                    title="Respect"
                    description={
                        <p>
                            La bienveillance fait partie des valeurs fondatrices
                            de Kasa. Tout comportement discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion
                            de notre plateforme.
                        </p>
                    }
                />
                <Collapse
                    title="Service"
                    description={
                        <p>
                            La bienveillance fait partie des valeurs fondatrices
                            de Kasa. Tout comportement discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion
                            de notre plateforme.
                        </p>
                    }
                />
                <Collapse
                    title="Sécurité"
                    description={
                        <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour
                            nos hôtes que pour les voyageurs, chaque logement
                            correspond aux critères de sécurité établis par nos
                            services. En laissant une note aussi bien à l'hôte
                            qu'au locataire, cela permet à nos équipes de
                            vérifier que les standards sont bien respectés. Nous
                            organisons également des ateliers sur la sécurité
                            domestique pour nos hôtes.
                        </p>
                    }
                />
            </div>
        </div>
    )
}
