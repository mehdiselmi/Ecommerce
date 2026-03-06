import React from "react";

const Feature = () => {
  const card = [
    {
      id: 1,
      img: "Images3.png",
      title: " men men men vmen",
      price: "$200",
      year: "2-5 years . Dresses",
    },
    {
      id: 2,
      img: "Images.png",
      title: "loremsdflknasgnoew",
      price: "$89",
      year: "3-12 years . Shorts",
    },
    {
      id: 3,
      img: "Images1.png",
      title: "loremsdflknasgnoew loremsdflknasgnoew loremsdflknasgnoew",
      price: "$99",
      year: "3-12 years . Shorts",
    },
    {
      id: 4,
      img: "Images2.png",
      title: "loremsdflknasgnoew loremsdflknasgnoew loremsdflknasgnoew",
      price: "$199",
      year: "12-18 years . Shorts",
    },
  ];
  return (
    <div className="mt-15 py-10 bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-semibold">Featured Products</p>
        <p className="px-30 py-5 text-gray-600">
          Discover our most loved pieces, each crafted with care and designed
          for endless adventures.
        </p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 md:w-230 pt-15 m-auto gap-10 items-center justify-center px-10  ">
        {card.map((item) => (
          <div
            key={item}
            className="bg-white  hover:shadow-lg transition-shadow duration-700 rounded-lg  "
          >
            <div className="rounded-lg p-5">
              <img
                src={item.img}
                className="h-90 w-full hover:scale-102 transition-all duration-300  rounded-xl bg-cover bg-center"
              />
            </div>
            <p className="px-5 ">⭐⭐⭐⭐⭐ <span className="text-gray-400">58 Reviews</span></p>
            <div className="flex justify-between p-5">
              <h1 className="text-secondary text-xl">{item.title}</h1>
              <p className="font-bold text-primary">{item.price}</p>
            </div>
            <p className="px-5 text-gray-600">{item.year}</p>
            <div className="p-5">
              <button className="border w-full py-2 hover:bg-white cursor-pointer hover:text-primary transition-all duration-800 font-bold rounded-lg bg-primary text-white outlie">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
