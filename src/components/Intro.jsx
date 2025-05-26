import photo from "../assets/images/me.jpg";

function Intro() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-8">
        <p className="text-6xl font-bold">Ethan Zhou</p>
      </div>
      <div className="mx-8">
        <img src={photo} alt="Ethan Zhou" className="w-63 h-84" />
      </div>
    </div>
  );
}
export default Intro;
