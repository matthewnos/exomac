import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import '../../assets/css/style.css';

const AboutFour = () => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);
    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-top about-section-padding-bottom-200">
            <div className="container">
                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-content-area mt-0 mb-md-0 mb-0">

                            <p className="about-paragraph mr-0">
                                Customers turn to Cloud Ingenuity as we bring Fortune 100 strategy to the masses to drive business transformation. Our comprehensive services span 5 key tenants: Multi Cloud, Cyber Security, Network Modernization, Collaboration, and Enterprise Visibility. Our team helps customers determine current challenges, and we partner to build a plan for implementing the "best of breed" solutions needed to achieve successful business outcomes. Our greatest thrill is when collaboration with our team leads to measured success within a customer's business. Whether we’ve increased ROI, secured their environment, or improved time to market; our customers find great satisfaction in knowing that Cloud Ingenuity is a partner they can trust. We created this company with the sole focus of 100% customer satisfaction and driving business outcomes.
                            </p>
                            <br />
                            <p className="about-paragraph mr-0">
                                Cloud Ingenuity is a solution integrator of technology-based business solutions that span the enterprise, including the data center and lines of business. Built on products and services from the world’s top technology companies, Cloud Ingenuity solutions are installed, configured, and supported by our dedicated teams of highly certified experts. We are in this relationship for the long haul and stay engaged past the purchase order until we drive operationalization and ROI.
                            </p>
                            <br />
                            <p className="about-paragraph mr-0">
                                With the right people and the right partners, Cloud Ingenuity is able to focus on solutions to help IT cut costs, increase reliability, ease the burden of management, maximize flexibility, mitigate risk, and improve service. We require our teams to be focused so they can help you get from the high-level architecture of a solution all the way down to the technical configuration and implementation of IT solutions and products.
                            </p>

                        </div>
                    </div>
                    <div className="about-content-area mt-0 mb-md-0 mb-0">
                    <p className="about-Large">
                    WE ENGAGE AND PARTNER WITH YOU UNTIL BUSINESS VALUE IS DELIVERED.
                            </p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area about-shape-animation right-0 me-0">
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-1.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-2.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour;

