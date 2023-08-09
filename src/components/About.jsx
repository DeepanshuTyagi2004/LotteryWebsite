import { Route, BrowserRouter as Router } from 'react-router-dom'
import { AboutDiv, AboutDiv2, AboutDiv3, check } from '../assets'

export function Team2() {
  return (
    <div className="flex flex-row items-center justify-center px-[2vw] py-[1vw] w-full max-w-[90vw] h-[30vw] mx-auto gap-[1vw] mb-[20vw]">
      <div className="w-[20vw] h-[20vw] bg-[#fffbf8] shadow-md bg-opacity-50">
        <div className="flex flex-col items-start justify-start w-full h-full gap-[0.5vw] px-[2vw] py-[1vw]">
          <p className="text-[1.5vw] font-bold text-[#793300]">
            {'MEET OUR TEAM'.toUpperCase()}
          </p>
          <p className="text-[1.5vw] font-bold text-[#793300]">
            {'WE BRING IT  '.toUpperCase()}
          </p>
          <p className="text-[1.5vw] font-bold text-[#793300]">
            INTO <span className="text-[#FF6B3A]">CHARITY FUN</span>
          </p>
          <p className="text-[0.6vw] max-w-[15vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laboriosam minus cumque.
          </p>
          <div className="flex flex-row items-center justify-between w-full max-w-[12vw] mx-auto">
            <div className="flex flex-row items-center justify-center gap-[0.5vw]">
              <img src={check} alt="check" className="w-[1vw] h-[1vw]" />
              <p className="text-[0.6vw] max-w-[15vw]">Lorem ipsum.</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.5vw]">
              <img src={check} alt="check" className="w-[1vw] h-[1vw]" />
              <p className="text-[0.6vw] max-w-[15vw]">Lorem ipsum.</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full max-w-[12vw] mx-auto">
            <div className="flex flex-row items-center justify-center gap-[0.5vw]">
              <img src={check} alt="check" className="w-[1vw] h-[1vw]" />
              <p className="text-[0.6vw] max-w-[15vw]">Lorem ipsum.</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.5vw]">
              <img src={check} alt="check" className="w-[1vw] h-[1vw]" />
              <p className="text-[0.6vw] max-w-[15vw]">Lorem ipsum.</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end mt-[2vw] w-full">
            <div className="rounded-full w-[5vw] h-[1.5vw] bg-[#FF6B3A] grid place-content-center"></div>
          </div>
        </div>
      </div>
      <div className="w-[15vw] h-[20vw] bg-[#ffffff] shadow-md">
        <div className="flex flex-col items-center justify-center w-full h-full gap-[1vw]">
          <img
            src={AboutDiv3}
            alt="AboutDiv3"
            className="object-cover w-full h-[60%]"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[0.9vw] text-black]">
              {'Edwerd Newgate'.toUpperCase()}
            </p>
            <p className="text-[0.6vw] max-w-[15vw] px-[1.5vw] py-[1vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laboriosam minus cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[15vw] h-[20vw] bg-[#ffffff] shadow-md">
        <div className="flex flex-col items-center justify-center w-full h-full gap-[1vw]">
          <img
            src={AboutDiv3}
            alt="AboutDiv3"
            className="object-cover w-full h-[60%]"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[0.9vw] text-black]">
              {'Edwerd Newgate'.toUpperCase()}
            </p>
            <p className="text-[0.6vw] max-w-[15vw] px-[1.5vw] py-[1vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laboriosam minus cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[15vw] h-[20vw] bg-[#ffffff] shadow-md">
        <div className="flex flex-col items-center justify-center w-full h-full gap-[1vw]">
          <img
            src={AboutDiv3}
            alt="AboutDiv3"
            className="object-cover w-full h-[60%]"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[0.9vw] text-black]">
              {'Edwerd Newgate'.toUpperCase()}
            </p>
            <p className="text-[0.6vw] lg:max-w-[15vw] px-[1.5vw] py-[1vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laboriosam minus cumque.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Team() {
  return (
    <div className="flex flex-row items-center justify-center px-[2vw] py-[1vw] w-full max-w-[90vw] h-[30vw] mx-auto gap-[1vw]">
      <div className="w-[15vw] h-[20vw] bg-[#ffffff] shadow-md">
        <div className="flex flex-col items-center justify-center w-full h-full gap-[1vw]">
          <img
            src={AboutDiv3}
            alt="AboutDiv3"
            className="object-cover w-full h-[60%]"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[0.9vw] text-black]">
              {'Edwerd Newgate'.toUpperCase()}
            </p>
            <p className="text-[0.6vw] max-w-[15vw] px-[1.5vw] py-[1vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laboriosam minus cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[15vw] h-[20vw] bg-[#ffffff] shadow-md">
        <div className="flex flex-col items-center justify-center w-full h-full gap-[1vw]">
          <img
            src={AboutDiv3}
            alt="AboutDiv3"
            className="object-cover w-full h-[60%]"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[0.9vw] text-black]">
              {'Edwerd Newgate'.toUpperCase()}
            </p>
            <p className="text-[0.6vw] max-w-[15vw] px-[1.5vw] py-[1vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laboriosam minus cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[15vw] h-[20vw] bg-[#ffffff] shadow-md">
        <div className="flex flex-col items-center justify-center w-full h-full gap-[1vw]">
          <img
            src={AboutDiv3}
            alt="AboutDiv3"
            className="object-cover w-full h-[60%]"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[0.9vw] text-black]">
              {'Edwerd Newgate'.toUpperCase()}
            </p>
            <p className="text-[0.6vw] lg:max-w-[15vw] px-[1.5vw] py-[1vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laboriosam minus cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[20vw] h-[20vw] bg-[#fffbf8] shadow-md bg-opacity-50">
        <div className="flex flex-col items-start justify-start w-full h-full gap-[0.5vw] px-[2vw] py-[1vw]">
          <p className="text-[1.5vw] font-bold text-[#793300]">
            {'MEET OUR TEAM'.toUpperCase()}
          </p>
          <p className="text-[1.5vw] font-bold text-[#793300]">
            {'WE BRING IT  '.toUpperCase()}
          </p>
          <p className="text-[1.5vw] font-bold text-[#793300]">
            INTO <span className="text-[#FF6B3A]">CHARITY FUN</span>
          </p>
          <p className="text-[0.6vw] max-w-[15vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laboriosam minus cumque.
          </p>
          <div className="flex flex-row items-center justify-between w-full max-w-[12vw] mx-auto">
            <div className="flex flex-row items-center justify-center gap-[0.5vw]">
              <img src={check} alt="check" className="w-[1vw] h-[1vw]" />
              <p className="text-[0.6vw] max-w-[15vw]">Lorem ipsum.</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.5vw]">
              <img src={check} alt="check" className="w-[1vw] h-[1vw]" />
              <p className="text-[0.6vw] max-w-[15vw]">Lorem ipsum.</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full max-w-[12vw] mx-auto">
            <div className="flex flex-row items-center justify-center gap-[0.5vw]">
              <img src={check} alt="check" className="w-[1vw] h-[1vw]" />
              <p className="text-[0.6vw] max-w-[15vw]">Lorem ipsum.</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.5vw]">
              <img src={check} alt="check" className="w-[1vw] h-[1vw]" />
              <p className="text-[0.6vw] max-w-[15vw]">Lorem ipsum.</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end mt-[2vw] w-full">
            <div className="rounded-full w-[5vw] h-[1.5vw] bg-[#FF6B3A] grid place-content-center"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Lottery() {
  return (
    <div className="flex flex-row items-center justify-center px-[2vw] py-[1vw] w-full max-w-[90vw] h-[30vw] mx-auto">
      <div className="w-[20vw] h-[20vw] bg-[#fff5ed]">
        <div className="flex flex-col items-start justify-center px-[2vw] py-[2vw] gap-[1vw]">
          <div className="w-full py-[1vw]">
            <hr className="h-[0.2vw] w-full bg-black" />
            <hr className="h-[1vw] w-[10vw] bg-[#FF7429] -mt-[0.005vw]" />
          </div>
          <div className="mt-[1vw]">
            <p className="text-[1.5vw] text-[#FF7429]">
              {'Mongolia'.toUpperCase()}
            </p>
            <p className="text-[1.5vw] font-bold text-[#832e00]">
              {'National Lottery'.toUpperCase()}
            </p>
          </div>
          <p className="text-[0.5vw] max-w-[15vw] text-[#b7b4b2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laboriosam minus cumque. Excepturi aspernatur iusto, velit labore
            voluptatum officia architecto corporis quasi numquam pariatur nihil
            odit itaque eius explicabo quaerat.
          </p>
        </div>
      </div>
      <div className="w-[20vw] h-[20vw] bg-[#fff5ed]">
        <img
          src={AboutDiv3}
          alt="AboutDiv3"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[14vw] h-[20vw] bg-[#fe984e]">
        <div className="flex flex-col items-start justify-center px-[1vw] py-[1vw] gap-[2vw] text-white">
          <p className="text-[0.6vw] font-bold ">
            {'Find Charity'.toUpperCase()}
          </p>

          <p className="text-[0.5vw] max-w-[15vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laboriosam minus cumque. Excepturi aspernatur iusto, velit labore
            voluptatum officia architecto corporis quasi numquam pariatur nihil
            odit itaque eius explicabo quaerat.
          </p>
        </div>
      </div>
      <div className="w-[14vw] h-[20vw] bg-[#ffbf8f]">
        <div className="flex flex-col items-start justify-center px-[1vw] py-[1vw] gap-[2vw] text-white">
          <p className="text-[0.6vw] font-bold ">
            {'Find Charity'.toUpperCase()}
          </p>

          <p className="text-[0.5vw] max-w-[15vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laboriosam minus cumque. Excepturi aspernatur iusto, velit labore
            voluptatum officia architecto corporis quasi numquam pariatur nihil
            odit itaque eius explicabo quaerat.
          </p>
        </div>
      </div>
      <div className="w-[14vw] h-[20vw] bg-[#ffdbc1]">
        <div className="flex flex-col items-start justify-center px-[1vw] py-[1vw] gap-[2vw] text-white">
          <p className="text-[0.6vw] font-bold ">
            {'Find Charity'.toUpperCase()}
          </p>

          <p className="text-[0.5vw] max-w-[15vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laboriosam minus cumque. Excepturi aspernatur iusto, velit labore
            voluptatum officia architecto corporis quasi numquam pariatur nihil
            odit itaque eius explicabo quaerat.
          </p>
        </div>
      </div>
    </div>
  )
}

export function Mission() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-[40vw] ">
      <div className="flex flex-col items-start justify-center gap-[5vw] ">
        <div>
          <p className="text-[3.0vw] font-bold text-[#842a00]">
            <em>{'OUr MIssion & Vision'.toUpperCase()}</em>
          </p>
          <hr className="h-[1vw] w-[15vw] bg-[#f98c47]" />
        </div>
        <p className="text-[1.5vw] max-w-[55vw]">
          It is a long-established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem Ipsum will uncover many websites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humor and the like).
        </p>
      </div>
      <img src={AboutDiv2} alt="AboutDiv2" className="w-[30vw] h-[30vw]" />
    </div>
  )
}

export function Main() {
  return (
    <div className="bg-about-bg bg-no-repeat bg-cover w-full mt-[20vw] md:mt-[2vw] h-[50vw] ">
      <div className="flex flex-row items-center justify-center h-full gap-[3vw]">
        <div className="flex flex-col items-start justify-center h-full gap-[2vw] -mr-[20vw]">
          <p className="text-[3.5vw] text-[#832b00]">
            {'About Us'.toUpperCase()}
          </p>
          <div>
            <p className="text-[3.0vw] font-bold text-[#f54200]">
              <em>{'We Offer'.toUpperCase()}</em>
            </p>
            <p className="text-[2.7vw]]">
              {'a Wide Variety of Lotteries'.toUpperCase()}
            </p>
          </div>
          <hr className="h-[1vw] w-[15vw] bg-[#FF7429]" />
        </div>
        <div className="">
          <img src={AboutDiv} alt="AboutDiv" className="w-[50vw] h-[50vw]" />
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <>
      <Main />
      <Mission />
      <Lottery />
      <Team />
      <Team2 />
    </>
  )
}
export default About
