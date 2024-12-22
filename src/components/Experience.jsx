import React from "react";

export default function Experience() {
  return (
    <>
      <h3 className="mb-4 text-xl">EXPERIENCE</h3>
      <div className="container h-full grid grid-rows-3 gap-y-6 border-b-2 pb-5">
        <div className="container grid grid-row-[2rem_2rem_1fr] grid-cols-2 mb-3">
          <h3 className="text-lg font-semibold">React Developing</h3>
          <p className="text-sm text-gray-600 justify-self-end pr-7">
            Sep 2024 - Dec 2024
          </p>
          <p className="text-sm text-gray-600">Belarusian State University</p>
          <p className="row-start-3 row-end-4 col-span-2 text-sm mt-2">
            Within the university React course, a variety of complex and
            interesting tasks were tackled, which allowed not only to master
            fundamental knowledge but also to develop practical skills.
          </p>
        </div>
        <div className="container grid grid-row-[2rem_2rem_1fr] grid-cols-2 mb-3">
          <h3 className="text-lg font-semibold">Web Designing</h3>
          <p className="text-sm text-gray-600 justify-self-end pr-7">
            Jul 2024 - Aug 2024
          </p>
          <p className="text-sm text-gray-600">Freelance</p>
          <p className="row-start-3 row-end-4 col-span-2 text-sm mt-2">
            One notable freelance experience involved creating a layout for a
            small landing page. The process included understanding the client's
            target audience, selecting appropriate typography and color schemes,
            and ensuring the layout was both visually appealing and functional.
          </p>
        </div>
        <div className="container grid grid-row-[2rem_2rem_1fr] grid-cols-2 mb-3">
          <h3 className="text-lg font-semibold">UI/UX Design Project</h3>
          <p className="text-sm text-gray-600 justify-self-end pr-7">
            Mar 2024 - Apr 2024
          </p>
          <p className="text-sm text-gray-600">Freelance</p>
          <p className="row-start-3 row-end-4 col-span-2 text-sm mt-2">
            I worked on a freelance project to redesign the user interface of a
            mobile app. The goal was to improve usability and enhance the
            overall user experience. I developed a prototype using Figma. The
            project received positive feedback from the client.
          </p>
        </div>
      </div>
    </>
  );
}
