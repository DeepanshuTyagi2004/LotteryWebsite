import { NotFoundDiv1, NotFoundDiv2 } from '../assets'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] min-h-[100vh] bg-notFound-bg bg-no-repeat bg-cover mb-[20vh] md:mb-[40vh]">
      <div className="grid place-content-center">
        <img
          src={NotFoundDiv2}
          alt="NotFoundDiv2"
          className="w-[80vh] aspect-video"
        />
      </div>
      <div className="flex flex-row items-center justify-end w-full mx-auto -mt-[16vw] lg:-mt-[16vh] lg:max-w-[60vw]">
        <p className="text-[5.5vw] lg:text-[3.5vw] font-bold text-[#B03E00]">
          {'pAGE noT foUND'.toUpperCase()}
        </p>
        <img
          src={NotFoundDiv1}
          alt="NotFoundDiv1"
          className="w-[50vw] lg:w-[50vh] aspect-video -ml-[3vw]"
        />
      </div>
      <div className="flex flex-row items-center justify-center w-full mx-auto lg:max-w-[60vw] lg:px-6 lg:py-4 px-2 py-2">
        <p className="text-[4.0vw] lg:text-[2.0vw] font-bold text-[#B03E00]">
          {'The page you’re looking for is now beyond our reach.'.toUpperCase()}
        </p>
        
      </div>
    </div>
  )
}
export default NotFound
