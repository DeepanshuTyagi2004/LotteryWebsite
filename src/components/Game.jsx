import {
  AboutDiv,
  Game1,
  Game2,
  Game3,
  Game4,
  Game5,
  Game6,
  GameDiv,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
} from "../assets";

export function Lotteries() {
  return (
    <div className="w-[100vw] min-h-[80vw] flex flex-col items-center justify-start gap-[2vw] max-w-[70vw] mx-auto mt-[5vw] mb-[10vw]">
      <div className="flex flex-col items-center justify-center h-full gap-[1vw]">
        <p className="text-[2vw] font-bold text-[#E25000] ">
          {"LOTTERIES".toUpperCase()}
        </p>
        <p className="text-[2vw] font-bold text-[#793300]">
          {"GET EXCLUSIVE ONLINE  PROMOTIONS".toUpperCase()}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-[70vw] mx-auto gap-[2vw]">
        <div className="flex flex-row items-center justify-between gap-[2vw] flex-wrap">
          <img src={f1} alt="f1" className="w-[24vw]" />
          <img src={f2} alt="f2" className="w-[24vw]" />
        </div>
        <div className="flex flex-row items-center justify-between gap-[3vw] flex-wrap">
          <img src={f3} alt="f3" className="w-[24vw]" />
          <img src={f4} alt="f4" className="w-[24vw]" />
        </div>
        <div className="flex flex-row items-center justify-between gap-[3vw] flex-wrap">
          <img src={f5} alt="f5" className="w-[15vw]" />
          <img src={f6} alt="f6" className="w-[15vw]" />
          <img src={f7} alt="f7" className="w-[15vw]" />
        </div>
      </div>
    </div>
  );
}

export function Banner() {
  return (
    <div className="w-[100vw] h-[10vh] bg-[#0b3547] text-white mt-[5vw]">
      <div className="w-full h-full max-w-[60vw] flex flex-row items-center justify-between mx-auto">
        <p className="text-[2.5vw] lg:text-[1.5vw] font-bold">
          If you have any query about lottery or anything !
        </p>
        <div className="rounded-full w-[8vw] h-[3vw] grid place-content-center bg-gradient-to-r from-[#FF9F56] to-[#FF7A18]">
          <p className="text-[0.8vw] font-bold">Contanct Us</p>
        </div>
      </div>
    </div>
  );
}

export function Games() {
  return (
    <div className="flex flex-col items-start justify-center lg:px-6 lg:py-4 px-2 py-2 w-full max-w-[70vw] mx-auto">
      <div>
        <p className="text-[2.5vw] font-bold text-[#793300]">
          {"OUr Attractive games".toUpperCase()}
        </p>
        <hr className="h-[1vw] w-[15vw] bg-[#FF7429]" />
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-[70vw] flex-wrap mx-auto gap-5 lg:gap-10">
        <div className="flex flex-col items-center justify-center text-[#793300] font-bold">
          <img
            src={Game1}
            alt="Game1"
            className="w-[10vh] h-[10vh] lg:w-[15vh] lg:h-[15vh] object-cover"
          />
          <p className="text-[1.2vw] lg:text-[0.9vw] lg:max-w-[15vw]">
            SUPER DICE
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-[#793300] font-bold">
          <img
            src={Game2}
            alt="Game1"
            className="w-[10vh] h-[10vh] lg:w-[15vh] lg:h-[15vh] object-cover"
          />
          <p className="text-[1.2vw] lg:text-[0.9vw] lg:max-w-[15vw]">
            CAR RACING
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-[#793300] font-bold">
          <img
            src={Game3}
            alt="Game1"
            className="w-[10vh] h-[10vh] lg:w-[15vh] lg:h-[15vh] object-cover"
          />
          <p className="text-[1.2vw] lg:text-[0.9vw] lg:max-w-[15vw]">
            LUCKY 5D
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-[#793300] font-bold">
          <img
            src={Game4}
            alt="Game1"
            className="w-[10vh] h-[10vh] lg:w-[15vh] lg:h-[15vh] object-cover"
          />
          <p className="text-[1.2vw] lg:text-[0.9vw] lg:max-w-[15vw]">
            FUN KENO
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-[#793300] font-bold">
          <img
            src={Game5}
            alt="Game1"
            className="w-[10vh] h-[10vh] lg:w-[15vh] lg:h-[15vh] object-cover"
          />
          <p className="text-[1.2vw] lg:text-[0.9vw] lg:max-w-[15vw]">
            HORSE RACING
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-[#793300] font-bold">
          <img
            src={Game6}
            alt="Game1"
            className="w-[10vh] h-[10vh] lg:w-[15vh] lg:h-[15vh] object-cover"
          />
          <p className="text-[1.2vw] lg:text-[0.9vw] lg:max-w-[15vw]">
            POWER BALL
          </p>
        </div>
      </div>
    </div>
  );
}
export function Main() {
  return (
    <div
      id="game"
      className="bg-about-bg bg-no-repeat bg-cover w-full h-[50vw] mt-[20vw] md:mt-[3vw]"
    >
      <div className="flex flex-row items-center justify-center h-full gap-[3vw]">
        <div className="flex flex-col items-start justify-center h-full gap-[2vw] max-w-[40vw] ">
          <p className="text-[3.2vw] md:text-[3.5vw] text-[#832b00]">
            {"The New Brand new design".toUpperCase()}
          </p>
          <div>
            <p className="text-[2.7vw] md:text-[3.0vw] font-bold text-[#f54200]">
              <em>{"Now we are upgraded".toUpperCase()}</em>
            </p>
            <p className="text-[2.4vw] md:text-[2.7vw]]">
              {"a comprehensive upgrade that blends with mongolian aesthetic".toUpperCase()}
            </p>
          </div>
          <hr className="h-[1vw] w-[15vw] bg-[#FF7429]" />
        </div>
        <div className="">
          <img src={GameDiv} alt="GameDiv" className="w-[40vw] h-[40vw]" />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <>
      <Main />
      <Games />
      <Banner />
      <Lotteries />
    </>
  );
}
export default Game;
