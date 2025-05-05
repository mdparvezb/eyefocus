import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    content:
      "The frames I got from EyeFocus are not only stylish but also extremely comfortable. My vision has never been clearer!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Graphic Designer",
    content:
      "Excellent service and a wide variety of frames to choose from. The staff was very helpful in selecting the perfect pair.",
    rating: 4,
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "College Student",
    content:
      "Affordable prices for premium brands. I've been coming here for years and always leave satisfied.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
              <FaQuoteLeft className="text-gray-400 text-2xl mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
