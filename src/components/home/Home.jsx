import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import content from "../content/content.json";
import Button from "../Buttons/Button";

const Home = () => {
  return (
    <div
      className="home-main flex w-screen h-screen justify-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/005/843/342/non_2x/abstract-technology-ai-computing-on-circle-concept-working-data-of-artificial-intelligence-and-futuristic-digital-for-future-on-dark-blue-background-vector.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
              <p className="font-[400] mb-[30px] text-white">{content.title}</p>
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
              <Button
                text="Get Quotes"
                paddingTop="14px"
                paddingBottom="14px"
                paddingLeft="20px"
                paddingRight="20px"
              ></Button>
              <Button
                text="Get Started"
                marginLeft="15px"
                paddingTop="14px"
                paddingBottom="14px"
                paddingLeft="20px"
                paddingRight="20px"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
