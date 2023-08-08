import { AppStore, PlayStore, facebook2, instagram2, organistation, twitter2, youtube2 } from "../assets";

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 -mt-[40vh]">
      <img
        src={organistation}
        alt="organisation"
        className="w-full max-w-[75vw] object-contain"
      />
      <div className="flex flex-col items-start justify-center gap-10 w-full max-w-[75vw] text-[#CB0000]">
        <p className="text-[3vw] lg:text-[0.8vw] lg:max-w-full">
          This website is operated by the Mongolian government, registered in
          Mongolia (Registration number: C77583), with its registered office
          located at ***. Phone number: +. The Mongolian National Lottery is
          licensed and regulated by the Mongolian Gaming Authority (License:
          MGA/CRP/402/2017, issued on 01/08/2018).
        </p>
        <p className="text-[3vw] lg:text-[0.8vw] lg:max-w-full">
          The Mongolian National Lottery and its affiliated brands operate as
          independent ticket purchasing services and are not associated with
          ****** or any company that manages the use of its services or
          products, nor are they endorsed by them.
        </p>
      </div>
      <div className="bg-footer bg-no-repeat bg-cover w-full h-[60vh] flex flex-col items-center justify-center gap-10">
        <p className="text-[3vw] lg:text-[1.8vw] lg:max-w-full text-[#793300] font-bold">
          Menu
        </p>
        <div className="flex flex-row items-center justify-evenly gap-10 w-full max-w-[75vw] items-baseline">
          <div className="flex flex-col items-start justify-center">
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300] font-bold">
              PRODUCTS
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300] mt-5">
              All games
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              High-frequency games
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              Lottery games
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              Arrangement games
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              Past draw results
            </p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300] font-bold">
              SERVICES
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300] mt-5">
              Vision / Mission / function
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              news
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              public welfare
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              transparency
            </p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300] font-bold">
              HELPS
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300] mt-5">
              hOW TO PLAY
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              WHERE TO PLAY
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              PRIZE INQUIRY
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              CONTACT CUSTOMER SERVICE
            </p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300] font-bold">
              PROTECTION
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300] mt-5">
              Privacy Statement
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              Player Security
            </p>
            <p className="text-[3vw] lg:text-[1.2vw] lg:max-w-full text-[#793300]">
              TERMS & CONDITIONS
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-full max-w-[75vw]">
          <img src={PlayStore} alt="PlayStore" className=" cursor-pointer" />
          <img src={AppStore} alt="AppStore" className=" cursor-pointer" />
        </div>
        <hr className="w-full max-w-[75vw] h-[1.4vw]" />
        <div className="flex flex-row items-center justify-between w-full max-w-[75vw] -mt-[4vh] flex-wrap">
          <p className="text-[3vw] lg:text-[0.8vw] lg:max-w-full text-[#ffffff]">
            Copyright © 2011 - 2023. All Rights Reserved By Mongolia National
            Lottery
          </p>
          <div className="flex flex-row items-center justify-center gap-2">
            <img
              src={facebook2}
              alt="facebook"
              className="rounded-full w-[2.5vw] aspect-square cursor-pointer"
            />
            <img
              src={instagram2}
              alt="instagram"
              className="rounded-full w-[2.5vw] aspect-square cursor-pointer"
            />
            <img
              src={youtube2}
              alt="youtube"
              className="rounded-full w-[2.5vw] aspect-square cursor-pointer"
            />
            <img
              src={twitter2}
              alt="twitter"
              className="rounded-full w-[2.5vw] aspect-square cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
