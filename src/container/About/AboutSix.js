import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import SectionTitle from "../../components/SectionTitles/SectionTitle";

const AboutSix = () => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="section section-padding-top technology-section-padding-bottom-180">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src="/images/about/location-1.jpeg"
                    alt=""
                    style={{ maxHeight: "500px", height: "100%" }}
                  />
                </Tilt>
              </div>
              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/shape-animation/about-shape-1.png"
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-content-area">
              <SectionTitle
                headingOption="fz-32"
                title="Location becomes a critical KPI to:"
                // subTitle="Cloud Ingenuity's Application for Location Services"
              />
              <ul>
                <li>
                  Understand employee/customer location and how it impacts the
                  business
                </li>
                <li>Understand customer buying habits</li>
                <li>
                  Enhance end user experience on campus, at airports, or at
                  hospitals for example
                </li>
                <li>
                  Enhance safety and physical security (visitor location or fire
                  drill safety)
                </li>
                <li>Ensuring the security of critical assets</li>
              </ul>

              <Link
                className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4"
                to={process.env.PUBLIC_URL + "/"}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSix;
