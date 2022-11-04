import Game from "./components/Game";

function App() {
  return (
    <div className="bg-black">
      <div className="gradient-background px-4 sm:px-48 py-6 pb-32">
        <div className="flex justify-between items-center">
          <h1 className="mx-auto sm:mx-0 text-2xl text-white font-bold ">
            To the Moon
          </h1>
          <button className="hidden sm:block font-bold tracking-wider">
            Connect Wallet
          </button>
        </div>

        <div className="my-6"></div>

        <div className="text-center mx-auto">
          <h3 className="font-bold text-3xl tracking-wider">
            Play and earn <span className="text-[#B98DDB]">$TRON</span>
          </h3>

          <div className="my-2"></div>

          <h6 className="max-w-sm text-center mx-auto">
            Take part in today‘s prize pool of 15.0 $TRON! Pay only 0.5 $TRON to
            play!
          </h6>
        </div>

        <div className="my-8"></div>

        <div className="max-w-sm mx-auto ">
          <Game />
        </div>

        <div className="my-16"></div>

        <div className="backdrop-blur-sm px-8 py-8 bg-opacity-10 rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <h4 className="text-3xl font-bold tracking-wider">Tournament #1</h4>
            <h6 className="text-xl tracking-wider">
              Ends in <span className="text-[#B98DDB]">22H : 32M : 20S </span>
            </h6>
          </div>

          <div className="my-6"></div>

          <div className="grid grid-cols-4">
            <h6 className="tracking-wider col-span-2 uppercase text-lg">
              Player
            </h6>
            <h6 className="tracking-wider uppercase text-lg text-right">
              SCORE
            </h6>
            <h6 className="tracking-wider uppercase text-lg text-right">
              PRIZE
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
