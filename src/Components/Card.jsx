import React, { useRef } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({ data ,reference }) {

  return (

    <motion.div drag whileDrag={{scale: 1.1}} dragElastic={0.2} dragConstraints={reference} className="relative flex-shrink-0 text-white py-10 px-5 w-56 h-72 rounded-[30px] overflow-hidden bg-zinc-900/90">
      <FaRegFileAlt></FaRegFileAlt>
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full ">
        <div className="flex items-center justify-between px-8 mb-2 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".8em" color="#fff" />}
          </span>
        </div>

        {
            data.tag.isOpen ? (
                <div className={`tag w-full py-3 bg-${data.tag.tagColor}-400 flex items-center justify-center`}>
                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
              </div>
              
        ) : null
        }
      </div>
    </motion.div>
  );
}

export default Card;
