import { Game1, Game2, Game3, Game4, Game5, Game6, PowerBall, PrizeDiv2, f1 } from "../assets"
import { useState } from "react"

export function Winner() {
  const [show, setShow] = useState(false);
  const [button, setButton] = useState("VIEW MORE");
  const handleClick = () =>{
    setButton(() => {
      return button == 'VIEW MORE' ? 'VIEW LESS' : 'VIEW MORE'
    });
    setShow(!show);
  }
  return (
    <div className="prize-bg2 bg-no-repeat bg-cover w-[100vw] flex flex-col items-center justify-start mt-24 gap-10 mb-[50vh]">
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-3xl min-h-[30vh] min-w-[80vw] lg:px-4 lg:py-10 py-4 px-6`}
      >
        <div className="flex flex-row items-center justify-center w-full gap-[8vw] flex-wrap px-6 py-1">
          <div className="flex flex-col items-center justify-center gap-5 w-full max-w-2xl">
            <div className="flex flex-row items-center justify-between w-full gap-10 ">
              <div className="flex flex-row items-center justify-center gap-2">
                <img
                  src={Game4}
                  alt=""
                  className="w-[10vw] h-[10vw] lg:w-[5.5vw] lg:h-[5.5vw]"
                />
                <p className="text-[2.5vw] lg:text-[1.5vw]">FUN KENO</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  draw took place on
                </p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  Saturday April 20, 2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[2.5vw] lg:text-[1.5vw]">WINNING NUMBERS:</p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  {'View All Results >'}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-3xl w-full h-[7vh] bg-[#FFFFFF] max-w-lg">
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-3xl min-h-[30vh] min-w-[80vw] lg:px-4 lg:py-10 py-4 px-6`}
      >
        <div className="flex flex-row items-center justify-center w-full gap-[8vw] flex-wrap px-6 py-1">
          <div className="flex flex-col items-center justify-center gap-5 w-full max-w-2xl">
            <div className="flex flex-row items-center justify-between w-full gap-10 ">
              <div className="flex flex-row items-center justify-center gap-2">
                <img
                  src={Game1}
                  alt=""
                  className="w-[10vw] h-[10vw] lg:w-[5.5vw] lg:h-[5.5vw]"
                />
                <p className="text-[2.5vw] lg:text-[1.5vw]">SUPER DICE</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  draw took place on
                </p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  Saturday April 20, 2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[2.5vw] lg:text-[1.5vw]">WINNING NUMBERS:</p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  {'View All Results >'}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-3xl w-full h-[7vh] bg-[#FFFFFF] max-w-lg">
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-3xl min-h-[30vh] min-w-[80vw] lg:px-4 lg:py-10 py-4 px-6`}
      >
        <div className="flex flex-row items-center justify-center w-full gap-[8vw] flex-wrap px-6 py-1">
          <div className="flex flex-col items-center justify-center gap-5 w-full max-w-2xl">
            <div className="flex flex-row items-center justify-between w-full gap-10 ">
              <div className="flex flex-row items-center justify-center gap-2">
                <img
                  src={Game2}
                  alt=""
                  className="w-[10vw] h-[10vw] lg:w-[5.5vw] lg:h-[5.5vw]"
                />
                <p className="text-[2.5vw] lg:text-[1.5vw]">CAR RACING</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  draw took place on
                </p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  Saturday April 20, 2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[2.5vw] lg:text-[1.5vw]">WINNING NUMBERS:</p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  {'View All Results >'}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-3xl w-full h-[7vh] bg-[#FFFFFF] max-w-lg">
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-3xl min-h-[30vh] min-w-[80vw] lg:px-4 lg:py-10 py-4 px-6`}
      >
        <div className="flex flex-row items-center justify-center w-full gap-[8vw] flex-wrap px-6 py-1">
          <div className="flex flex-col items-center justify-center gap-5 w-full max-w-2xl">
            <div className="flex flex-row items-center justify-between w-full gap-10 ">
              <div className="flex flex-row items-center justify-center gap-2">
                <img
                  src={Game5}
                  alt=""
                  className="w-[10vw] h-[10vw] lg:w-[5.5vw] lg:h-[5.5vw]"
                />
                <p className="text-[2.5vw] lg:text-[1.5vw]">HORSE RACING</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  draw took place on
                </p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  Saturday April 20, 2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[2.5vw] lg:text-[1.5vw]">WINNING NUMBERS:</p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  {'View All Results >'}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-3xl w-full h-[7vh] bg-[#FFFFFF] max-w-lg">
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          show ? 'block' : 'hidden'
        } bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-3xl min-h-[30vh] min-w-[80vw] lg:px-4 lg:py-10 py-4 px-6`}
      >
        <div className="flex flex-row items-center justify-center w-full gap-[8vw] flex-wrap px-6 py-1">
          <div className="flex flex-col items-center justify-center gap-5 w-full max-w-2xl">
            <div className="flex flex-row items-center justify-between w-full gap-10 ">
              <div className="flex flex-row items-center justify-center gap-2">
                <img
                  src={Game3}
                  alt=""
                  className="w-[10vw] h-[10vw] lg:w-[5.5vw] lg:h-[5.5vw]"
                />
                <p className="text-[2.5vw] lg:text-[1.5vw]">LUCKEY 5D</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  draw took place on
                </p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  Saturday April 20, 2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[2.5vw] lg:text-[1.5vw]">WINNING NUMBERS:</p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  {'View All Results >'}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-3xl w-full h-[7vh] bg-[#FFFFFF] max-w-lg">
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          show ? 'block' : 'hidden'
        } bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-3xl min-h-[30vh] min-w-[80vw] lg:px-4 lg:py-10 py-4 px-6`}
      >
        <div className="flex flex-row items-center justify-center w-full gap-[8vw] flex-wrap px-6 py-1">
          <div className="flex flex-col items-center justify-center gap-5 w-full max-w-2xl">
            <div className="flex flex-row items-center justify-between w-full gap-10 ">
              <div className="flex flex-row items-center justify-center gap-2">
                <img
                  src={Game6}
                  alt=""
                  className="w-[10vw] h-[10vw] lg:w-[5.5vw] lg:h-[5.5vw]"
                />
                <p className="text-[2.5vw] lg:text-[1.5vw]">POWER BALL</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  draw took place on
                </p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  Saturday April 20, 2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[2.5vw] lg:text-[1.5vw]">WINNING NUMBERS:</p>
                <p className="text-[2.5vw] lg:text-[1.5vw]">
                  {'View All Results >'}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-3xl w-full h-[7vh] bg-[#FFFFFF] max-w-lg">
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
                <div className="grid place-content-center rounded-full w-[5vh] h-[5vh] bg-gradient-to-r from-[#FFA200] to-[#FF710A]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-2xl shadow-lg flex flex-col items-start justify-center px-6 py-4 max-w-md">
              <p className="text-[2.5vw] lg:text-[1.5vw]">
                Live Drawings, Unveiling the Winners !
              </p>
              <div className="rounded-full w-[9vw] h-[3vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer">
                  Click to Watch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full flex flex-row items-center justify-center w-full max-w-xs mx-auto bg-gradient-to-b from-[#FF8644] to-[#FF5A00] w-[25vh] h-[5vh] grid place-content-center text-white cursor-pointer" onClick={handleClick}>
        {button}
      </div>
    </div>
  )
}

