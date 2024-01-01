import React from "react";
import styles from "@/styles";

const AboutUs = () => {
  return (
    <div
      className={`${styles.innerWidth} ${styles.yPaddings}`}
      style={{
        position: "relative",
        margin: "0 auto",
        padding: "12px",
        paddingTop: "60px",
        textAlign: "center",
        fontFamily: "Helvetica, sans-serif",
        color: "black", 
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        
        <div
          style={{
            backgroundImage: "linear-gradient(270deg, #a509ff 0%, #34acc7 100%)",
            filter: "blur(50px)",
            width: "100%",
            height: "100%",
            opacity: 0.5,
          }}
        />
      </div>
      <h1
        style={{
          fontSize: "44px",
          fontWeight: "bold",
          lineHeight: "64.4px",
          textTransform: "uppercase",
        }}
      >
        About Us
      </h1>
      <p style={{ fontSize: "1rem", 
                  lineHeight: "1.6" }}>
        Welcome to Certi-Block! We are a team of passionate individuals dedicated to providing innovative solutions in the world of certification and blockchain technology.
      </p>
      <p style={{ fontSize: "1rem", 
                  lineHeight: "1.6" }}>
        Our mission is to make certification processes secure, transparent, and efficient. Certi-Block strives to empower individuals and organizations by leveraging the power of blockchain to verify and authenticate certifications.
      </p>
      <h2 style={{ fontSize: "1.5rem", 
                   fontWeight: "bold", 
                   lineHeight: "2.2", 
                   marginTop: "24px" }}>
        Our Vision
      </h2>
      <p style={{ fontSize: "1rem", 
                  lineHeight: "1.6" }}>
        At Certi-Block, we envision a future where the certification process is simplified, accessible, and tamper-proof. We believe in the potential of blockchain technology to revolutionize the way certifications are managed and verified.
      </p>
      <h2 style={{ fontSize: "1.5rem", 
                   fontWeight: "bold", 
                   lineHeight: "2.2", 
                   marginTop: "24px" }}>
        Meet Our Team
      </h2>
      <ul style={{ listStyleType: "none", 
                   padding: "0", 
                   fontSize: "1rem", 
                   lineHeight: "1.6" }}>

        <li>Mrudul Patel</li>
        <li>Mukund Chamariya</li>
        <li>Mayur Limbhore</li>
        <li>Madhura Patil</li>
      </ul>
    </div>
  );
};

export default AboutUs;
