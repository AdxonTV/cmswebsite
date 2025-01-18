"use client";

import React from "react";

const Footer = () => {
  return (
    <div className="min-h-screen h-[100vh] mt-[-110vh] bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 border-b border-gray-700">
        <div className="text-lg font-medium">Menu</div>
        <div className="text-sm px-4 py-2 border border-gray-500 rounded-lg cursor-pointer">
          Reserve
        </div>
      </header>

      {/* Main Content */}
      <div className="relative flex flex-col items-start px-8">
        {/* Contact Section */}
        <div className="mt-16">
          <h2 className="text-xl font-medium mb-4">Contact</h2>
          <p className="text-gray-400 mb-2">
            If you want to get in touch, please send email to address.
          </p>
          <a
            href="mailto:contact@ochill.jp"
            className="text-white underline text-lg font-medium"
          >
            contact@ochill.jp
          </a>
          <p className="text-gray-500 mt-8">© Ochill All Rights Reserved.</p>
        </div>

        {/* Info & Socials */}
        <div className="absolute top-16 right-8 flex space-x-16">
          {/* Info Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Who we are</li>
              <li>Perspective</li>
              <li>Artworks</li>
              <li>Place</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Socials</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        {/* Large Text */}
     
      </div>
    </div>
  );
};

export default Footer;