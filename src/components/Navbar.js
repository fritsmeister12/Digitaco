
const Navbar = () => {
  return (
            <header class="flex justify-between items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
                <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold" aria-label="logo">
                    <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-orange-400 mr-2.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                    </svg>

                    Digi<span className="text-orange-400 ml-0">taco</span>
                </a>

                <nav class="hidden lg:flex gap-12">
                    <a href="#" class="text-orange-500 text-lg font-semibold">Home</a>
                    <a href="#" class="text-gray-600 hover:text-orange-500 active:text-orange-700 text-lg font-semibold transition duration-100">Features</a>
                    <a href="#" class="text-gray-600 hover:text-orange-500 active:text-orange-700 text-lg font-semibold transition duration-100">Pricing</a>
                    <a href="#" class="text-gray-600 hover:text-orange-500 active:text-orange-700 text-lg font-semibold transition duration-100">About</a>
                </nav>

                <a href="#" class="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-orange-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact Sales</a>

                <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-orange-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>

                    Menu
                </button>
            </header>
  )
}

export default Navbar