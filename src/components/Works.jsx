import React from "react";

export default function Works() {
  return (
    <main className="container w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="grid grid-rows-[17rem_2rem_1fr_3rem_3rem] gap-2 p-5">
        <div className="max-w[30rem] items-center">
          <img className="w-9/12" src="./todoist.PNG" alt="" />
        </div>
        <h3 className="text-xl">TODOIST</h3>
        <p>
          The Todoist is an app allows users to manage tasks with unique
          identifiers, titles, descriptions, and importance levels. Key features
          include hiding completed tasks, searching by title and description
          (case-insensitive), and filtering by severity using multiselect
          options.
        </p>
        <p>Technologies: react, react-dom, chance, debounce, uuid</p>
        <button className="p-4 bg-blue-500 text-white rounded">
          <a href="https://github.com/mikasony1/todoist-react.git">
            View in github
          </a>
        </button>
      </div>
      <div className="grid grid-rows-[22rem_2rem_1fr_3rem_3rem] gap-2 p-5">
        <div className="max-w[30rem]">
          <img className="w-9/12" src="./lamoda.png" alt="" />
        </div>
        <h3 className="text-xl">LAMODA</h3>
        <p>
          Application with advanced product filtering and sorting capabilities.
          The application allows users to browse and manage products using
          searching by product name and description (case-insensitive),
          filtering by color (multiselect), price range, and category.
        </p>
        <p>Technologies: react, react-dom, chance, debounce, uuid</p>
        <button className="p-4 bg-blue-500 text-white rounded">
          <a href="https://github.com/mikasony1/lamoda-react.git">
            View in github
          </a>
        </button>
      </div>
      <div className="grid grid-rows-[12rem_2rem_1frrem_3rem_3rem] gap-2 p-5">
        <div className="w-full">
          <img className="w-9/12" src="./notion.png" alt="" />
        </div>
        <h3 className="text-xl">NOTION</h3>
        <p>
          Multi-user note application where each user can create, edit, and
          delete their own notes. The application features user registration and
          login, with data validation, user sessions are managed using React
          Context. The app includes a home page displaying user details, a notes
          page with sorting and pagination, and dedicated pages for creating,
          editing, and viewing notes. Users can also search for notes.
        </p>
        <p>
          Technologies: react, react-router-dom, react-router, json-server,
          react-hook-form, uuid
        </p>
        <button className="p-4 bg-blue-500 text-white rounded">
          <a href="https://github.com/mikasony1/notion-react.git">
            View in github
          </a>
        </button>
      </div>
      <div className="grid grid-rows-[12rem_2rem_1frrem_3rem_3rem] gap-2 p-5">
        <div className="w-full">
          <img className="w-9/12" src="./spa.png" alt="" />
        </div>
        <h3 className="text-xl">SPA & API</h3>
        <p>
          Multi-page application with React Router and JSONPlaceholder. It
          includes pages for displaying a list of users, detailed user
          information with their albums, a list of albums, and individual album
          pages with photos. Each page includes loading indicators. The
          application also handles unsupported routes with a custom 404 page,
          guiding users back to the main page.
        </p>
        <p>
          Technologies: react, react-router-dom, react-router, @emotion/react,
          @mui/material, @emotion/styled
        </p>
        <button className="p-4 bg-blue-500 text-white rounded">
          <a href="https://github.com/mikasony1/spa-api-rect.git">
            View in github
          </a>
        </button>
      </div>
    </main>
  );
}
