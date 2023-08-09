import { NewsBg, NewsLetter,  Stuff } from '../assets'

export function Media() {
  return (
    <div className="min-w-[100vw] min-h-[60vw] flex flex-col items-center justify-center">
      <h1 className="text-[#793300] text-[3.5vw] mb-[2vw]">
        {'CHRONICLE OF MONGOLIA'.toUpperCase()}
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
            {'Lorem Ipsum'.toUpperCase()}
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
              {'Lorem Ipsum'.toUpperCase()}
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
              {'Lorem Ipsum'.toUpperCase()}
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
                {'Lorem Ipsum'.toUpperCase()}
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
                {'Lorem Ipsum'.toUpperCase()}
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
                {'Lorem Ipsum'.toUpperCase()}
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
                {'Lorem Ipsum'.toUpperCase()}
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
  )
}

export function Main() {
  return (
    <div className="bg-about-bg bg-no-repeat bg-cover w-full h-[50vw] mt-[15vw] md:mt-[1vw]">
      {/* <div className="bg-prize-div bg-no-repeat bg-contain w-full h-full "> */}
        <div className="flex flex-row items-center justify-center h-full gap-[3vw]">
          <div className="flex flex-col items-start justify-center h-full gap-[2vw] max-w-[30vw] mx-auto ">
          <p className="text-[3.2vw] md:text-[3.5vw] font-bold text-[#832b00]">
              <em>{'NEWS & public welfare'.toUpperCase()}</em>
            </p>
            {/* <p className="text-[2.5vw] lg:text-[1.5vw] max-w-md font-bold">
              {'Try Your Luck NOw！Awesome Prizes Waiting for you'.toUpperCase()}
            </p> */}
            <hr className="h-[1vw] w-[15vw] bg-[#FF7429]" />
          </div>
          <div className="-mt-[3vw]">
            <img src={NewsBg} alt="NewsBg" className="w-[56vw] h-[53.9vw]" />
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}
export function HotNews() {
  return (
    <div className="flex flex-row items-start justify-center w-full max-w-[90vw] mx-auto py-[1vw]">
      <div className="flex flex-col items-start justify-center gap-[2vw] px-[2vw] w-full max-w-[50vw]">
        <div className="px-[2vw] py-[1vw] w-full max-w-[50vw]">
          <div className="h-[2vw] w-[10vw] bg-[#FF7429] rounded-r-full grid place-content-center object-contain ">
            <p className="text-white text-[1vw] w-full h-full">HOT NEWS</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-start gap-[2vw] px-[2vw] py-[1vw] w-full max-w-[70vw]">
          <div className="flex flex-col items-start justify-center gap-[2vw]">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[20vw] border-[2px] border-red-800"
            />
            <p className="text-[1.5vw] text-[#FF6B00]">BIG NEWS</p>

            <p className="text-[0.9vw] max-w-[18vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[0.9vw] max-w-[32vw]">
              By <span className="text-[#FF6B00]">Christina Lau</span>
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2vw]">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[20vw] border-[2px] border-red-800"
            />
            <p className="text-[1.5vw] text-[#FF6B00]">BIG NEWS</p>

            <p className="text-[0.9vw] max-w-[18vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[0.9vw] max-w-[32vw]">
              By <span className="text-[#FF6B00]">Christina Lau</span>
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2vw]">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[20vw] border-[2px] border-red-800"
            />
            <p className="text-[1.5vw] text-[#FF6B00]">BIG NEWS</p>

            <p className="text-[0.9vw] max-w-[18vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[0.9vw] max-w-[32vw]">
              By <span className="text-[#FF6B00]">Christina Lau</span>
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2vw]">
            <img
              src={Stuff}
              alt="Placeholder"
              className=" aspect-video w-[20vw] border-[2px] border-red-800"
            />
            <p className="text-[1.5vw] text-[#FF6B00]">BIG NEWS</p>

            <p className="text-[0.9vw] max-w-[18vw]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-[0.9vw] max-w-[32vw]">
              By <span className="text-[#FF6B00]">Christina Lau</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[2vw] px-[2vw] w-full max-w-[30vw]">
        <div className="px-[2vw] py-[1vw] w-full max-w-[50vw]">
          <div className="h-[2vw] w-[10vw] bg-[#FF7429] rounded-r-full grid place-content-center object-contain ">
            <p className="text-white text-[1vw] w-full h-full">INFO</p>
          </div>
        </div>
        <div className="min-w-[20vw] min-h-[10vw] bg-[#fff4eb] rounded-[1vw] px-[2vw] py-[1vw] ">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-between gap-[5vw]">
              <div className="flex flex-col items-start justify-between w-full max-w-[8vw]">
                <p className="text-[2vw] font-bold text-[#793300]">
                  Newsletter
                </p>
                <hr className="w-[6vw] h-[0.5vw] bg-[#E25000]" />
                <p className="text-[1vw] font-bold text-[#793300]">
                  Stay Informed with Our Newsletter
                </p>
              </div>
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={NewsLetter}
                  alt="NewsLetter"
                  className="-mt-[2vw] w-[10vw] h-[10vw] "
                />
              </div>
            </div>
            <form className="w-full max-w-[20vw] mt-[1vw]">
              <input
                type="text"
                className="rounded-full bg-[#fee8da] w-full h-[2.5vw] text-[#FE9345] shadow-2xl placeholder-[#FE9345] px-[2vw] text-[0.8vw]"
                placeholder="Name"
              />
              <input
                type="email"
                className="rounded-full bg-[#fee8da] w-full h-[2.5vw] text-[#FE9345] shadow-2xl placeholder-[#FE9345] px-[2vw] text-[0.8vw] mt-[1vw]"
                placeholder="Email Address"
              />
              <button className=" bg-gradient-to-b from-[#FE9345] via-[#FD661A] mt-[1vw] to-[#FF611D] rounded-full w-full h-[2.5vw] text-white text-[0.8vw]">
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
    <div className="w-full max-w-[50vw] h-[5vw] bg-Ad bg-no-repeat bg-cover mx-auto mt-[8vw] mb-[25vw]">
      <div className="w-full h-full flex flex-row items-center justify-evenly font-bold text-white ">
        <p className="text-[1vw] max-w-[20vw]">
          GET TO KNOW MORE ABOUT MONGOLIA NATIONAL LOTTERY
        </p>
        <div className="rounded-full w-[9vw] h-[2vw] grid place-content-center bg-gradient-to-r from-[#FF9F56] to-[#FF7A18]">
          <p className="text-[0.8vw] font-bold">Learn More</p>
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
