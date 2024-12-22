export default function Contacts() {
  return (
    <div className="p-5 bg-gray-100 min-h-12">
      <h2 className="text-2xl mb-4">Contacts</h2>
      <ul className="space-y-4">
        <li>
          <p className="text-lg">Email:</p>{" "}
          <a
            href="v.drozhyna@gmail.com"
            className="text-blue-500 hover:underline"
          >
            v.drozhyna@gmail.com
          </a>
        </li>
        <li>
          <p className="text-lg">LinkedIn:</p>{" "}
          <a
            href="https://www.linkedin.com/in/mikasony-1-346319343/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            www.linkedin.com/in/mikasony-1
          </a>
        </li>
        <li>
          <p className="text-lg">GitHub:</p>{" "}
          <a
            href="https://github.com/mikasony1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/mikasony1
          </a>
        </li>
      </ul>
    </div>
  );
}
