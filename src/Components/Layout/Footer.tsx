import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-nav">
      <h6 className="text-center pt-12 text-gray-300 text-3xl">Follow Me on the Web</h6>
      <ul className="flex justify-center items-center py-6">
        <li className="border-b-4 border-orange w-6/12"></li>
        <li className="px-4">
          <a className="text-4xl text-gray-300 hover:text-orange" href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li className="px-4">
          <a className="text-4xl text-gray-300 hover:text-orange" href="https://www.facebook.com/" target="_blank">
            <FaFacebookF />
          </a>
        </li>
        <li className="px-4">
          <a className="text-4xl text-gray-300 hover:text-orange" href="https://twitter.com/?lang=en" target="_blank">
            <BsTwitterX />
          </a>
        </li>
        <li className="px-4">
          <a className="text-4xl text-gray-300 hover:text-orange" href="https://ca.pinterest.com/" target="_blank">
            <FaPinterestP />
          </a>
        </li>

        <li className="border-b-4 border-orange w-6/12"></li>
      </ul>
      <h3 className="text-center text-orange text-6xl my-20">Thanks for Visiting</h3>
      <section className="flex justify-center">
        <p className="text-gray-300 py-6">
          Copyright &copy; 2024 Travels With Drea&emsp;|
        </p>
        <a className="text-orange transition duration-300 ease-in-out  hover:text-gray-300 py-6 " href="https://radoyko.com/" target="_blank">
          &emsp;Powered by www.radoyko.com
        </a>
      </section>
    </footer>
  );
}

export default Footer;
