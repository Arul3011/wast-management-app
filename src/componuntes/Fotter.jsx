import React from 'react';

function Footer(props) {
  return (
    <footer className="flex flex-wrap justify-around items-center p-8 bg-green-100">
     
      <div className="flex flex-col items-start space-y-2">
        <h1 className="text-2xl text-green-700">RECYCLE RALLY</h1>
        <p className="text-green-700">Name: Admin</p>
        <p className="text-green-700">Email: Admin@outlook.com</p>
        <p className="text-green-700">Contact No: 123456789</p>
      </div>

      <div className="flex flex-col items-start space-y-3 mt-4 md:mt-0">
        <h2 className="text-xl text-green-700">Links</h2>
        <div className="space-y-2 flex flex-col ">
          <a href="#home" className="text-green-700 hover:underline">Home</a>
          <a href="#about" className="text-green-700 hover:underline">About Us</a>
          <a href="#contact" className="text-green-700 hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
