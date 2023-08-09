import {
  Game1,
  Game2,
  Game3,
  Game4,
  Game5,
  Game6,
  PowerBall,
  PrizeDiv2,
  f1,
} from "../assets";
import { useState } from "react";

export function Winner() {
  const [show, setShow] = useState(false);
  const [button, setButton] = useState("VIEW MORE");
  const handleClick = () => {
    setButton(() => {
      return button == "VIEW MORE" ? "VIEW LESS" : "VIEW MORE";
    });
    setShow(!show);
  };
  return (
    <div className="prize-bg2 bg-no-repeat bg-cover w-[100vw] flex flex-col items-center justify-start mt-24 gap-10 mb-[50vh]">
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] md:px-6 md:py-2">
          <div className="flex flex-col items-center justify-center gap-[1vw] w-full">
            <div className="flex flex-row items-center justify-between w-full gap-[5vw] ">
              <div className="flex flex-row items-center justify-center gap-[1vw]">
                <img src={PowerBall} alt="" className="w-[5.5vw] h-[5.5vw] " />
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  POWER BALL
                </p>
              </div>
              <div className="flex flex-col items-end justify-start">
                <p className="text-[0.7vw] md:text-[1vw] text-[#b08379]">
                  DRAW TOOK PLACE ON
                </p>
                <p className="text-[1vw] md:text-[1.3vw] text-[#9b643c]">
                  SATURDAY APRIL 20,2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {"View All Results >"}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-full w-full h-[4vw] bg-[#FFFFFF] max-w-[35vw]">
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  1
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  39
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  42
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  12
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  4
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  15
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  63
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vw] w-[30vw] aspect-video">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] md:px-6 md:py-2">
          <div className="flex flex-col items-center justify-center gap-[1vw] w-full">
            <div className="flex flex-row items-center justify-between w-full gap-[5vw] ">
              <div className="flex flex-row items-center justify-center gap-[1vw]">
                <img src={PowerBall} alt="" className="w-[5.5vw] h-[5.5vw] " />
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  POWER BALL
                </p>
              </div>
              <div className="flex flex-col items-end justify-start">
                <p className="text-[0.7vw] md:text-[1vw] text-[#b08379]">
                  DRAW TOOK PLACE ON
                </p>
                <p className="text-[1vw] md:text-[1.3vw] text-[#9b643c]">
                  SATURDAY APRIL 20,2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {"View All Results >"}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-full w-full h-[4vw] bg-[#FFFFFF] max-w-[35vw]">
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  1
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  39
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  42
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  12
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  4
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  15
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  63
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vw] w-[30vw] aspect-video">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] md:px-6 md:py-2">
          <div className="flex flex-col items-center justify-center gap-[1vw] w-full">
            <div className="flex flex-row items-center justify-between w-full gap-[5vw] ">
              <div className="flex flex-row items-center justify-center gap-[1vw]">
                <img src={PowerBall} alt="" className="w-[5.5vw] h-[5.5vw] " />
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  POWER BALL
                </p>
              </div>
              <div className="flex flex-col items-end justify-start">
                <p className="text-[0.7vw] md:text-[1vw] text-[#b08379]">
                  DRAW TOOK PLACE ON
                </p>
                <p className="text-[1vw] md:text-[1.3vw] text-[#9b643c]">
                  SATURDAY APRIL 20,2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {"View All Results >"}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-full w-full h-[4vw] bg-[#FFFFFF] max-w-[35vw]">
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  1
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  39
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  42
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  12
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  4
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  15
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  63
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vw] w-[30vw] aspect-video">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] md:px-6 md:py-2">
          <div className="flex flex-col items-center justify-center gap-[1vw] w-full">
            <div className="flex flex-row items-center justify-between w-full gap-[5vw] ">
              <div className="flex flex-row items-center justify-center gap-[1vw]">
                <img src={PowerBall} alt="" className="w-[5.5vw] h-[5.5vw] " />
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  POWER BALL
                </p>
              </div>
              <div className="flex flex-col items-end justify-start">
                <p className="text-[0.7vw] md:text-[1vw] text-[#b08379]">
                  DRAW TOOK PLACE ON
                </p>
                <p className="text-[1vw] md:text-[1.3vw] text-[#9b643c]">
                  SATURDAY APRIL 20,2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {"View All Results >"}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-full w-full h-[4vw] bg-[#FFFFFF] max-w-[35vw]">
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  1
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  39
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  42
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  12
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  4
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  15
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  63
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vw] w-[30vw] aspect-video">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] md:px-6 md:py-2">
          <div className="flex flex-col items-center justify-center gap-[1vw] w-full">
            <div className="flex flex-row items-center justify-between w-full gap-[5vw] ">
              <div className="flex flex-row items-center justify-center gap-[1vw]">
                <img src={PowerBall} alt="" className="w-[5.5vw] h-[5.5vw] " />
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  POWER BALL
                </p>
              </div>
              <div className="flex flex-col items-end justify-start">
                <p className="text-[0.7vw] md:text-[1vw] text-[#b08379]">
                  DRAW TOOK PLACE ON
                </p>
                <p className="text-[1vw] md:text-[1.3vw] text-[#9b643c]">
                  SATURDAY APRIL 20,2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {"View All Results >"}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-full w-full h-[4vw] bg-[#FFFFFF] max-w-[35vw]">
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  1
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  39
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  42
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  12
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  4
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  15
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  63
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vw] w-[30vw] aspect-video">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] md:px-6 md:py-2">
          <div className="flex flex-col items-center justify-center gap-[1vw] w-full">
            <div className="flex flex-row items-center justify-between w-full gap-[5vw] ">
              <div className="flex flex-row items-center justify-center gap-[1vw]">
                <img src={PowerBall} alt="" className="w-[5.5vw] h-[5.5vw] " />
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  POWER BALL
                </p>
              </div>
              <div className="flex flex-col items-end justify-start">
                <p className="text-[0.7vw] md:text-[1vw] text-[#b08379]">
                  DRAW TOOK PLACE ON
                </p>
                <p className="text-[1vw] md:text-[1.3vw] text-[#9b643c]">
                  SATURDAY APRIL 20,2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.4vh] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {"View All Results >"}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-full w-full h-[4vw] bg-[#FFFFFF] max-w-[35vw]">
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  1
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  39
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  42
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  12
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  4
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  15
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.2vw] md:text-[1.5vw]">
                  63
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vw] w-[30vw] aspect-video">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-2 py-2 md:px-6 md:py-4 w-full">
              <div>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Live Drawings,
                </p>
                <p className="text-[0.7vw] md:text-[1vw] font-bold">
                  Unveiling the Winners !
                </p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-full max-w-xs mx-auto bg-gradient-to-b from-[#FF8644] to-[#FF5A00] w-[12vw] h-[2vw] grid place-content-center text-white cursor-pointer"
        onClick={handleClick}
      >
        {button}
      </div>
    </div>
  );
}

