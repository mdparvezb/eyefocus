import { FiPhone, FiMessageSquare } from 'react-icons/fi';

const CallToAction = () => {
  return (
    <div className="bg-indigo-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-xl font-bold mb-4 md:mb-0">Ready to find your perfect pair?</h3>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:9988776655" 
              className="flex items-center justify-center bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
            >
              <FiPhone className="mr-2" /> Call Now
            </a>
            <a 
              href="https://wa.me/919988776655" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-indigo-700 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-800 transition"
            >
              <FiMessageSquare className="mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;