import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import SectionTitleThree from '../../components/SectionTitles/SectionTitleThree';
import {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const AboutFive = () => {
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
        <div>
          {/* Suzanne's Section */}
          <div className="section section-padding-top section-padding-bottom-180">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                  <div className="about-image-area">
                    <div className="about-image">
                      <Tilt scale={scale} transitionSpeed={4000}>
                        <img src="/images/about/Suzanne.jpeg" alt="" style={{ maxHeight: '500px', height: '100%' }}/>
                      </Tilt>
                    </div>
                    <div className="shape shape-1" id="scene" ref={sceneEl}>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                  <div className="about-content-area">
                    <SectionTitleThree subTitle="Suzanne Kosub" title="CEO & Managing Partner" />
                    <p>
                      Transformational global leader with over 25+ years of experience, Suzanne Kosub is
                      recognized for accelerating innovation and growth through partnership with key
                      business stakeholders while building durable and sustainable technology strategies
                      and foundations. She leads multimillion-dollar P&L budgets while planning, directing
                      and executing all phases of a broad range of strategic, operational and technology
                      initiatives.
                    </p>
                    <br />
                    <p>
                      Prior to joining Cloud Ingenuity, Suzanne was the Chief Technology Officer at
                      AmerisourceBergen, Fortune #10, responsible for Digital Transformation while
                      providing the strategic direction and leadership for enterprise/solution
                      architecture, application/infrastructure development and operations.
                    </p>
                    <br />
                    <p>
                      Previously, Suzanne was Chief Information Officer and President of Cloud Services
                      at Realpage and Chief Information Officer at Concentra. Suzanne earned her BA from
                      the University of the Incarnate Word and began her career with American Financial
                      Group.
                    </p>
                    <a
                      className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4"
                      href="https://www.linkedin.com/in/suzannekosub/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          {/* Stephen's Section */}
          <div className="section section-padding-top section-padding-bottom-180">
            <div className="container">
              <div className="row">
                  <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                    <div className="about-image-area">
                        <div className="about-image">
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <img src="/images/about/Stephen.jpeg" alt="" style={{ maxHeight: '500px', height: '100%' }} /> {/* Adjust the max-width as per your requirement */}
                        </Tilt>
                        </div>
                        <div className="shape shape-1" id="scene" ref={sceneEl}>
                        </div>
                     </div>
                    </div>

                <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                  <div className="about-content-area">
                    <SectionTitleThree subTitle="Stephen Untersee" title="Founder & President" />
                    <p>
                      As the Founder of Cloud Ingenuity, Stephen created the vision and culture of what
                      is our company today. Stephen is responsible for running all facets of the business
                      as President. Stephen studied the value-added reseller space for 20 years and
                      created Cloud Ingenuity based on the gaps he saw in the market. This has led to our
                      strategy of always putting the customer first and putting a maniacal focus on
                      positive business outcomes.
                    </p>
                    <br />
                    <p>
                      Prior to founding Cloud Ingenuity, Stephen Untersee was a Sales Leader for Presidio,
                      responsible for large portfolio customers. At Presidio, he led the transformation
                      into a customer-focused culture growing sales 250% year over year. Stephen has a
                      passion for creating customer-centric cultures, and this led to his success at
                      Presidio. Stephen consistently overachieved and was recognized as one of the top
                      executives in the company.
                    </p>
                    <br />
                    <p>
                      Before joining Presidio, Stephen spent time at ePlus and MTM technologies. This is
                      where Stephen developed his passion for the value-added reseller space and where he
                      began to study the industry and formulate the plan for what is now Cloud Ingenuity.
                      Stephen's focus on his relationships and clients has led to lifelong customers that
                      he still works with today. Cloud Ingenuity is in good hands with Stephen's
                      leadership!
                    </p>
                    <a
                      className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4"
                      href="https://www.linkedin.com/in/stephen-untersee-ii-3a70591b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Huber's Section */}
          <div className="section section-padding-top section-padding-bottom-180">
            <div className="container">
              <div className="row">
                  <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                    <div className="about-image-area">
                        <div className="about-image">
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <img src="/images/about/Huber.jpeg" alt="" style={{ maxHeight: '500px', height: '100%' }} /> {/* Adjust the max-width as per your requirement */}
                        </Tilt>
                        </div>
                        <div className="shape shape-1" id="scene" ref={sceneEl}>
                        </div>
                     </div>
                    </div>

                <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                  <div className="about-content-area">
                    <SectionTitleThree subTitle="Brian Huber" title="VP Delivery & Customer Success" />
                    <p>
                    Brian Huber is a senior IT professional with over 20 years of experience in Information Technology. Brian's key focus has been on leading high-impact, outcome driven solution teams. His keen ability to mold IT talent with customer focused needs ensures Cloud Ingenuity delivers solutions at the highest level leading to overachieving customer expectations.
                    </p>
                    <br />
                    <p>
                    Before joining Cloud Ingenuity, Brian led a $175M multi-year data center consolidation effort for AmerisourceBergen (ABC) across its Fortune 10 global footprint, reducing cost, optimizing its industry leading SAP solution, deploying core IT security platforms, and ensuring data integrity while still maintaining corporate operations on a daily basis. This project positioned ABC to continue its exponential growth in distribution services and cloud offering to customers while at the same time decreasing its computing and environmental footprint.
                    </p>
                    <br />
                    <p>
                    Prior to ABC Brian led a diverse team with Berry Family of Nurseries (BFN). As part of the executive team Brian help take a small regional supplier to an Equity led national organization serving major big box retailers with all their nursery needs resulting in double digit growth year over year. Prior to BFN Brian was a senior leader with Horizon Lines (HRL) encompassing everything from infrastructure to application development to day-to-day operations including P&L accountability. He was instrumental in driving the modernization of the IT operations from a mainframe driven environment to a modern, robust cloud infrastructure. HRL became the leading Jones Act carrier in the US and went from an equity owned company to a public enterprise with well of $1.2B in yearly revenue. He is a graduate of Texas State University with a BBA in Computer Information Systems & Quantitative Methods.
                    </p>
                    <a
                      className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4"
                      href="https://www.linkedin.com/in/brian-huber-7b417239/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
      
}

export default AboutFive;
