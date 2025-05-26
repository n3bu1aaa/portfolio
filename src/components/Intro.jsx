import photo from "../assets/images/me.jpg";

function Intro() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-gray-100/30 backdrop-blur-md rounded-2xl w-5/6 h-5/6 flex items-center justify-center">
        <div className="mx-8 rounded-lg p-8">
          <p className="font-roboto text-4xl">Hello! I'm </p>
          <p className="text-6xl font-semibold">Ethan Zhou</p>
          <p className="font-roboto text-2xl w-150 mt-8">
            My passions include solving Rubik’s cubes and playing music. In my
            freetime, I play the New York Times daily puzzles. I enjoy being
            passionate about the things I love and I hope to share it to the
            world one day!
          </p>
        </div>
        <div className="mx-8">
          <img
            src={photo}
            alt="Ethan Zhou"
            className="w-94.5 h-126 rounded-xl ring-4 ring-gray-700 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
export default Intro;
