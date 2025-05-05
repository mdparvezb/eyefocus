import { useState } from "react";
import FrameBrands from "../components/FrameBrands";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import { FiSearch, FiHeart, FiPhone } from "react-icons/fi";
import SimpleImageSlider from "react-simple-image-slider";

const galleryImages = [
  {
    url: "https://plus.unsplash.com/premium_photo-1661376617518-5d725a3bbe77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3B0aWNhbCUyMHNob3B8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1615468822882-4828d2602857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3B0aWNhbCUyMHNob3B8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1701546466992-63c679dd7e67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3B0aWNhbCUyMHNob3B8ZW58MHx8MHx8fDA%3D",
  },
];

const frameImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1608539733377-5557e02926b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R5bGlzaCUyMGZyYW1lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    src: "https://media.istockphoto.com/id/1219605300/photo/closeup-of-mans-hands-marking-lens-for-eyeglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=PbXrAZFeUvA-q-xRQKMlajFseVZGhMrK0zgjXBctriQ=",
    alt: "Optical Lenses",
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1925090825/photo/black-frame-eyeglasses.jpg?s=612x612&w=0&k=20&c=lGiJFYyPRvuH6MajKA8LQ2P_HpqIgCzBvp7EhEyO5_Q=",
    alt: "Metal Frames",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1717381272373-4295520d33ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYW5zcGFyZW50JTIwc3BlY3RhY2xlJTIwZnJhbWVzfGVufDB8fDB8fHww",
    alt: "Transparent Frames",
  },
  {
    id: 5,
    src: "https://media.istockphoto.com/id/1446300082/photo/close-up-woman-applying-contact-eye-lens.webp?a=1&b=1&s=612x612&w=0&k=20&c=V_yiBYIZ4DQoaSEG02Q9EogI1Vj9RBdbTM7GNXwbiow=",
    alt: "Contact Lenses",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1608539733292-190446b22b83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Sunglasses",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* Hero Section */}
      {/* <section className="relative bg-indigo-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            See the World Clearly
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover premium eyewear that combines style, comfort, and perfect
            vision at EyeFocus Opticals.
          </p>

          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search frames, brands..."
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-3 top-3 text-gray-500 hover:text-indigo-600">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      </section> */}

      <div className="w-full h-[400px]">
        <SimpleImageSlider
          width={"100%"}
          height={400}
          images={galleryImages}
          showBullets={true}
          showNavs={true}
        />
      </div>
      {/* Book Appointment */}

      <div className="my-12 flex items-center justify-center px-6 py-2">
        <a
          href="tel:9988776655"
          className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-orange-600 transition"
        >
          <FiPhone className="mr-2" /> Book An Appointment
        </a>
      </div>

      {/* Featured Frames */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameImages.map((frame) => (
              <div
                key={frame.id}
                className="frame-card bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative">
                  <img
                    src={frame.src}
                    alt={frame.alt}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-lg mb-1">{frame.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FrameBrands />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
