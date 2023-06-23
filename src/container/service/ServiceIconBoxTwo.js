import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import IconBoxData from '../../data/iconBox/icon-box.json';
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import Parallax from 'parallax-js';

const ServiceIconBoxTwo = ({ classOption }) => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <div className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-up">
            <img src="/images/services/Location.png" alt="" style={{ maxHeight: '400px', height: '100%' }} />
          </div>
          <div className="col-lg-6" data-aos="fade-up">
            <div style={{ width: '100%' }}>
              <SectionTitle
                headingOption="fz-32"
                title="Services that create identities, build brands, and get results"
                subTitle="Cloud Ingenuity's Application for Location Services"
              />
              <video controls style={{ width: '100%' }}>
                <source src="/videos/LocationVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 icon-box-shape-animation" style={{ marginTop: '20px' }}>
          {IconBoxData &&
            IconBoxData.map((single, key) => {
              return (
                <div
                  key={key}
                  className="col mb-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <IconBox classOption="box-border" data={single} key={key} />
                </div>
              );
            })}
          <div className="shape shape-1" id="scene" ref={sceneEl}>
            <span data-depth="1">
              <img
                src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"}
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceIconBoxTwo.propTypes = {
  classOption: PropTypes.string
};

ServiceIconBoxTwo.defaultProps = {
  classOption: "section section-padding-t90 section-padding-bottom"
};

export default ServiceIconBoxTwo;