export function Result() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")
  const [value4, setValue4] = useState("")
  const [value5, setValue5] = useState("")
  const [value6, setValue6] = useState("")
  const onChangeHandler1 = (e) =>{
    setValue1(e.target.value);
  }
  const onChangeHandler2 = (e) =>{
    setValue2(e.target.value);
  }
  const onChangeHandler3 = (e) =>{
    setValue3(e.target.value);
  }
  const onChangeHandler4 = (e) =>{
    setValue4(e.target.value);
  }
  const onChangeHandler5 = (e) =>{
    setValue5(e.target.value);
  }
  const onChangeHandler6 = (e) =>{
    setValue6(e.target.value);
  }
  return (
    <div className="flex flex-col items-start justify-center gap-10 lg:px-6 lg:py-4 px-2 py-2 w-full max-w-[70vw] mx-auto">
      <div>
        <p className="text-[2.5vw] lg:text-[1.5vw] font-bold text-[#793300]">
          {'rESULT cHECKING'.toUpperCase()}
        </p>
        <hr className="h-[2vh] w-[15vw] bg-[#FF7429]" />
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-[70vw] flex-wrap mx-auto gap-5 lg:gap-10">
        <div className="w-[60vw] lg:w-[20vw] h-[20vh] bg-[#EE6D05] flex flex-col justify-center items-start lg:px-6 lg:py-2 px-2 py-2">
          <form className="w-[60vw] lg:w-[20vw] h-[20vh] flex flex-col justify-center items-start lg:px-6 lg:py-2 px-2 py-2">
            <label
              htmlFor="cars"
              className="text-[2.5vw] lg:text-[0.9vw] font-bold text-[#793300]"
            >
              {'Select a Game'.toUpperCase()}
            </label>

            <select name="games" id="games">
              <option value="SUPER DICE">SUPER DICE</option>
              <option value="CAR RACING">CAR RACING</option>
              <option value="LUCKY 5D">LUCKY 5D</option>
              <option value="FUN KENO">FUN KENO</option>
              <option value="HORSE RACING">HORSE RACING</option>
              <option value="POWER BALL">POWER BALL</option>
            </select>
          </form>
        </div>
        <div className="w-[60vw] lg:w-[20vw] h-[20vh] bg-[#fbeee6] flex flex-col justify-center items-start lg:px-6 lg:py-2 px-2 py-2 rounded-2xl">
          <form className="w-[60vw] lg:w-[20vw] h-[20vh] flex flex-col justify-center items-start lg:px-6 lg:py-2 px-2 py-2">
            <label
              htmlFor="cars"
              className="text-[2.5vw] lg:text-[0.9vw] font-bold text-[#793300]"
            >
              {'Pick a date'.toUpperCase()}
            </label>

            <select name="games" id="games">
              <option value="SUPER DICE">SUPER DICE</option>
              <option value="CAR RACING">CAR RACING</option>
              <option value="LUCKY 5D">LUCKY 5D</option>
              <option value="FUN KENO">FUN KENO</option>
              <option value="HORSE RACING">HORSE RACING</option>
              <option value="POWER BALL">POWER BALL</option>
            </select>
          </form>
        </div>
        <div className="w-[60vw] lg:w-[20vw] h-[20vh] bg-[#faede6] flex flex-col justify-center items-start lg:px-6 lg:py-2 px-2 py-2 rounded-2xl">
          <form className="w-[60vw] lg:w-[20vw] h-[20vh] flex flex-col justify-center items-start lg:px-6 lg:py-2 px-2 py-2 gap-5">
            <label
              htmlFor="cars"
              className="text-[2.5vw] lg:text-[0.9vw] font-bold text-[#793300]"
            >
              {'Enter Your Numbers'.toUpperCase()}
            </label>
            <div className="flex flex-row items-center justify-between w-full max-w-xs px-2 lg:px-6">
              <input
                type="text"
                onChange={onChangeHandler1}
                value={value1}
                className="rounded-md lg:rounded-xl w-[4vh] h-[4vh] shadow-inner "
              />
              <input
                type="text"
                onChange={onChangeHandler2}
                value={value2}
                className="rounded-md lg:rounded-xl w-[4vh] h-[4vh] shadow-inner "
              />
              <input
                type="text"
                onChange={onChangeHandler3}
                value={value3}
                className="rounded-md lg:rounded-xl w-[4vh] h-[4vh] shadow-inner "
              />
              <input
                type="text"
                onChange={onChangeHandler4}
                value={value4}
                className="rounded-md lg:rounded-xl w-[4vh] h-[4vh] shadow-inner "
              />
              <input
                type="text"
                onChange={onChangeHandler5}
                value={value5}
                className="rounded-md lg:rounded-xl w-[4vh] h-[4vh] shadow-inner "
              />
              <input
                type="text"
                onChange={onChangeHandler6}
                value={value6}
                className="rounded-md lg:rounded-xl w-[4vh] h-[4vh] shadow-inner "
              />
            </div>
            <div className="w-full max-w-xs flex flex-row items-center justify-end px-2 lg:px-6">
              <div className="rounded-full w-[7vh] h-[4vh] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                <div className="h-full grid place-content-center cursor-pointer text-[2.5vw] lg:text-[0.9vw] font-bold px-2 lg:px-6">
                  Check
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export function Main() {
  return (
    <div className="bg-prize-bg bg-no-repeat bg-cover w-full h-[60vh] lg:h-[84vh] ">
      <div className="bg-prize-div bg-no-repeat bg-contain w-full h-full lg:px-6 lg:py-4 px-2 py-2">
        <div className="flex flex-row items-center justify-around h-full gap-[5vh] px-6 py-4">
          <div className="-mt-[8vh]">
            <img src={PrizeDiv2} />
          </div>
          <div className="flex flex-col items-start justify-center h-full gap-[5vh]">
            <p className="text-[2.5vw] lg:text-[2vw] font-bold">
              {'Prize Gaming'.toUpperCase()}
            </p>
            <p className="text-[2.5vw] lg:text-[1.5vw] max-w-md font-bold">
              {'Try Your Luck NOw！Awesome Prizes Waiting for you'.toUpperCase()}
            </p>
            <hr className="h-[2vh] w-[15vw] bg-[#FF7429]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Prize() {
  return (
    <>
      <Main />
      <Result />
      <Winner />
    </>
  )
}
export default Prize