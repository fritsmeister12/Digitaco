function Hero() {
  return (
    <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
        <div class="xl:w-5/12 flex flex-col justify-between">

            <div class="sm:text-center lg:text-left lg:py-12 xl:py-24">
            <p class="text-orange-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Welkom!</p>

            <h1 class="text-black-800 text-3xl sm:text-5xl md:text-4xl font-bold mb-8 md:mb-12">Wij bieden de beste digitale oplossingen voor <span className="text-orange-500 italic">uw bedrijf</span></h1>

            <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <a href="#" class="inline-block bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus-visible:ring ring-orange-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start now</a>

                <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-orange-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
            </div>
            </div>

            <div class="flex justify-center lg:justify-start items-center gap-4 mt-8 sm:mt-16">
                <span class="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase">Welkom bij</span>
                <span class="w-12 h-px bg-gray-200"></span>
                <span class="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase">Welkom bij</span>
            </div>
        </div>
        <div class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
            <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center" />
        </div>
        </section>
  )
}

export default Hero