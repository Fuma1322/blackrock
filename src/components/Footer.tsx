import React from "react";

const Footer = () => {
  const footerNavs = [
    {
      label: "Company",
      items: [
        { href: "javascript:void()", name: "Team", link: "/about" },
        { href: "javascript:void()", name: "Career", link: "#" },
      ],
    },
    {
      label: "Resources",
      items: [
        { href: "javascript:void()", name: "Contact", link: "/contact" }, 
        { href: "javascript:void()", name: "Pricing", link: "#" },
      ],
    },
    {
      label: "About",
      items: [
        { href: "javascript:void()", name: "Terms", link: "#" }, 
        { href: "javascript:void()", name: "About Us", link: "/about" }, 
      ],
    },
  ];

  return (
    <footer className="text-gray-700 px-4 py-8 mx-auto md:px-8">
      <div className="gap-4 justify-between md:flex">
        {/* Footer Navigation */}
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="/logo.png" className="w-20" alt="BlackRock Butchery Logo" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex-1 mt-6 space-y-4 items-center justify-between  sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-md" key={idx}>
              <h4 className="text-gray-900 font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  {el.link ? (
                    <a href={el.link} className="hover:underline hover:text-indigo-600">
                      {el.name}
                    </a>
                  ) : (
                    <a href={el.href} className="hover:underline hover:text-indigo-600">
                      {el.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-4 py-4 border-t border-[#800000] items-center justify-between sm:flex">
        <div className="mt-2 text-sm sm:mt-0">
          &copy; {new Date().getFullYear()} BlackRock Butchery. All rights reserved.
        </div>
        <div className="mt-4 sm:mt-0">
          <ul className="flex items-center space-x-2">
            {/* Social Media Icons */}
            {/* Your social media icons code here */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
