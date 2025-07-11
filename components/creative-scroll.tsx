import { VelocityScroll } from "./magicui/scroll-based-velocity"

const CreativeScroll =()=>{
    return (
   
        <div className="w-full flex items-center justify-center">
          <VelocityScroll
            defaultVelocity={1.5}
            numRows={2}
            className="py-18 mt-10 "
          >
            {/* "Creative */}
        <span className="text-element text-6xl sm:text-9xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-red-600 dark:from-rose-300 dark:via-pink-400 dark:to-red-500 bg-clip-text text-transparent mr-4 sm:mr-6">
          &quot;Creative
        </span>

        {/* we */}
        <span className="text-element text-6xl sm:text-9xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 dark:from-pink-400 dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent mr-4 sm:mr-6">
          we
        </span>

        {/* are!" */}
        <span className="text-element text-6xl sm:text-9xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-500 dark:from-teal-300 dark:via-cyan-400 dark:to-sky-500 bg-clip-text text-transparent mr-4 sm:mr-6">
          are!&quot;
        </span>
          </VelocityScroll>
        </div>
   
    )
}

export default CreativeScroll