import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">EyeFocus Opticals</h3>
            <p className="text-gray-300">
              Your vision is our priority. We offer premium eyewear with the
              latest technology to enhance your sight and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4"><Link to='/contact'>Contact Us</Link></h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <FiPhone className="mr-2" />
                <a
                  href="tel:9988776655"
                  className="text-gray-300 hover:text-white"
                >
                  9988776655
                </a>
              </div>
              <div className="flex items-center">
                <FiMail className="mr-2" />
                <a
                  href="mailto:info@eyefocusopticals.com"
                  className="text-gray-300 hover:text-white"
                >
                  eyefocusopticals@gmail.com
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} EyeFocus Opticals. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
