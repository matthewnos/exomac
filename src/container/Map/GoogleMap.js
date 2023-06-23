import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                <iframe
                    className="contact-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.1584521074285!2d-96.89916778540573!3d32.964540080916304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd6d15b3cc00d%3A0x24b33e3e3db937f3!2s4100%20International%20Pkwy%20%231100%2C%20Carrollton%2C%20TX%2075007%2C%20USA!5e0!3m2!1sen!2s!4v1622908080361!5m2!1sen!2s"
                    aria-hidden="false"
                ></iframe>
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
