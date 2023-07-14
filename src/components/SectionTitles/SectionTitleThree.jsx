import PropTypes from "prop-types";
import React from 'react';


const SectionTitleThree = ({subTitle , title, classOption}) => {
    return (
        <div className={`section-title-three ${classOption}`} data-aos="fade-up">
             <h3 className="sub-title" dangerouslySetInnerHTML={{__html: subTitle}} />
            <span className="title">{title}</span>
        </div>
    )
}

SectionTitleThree.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    classOption: PropTypes.string
};
SectionTitleThree.defaultProps = {
    classOption: "section-title-three"
};

export default SectionTitleThree;
