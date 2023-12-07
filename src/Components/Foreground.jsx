import React from "react";
import Card from "./Card";
import { useRef } from "react";

function Foreground() {

    const ref = useRef(null);   

  const data = [
    {
      desc: "This is the data which is dinamically representing to you from an array of objects",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the data which is dinamically representing to you from an array of objects",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is the data which is dinamically representing to you from an array of objects",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="w-full h-full top-0 left-0 fixed z-[3] flex flex-wrap gap-10 p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
