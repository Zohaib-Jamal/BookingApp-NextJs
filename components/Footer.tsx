import React from "react";

function Footer() {
  return (
    <footer className="bg-primary  text-white rounded-t-3xl flex flex-col md:flex-col">
      <div className="flex flex-col md:flex-row w-full py-10 lg:py-20 px-10 lg:px-32 justify-between">
        <div className="my-3 md:my-0 md:mr-10">
          <h5 className="text-base font-semibold mb-3">Support</h5>
          <ul className="text-sm font-light">
            <li className="mb-1">Manage your Trips</li>
            <li className="mb-1">Customer Service</li>
            <li>Safety Resource Center</li>
          </ul>
        </div>
        <div className="my-3 md:my-0 md:mr-10">
          <h5 className="text-base font-semibold mb-3">Discover</h5>
          <ul className="text-sm font-light">
            <li className="mb-1">Seasonal and holiday deals</li>
            <li className="mb-1">Travel articles</li>
            <li>Travel Agents</li>
          </ul>
        </div>
        <div className="my-3 md:my-0 md:mr-10">
          <h5 className="text-base font-semibold mb-3">Terms and Settings</h5>
          <ul className="text-sm font-light">
            <li className="mb-1">Privacy & cookies</li>
            <li className="mb-1">Terms and conditions</li>
          </ul>
        </div>

        <div className="my-3 md:my-0 md:mr-10">
          <h5 className="text-base font-semibold mb-3">About</h5>
          <ul className="text-sm font-light">
            <li className="mb-1">How we work</li>
            <li className="mb-1">About</li>
          </ul>
        </div>
        <div className="my-3 md:my-0 ">
          <h5 className="text-base font-semibold mb-3">Contact Us</h5>
          <ul className="text-sm font-light">
            <li className="mb-1">
              Address: 123 Main Street, Anytown, CA 12345
            </li>
            <li className="mb-1">Tel: +(123) 456-7890</li>
            <li className="mb-1">Mail: bywayedu@webkul.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white py-2 flex justify-center items-center">
        <span className="text-sm font-light">Copyright 2024</span>
      </div>
    </footer>
  );
}

export default Footer;
