import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import IconBoxData from "../../data/iconBox/icon-box.json";
import IconBox from "../../components/IconBox/IconBox.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import Parallax from "parallax-js";

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
    <div
      className={`section section-padding-t90 section-padding-bottom ${classOption}`}
    >
      <div className="container">
        <div className="row align-items-center" style={{ marginTop: "20px" }}>
          <SectionTitle headingOption="fz-32" title="Use Cases" />
        </div>
        <div
          className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 icon-box-shape-animation"
          style={{ marginTop: "20px" }}
        >
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
                src={
                  process.env.PUBLIC_URL +
                  "/images/shape-animation/video-shape-1.png"
                }
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceIconBoxTwo.propTypes = {
  classOption: PropTypes.string,
};

ServiceIconBoxTwo.defaultProps = {
  classOption: "section section-padding-t90 section-padding-bottom",
};

export default ServiceIconBoxTwo;
