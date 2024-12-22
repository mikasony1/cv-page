import React from "react";

export default function Education() {
  return (
    <div className="grid grid-cols-2 grid-rows-[1.5rem_1fr] gap-x-4 gap-y-4 border-b-2 max-h-min pb-5">
      <h3 className="mb-5 col-span-2 text-xl">EDUCATION</h3>
      <div className="h-fit">
        <h4 className="text-lg font-semibold">Math and Computer Science</h4>
        <p className="text-sm text-gray-600">Belarusian State University</p>
        <p className="text-sm mt-2">
          I am currently studying on the second year at BSU, majoring in
          Software for Mobile Devices.
        </p>
      </div>
      <div className="h-fit">
        <h4 className="text-lg font-semibold">Frontend Developing: React</h4>
        <p className="text-sm text-gray-600">Courses</p>
        <p className="text-sm mt-2">
          I am taking a React course to solidify my knowledge and practical
          skills acquired at university.
        </p>
      </div>
    </div>
  );
}