export function Result() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const onChangeHandler1 = (e) => {
    setValue1(e.target.value);
  };
  const onChangeHandler2 = (e) => {
    setValue2(e.target.value);
  };
  const onChangeHandler3 = (e) => {
    setValue3(e.target.value);
  };
  const onChangeHandler4 = (e) => {
    setValue4(e.target.value);
  };
  const onChangeHandler5 = (e) => {
    setValue5(e.target.value);
  };
  const onChangeHandler6 = (e) => {
    setValue6(e.target.value);
  };
  return (
    <div className="flex flex-col items-start justify-center gap-10 lg:px-6 lg:py-4 px-2 py-2 w-full max-w-[70vw] mx-auto">
      <div>
        <p className="text-[2.5vw] lg:text-[1.5vw] font-bold text-[#793300]">
          {"rESULT cHECKING".toUpperCase()}
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
              {"Select a Game".toUpperCase()}
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
              {"Pick a date".toUpperCase()}
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
              {"Enter Your Numbers".toUpperCase()}
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
  );
}

export function Main() {
  return (
    <div
      id="prizedrawing"
      className="bg-prize-bg bg-no-repeat bg-cover w-full h-[60vh] lg:h-[84vh] "
    >
      <div className="bg-prize-div bg-no-repeat bg-contain w-full h-full lg:px-6 lg:py-4 px-2 py-2">
        <div className="flex flex-row items-center justify-around h-full gap-[5vh] px-6 py-4">
          <div className="-mt-[8vh]">
            <img src={PrizeDiv2} className="w-[40vw] h-[40vw]" />
          </div>
          <div className="flex flex-col items-start justify-center h-full gap-[2vw]">
            <p className="text-[3.2vw] md:text-[3.5vw] text-[#832b00]">
              {"PRIZE GAMING".toUpperCase()}
            </p>
            <div>
              <p className="text-[2.4vw] md:text-[2.7vw]">
                {"TRY YOUR LUCK NOW!".toUpperCase()}
              </p>
              <p className="text-[2.4vw] md:text-[2.7vw]">
                {"AWESOME PRIZES WAITING FOR YOU".toUpperCase()}
              </p>
            </div>
            <hr className="h-[1vw] w-[15vw] bg-[#FF7429]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Prize() {
  return (
    <>
      <Main />
      <Result />
      <Winner />
    </>
  );
}
export default Prize;
