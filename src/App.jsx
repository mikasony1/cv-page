import React from "react";
import Header from "./Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Languages from "./components/Languages";
import Skills from "./components/Skils";
import Contacts from "./components/Contacts";
import Works from "./components/Works";

function App() {
  return (
    <div className="container h-min xl:w-3/4 lg:w-4/5 mx-auto border-y-2 border-x-2 border-b-2">
      <Header />
      <nav className="flex items-center justify-center col-span-2 border-y-2 py-2 gap-4">
        <a href="#works" className="text-blue-500 hover:underline">
          Works
        </a>
      </nav>
      <div className="grid grid-rows-[1fr] grid-cols-[1.5fr_1fr] px-5">
        <div className="col-start-1 col-end-2">
          <section className="p-5 pb-0">
            <Education />
          </section>
          <section className="h-fit p-5 pb-0">
            <Experience />
          </section>
          <section className="h-fit p-5 border-b-2">
            <Contacts />
          </section>
        </div>
        <div className="border-l-2">
          <section className="h-fit p-5 pb-0">
            <Profile />
          </section>
          <section className="h-fit p-5 pb-0">
            <Languages />
          </section>
          <section className="p-5 border-b-2">
            <Skills />
          </section>
        </div>
      </div>
      <section id="works" className="w-full">
        <h3 className="mb-4 text-lg pl-10 mt-5">WORKS</h3>
        <Works />
      </section>
    </div>
  );
}

export default App;
