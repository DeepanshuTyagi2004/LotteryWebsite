import { NewsBg, NewsLetter,  Stuff } from '../assets'

export function Media() {
  return (
    <div className="min-w-[100vw] min-h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-[#793300] text-[5.5vw] lg:text-[3.5vw] mb-[4vw] lg:mb-[2vw]">
        {'CHRONICLE of Mongolia'.toUpperCase()}
      </h1>
      <div className="flex flex-row flex-wrap items-start justify-center gap-5 px-6 py-2 w-full">
        <div className="flex flex-col items-start justify-center gap-5">
          <img
            src={Stuff}
            alt="Placeholder"
            className=" aspect-video w-[55vh] border-[2px] border-red-800"
          />
          <p className="text-[2.5vw] lg:text-[1.5vw] text-[#FF6B00]">
            COUNTRY NEWS
          </p>
          <p className="text-[3vw] lg:text-[2vw] text-[#FF6B00]">
            {'Lorem Ipsum'.toUpperCase()}
          </p>
          <p className="text-[2.5vw] lg:text-[1vw] lg:max-w-[32vw]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p className="text-[2.5vw] lg:text-[1vw] lg:max-w-[32vw]">
            By <span className="text-[#FF6B00]">Christina Lau</span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex flex-col items-start justify-center gap-3">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[27.5vh] border-[2px] border-red-800"
            />
            <p className="text-[2vw] lg:text-[1vw] text-[#FF6B00]">
              COUNTRY NEWS
            </p>
            <p className="text-[2.5vw] lg:text-[1.5vw] text-[#FF6B00]">
              {'Lorem Ipsum'.toUpperCase()}
            </p>
            <p className="text-[2vw] lg:text-[0.5vw] lg:max-w-[15vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[2vw] lg:text-[0.5vw] lg:max-w-[15vw]">
              7:00 AM | April 15
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[27.5vh] border-[2px] border-red-800"
            />
            <p className="text-[2vw] lg:text-[1vw] text-[#FF6B00]">
              COUNTRY NEWS
            </p>
            <p className="text-[2.5vw] lg:text-[1.5vw] text-[#FF6B00]">
              {'Lorem Ipsum'.toUpperCase()}
            </p>
            <p className="text-[2vw] lg:text-[0.5vw] lg:max-w-[15vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[2vw] lg:text-[0.5vw] lg:max-w-[15vw]">
              7:00 AM | April 15
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <img
              src={Stuff}
              alt="Stuff"
              className=" aspect-square w-[10vh] border-[2px] border-red-800"
            />
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-[2vw] lg:text-[1vw] text-[#FF6B00]">
                {'Lorem Ipsum'.toUpperCase()}
              </p>
              <p className="text-[2vw] lg:text-[0.5vw] lg:max-w-[15vw]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
              <p className="text-[2.5vw] lg:text-[1vw] lg:max-w-[15vw]">
                7:00 AM | April 15
              </p>
              <hr className="h-[0.2vh] w-full bg-slate-500" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <img
              src={Stuff}
              alt="Stuff"
              className=" aspect-square w-[10vh] border-[2px] border-red-800"
            />
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-[2vw] lg:text-[1vw] text-[#FF6B00]">
                {'Lorem Ipsum'.toUpperCase()}
              </p>
              <p className="text-[2vw] lg:text-[0.5vw] lg:max-w-[15vw]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
              <p className="text-[2.5vw] lg:text-[1vw] lg:max-w-[15vw]">
                7:00 AM | April 15
              </p>
              <hr className="h-[0.2vh] w-full bg-slate-500" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <img
              src={Stuff}
              alt="Stuff"
              className=" aspect-square w-[10vh] border-[2px] border-red-800"
            />
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-[2vw] lg:text-[1vw] text-[#FF6B00]">
                {'Lorem Ipsum'.toUpperCase()}
              </p>
              <p className="text-[2vw] lg:text-[0.5vw] lg:max-w-[15vw]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
              <p className="text-[2.5vw] lg:text-[1vw] lg:max-w-[15vw]">
                7:00 AM | April 15
              </p>
              <hr className="h-[0.2vh] w-full bg-slate-500" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <img
              src={Stuff}
              alt="Stuff"
              className=" aspect-square w-[10vh] border-[2px] border-red-800"
            />
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-[2vw] lg:text-[1vw] text-[#FF6B00]">
                {'Lorem Ipsum'.toUpperCase()}
              </p>
              <p className="text-[2vw] lg:text-[0.5vw] lg:max-w-[15vw]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
              <p className="text-[2.5vw] lg:text-[1vw] lg:max-w-[15vw]">
                7:00 AM | April 15
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Main() {
  return (
    <div className="bg-prize-bg bg-no-repeat bg-cover w-full h-[60vh] lg:h-[84vh] ">
      <div className="bg-prize-div bg-no-repeat bg-contain w-full h-full ">
        <div className="flex flex-row items-end justify-between h-full gap-[5vh]">
          <div className="flex flex-col items-start justify-center h-full gap-[5vh] ml-[20vw]">
            <p className="text-[2.5vw] lg:text-[2vw] font-bold ">
              {'NEWS & public welfare'.toUpperCase()}
            </p>
            {/* <p className="text-[2.5vw] lg:text-[1.5vw] max-w-md font-bold">
              {'Try Your Luck NOw！Awesome Prizes Waiting for you'.toUpperCase()}
            </p> */}
            <hr className="h-[2vw] lg:h-[2vh] w-[15vw] bg-[#FF7429]" />
          </div>
          <div className="-mt-[8vh]">
            <img src={NewsBg} alt="NewsBg" className="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export function HotNews() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center flex-warp w-full max-w-[80vw] mx-auto py-2">
      <div className="flex flex-col items-start justify-center  gap-5 px-6 w-full md:max-w-[50vw]">
        <div className="px-6 py-2 w-full md:max-w-[50vw]">
          <div className="h-[2vh] w-[12vw] lg:h-[6vh] lg:w-[10vw] bg-[#FF7429] rounded-r-full grid place-content-center object-contain ">
            <p className="text-white text-[1vw] lg:text[4vw] w-full h-full">
              HOT NEWS
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-start gap-5 px-6 py-2 w-full md:max-w-[50vw]">
          <div className="flex flex-col items-start justify-center gap-5">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[35vh] border-[2px] border-red-800"
            />
            <p className="text-[2.5vw] lg:text-[1.5vw] text-[#FF6B00]">
              BIG NEWS
            </p>

            <p className="text-[2.5vw] lg:text-[0.5vw] lg:max-w-[18vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[2.5vw] lg:text-[0.5vw] lg:max-w-[32vw]">
              By <span className="text-[#FF6B00]">Christina Lau</span>
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[35vh] border-[2px] border-red-800"
            />
            <p className="text-[2.5vw] lg:text-[1.5vw] text-[#FF6B00]">
              BIG NEWS
            </p>

            <p className="text-[2.5vw] lg:text-[0.5vw] lg:max-w-[18vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[2.5vw] lg:text-[0.5vw] lg:max-w-[32vw]">
              By <span className="text-[#FF6B00]">Christina Lau</span>
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[35vh] border-[2px] border-red-800"
            />
            <p className="text-[2.5vw] lg:text-[1.5vw] text-[#FF6B00]">
              BIG NEWS
            </p>

            <p className="text-[2.5vw] lg:text-[0.5vw] lg:max-w-[18vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[2.5vw] lg:text-[0.5vw] lg:max-w-[32vw]">
              By <span className="text-[#FF6B00]">Christina Lau</span>
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[35vh] border-[2px] border-red-800"
            />
            <p className="text-[2.5vw] lg:text-[1.5vw] text-[#FF6B00]">
              BIG NEWS
            </p>

            <p className="text-[2.5vw] lg:text-[0.5vw] lg:max-w-[18vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[2.5vw] lg:text-[0.5vw] lg:max-w-[32vw]">
              By <span className="text-[#FF6B00]">Christina Lau</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center px-12 gap-5 lg:px-6 lg:py-2 w-full md:max-w-[25vw]">
        <div className=" w-full max-w-[25vw]">
          <div className="h-[2vh] w-[12vw] lg:h-[6vh] lg:w-[10vw] bg-[#FF7429] rounded-r-full grid place-content-center object-contain ">
            <p className="text-white text-[1vw] lg:text[4vw] w-full h-full md:max-w-[25vw]">
              HOT NEWS
            </p>
          </div>
        </div>
        <div className="min-w-[20vw] min-h-[24vh] bg-[#fff4eb] rounded-xl md:rounded-3xl lg:px-6 lg:py-4 px-2 py-2">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-between">
              <div className="flex flex-col items-start justify-between w-full md:max-w-[8vw]">
                <p className="text-[2vh] lg:text-[2vw] font-bold text-[#793300]">
                  Newsletter
                </p>
                <hr className="w-[6vw] h-[0.5vh] lg:h-[1vh] bg-[#E25000]" />
                <p className="text-[1.5vh] lg:text-[1vw] font-bold text-[#793300]">
                  Stay Informed with Our Newsletter
                </p>
              </div>
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={NewsLetter}
                  alt="NewsLetter"
                  className="md:mt-[2vh]"
                />
              </div>
            </div>
            <form className="w-full max-w-xs">
              <input
                type="text"
                className="rounded-full bg-[#fee8da] w-full h-[5vh] text-[#FE9345] shadow-2xl placeholder-[#FE9345] px-6 text-[2vw] lg:text-[0.8vw]"
                placeholder="Name"
              />
              <input
                type="text"
                className="rounded-full bg-[#fee8da] w-full h-[5vh] text-[#FE9345] shadow-2xl mt-7 placeholder-[#FE9345] px-6 text-[2vw] lg:text-[0.8vw]"
                placeholder="Email Address"
              />
              <button className=" bg-gradient-to-b from-[#FE9345] via-[#FD661A] mt-7 to-[#FF611D] rounded-full w-full h-[5vh] text-white text-[2vw] lg:text-[0.8vw]">
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdBanner() {
  return (
    <div className="w-full max-w-[50vw] h-[10vh] bg-Ad bg-no-repeat bg-cover mx-auto mt-[10vh] mb-[40vh]">
      <div className="w-full h-full flex flex-row items-center justify-evenly font-bold text-white ">
        <p className="max-w-[20vw]">
          GET TO KNOW MORE ABOUT MONGOLIA NATIONAL LOTTERY
        </p>
        <div className="rounded-full w-[16vh] h-[5vh] grid place-content-center bg-gradient-to-r from-[#FF9F56] to-[#FF7A18]">
          <p className="text-[2.5vw] lg:text-[0.8vw] font-bold">Learn More</p>
        </div>
      </div>
    </div>
  )
}
function News() {
  return (
    <>
      <Main />
      <Media />
      <HotNews />
      <AdBanner />
    </>
  )
}
export default News
