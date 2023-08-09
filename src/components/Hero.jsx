// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  HeroBg,
  HeroMockUp,
  Logo,
  PlayStore,
  AppStore,
  Twitter,
  FaceBook,
  PowerBall,
  Comp,
  Stuff,
  Security,
  CashOut,
  Books,
  face1,
  container,
  face3,
  face2,
  organistation,
  instagram2,
  facebook2,
  youtube2,
  twitter2,
} from "../assets";
import { Footer } from "./Footer";

export function Winner() {
  return (
    <div className="bg-hero-bg2 w-[100vw] min-h-[40vw] flex flex-col items-center justify-center mt-[19.5vw] md:mt-[4vw] gap-5">
      <h1 className="text-[#793300] text-[3.5vw] mb-[2vw]">
        {"Reveal the Winning Numbers".toUpperCase()}
      </h1>
      <div
        className={` bg-gradient-to-r from-[#FFDBBF] to-[#FFFFFF] rounded-[4vw] min-h-[20vw] w-[70vw] px-[4vw] py-[1vw]`}
      >
        <div className="flex flex-row items-center justify-between w-full gap-[2vw] px-[2vw] py-[1vw]">
          <div className="flex flex-col items-center justify-center gap-[1vw] w-full">
            <div className="flex flex-row items-center justify-between w-full gap-[5vw] ">
              <div className="flex flex-row items-center justify-center gap-[1vw]">
                <img src={PowerBall} alt="" className="w-[5.5vw] h-[5.5vw] " />
                <p className="text-[1.5vw] text-[#9b643c]">POWER BALL</p>
              </div>
              <div className="flex flex-col items-end justify-start">
                <p className="text-[1vw] text-[#b08379]">DRAW TOOK PLACE ON</p>
                <p className="text-[1.3vw] text-[#9b643c]">
                  SATURDAY APRIL 20,2021
                </p>
              </div>
            </div>
            <div className="w-full">
              <hr className="w-full h-[0.1vw] bg-black" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[1vw]">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[1.5vw] text-[#9b643c]">WINNING NUMBERS:</p>
                <p className="text-[1.5vw] text-[#9b643c]">
                  {"View All Results >"}
                </p>
              </div>
              <div className="flex flex-row items-center justify-around rounded-full w-full h-[4vw] bg-[#FFFFFF] max-w-[35vw]">
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.5vw]">
                  1
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.5vw]">
                  39
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.5vw]">
                  42
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.5vw]">
                  12
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.5vw]">
                  4
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.5vw]">
                  15
                </div>
                <div className="grid place-content-center rounded-full w-[3vw] h-[3vw] bg-gradient-to-r from-[#FFA200] to-[#FF710A] text-white text-[1.5vw]">
                  63
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vw] w-[30vw] aspect-video">
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-[2vw] py-[1vw] w-full">
              <div>
                <p className="text-[1vw] font-bold">Live Drawings,</p>
                <p className="text-[1vw] font-bold">Unveiling the Winners !</p>
              </div>
              <div className="flex flex-row items-end justify-end w-full">
                <div className="rounded-full w-[6vw] h-[2vw] bg-gradient-to-t from-[#FE9345] via-[#FD661A] to-[#FF611D] text-white text-[1vw]">
                  <div className="h-full grid place-content-center cursor-pointer font-bold text-[0.5vw]">
                    Click to Watch
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-Div-sec bg-no-repeat bg-cover rounded-[2vw] shadow-lg flex flex-col gap-[1vw] items-start justify-center px-[2vw] py-[1vw] w-full">
              <div>
                <p className="text-[1vw] font-bold">Live Drawings,</p>
                <p className="text-[1vw] font-bold">Unveiling the Winners !</p>
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
      <h1 className="text-[#793300] text-[3.5vw] mb-[2vw]">
        {"Hot Games, Endless Excitement!".toUpperCase()}
      </h1>
      {}
      <h1 className="text-[#793300] text-[3.5vw] mb-[2vw]">
        {"Why Choose Us?".toUpperCase()}
      </h1>
      <div className="flex flex-wrap flex-row justify-center items-center mt-[3vw] md:mt-[8vw]">
        <div className="relative p-[2vw] flex flex-col justify-center items-center bg-gradient-to-tr from-[#ffa565] via-[#ffdac0] to-[#feede1] rounded-[2vw] max-w-[30vw] min-h-[22vw] gap-[0.5vw] m-[1vw] ">
          <img
            src={Stuff}
            alt="Stuff"
            className="absolute top-[-5vw] w-[15vw] h-[15vw]"
          />
          <div className="flex flex-col gap-[1vw] mt-[8vw] ">
            <p className="text-[2vw] font-semibold  text-[#FF6B00]">
              ONLINE LOTTERY
            </p>
            <p className="text-[1.3vw] max-w-[18vw]">
              Replacing a maintains the amount of lines. When replacing a
              selection.
            </p>
          </div>
        </div>
        <div className="relative p-[2vw] flex flex-col justify-center items-center bg-gradient-to-tr from-[#ffa565] via-[#ffdac0] to-[#feede1] rounded-[2vw] max-w-[30vw] min-h-[22vw] gap-[0.5vw] m-[1vw] ">
          <img
            src={Stuff}
            alt="Stuff"
            className="absolute top-[-5vw] w-[15vw] h-[15vw]"
          />
          <div className="flex flex-col gap-[1vw] mt-[8vw] ">
            <p className="text-[2vw] font-semibold  text-[#FF6B00]">
              ONLINE LOTTERY
            </p>
            <p className="text-[1.3vw] max-w-[18vw]">
              Replacing a maintains the amount of lines. When replacing a
              selection.
            </p>
          </div>
        </div>
        <div className="relative p-[2vw] flex flex-col justify-center items-center bg-gradient-to-tr from-[#ffa565] via-[#ffdac0] to-[#feede1] rounded-[2vw] max-w-[30vw] min-h-[22vw] gap-[0.5vw] m-[1vw] ">
          <img
            src={Stuff}
            alt="Stuff"
            className="absolute top-[-5vw] w-[15vw] h-[15vw]"
          />
          <div className="flex flex-col gap-[1vw] mt-[8vw] ">
            <p className="text-[2vw] font-semibold  text-[#FF6B00]">
              ONLINE LOTTERY
            </p>
            <p className="text-[1.3vw] max-w-[18vw]">
              Replacing a maintains the amount of lines. When replacing a
              selection.
            </p>
          </div>
        </div>
        <div className="relative p-[2vw] flex flex-col justify-center items-center bg-gradient-to-tr from-[#ffa565] via-[#ffdac0] to-[#feede1] rounded-[2vw] max-w-[30vw] min-h-[22vw] gap-[0.5vw] m-[1vw] ">
          <img
            src={Stuff}
            alt="Stuff"
            className="absolute top-[-5vw] w-[15vw] h-[15vw]"
          />
          <div className="flex flex-col gap-[1vw] mt-[8vw] ">
            <p className="text-[2vw] font-semibold  text-[#FF6B00]">
              ONLINE LOTTERY
            </p>
            <p className="text-[1.3vw] max-w-[18vw]">
              Replacing a maintains the amount of lines. When replacing a
              selection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slider() {
  const [active, setActive] = useState(0);
  return (
    <div id="home" className="w-[100vw] h-[60vw] relative top-20">
      <img
        src={HeroBg}
        alt="HeroBg"
        className=" bg-contain bg-no-repeat w-[100vw] h-[60vw]"
      />
      <div className="absolute z-[1] top-[0%] flex flex-col gap-[1vw] w-full items-center justify-between pt-10 lg:px-16 lg:py-6 px-6 py-6 h-full">
        <div className="flex flex-row items-center justify-center w-full h-full ">
          <div className="flex flex-col items-start justify-center gap-[3vw] w-full h-full">
            <div className="flex flex-col items-start justify-center gap-[1vw] w-full">
              <img src={Logo} alt="logo" className="w-[22vw]" />
              <h1 className="text-[3.5vw]">
                <em>Winning Dreams, Changing Lives</em>
              </h1>
              <h2 className="text-[2.5vw]">
                Newly Upgraded and Returning Again !
              </h2>
              <p className="text-[1.5vw] max-w-[42vw]">
                The MNL9 Mobile App is now available on all iOS & Android
                devices.{" "}
              </p>
            </div>
            <div className="flex flex-row justify-start items-center">
              <img
                src={AppStore}
                alt="AppStore"
                className=" cursor-pointer w-[14vw]"
              />
              <img
                src={PlayStore}
                alt="PlayStore"
                className=" cursor-pointer w-[14vw]"
              />
            </div>
            <div className="flex flex-row justify-start items-center gap-3">
              <img
                src={FaceBook}
                alt="FaceBook"
                className=" cursor-pointer w-[2vw]"
              />
              <img
                src={Twitter}
                alt="Twitter"
                className=" cursor-pointer w-[2vw]"
              />
            </div>
          </div>
          <div>
            <img src={HeroMockUp} alt="HeroMockUp" className="block w-[70vw]" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center pt-[0.1vh] gap-5">
          {Array.apply(0, Array(5)).map((ele, index) => {
            return (
              <div
                key={index}
                className={`${
                  active == index
                    ? "w-[3.5vw] bg-[#FF6C00]"
                    : "w-[0.8vw] bg-[#676767]"
                } h-[0.8vw] rounded-full transition-all cursor-pointer`}
                onClick={() => setActive(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Media() {
  return (
    <div className="bg-hero-bg3 min-w-[100vw] min-h-[60vw] bg-no-repeat bg-cover flex flex-col items-center justify-center">
      <h1 className="text-[#793300] text-[3.5vw] mb-[2vw]">
        {"News & public Welfare".toUpperCase()}
      </h1>
      <div className="flex flex-row items-start justify-center gap-[2vw] px-[3vw] py-[1vw] w-full">
        <div className="flex flex-col items-start justify-center gap-[2vw]">
          <img
            src={Stuff}
            alt="Placeholder"
            className=" aspect-video w-[25vw] border-[2px] "
          />
          <p className="text-[1.5vw] text-[#FF6B00]">COUNTRY NEWS</p>
          <p className="text-[2vw] text-[#FF6B00]">
            {"Lorem Ipsum".toUpperCase()}
          </p>
          <p className="text-[1vw] max-w-[32vw]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p className="text-[1vw] max-w-[32vw]">
            By <span className="text-[#FF6B00]">Christina Lau</span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-[0.6vw]">
          <div className="flex flex-col items-start justify-center gap-[0.6vw]">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[13.5vw] border-[2px] "
            />
            <p className="text-[1vw] text-[#FF6B00]">COUNTRY NEWS</p>
            <p className="text-[1.5vw] text-[#FF6B00]">
              {"Lorem Ipsum".toUpperCase()}
            </p>
            <p className="text-[0.5vw] max-w-[15vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[0.5vw] max-w-[15vw]">7:00 AM | April 15</p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[0.6vw]">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[13.5vw] border-[2px] "
            />
            <p className="text-[1vw] text-[#FF6B00]">COUNTRY NEWS</p>
            <p className="text-[1.5vw] text-[#FF6B00]">
              {"Lorem Ipsum".toUpperCase()}
            </p>
            <p className="text-[0.5vw] max-w-[15vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[0.5vw] max-w-[15vw]">7:00 AM | April 15</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[1vw]">
          <div className="flex flex-row items-start justify-center gap-[1vw]">
            <img
              src={Stuff}
              alt="Stuff"
              className=" aspect-square w-[5vw] border-[2px] "
            />
            <div className="flex flex-col items-start justify-center gap-[0.5vw]">
              <p className="text-[1vw] text-[#FF6B00]">
                {"Lorem Ipsum".toUpperCase()}
              </p>
              <p className="text-[0.5vw] max-w-[15vw]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
              <p className="text-[1vw] max-w-[15vw]">7:00 AM | April 15</p>
              <hr className="h-[0.1vw] w-full bg-slate-500" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-[1vw]">
            <img
              src={Stuff}
              alt="Stuff"
              className=" aspect-square w-[5vw] border-[2px] "
            />
            <div className="flex flex-col items-start justify-center gap-[1vw]">
              <p className="text-[1vw] text-[#FF6B00]">
                {"Lorem Ipsum".toUpperCase()}
              </p>
              <p className="text-[0.5vw] max-w-[15vw]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
              <p className="text-[1vw] max-w-[15vw]">7:00 AM | April 15</p>
              <hr className="h-[0.1vw] w-full bg-slate-500" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-[1vw]">
            <img
              src={Stuff}
              alt="Stuff"
              className=" aspect-square w-[5vw] border-[2px] "
            />
            <div className="flex flex-col items-start justify-center gap-[1vw]">
              <p className="text-[1vw] text-[#FF6B00]">
                {"Lorem Ipsum".toUpperCase()}
              </p>
              <p className="text-[0.5vw] max-w-[15vw]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
              <p className="text-[1vw] max-w-[15vw]">7:00 AM | April 15</p>
              <hr className="h-[0.1vw] w-full bg-slate-500" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-[1vw]">
            <img
              src={Stuff}
              alt="Stuff"
              className=" aspect-square w-[5vw] border-[2px] "
            />
            <div className="flex flex-col items-start justify-center gap-[1vw]">
              <p className="text-[1vw] text-[#FF6B00]">
                {"Lorem Ipsum".toUpperCase()}
              </p>
              <p className="text-[0.5vw] max-w-[15vw]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
              <p className="text-[1vw] max-w-[15vw]">7:00 AM | April 15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Subscribe() {
  return (
    <div className="flex flex-row items-center justify-center bg-hero-bg4 bg-no-repeat bg-cover w-[100vw] h-[60vw]">
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="flex flex-row justify-center items-center rounded-[5vw] overflow-hidden w-[90vw] h-[40vw] bg-white shadow-xl gap-[1vw] flex-wrap-reverse">
          <div className="flex flex-col items-start justify-center gap-[3vw] pl-[4vw] md:w-[45vw] md:h-[40vw]">
            <p className="text-[2.5vw] text-[#793300]">
              {"More Provinces Coming Soon".toUpperCase()}
            </p>
            <p className="text-[0.9vw] lg:text-[1.2vw] max-w-[35vw] text-[#FE9345]">
              REGISTER TO RECEIVE NOTIFICATIONS WHEN NATIONAL LOTTERY LAUNCHES
              IN YOUR CHOSEN PROVINCE!
            </p>
            <form className="w-full max-w-[25vw]">
              <input
                type="text"
                className="rounded-full bg-[#white] border-[0.2vw] border-[#fe994e] w-full h-[3vw] text-[#767676] bg-opacity-[0.16] placeholder-[#767676] px-[2vw] text-[1.5vw]"
                placeholder="STATE"
              />
              <input
                type="text"
                className="rounded-full bg-[#white] border-[0.2vw] border-[#fe994e] w-full h-[3vw] text-[#767676] bg-opacity-[0.16] placeholder-[#767676] px-[2vw] text-[1.5vw] mt-[1vw]"
                placeholder="EMAIL ADDRESS"
              />
              <button className=" bg-gradient-to-b from-[#FE9345] via-[#FD661A] to-[#FF611D] rounded-full w-full h-[3vw] text-white text-[1.5vw] mt-[1vw]">
                REGISTER
              </button>
            </form>
            <p className="text-[0.9vw] lg:text-[1.2vw] max-w-[35vw] text-[#FE9345]">
              30YOUR EMAIL WILL NEVER BE SHARED WITH THIRD PARTIES. YOU CAN
              UNSUBSCRIBE AT ANY TIME.
            </p>
          </div>
          <div className="block bg-Div-four w-[44vw] h-[40vw] bg-cover bg-no-repeat">
            <div className="grid place-content-center w-[40vw] h-[40vw]">
              <img src={Books} alt="Books" className="w-[35vw] h-[35vw]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-[100vw] h-[60vw] bg-hero-bg5 bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center gap-[2vw]">
        <h1 className="text-[#793300] text-[3.5vw] mb-[2vw] mt-[4vw]">
          {"Testimonial".toUpperCase()}
        </h1>
        <div className="flex flex-row items-center justify-around gap-[2vw]">
          <div className="relative flex flex-col items-center justify-start w-[30vw] h-[15vw]">
            <img
              src={face1}
              alt="face1"
              className="rounded-full w-[10vw] h-[10vw]"
            />
            <img
              src={container}
              alt="container"
              className=" relative w-[40vw] h-[10vw] -mt-[2vw]"
            />
            <div className="absolute flex flex-col items-center top-[11.5vw]">
              <p className="text-[1vw]">What is Lorem ipsum</p>
              <p className="text-[0.8vw] max-w-[25vw]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                maiores dignissimos distinctio architecto, a nulla! Consectetur
                maiores harum delectus, veritatis voluptatibus, eos.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-start w-[30vw] h-[15vw]">
            <img
              src={face2}
              alt="face2"
              className="rounded-full w-[10vw] h-[10vw]"
            />
            <img
              src={container}
              alt="container"
              className=" relative w-[40vw] h-[10vw] -mt-[2vw]"
            />
            <div className="absolute flex flex-col items-center top-[11.5vw]">
              <p className="text-[1vw]">What is Lorem ipsum</p>
              <p className="text-[0.8vw] max-w-[25vw]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
                error, excepturi ullam eaque ut id quam voluptates cumque
                pariatur porro dolorem cupiditate atque.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-start w-[30vw] h-[15vw]">
            <img
              src={face3}
              alt="face3"
              className="rounded-full w-[10vw] h-[10vw]"
            />
            <img
              src={container}
              alt="container"
              className=" relative w-[40vw] h-[10vw] -mt-[2vw]"
            />
            <div className="absolute flex flex-col items-center top-[11.5vw]">
              <p className="text-[1vw]">What is Lorem ipsum</p>
              <p className="text-[0.8vw] max-w-[25vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae rerum dicta praesentium alias ad assumenda, enim
                architecto porro corrupti, nesciunt placeat debitis
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center pt-[3vw] gap-[2vw]">
          {Array.apply(0, Array(5)).map((ele, index) => {
            return (
              <div
                key={index}
                className={`${
                  active == index
                    ? "w-[3.5vw] bg-[#FF6C00]"
                    : "w-[0.8vw] bg-[#676767]"
                } h-[0.8vw] rounded-full transition-all cursor-pointer`}
                onClick={() => setActive(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <Slider />
      <Winner />
      <Media />
      <Subscribe />
      <Testimonial />
    </>
  );
}

export default Hero;
