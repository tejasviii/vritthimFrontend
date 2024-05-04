import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-main flex w-screen h-screen justify-center" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/005/843/342/non_2x/abstract-technology-ai-computing-on-circle-concept-working-data-of-artificial-intelligence-and-futuristic-digital-for-future-on-dark-blue-background-vector.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex w-[75%] h-[60%] mt-[12%]">
        <div className="w-2/5 "></div>
        <div className="w-3/5 flex directon-column flex-col justify-start">
          <div className="mt-10 ml-6">
            <div className="width=[100%]">
              <h2
                className="text-[40px] mb-5 font-semibold text-white"
                style={{ letterSpacing: "0.7px" }}
              >
                Delivering Superior Services
                <br />
                <span className="text-blue-700">IT Solutions.</span>
              </h2>
            </div>
            <div className="width=[100%]">
              <p className="font-[400] mb-[30px] text-white">
                You can easily change any design to your own. It is also highly
                customizable SEO friendly template.
              </p>
            </div>
            <div
              className="flex justify-start mt-4 mb-4"
              style={{ alignItems: "center" }}
            >
              <div>
                <a
                  href=""
                  style={{
                    color: "#025add",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                >
                  <FaTwitter />
                </a>
              </div>
              <a
                href=""
                style={{
                  color: "#025add",
                  borderRadius: "50%",
                  fontSize: "20px",
                  marginLeft: "20px",
                }}
              >
                <FaFacebook />
              </a>
              <a
                href=""
                style={{
                  color: "#025add",
                  borderRadius: "50%",
                  fontSize: "20px",
                  marginLeft: "20px",
                }}
              >
                <FaLinkedin />
              </a>
              <a
                href=""
                style={{
                  color: "#025add",
                  borderRadius: "50%",
                  fontSize: "20px",
                  marginLeft: "20px",
                }}
              >
                <FaInstagram />
              </a>
            </div>
            <div className="flex justify-start">
              <button
                className="text-[14px] font-[500] py-[14px] px-[20px] text-white bg-blue-700 hover:bg-blue-600"
                style={{ letterSpacing: "1px", borderRadius: "50px" }}
              >
                Get Quotes
              </button>
              <button
                className="text-[14px] font-[500] py-[14px] px-[20px] text-white bg-blue-700 hover:bg-blue-600"
                style={{ letterSpacing: "1px", borderRadius: "50px", marginLeft:"15px"}}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
