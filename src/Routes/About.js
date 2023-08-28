import React from "react";

import Team from "../Comp/Team";

class About extends React.Component {
  render() {
    return (
      <div className="w-3/4 mx-auto  h-auto">
        <p className="text-l font-normal	 leading-7 tracking-tighter text-opacity-90 text-blue-900 mb-4">
          Welcome to Swiggy, your go-to destination for delicious food delivered
          right to your doorstep. At Swiggy, we're on a mission to revolutionize
          the way you experience food delivery. Our platform brings together a
          curated selection of restaurants, a seamless ordering process, and
          top-notch delivery services to create an unparalleled dining
          experience.
        </p>
        <h3 className="text-l font-normal leading-7 mb-4"> Our Mission</h3>
        <p className="text-l font-normal leading-7 tracking-tighter text-opacity-90 text-blue-900 mb-4">
          Our mission is simple: to connect food enthusiasts with the flavors
          they love, all while supporting local businesses. We're committed to
          delivering not just food but also convenience, choice, and moments of
          delight.
        </p>
        <h2 className=" text-l font-normal">Meet the Team :</h2>
        <Team/>
      </div>
    );
  }
}

export default About;
