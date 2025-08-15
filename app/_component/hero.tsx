import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[url(/img/BG_HERO.png)] py-5 px-4 lg:px-2">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse justify-between items-center lg:flex-row">
        <div className="text-white w-full lg:w-[50%]">
          <h1 className="text-[#FFE207] text-xl text-center lg:text-left lg:text-[30px]/9 lg:text-balance font-bold mb-2 lg:mb-5">
            SWERTEPLUS MILESTONE CHALLENGE: AUGUST 25–31
          </h1>
          <p className="text-center lg:text-left lg:text-[22px]/7 font-bold mb-2 lg:mb-5">
            Push your limits in this exclusive 7-day slot event.
          </p>
          <div>
            <p className="text-center lg:text-[18px]/6 lg:text-left text-[#FFE207] mb-2 lg:mb-5">
              Earn over ₱6,000 in daily slots or spin winnings to qualify.
              Challenge your limits each day — only the most consistent players
              rise to the top.
            </p>
            <p className="text-center lg:text-[18px]/6 lg:text-left mb-2 lg:mb-5">
              One week only. No second chances. Spin smart, spin strong — your
              daily wins count.
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] border-dashed border-gray-500 rounded-md flex items-center justify-center">
          <Image src="/img/HERO.png" width={450} height={450} alt="Hero" />
        </div>
      </div>
    </section>
  );
}
