import React, { useEffect } from 'react'
import './Home.css'
import Footerf from '../Footer/Footerf'
import Popup from './Components/Popup'
import Cards from './Components/Cards'
import Contactus from './Components/Contactus'
import Homeurban from './Components/Homeurban'
import Homecarousel from './Components/Homecarousel'
import { Container } from 'react-bootstrap'
import Rowater from './Components/Rowater'
import Smartlock from './Components/Smartlock'
import HomeRepair from './Components/HomeRepair'
import Noteworthy from './Components/Noteworthy'
const Home = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div >
            <div className='homeurban'>
                <Container >
                    <Popup />
                    <Homeurban></Homeurban>
                    <Homecarousel></Homecarousel>
                    <Cards />
                    <Rowater></Rowater>
                    <Noteworthy></Noteworthy>
                </Container>
            </div>

            <Container>
                <Smartlock></Smartlock>
                <HomeRepair></HomeRepair>
            </Container>
            <Contactus />
            <Footerf />

        </div>
    )
}

export default Home