import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import CallToAction from "../components/CallToAction";

const Contact = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <FiMapPin
                  className="text-indigo-600 mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-gray-600">
                    Deshpande Nagar Opp: Dr Agarwals Eye Hospital Hubli - 580030
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FiPhone
                  className="text-indigo-600 mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h3 className="font-medium">Phone Number</h3>
                  <p className="text-gray-600">
                    <a href="tel:9988776655" className="hover:text-indigo-600">
                      9988776655
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FiMail
                  className="text-indigo-600 mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h3 className="font-medium">Email Address</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@eyefocusopticals.com"
                      className="hover:text-indigo-600"
                    >
                      eyefocusopticals@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FiClock
                  className="text-indigo-600 mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h3 className="font-medium">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 10:00 AM - 8:00 PM
                  </p>
                  <p className="text-gray-600">Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="container mx-auto px-4 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-6">Our Location</h2>
          <div className="h-80 bg-gray-200 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.035044667054!2d72.82821431584698!3d19.05998768709836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91d7ffbbf0d%3A0x6de75142cec26203!2sTaj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1623756789012!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="EyeFocus Opticals Location"
            ></iframe>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default Contact;
