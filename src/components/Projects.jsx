import bloomtrace from "../assets/images/bloomtrace.png";
import gameimage from "../assets/images/gameimage.png";
import mmtracker from "../assets/images/mmtracker.png";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-102 transition-transform duration-300">
          <img
            src={gameimage}
            alt="Game Image"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Attack of the Undead</h2>
          <p className="text-gray-700">
            A game that showcases various features and functionalities.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-102 transition-transform duration-300">
          <img
            src={mmtracker}
            alt="MM Tracker"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">MM Tracker</h2>
          <p className="text-gray-700">
            A tool for tracking and managing MM data.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-102 transition-transform duration-300">
          <img
            src={bloomtrace}
            alt="Bloomtrace"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">BloomTrace</h2>
          <p className="text-gray-700">
            A web application for tracking and analyzing bloom data.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Projects;
