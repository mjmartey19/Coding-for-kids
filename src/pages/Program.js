import React from "react";
import Navbar from "../Components/Navbar";
import { programs } from "./../constants";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Program() {
  let i = sessionStorage.getItem("index");
  return (
    <div>
      {
        <div className="relative">
          <div
            className="flex-col justify-center items-center gap-2 flex hover:shadow-card w-full h-[400px] bg-slate-400 "
            style={{
              backgroundImage: `url(${programs[i].image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-center text-white text-4xl font-bold mx-5 bg-black/50 py-10 px-5 w-full">
              {programs[i].title}
            </h3>
          </div>
          <Link 
            to="/#program"
          className="absolute top-5 left-5">
            <BsArrowLeftCircle color="#fff" size={30}
             
            />
          </Link>
          <div className="my-20 px-20 ">
            <p className="text-slate-900 text-lg font-normal leading-normal mx-5 ">
              {programs[i].description}
            </p>
          </div>
        </div>
      }
    </div>
  );
}

export default Program;
