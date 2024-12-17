import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SectionCourausal = () => {
  const users = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      description: "Passionate developer with 5 years of experience.",
      rating: 4.5,
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Jane Smith",
      description: "Creative designer with a flair for unique visuals.",
      rating: 5,
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Mike Johnson",
      description: "Full-stack engineer and tech enthusiast.",
      rating: 4,
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Emily Clark",
      description: "Marketing guru with an eye for trends.",
      rating: 4.8,
    },
  ];

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, idx) => (
          <span key={idx} className="text-yellow-400 text-lg">&#9733;</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400 text-lg">&#9734;</span>}
      </div>
    );
  };

  return (
    <div className="w-full p-6 mt-7">
      <h2 className="text-center text-3xl font-semibold mb-4">
      What Clients Say!
      </h2>
      <p className="text-center text-lg  mb-8">See More our Digital Marketing Agency Helped CLients Achieves Their Goals</p>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-14 h-14 rounded-full border-2 border-gray-200"
                />
                <div className="text-left">
                  <div className="text-lg font-semibold">{user.name}</div>
                  <div className="text-gray-500 text-sm">Software Engineer</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 my-2">{user.description}</p>
              <StarRating className="text-md" rating={user.rating} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionCourausal;
