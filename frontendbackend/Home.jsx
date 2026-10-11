function Home({ setPage }) {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="flex min-h-[600px] items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <p className="mb-4 text-lg font-bold uppercase tracking-widest text-orange-500">
            Fresh • Hot • Delicious 
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-800 md:text-7xl">
            Chaudhary Brothers
          </h1>

          <p className="mt-4 text-3xl font-bold text-orange-500">
            Juices • Chai • Shakes
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Fresh juices, hot chai and delicious shakes —
            everything you love, all in one place.
          </p>

          <button
            onClick={() => setPage("menu")}
            className="mt-8 rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-orange-600"
          >
            View Our Menu 🍹
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
          What We Serve
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {/* Juices */}
          <div className="rounded-2xl bg-orange-50 p-8 text-center shadow-sm">
          <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9rg28NUG72mjnYlIQ6D7cH-xRGNXZp5TtO5iLdgYHQ&s=10"
  alt="Fresh Juices"
  className="mx-auto h-32 w-32 rounded-2xl object-cover"
/>

            <h3 className="mt-5 text-2xl font-bold text-orange-600">
              Fresh Juices
            </h3>

            <p className="mt-3 text-gray-600">
              Fresh and healthy juices made from quality fruits.
            </p>
          </div>

          {/* Chai */}
          <div className="rounded-2xl bg-amber-50 p-8 text-center shadow-sm">
           <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJ2UMUqlWndwE_bakMd_IR8B0csHwpYPSAjEP78_3dQ&s=10"
  alt="Hot Chai"
  className="mx-auto h-32 w-32 rounded-2xl object-cover"
/>

            <h3 className="mt-5 text-2xl font-bold text-amber-700">
              Hot Chai
            </h3>

            <p className="mt-3 text-gray-600">
              Freshly prepared hot chai, perfect for every time.
            </p>
          </div>

          {/* Shakes */}
          <div className="rounded-2xl bg-pink-50 p-8 text-center shadow-sm">
            <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoyoAFMPQZ_BUT7uAvtxeZB8wkyNrNtqFlFNG-uXnM0g&s=10"
  alt="Delicious Shakes"
  className="mx-auto h-32 w-32 rounded-2xl object-cover"
/>

            <h3 className="mt-5 text-2xl font-bold text-pink-600">
              Delicious Shakes
            </h3>

            <p className="mt-3 text-gray-600">
              Creamy and delicious shakes made with fresh ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 px-6 py-16 text-center text-white">
        <h2 className="text-4xl font-bold">
          Taste Something Delicious Today! 😋
        </h2>

        <p className="mt-4 text-lg">
          Visit Chaudhary Brothers or order your favorite drink online.
        </p>

        <button
          onClick={() => setPage("menu")}
          className="mt-7 rounded-full bg-white px-8 py-3 font-bold text-orange-600 hover:bg-orange-100"
        >
          Order Now
        </button>
      </section>
    </div>
  );
}

export default Home;
