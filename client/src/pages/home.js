import React from 'react';
import Footer from '../components/Footer/Footer';

function Home() {

  return (
    <>
    <div id="parent" className="container-fluid bg-light mb-0 ">
      <div className="row">
        <div className="col-md-12">
          {/* header */}
          <h1 className="fontText display-5" style ={{fontFamily: 'Noto Serif KR'}}>A little About Myself..</h1>
          <a href="https://www.linkedin.com/in/matthew1cheney" target="_blank">
            <i className=" fab fa-linkedin" style={{color: "dodgerblue"}}></i>
          </a>
          <a href="https://www.github.com/Matt1cheney" target="_blank">
            <i className=" fab fa-github-square" style={{color: "#5b5d64"}}></i>
          </a>
          <a href="./resume/matt_resume_9-7.pdf" target="_blank">
            <i className=" far fa-file-pdf" style={{color: "#b12116"}}></i>
          </a>
          <p className="fontText lead"style ={{fontFamily: 'Noto Serif KR'}}>
            I am currently looking forward to a career in Back-end Development!
          </p>
          <hr className="my-4" />
        </div>
      </div>
      {/* about me and text row */}

      <div className="row">
        {/* portrait column */}
        <div className="mx-auto">
            {/* Portrait */}
            <img
              id="portrait"
              src="./images/portrait.jpg"
              className="img-fluid"
              alt="Responsive image"
            />
        </div>

        {/* about me */}

        <div className="col-md">
            <p className="fontText text-justify img-fluid" style={{fontFamily: 'Noto Sans KR'}}>
              I am 29 years old and a huge goal of mine is to be employed as a
              full-stack develepor by the time I'm 30. I've mainly come from a
              laborer background, I spent 5 years as an associate at Walmart
              after I graduated high school. My first position there was a
              shipping associate. I, then, was promoted to shipping clerk within
              1 year of employment. I worked as a Shipping Clerk for roughy 2
              years before getting a promotion again as yard driver. As a yard
              driver I was trusted with hauling Walmart and non-Walmart trailers
              on property, pulling to and from dock bay doors. After 5 years of
              service with Walmart I decided to 'broaden my horizons' by
              attempting to join a union program as an electrical lineman. I
              failed in being accepted into the program and then became employed
              by East Coast Lumber in Hampstead, NH. I worked as a general
              laborer for 1 year before accepting a job with Communications
              Construction Group as a Groundhand. The duties as a Groundhand
              were to assist the construction foreman with various tasks
              thoughout the day to finish jobs. The main objective in a job is
              to run fiber or Co-axial cable, sometimes both, from a point on
              the telephone lines to the destination (customer's suite). After
              roughly 8 months of employment as a Groundhand I was promoted to
              the Warehouse Manager. In this job I was tasked with inventory of
              various materials needed to install fiber and Co-axial cable, as
              well as performing safety checks on the workforce out of the
              office I am employed. As of October 1st, 2019, I was promoted to a
              Fiber Splicer. My primary objective is to splice the fibers onto
              the Comcast network resulting in Fiber Optic service for the
              client.
            </p>
            {/* about me paragraph */}
          {/* about me */}
        </div>
        {/* about me and text row */}
      </div>

      {/* body about me */}
    <Footer/>
    </div>
    </>
)
};

export default Home;