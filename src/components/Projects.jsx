import bloomtrace from "../assets/images/bloomtrace.png";
import gameimage from "../assets/images/gameimage.png";
import mmtracker from "../assets/images/mmtracker.png";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-16">
      <h1 className="text-4xl font-semibold mb-8 mt-32">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-18">
        <div className="card bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <div className="front-page">
            <img
              src={gameimage}
              alt="Game Image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="back-page flex items-center justify-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Attack of the Undead</h2>
              <p className="text-gray-700">
                Made for the culminating project for ICS-3U1. <br></br>{" "}
                <br></br>
                Created with pygame, this game features collision systems, an
                inventory, a variety of weapons and much more.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-lg rounded-lg hover:scale-102 hover:shadow-xl transition-transform duration-300">
          <div className="front-page">
            <img
              src={mmtracker}
              alt="MM Tracker"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="back-page flex items-center justify-center">
            <div>
              <h2 className="text-xl font-bold mb-2">
                Milliken Music Ticket Tracker
              </h2>
              <p className="text-gray-700">
                A project intended to organize tickets for music events at our
                school. Involves database management and user authentication.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-lg rounded-lg hover:scale-102 hover:shadow-xl transition-transform duration-300">
          <div className="front-page">
            <img
              src={bloomtrace}
              alt="Bloomtrace"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="back-page flex items-center justify-center">
            <div>
              <h2 className="text-xl font-bold mb-2">BloomTrace</h2>
              <p className="text-gray-700 mx-8">
                Made at JamHacks 9 at Waterloo. <br></br>
                <br></br>This project was made to aid people who struggle with
                hand tremors and make dexterity exercises a fun and enjoyable
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
