const Reviews = ({ data2 }) => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 animate__animated animate__flash animate__infinite">
          What Our Travelers Say
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Real experiences from people who traveled with us and created
          unforgettable memories.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data2.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200  rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            {/* User Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="rating">
              <div
                className="mask mask-star bg-green-500"
                aria-label="1 star"
              ></div>
              <div
                className="mask mask-star bg-green-500"
                aria-label="2 star"
              ></div>
              <div
                className="mask mask-star bg-green-500"
                aria-label="3 star"
              ></div>
              <div
                className="mask mask-star bg-green-500"
                aria-label="4 star"
              ></div>
              <div
                className="mask mask-star bg-green-500"
                aria-label="5 star"
                aria-current="true"
              ></div>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              “{item.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
