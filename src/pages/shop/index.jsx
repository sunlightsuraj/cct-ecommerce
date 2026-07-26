import React from 'react'

const Shop = () => {
  return (
    <>
     <section className="w-full mx-auto px-6 py-12">{/**<!--shop hero section--> */} 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Card 1: Collections --> */}
          <div className="group relative rounded-3xl overflow-hidden h-130 w-3/3">
            <img
              src="src/assets/shop-hero-1.webp"
              alt="Collections"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10"
            ></div>

            <div className="relative flex items-start justify-between p-6">
              <span
                className="bg-white text-slate-900 text-sm font-semibold px-5 py-3 rounded-full"
                >Collections</span
              >
              <span
                className="flex items-center justify-center h-11 w-11 rounded-full bg-white hover:bg-black hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white font-bold text-2xl leading-snug">
                Blandit Natoque Elementum Nascetur
              </h3>
            </div>
          </div>

          {/* <!-- Card 2: New Arrivals --> */}
          <div className="group relative rounded-3xl overflow-hidden h-130 w-80">
            <img
              src="src/assets/shop-hero-2.webp"
              alt="New Arrivals"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10"
            ></div>

            <div className="relative flex items-start justify-between p-6">
              <span
                className="bg-white text-slate-900 text-sm font-semibold px-5 py-3 rounded-full"
                >New Arrivals</span
              >
              <span
                className="flex items-center justify-center h-11 w-11 rounded-full bg-white hover:bg-black hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white font-bold text-2xl leading-snug">
                Fermentum Maximus Consecte Bingilla
              </h3>
            </div>
          </div>

          {/* <!-- Card 3: Discounts + Subscribe --> */}
          <div
            className="group absolute rounded-3xl overflow-hidden h-130 w-138 ml-198"
          >
            <img
              src="src/assets/shop-hero-3.webp"
              alt="Discounts"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            ></div>

            <div className="relative flex items-start justify-between p-6">
              <span
                className="bg-white text-slate-900 text-sm font-semibold px-5 py-3 rounded-full"
                >Discounts</span
              >
              <span
                className="flex items-center justify-center h-11 w-11 rounded-full bg-white hover:bg-black hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-stretch gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-white rounded-lg px-5 py-4 text-sm text-slate-600 placeholder-slate-400 focus:outline-none min-w-0"
                />
                <button
                  className="bg-slate-900 text-white font-semibold px-6 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
 
    {/* <!-- LEFT: products --> */}
    <div>
 
      {/* <!-- Top bar --> */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm font-semibold tracking-wide text-slate-500">SHOWING 1-12 OF 35 RESULTS</p>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none">
          <option>Default sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>
 
      {/* <!-- Product grid --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 
        {/* <!-- Card: Augue Nullam --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-1.webp" alt="Augue Nullam" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Augue Nullam</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">HATS &amp; SCARFS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$25.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Congue Quam (SALE) --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <span className="absolute top-4 left-4 z-10 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-md">SALE</span>
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-2.webp" alt="Congue Quam" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Congue Quam</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SWEATERS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$40.00 <span className="text-gray-400 font-normal line-through text-sm">$45.00</span></span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Cras Malesua --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-3.webp" alt="Cras Malesua" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Cras Malesua</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">HATS &amp; SCARFS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$20.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Curae Musa --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-4.webp" alt="Curae Musa" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Curae Musa</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SHOES &amp; SOCKS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$17.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Fames Primis --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-5.webp" alt="Fames Primis" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Fames Primis</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SWEATERS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$35.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Fusce Etiam --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-6.webp" alt="Fusce Etiam" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Fusce Etiam</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">DRESSES</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$35.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Fusce Phasellus --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-7.webp" alt="Fusce Phasellus" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Fusce Phasellus</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SWEATERS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$30.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Hendrerit Elitest --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-8.webp" alt="Hendrerit Elitest" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Hendrerit Elitest</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">HATS &amp; SCARFS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$20.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Iaculis Craso --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-9.webp" alt="Iaculis Craso" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Iaculis Craso</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">TOYS &amp; GAMES</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$40.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Interdu Torquent --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-10.webp" alt="Interdu Torquent" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Interdu Torquent</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">T-SHIRTS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$15.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Justo Finibus --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-11.webp" alt="Justo Finibus" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Justo Finibus</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">DRESSES</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$35.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Libero Semper --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-12.webp" alt="Libero Semper" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Libero Semper</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SWEATERS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$25.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
      </div>
 
      {/* <!-- Pagination --> */}
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-2">
          <button className="h-10 w-10 rounded-lg bg-amber-400 text-slate-900 font-bold text-sm">1</button>
          <button className="h-10 w-10 rounded-lg text-slate-700 font-semibold text-sm hover:bg-gray-100">2</button>
          <button className="h-10 w-10 rounded-lg text-slate-700 font-semibold text-sm hover:bg-gray-100">3</button>
        </div>
        <button className="inline-flex items-center gap-2 border border-gray-200 text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-gray-400 transition-colors duration-200">
          NEXT
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
 
    {/* <!-- RIGHT: filters sidebar --> */}
    <aside className="space-y-10">
 
      {/* <!-- Price + Color filter (single section) --> */}
      <div>
        <h3 className="font-bold text-slate-900 mb-5">Filter by price</h3>
 
        {/* <!-- range slider (visual) --> */}
        <div className="relative h-1 bg-gray-200 rounded-full mb-4">
          <div className="absolute left-[5%] right-[10%] top-0 h-1 bg-amber-400 rounded-full"></div>
          <span className="absolute left-[5%] -top-2 h-5 w-5 rounded-full bg-white border-2 border-amber-400 -translate-x-1/2"></span>
          <span className="absolute right-[10%] -top-2 h-5 w-5 rounded-full bg-white border-2 border-amber-400 translate-x-1/2"></span>
        </div>
        <p className="text-sm text-slate-500 mb-8">Price: <span className="font-semibold text-slate-900">$15 - $50</span></p>
 
        <h3 className="font-bold text-slate-900 mb-5">Filter by color</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-white"></span> White
            </label>
            <span className="text-sm text-slate-400">6</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-gray-400"></span> Gray
            </label>
            <span className="text-sm text-slate-400">3</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-amber-100"></span> Beige
            </label>
            <span className="text-sm text-slate-400">11</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-yellow-400"></span> Yellow
            </label>
            <span className="text-sm text-slate-400">3</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-orange-500"></span> Orange
            </label>
            <span className="text-sm text-slate-400">3</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-red-500"></span> Red
            </label>
            <span className="text-sm text-slate-400">8</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-purple-500"></span> Purple
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-blue-500"></span> Blue
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-green-700"></span> Green
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-black"></span> Black
            </label>
            <span className="text-sm text-slate-400">1</span>
          </li>
        </ul>
      </div>
 
      {/* <!-- Category filter --> */}
      <div>
        <h3 className="font-bold text-slate-900 mb-5">Filter by category</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Toys &amp; Games
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Dresses
            </label>
            <span className="text-sm text-slate-400">6</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Hats &amp; Scarfs
            </label>
            <span className="text-sm text-slate-400">6</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Shoes &amp; Socks
            </label>
            <span className="text-sm text-slate-400">6</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Sweaters
            </label>
            <span className="text-sm text-slate-400">7</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> T-shirts
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
        </ul>
      </div>
 
      {/* <!-- Best selling --> */}
      <div>
        <h3 className="font-bold text-slate-900 mb-5">Best selling</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <img src="src/assets/product-image-13.webp" alt="Torquent Oduis" className="h-16 w-16 rounded-lg object-cover"/>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Torquent Oduis</p>
              <p className="text-slate-500 text-sm mt-1">$25.00</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <img src="src/assets/product-image-14.webp" alt="Justo Finibus" className="h-16 w-16 rounded-lg object-cover"/>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Justo Finibus</p>
              <p className="text-slate-500 text-sm mt-1">$35.00</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <img src="src/assets/product-image-15.webp" alt="Mattis Aliquam" className="h-16 w-16 rounded-lg object-cover"/>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Mattis Aliquam</p>
              <p className="text-slate-500 text-sm mt-1">$30.00 <span className="line-through text-slate-400">$35.00</span></p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <img src="src/assets/product-image-16.webp" alt="Montes Dictum" className="h-16 w-16 rounded-lg object-cover"/>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Montes Dictum</p>
              <p className="text-slate-500 text-sm mt-1">$15.00 <span className="line-through text-slate-400">$20.00</span></p>
            </div>
          </li>
        </ul>
      </div>
 
      {/* <!-- Promo card --> */}
      <div className="relative rounded-3xl overflow-hidden bg-amber-200 min-h-[340px]">
        <div className="relative z-10 p-6">
          <p className="text-xs font-bold tracking-wide text-slate-800">NEW COLLECTION</p>
          <div className="flex items-end gap-1 mt-2">
            <span className="text-6xl font-black text-slate-900 leading-none">40</span>
            <span className="flex flex-col leading-tight pb-1">
              <span className="text-slate-900 font-semibold text-sm">%</span>
              <span className="text-slate-900 font-semibold text-sm">OFF</span>
            </span>
          </div>
          <a href="#" className="inline-block mt-32 bg-slate-900 text-white font-semibold text-sm px-6 py-4 rounded-lg hover:bg-slate-700 transition-colors duration-200">
            View Offer
          </a>
        </div>
        <img src="src/assets/boy-child.webp" alt="New collection" className="absolute bottom-0  right-3 h-56 w-auto object-contain"/>
      </div>
 
    </aside>
 
  </div>
</section>
<div className="bg-slate-900 rounded-3xl mt-16 mb-16 px-10 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Secure Payments --> */}
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path stroke-linecap="round" d="M2 9h20" />
                <path stroke-linecap="round" d="M5 15h4" />
              </svg>
              <div>
                <h3 className="font-bold text-white">Secure Payments</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Tellus gravida ipsum aut facilisis tempus at et aliquam
                  estsem.
                </p>
              </div>
            </div>

            {/* <!-- Free Shipping --> */}
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2 8h11v8H2z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 11h4l3 3v2h-7z"
                />
                <circle cx="6" cy="18" r="1.5" />
                <circle cx="17" cy="18" r="1.5" />
              </svg>
              <div>
                <h3 className="font-bold text-white">Free Shipping</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Non pulvinar aenean ultrices lectus vitae imperdiet aeu.
                </p>
              </div>
            </div>

            {/* <!-- 24/7 Support --> */}
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                />
                <path
                  stroke-linecap="round"
                  d="M10 10a2 2 0 113 1.7c-.6.4-1 1-1 1.8"
                />
                <circle cx="12" cy="16" r="0.5" fill="currentColor" />
              </svg>
              <div>
                <h3 className="font-bold text-white">24/7 Support</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Nullam iaculis vestibulum arcu id urnain pellentesque quis.
                </p>
              </div>
            </div>

            {/* <!-- Gifts & Sales --> */}
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <rect x="3" y="9" width="18" height="4" rx="1" />
                <path
                  stroke-linecap="round"
                  d="M5 13v7a1 1 0 001 1h12a1 1 0 001-1v-7"
                />
                <path stroke-linecap="round" d="M12 9v12" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9c-1.5 0-3-1-3-2.5S10 4 11 4.5 12 7 12 9zM12 9c1.5 0 3-1 3-2.5S14 4 13 4.5 12 7 12 9z"
                />
              </svg>
              <div>
                <h3 className="font-bold text-white">Gifts &amp; Sales</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Aliquet ullamcorper leo mi vel sit pretium euismod eget
                  libero.
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Shop
