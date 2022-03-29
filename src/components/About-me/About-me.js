import React from "react";
import './About-me.css';

const About_me = () => {
    return (<div>
        <div>

            <h1 className=" headings heading-font underline f1">
                Education
            </h1>
            <ul className='ul'>
                <li className="li">
                    Class X : 10cgpa (CBSE) Delhi Public School Ghaziabad Vasundhara
                </li>
                <li className="li">
                    Class XII : 95.4% (CBSE,Science) Delhi Public School Ghaziabad Vasundhara
                </li>
                <li className="li">
                    Jee Mains: 97 %ile (2020)
                </li>
                <li className="li">
                    Graduation: ECE Jamia Millia Islamia (2024)
                </li>

            </ul>
        </div>
        <div> 

            <h1 className=" headings heading-font underline f1">
                Hobbies
            </h1>
            <ul className='ul mb3'>
                <li className='li'>
                    Playing cricket and taekwondo
                </li>
                <li className='li'>
                    Swimming
                </li>
                <li className='li'>
                    travelling 
                </li>

            </ul>
        </div>
    </div>
    )
}

export default About_me;