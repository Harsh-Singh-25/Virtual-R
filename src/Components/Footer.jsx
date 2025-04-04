import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../Constants';

const Footer = () => {
  return (
   <footer className="mt-20 border-t py-10 border-neutral-100">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
    <div>
      <h3 className="text-md font-semibold mb-4 text-left">Resources</h3>
      <ul className="space-y-2">
        {resourcesLinks.map((link, index) => (
          <li key={index}>
            <a
              className="text-neutral-300 hover:text-white "
              href={link.href}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-md font-semibold mb-4 text-left">Platforms</h3>
      <ul className="space-y-2 ">
        {platformLinks.map((link, index) => (
          <li key={index}>
            <a
              className="text-neutral-300 hover:text-white "
              href={link.href}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-md font-semibold mb-4 text-left">Community</h3>
      <ul className="space-y-2">
        {communityLinks.map((link, index) => (
          <li key={index}>
            <a
              className="text-neutral-300 hover:text-white "
              href={link.href}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</footer>
  );
};

export default Footer;