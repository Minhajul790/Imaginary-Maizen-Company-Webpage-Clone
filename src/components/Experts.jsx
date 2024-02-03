import React from "react";
import laptop from "../assets/img/laptop.jpg";

const Experts = () => {
  return (
    <div className=" max-w-[1240px] p-2 mx-auto md:grid grid-cols-2">
      <div className="col-span-1  md:w-[80%] text-center">
        <img src={laptop} alt="" srcset="" className=" inline" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
        <p className=" my-2 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          sapiente quisquam recusandae tempora nostrum nisi nulla corrupti quas
          officiis aspernatur, debitis molestiae fugit doloremque cumque
          consequuntur unde, eligendi illo. Officia.
        </p>
        <button className=" w-[30%] inline bg-black text-white p-3 rounded ">Get started</button>
      </div>
    </div>
  );
};

export default Experts;
