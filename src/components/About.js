import React from "react";
// import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="tagline">Bringing Your Favorite Food to Your Doorstep!</p>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>FOODHUB</strong>, where cravings meet convenience! We’re not just a food delivery app—we’re your gateway to a world of flavors, delivering happiness one meal at a time.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Fast & Reliable Delivery</strong> – Get your favorite meals delivered hot and fresh in no time.</li>
          <li><strong>Wide Variety of Choices</strong> – From local favorites to global cuisines, we’ve got it all.</li>
          <li><strong>Easy & Secure Payments</strong> – Multiple payment options for a seamless experience.</li>
          <li><strong>Live Order Tracking</strong> – Know exactly where your food is and when it will arrive.</li>
          <li><strong>24/7 Customer Support</strong> – Because your cravings don’t wait!</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          We aim to revolutionize the way people enjoy food by offering a seamless, efficient, and delightful experience. Whether you’re at home, in the office, or on the go, we bring the best flavors to your doorstep with just a few clicks.
        </p>
      </section>

      <div className="cta">
        <p>Join the Food Revolution! 🍔🍕</p>
        <button className="download-btn">Download the App</button>
      </div>
    </div>
  );
};

export default About;
