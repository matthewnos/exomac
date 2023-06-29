import React from "react";

const GoogleMap = () => {
  return (
    <div className="google-map-area section text-center section-padding-bottom">
      <div className="container">
        <div className="contact-map-area" data-aos="fade-up">
          <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0218921688476!2d-96.84847959999999!3d33.020901899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c246354eaaa27%3A0xda404b0eb6b11a6b!2sCloud%20Ingenuity!5e0!3m2!1sen!2sus!4v1622875982812!5m2!1sen!2sus"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;

//This is how we can achieve having the company name instead of the address visible, we just need
//Make sure to replace YOUR_API_KEY with your actual Google Maps API key. Also, note that you need to have a billing account with the Google Cloud Platform and enable the Google Maps JavaScript API for your project.
/*
import React, { useEffect } from "react";

const GoogleMap = () => {
  useEffect(() => {
    // Load Google Maps JavaScript API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.defer = true;
    script.async = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    // Initialize Google Map
    function initMap() {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.0209019, lng: -96.8484796 },
        zoom: 17,
      });

      // Add custom map marker with company name
      const marker = new window.google.maps.Marker({
        position: { lat: 33.0209019, lng: -96.8484796 },
        map: map,
        title: "Cloud Ingenuity",
      });
    }
  }, []);

  return (
    <div className="google-map-area section text-center section-padding-bottom">
      <div className="container">
        <div className="contact-map-area" data-aos="fade-up">
          <div id="map" style={{ height: "400px", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;

*/
