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
} from '../assets'
import { useState } from 'react'

export function Winner() {
  const [show, setShow] = useState(false)
  const [button, setButton] = useState('VIEW MORE')
  const handleClick = () => {
    setButton(() => {
      return button == 'VIEW MORE' ? 'VIEW LESS' : 'VIEW MORE'
    })
    setShow(!show)
  }
  return (
    <div className="prize-bg2 bg-no-repeat bg-cover w-[100vw] flex flex-col items-center justify-start mt-[5vw] gap-[5vw] mb-[50vh]">
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] px-[1vw] py-[1vw">
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
              <hr className="w-full h-[0.2vw] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {'View All Results >'}
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
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] px-[1vw] py-[1vw]">
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
              <hr className="w-full h-[0.2vw] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {'View All Results >'}
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
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] px-[1vw] py-[1vw]">
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
              <hr className="w-full h-[0.2vw] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {'View All Results >'}
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
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] px-[1vw] py-[1vw]">
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
              <hr className="w-full h-[0.2vw] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {'View All Results >'}
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
        className={`${
          show ? 'block' : 'hidden'
        } bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] px-[1vw] py-[1vw]">
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
              <hr className="w-full h-[0.2vw] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {'View All Results >'}
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
        className={`${
          show ? 'block' : 'hidden'
        } bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div
          className={`flex flex-row items-center justify-between w-full gap-[2vw] px-[1vw] py-[1vw]`}
        >
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
              <hr className="w-full h-[0.2vw] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  WINNING NUMBERS:
                </p>
                <p className="text-[1.2vw] md:text-[1.5vw] text-[#9b643c]">
                  {'View All Results >'}
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
        className="rounded-full max-w-[20vw] mx-auto bg-gradient-to-b from-[#FF8644] to-[#FF5A00] w-[16vw] h-[3vw] grid place-content-center text-white cursor-pointer text-[1.5vw]"
        onClick={handleClick}
      >
        {button}
      </div>
    </div>
  )
}

