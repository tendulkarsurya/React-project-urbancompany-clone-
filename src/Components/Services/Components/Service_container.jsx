import React from 'react'
import { Container } from 'react-bootstrap'
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlinePestControl } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { GiLifeInTheBalance } from "react-icons/gi";
import { MdHomeRepairService } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";

import Ac_service from './Ac_service';
import Pest_service from './Pest_service'
import Cleaning from './Cleaning'
import Home_Maintenance from './Home_Maintenance'
import Lifestyle_service from './Lifestyle_service'
import Interior from './Interior'
import Pet from './Pet'
const Service_container = () => {


    function display(params) {
        let value = Number(params)

        let display = document.getElementsByClassName('displaycontroll')


        for (let index = 0; index < display.length; index++) {
            if (index === value) {
                // if (display[index].style.display === 'none') {
                //     display[index].style.display = 'block'
                // }
                display[index].style.display = 'block'

            } else {
                display[index].style.display = 'none'
            }

        }
    }

    return (

        <Container className='service_container_main' >

            <div className='col-md-4'>
                <div className=" service_list_container">
                    <ul>
                        <li onClick={() => display(0)}>
                            <a className='sticky'><TbAirConditioning className='service_icons' /> AC Repair & Appliance Services</a>
                        </li>
                        <li onClick={() => display(1)}>
                            <a className='sticky'><IoHome className='service_icons' /> Home Maintenance & Repair</a>
                        </li>
                        <li onClick={() => display(2)}>
                            <a className='sticky'> <MdOutlinePestControl className='service_icons' /> Pest Control Services</a>
                        </li>
                        <li onClick={() => display(3)}>
                            <a className='sticky' ><GiLifeInTheBalance className='service_icons' /> Personal & Lifestyle service</a>
                        </li>
                        <li onClick={() => display(4)}>
                            <a className='sticky'> <MdHomeRepairService className='service_icons' /> Interior Design & Renovation</a>
                        </li>
                        <li onClick={() => display(5)}>
                            <a className='sticky' ><MdCleaningServices className='service_icons' /> House Cleaning</a>
                        </li>
                        <li onClick={() => display(6)}>
                            <a className='sticky' ><SiPetsathome className='service_icons' /> Pet Services</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-8 services_details main_service_container">
                <Ac_service />
                <Home_Maintenance />
                <Pest_service />
                <Lifestyle_service />
                <Interior />
                <Cleaning />
                <Pet />

            </div>

        </Container>


    )
}

export default Service_container
