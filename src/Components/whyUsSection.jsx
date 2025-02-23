import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12 text-center d-flex flex-column align-items-center">
        <div className="col-md-12 d-flex flex-column align-items-center">
          <h1 className={styles.header}>Why Us?</h1>
          <p className={`${styles.para} text-center w-75`}>
            We are dedicated to providing high-quality services and ensuring customer satisfaction.
            Our team is committed to excellence, innovation, and making a positive impact on the community.
            By choosing us, you are supporting a vision of growth, integrity, and superior service.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img className={styles.image} src={ChildImage} alt="Happy Kids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;