export function Result() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')
  const onChangeHandler1 = (e) => {
    setValue1(e.target.value)
  }
  const onChangeHandler2 = (e) => {
    setValue2(e.target.value)
  }
  const onChangeHandler3 = (e) => {
    setValue3(e.target.value)
  }
  const onChangeHandler4 = (e) => {
    setValue4(e.target.value)
  }
  const onChangeHandler5 = (e) => {
    setValue5(e.target.value)
  }
  const onChangeHandler6 = (e) => {
    setValue6(e.target.value)
  }
  return (
    <div className="flex flex-col items-start justify-center gap-[5vw] px-[3vw] py-[2vw] w-full max-w-[70vw] mx-auto">
      <div>
        <p className="text-[3.5vw] font-bold text-[#793300]">
          <em>{'rESULT cHECKING'.toUpperCase()}</em>
        </p>
        <hr className="h-[1vw] w-[15vw] bg-[#FF7429] mt-[1vw]" />
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-[90vw] mx-auto gap-[5vw]">
        <div className="w-[25vw] h-[12vw] bg-[#fff0e7] flex flex-col justify-center items-start px-[1vw] py-[1vw] rounded-[1vw]">
          <form className="w-[25vw] h-[12vw] flex flex-col justify-center items-start px-[1vw] py-[1vw] gap-[0.5vw]">
            <label htmlFor="games" className="text-[1.2vw] text-[#e25000]">
              {'Select a Game'.toUpperCase()}
            </label>

            <select
              name="games"
              id="games"
              className="w-full rounded-full max-w-[20vw] h-[2.5vw] px-[1vw] text-[0.8vw] text-[#a43300]"
            >
              <option value="SUPER DICE">SUPER DICE</option>
              <option value="CAR RACING">CAR RACING</option>
              <option value="LUCKY 5D">LUCKY 5D</option>
              <option value="FUN KENO">FUN KENO</option>
              <option value="HORSE RACING">HORSE RACING</option>
              <option value="POWER BALL">POWER BALL</option>
            </select>
          </form>
        </div>
        <div className="w-[25vw] h-[12vw] bg-[#fff0e7] flex flex-col justify-center items-start px-[1vw] py-[1vw] rounded-[1vw]">
          <form className="w-[25vw] h-[12vw] flex flex-col justify-center items-start px-[1vw] py-[1vw] gap-[0.5vw]">
            <label htmlFor="games" className="text-[1.2vw] text-[#e25000]">
              {'Pick a date'.toUpperCase()}
            </label>

            <select
              name="games"
              id="games"
              className="w-full rounded-full max-w-[20vw] h-[2.5vw] px-[1vw] text-[0.8vw] text-[#a43300]"
            >
              <option value="SUPER DICE">SUPER DICE</option>
              <option value="CAR RACING">CAR RACING</option>
              <option value="LUCKY 5D">LUCKY 5D</option>
              <option value="FUN KENO">FUN KENO</option>
              <option value="HORSE RACING">HORSE RACING</option>
              <option value="POWER BALL">POWER BALL</option>
            </select>
          </form>
        </div>
        <div className="w-[25vw] h-[12vw] bg-[#fff0e7] flex flex-col justify-center items-start px-[1vw] py-[1vw] rounded-[1vw]">
          <form className="w-[25vw] h-[12vw] flex flex-col justify-center items-start px-[1vw] py-[1vw] gap-[0.5vw]">
            <label htmlFor="numbers" className="text-[1.2vw] text-[#e25000]">
              {'Enter Your Numbers'.toUpperCase()}
            </label>
            <div className="flex flex-row items-center justify-between w-full max-w-[20vw]">
              <input
                type="text"
                onChange={onChangeHandler1}
                value={value1}
                className="rounded-[1vw] w-[3vw] h-[3vw] shadow-xl "
              />
              <input
                type="text"
                onChange={onChangeHandler2}
                value={value2}
                className="rounded-[1vw] w-[3vw] h-[3vw] shadow-xl"
              />
              <input
                type="text"
                onChange={onChangeHandler3}
                value={value3}
                className="rounded-[1vw] w-[3vw] h-[3vw] shadow-xl"
              />
              <input
                type="text"
                onChange={onChangeHandler4}
                value={value4}
                className="rounded-[1vw] w-[3vw] h-[3vw] shadow-xl"
              />
              <input
                type="text"
                onChange={onChangeHandler5}
                value={value5}
                className="rounded-[1vw] w-[3vw] h-[3vw] shadow-xl"
              />
              <input
                type="text"
                onChange={onChangeHandler6}
                value={value6}
                className="rounded-[1vw] w-[3vw] h-[3vw] shadow-xl"
              />
            </div>
            <div className="w-full max-w-[20vw] flex flex-row items-center justify-end">
              <div className="rounded-full w-[7vw] h-[2.5vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white">
                <div className="h-full grid place-content-center cursor-pointer text-[1vw] font-bold px-[3vw]">
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
    <div className="bg-prize-bg bg-no-repeat bg-cover w-full h-[40vw] md:h-[64vw] ">
      <div className="bg-prize-div bg-no-repeat bg-contain w-full h-full lg:px-6 lg:py-4 px-2 py-2">
        <div className="flex flex-row items-center justify-around h-full gap-[5vh] px-6 py-4">
          <div className="-mt-[3vw]">
            <img src={PrizeDiv2} className="w-[40vw] h-[40vw]" />
          </div>
          <div className="flex flex-col items-start justify-center h-full gap-[2vw]">
            <p className="text-[3.2vw] md:text-[3.5vw] text-[#832b00]">
              {'PRIZE GAMING'.toUpperCase()}
            </p>
            <div>
              <p className="text-[2.4vw] md:text-[2.7vw]">
                {'TRY YOUR LUCK NOW!'.toUpperCase()}
              </p>
              <p className="text-[2.4vw] md:text-[2.7vw]">
                {'AWESOME PRIZES WAITING FOR YOU'.toUpperCase()}
              </p>
            </div>
            <hr className="h-[1vw] w-[15vw] bg-[#FF7429]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Prize() {
  return (
    <div className="mt-[20vw]">
      <Main />
      <Result />
      <Winner />
    </div>
  )
}
export default Prize
