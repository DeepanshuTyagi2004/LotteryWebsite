import {
  Call,
  ContactDiv1,
  ContactDiv2,
  ContactDiv3,
  ContactDiv4,
  ContactDiv5,
  ContactDiv6,
  Email,
  NewsLetter,
  contactPartners,
} from "../assets";

export function Main() {
  return (
    <div
      id="contactus"
      className="bg-notFound-bg bg-no-repeat bg-cover w-full h-[44vw] "
    >
      {
        //mt-[20vw] md:mt-0
      }
      <div className="bg-notFound-div bg-no-repeat bg-contain w-full h-full ">
        <div className="flex flex-row items-center justify-evenly h-full gap-[5vw]">
          <div className="flex flex-col items-start justify-center h-full gap-[5vw] px-2 py-2">
            <p className="text-[4.3vw] md:text-[4vw] font-bold ">
              {"CONTACT US".toUpperCase()}
            </p>
            <p className="text-[2.2vw] max-w-[50vw] ">
              {"Do not hesitate to send us an email if you can't find what you're looking for.".toUpperCase()}
            </p>
            <hr className="h-[1vw] w-[15vw] bg-[#FF7429]" />
          </div>
          <div className="">
            <img src={ContactDiv1} alt="NewsBg" className=" w-[30vw] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-row items-center justify-evenly px-[2vw] py-[0.5vw] min-h-[40vw] gap-[2vw]">
      <div className="min-w-[40vw] min-h-[10vw] bg-[#ffffff] rounded-[2vw] md:rounded-3xl px-[0.5vw] py-[0.5vw] shadow-2xl">
        <div className="flex flex-col items-center justify-center">
          <div className=" max-w-[35vw] max-auto flex flex-row items-center justify-between w-full">
            <div className="flex flex-col items-start justify-center">
              <p className="text-[3.2vw] font-bold text-[#793300]">
                Get in Touch
              </p>
              <hr className="w-[6vw] h-[0.5vw] bg-[#E25000]" />
              {/* <p className="text-[1.5vh] lg:text-[1vw] font-bold text-[#793300]">
                Stay Informed with Our Newsletter
              </p> */}
            </div>
            <div className="flex items-center justify-center ">
              <img
                src={NewsLetter}
                alt="NewsLetter"
                className="mt-[2vw] w-[10vw] "
              />
            </div>
          </div>
          <form className="w-full max-w-[35vw] flex flex-col gap-[1vw]">
            <label className="flex flex-col">
              <span className="text-[#793300] text-[1.5vw] md:text-[1.2vw] font-medium mb-[1vw]">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                // onChange={handleChange}
                // value={form.name}
                placeholder="what's your name?"
                className="bg-[#FFE7D5] shadow-md text-[1.5vw] md:text-[1.2vw] shadow-primary py-[1vw] px-[2vw] placeholder:text-[#E25000] text-white border-none outline-none font-medium rounded-[1vw]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#793300] text-[1.5vw] md:text-[1.2vw] font-medium mb-[1vw]">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                // onChange={handleChange}
                // value={form.email}
                placeholder="what's your email?"
                className="bg-[#FFE7D5] shadow-md text-[1.5vw] md:text-[1.2vw] shadow-primary py-[1vw] px-[2vw] placeholder:text-[#E25000] text-white border-none outline-none font-medium rounded-[1vw]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#793300] text-[1.5vw] md:text-[1.2vw] font-medium mb-[1vw]">
                Your Message
              </span>
              <textarea
                rows={4}
                name="message"
                // onChange={handleChange}
                // value={form.message}
                placeholder="what do you want to say?"
                className="bg-[#FFE7D5] shadow-md text-[1.5vw] md:text-[1.2vw] shadow-primary py-[1vw] px-[2vw] placeholder:text-[#E25000] text-white border-none outline-none font-medium rounded-[1vw]"
              />
            </label>
            <button className=" bg-gradient-to-b from-[#FE9345] via-[#FD661A] mt-[2vw] to-[#FF611D] rounded-full w-full h-[3vw] text-white text-[0.8vw]">
              REGISTER
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[2vw]">
        <p className="text-[2.3vw] md:text-[2vw] font-bold text-[#793300] ">
          {"have Questions?".toUpperCase()}
        </p>
        <p className="text-[1.5vw] md:text-[1.2vw] max-w-[20vw] text-[#E25000]">
          {"Do not hesitate to send us an email if you can't find what you're looking for.".toUpperCase()}
        </p>
        <div className="flex flex-row items-center justify-between gap-[2vw]">
          <img src={Email} alt="Email" className="w-[5vw] aspect-square" />
          <div className="flex flex-col items-start justify-between">
            <p className="text-[2.1vw] md:text-[1.8vw] font-bold text-[#793300]">
              EMAIL US
            </p>
            <p className="text-[2.1vw] md:text-[1.8vw] text-[#E25000]">
              MNL9@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-[2vw]">
          <img src={Call} alt="Email" className="w-[5vw] aspect-square" />
          <div className="flex flex-col items-start justify-between">
            <p className="text-[2.1vw] md:text-[1.8vw] font-bold text-[#793300]">
              CALL US
            </p>
            <p className="text-[2.1vw] md:text-[1.8vw] text-[#E25000]">
              xxxxxxx.xxxxxxxxx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[70vw] mx-auto mb-[30vw] gap-[3vw]">
      <div className="flex flex-row items-center justify-start w-full bg-[#FFE7D5] px-[2vw] py-[1vw] rounded-[1vw] shadow-xl">
        <p className="text-[2.5vw] md:text-[2vw] font-bold text-[#E25000]">
          {"Questions Asked".toUpperCase()}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-[#FFE7D5] px-[2vw] py-[1vw] rounded-[1vw] shadow-xl pb-[1vw] gap-[2vw]">
        <div className="flex flex-row items-center justify-between w-full max-w-[70vw] mx-auto">
          <div className="flex flex-col items-start justify-center">
            <p className="text-[2.3vw] md:text-[2vw] text-[#793300]">
              {"ABOUT MNL9".toUpperCase()}
            </p>
            <img src={ContactDiv2} alt="Logo" className="w-[25vw] " />
          </div>
          <div>
            <img src={ContactDiv3} alt="ContactDiv3" className="w-[15vw]" />
          </div>
        </div>
        <div className="w-full max-w-[70vw] mx-auto">
          <p className="text-[1.5vw] md:text-[1.2vw] text-[#000000]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-[#FFE7D5] px-[2vw] py-[1vw] rounded-[1vw] shadow-xl pb-[1vw] gap-[2vw]">
        <div className="flex flex-row items-center justify-between w-full max-w-[70vw] mx-auto">
          <div className="flex flex-col items-start justify-center">
            <p className="text-[2.3vw] md:text-[2vw] text-[#793300]">
              {"BAnking And Payment Method".toUpperCase()}
            </p>
          </div>
        </div>
        <div className="w-full max-w-[70vw] mx-auto">
          <p className="text-[1.5vw] md:text-[1.2vw] text-[#000000]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div>
          <img src={contactPartners} alt="ContactDiv4" className="w-[55vw]" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-[#FFE7D5] px-[2vw] py-[1vw] rounded-[1vw] shadow-xl pb-[1vw] gap-[2vw]">
        <div className="flex flex-row items-center justify-between w-full max-w-[70vw] mx-auto">
          <div className="flex flex-col items-start justify-center gap-[2vw]">
            <p className="text-[2.3vw] md:text-[2vw] text-[#793300]">
              {"Security ".toUpperCase()}
            </p>
            <div className="w-full max-w-[40vw] mx-auto">
              <p className="text-[1.5vw] md:text-[1.2vw] text-[#000000]">
                It is a long-established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem Ipsum
                will uncover many websites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humor and the like).
              </p>
            </div>
          </div>
          <div>
            <img src={ContactDiv6} alt="ContactDiv6" className="w-[25vw]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-[3vw]">
      <Main />
      <ContactInfo />
      <div className="w-full max-w-[70vw] mx-auto">
        <hr className="w-full h-[0.1vw] bg-black mb-[2vw]" />
      </div>
      <FAQ />
    </div>
  );
}
export default Contact;
