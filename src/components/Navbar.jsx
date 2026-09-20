



// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const shouldBeScrolled = window.scrollY > 10;

//           setIsScrolled((prev) => {
//             if (prev === shouldBeScrolled) return prev;
//             return shouldBeScrolled;
//           });

//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[15px] lg:text-base font-bold uppercase tracking-[0.15em] transition-colors duration-200 relative py-1 ${
//       isActive
//         ? "text-[#F36F21]"
//         : "text-white hover:text-[#F36F21]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#F36F21] text-white font-black shadow-lg shadow-[#F36F21]/25"
//         : "text-slate-200 hover:bg-white/5 hover:text-[#F36F21]"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-24 md:h-28 transition-colors duration-200 ${
//         isScrolled
//           ? "bg-[#111111]/92 border-b border-[#F36F21]/20 shadow-lg"
//           : "bg-transparent border-b border-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
//           <Link
//             to="/"
//             className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0 py-2"
//             onClick={() => setOpen(false)}
//           >
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Services Limited Logo"
//               className="h-16 md:h-22 lg:h-24 w-auto object-contain block"
//               loading="eager"
//               decoding="async"
//             />
//           </Link>

//           <div className="hidden md:flex items-center gap-8 lg:gap-12">
//             <div className="flex items-center gap-6 lg:gap-9">
//               <NavLink to="/" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Home
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/services" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Services
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/about-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     About Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/contact-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Contact Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>
//             </div>

//             <div className="flex items-center gap-2.5 text-slate-200 font-bold text-xs lg:text-sm uppercase tracking-widest pl-6 lg:pl-8 border-l border-white/15 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21] shrink-0"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span className="whitespace-nowrap tracking-[0.1em]">
//                 12 Old Bond Street London England W1S4PW
//               </span>
//             </div>
//           </div>

//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-transform active:scale-90 bg-white/5 hover:bg-[#F36F21]/15 border border-white/10 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-xl font-bold text-[#F36F21]">✕</span>
//             ) : (
//               <span className="text-2xl font-light">☰</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="md:hidden bg-[#111111]/96 border-t border-[#F36F21]/20 shadow-xl overflow-hidden absolute top-full left-0 w-full">
//           <div className="px-6 py-6 flex flex-col gap-2">
//             <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>
//               Home
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>
//               Services
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>
//               About Us
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>
//               Contact Us
//             </NavLink>

//             <div className="border-t border-white/10 mt-3 pt-4 flex items-center gap-2.5 text-xs text-slate-300 font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21]"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>London, UK</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
//}




// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const shouldBeScrolled = window.scrollY > 10;
//           setIsScrolled((prev) =>
//             prev === shouldBeScrolled ? prev : shouldBeScrolled
//           );
//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.11em] transition-colors duration-200 relative py-1 ${
//       isActive ? "text-[#F36F21]" : "text-white hover:text-[#F36F21]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#F36F21] text-white font-black shadow-lg shadow-[#F36F21]/25"
//         : "text-slate-200 hover:bg-white/5 hover:text-[#F36F21]"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-24 md:h-28 transition-colors duration-200 ${
//         isScrolled
//           ? "bg-[#111111]/92 border-b border-[#F36F21]/20 shadow-lg"
//           : "bg-transparent border-b border-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 h-full">
//         <div className="flex items-center justify-between h-full gap-5">
//           <Link
//             to="/"
//             className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0 py-2"
//             onClick={() => setOpen(false)}
//             aria-label="PrimeShield Kensington Home"
//           >
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Kensington Pest Control Logo"
//               className="h-16 md:h-20 lg:h-24 w-auto object-contain block"
//               loading="eager"
//               decoding="async"
//             />
//           </Link>

//           <div className="hidden md:flex items-center justify-end gap-4 lg:gap-6 flex-1 min-w-0">
//             <div className="flex items-center gap-4 lg:gap-6 shrink-0">
//               <NavLink to="/" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Home
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/services" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Services
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/about-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     About Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/contact-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Contact Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>
//             </div>

//             <div className="flex items-center gap-2 text-slate-200 font-bold text-[9.5px] lg:text-[10.5px] xl:text-[11px] uppercase tracking-[0.025em] pl-3 lg:pl-5 border-l border-white/15 shrink-0 whitespace-nowrap">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21] shrink-0"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>

//               <span>{address}</span>
//             </div>
//           </div>

//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-transform active:scale-90 bg-white/5 hover:bg-[#F36F21]/15 border border-white/10 shrink-0"
//             aria-label="Toggle PrimeShield Kensington menu"
//           >
//             {open ? (
//               <span className="text-xl font-bold text-[#F36F21]">✕</span>
//             ) : (
//               <span className="text-2xl font-light">☰</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="md:hidden bg-[#111111]/96 border-t border-[#F36F21]/20 shadow-xl overflow-hidden absolute top-full left-0 w-full">
//           <div className="px-6 py-6 flex flex-col gap-2">
//             <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>
//               Home
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>
//               Services
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>
//               About Us
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>
//               Contact Us
//             </NavLink>

//             <div className="border-t border-white/10 mt-3 pt-4 flex items-start gap-2.5 text-xs text-slate-300 font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21] shrink-0 mt-0.5"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>{address}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }







import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Phone,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const companyName = "PrimeShield Services Bromley";
  const phone = "07356 271145";
  const address = "65 Powster Rd, Bromley BR1 5HE";
  const serviceArea = "Bromley";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNavClass = ({ isActive }) =>
    `relative px-3 py-2 text-[13px] lg:text-[14px] font-bold tracking-wide transition-colors duration-200 ${
      isActive
        ? "text-[#F47721]"
        : "text-[#292929] hover:text-[#F47721]"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex items-center justify-between px-4 py-4 text-[15px] font-bold border-b border-[#292929]/10 transition-colors ${
      isActive
        ? "text-[#F47721] bg-[#F47721]/5"
        : "text-[#292929] hover:text-[#F47721]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
          : ""
      }`}
    >
      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}
      <div className="hidden md:block bg-[#292929] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-9 flex items-center justify-between">

            <div className="flex items-center gap-6 text-[11px] font-semibold tracking-wide">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F47721]" />
                <span>Serving {serviceArea}</span>
              </div>

              <div className="h-3.5 w-px bg-white/20" />

              <span className="text-white/70">
                Professional Pest Control Services
              </span>
            </div>

            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[11px] font-bold tracking-wide hover:text-[#F47721] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F47721]" />
              <span>{phone}</span>
            </a>

          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}
      <nav
        className={`bg-white transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#292929]/10"
            : "border-b border-[#292929]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
          <div className="h-[82px] md:h-[88px] flex items-center justify-between gap-6">

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center shrink-0 group"
              aria-label={`${companyName} Home`}
            >
              <img
                src="/images/primelogo.webp"
                alt={`${companyName} Logo`}
                className="h-[58px] md:h-[68px] lg:h-[74px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center ml-auto gap-1">

              <NavLink to="/" className={desktopNavClass}>
                Home
              </NavLink>

              <NavLink to="/services" className={desktopNavClass}>
                Services
              </NavLink>

              <NavLink to="/about-us" className={desktopNavClass}>
                About Us
              </NavLink>

              <NavLink to="/contact-us" className={desktopNavClass}>
                Contact
              </NavLink>

            </div>

            {/* DESKTOP PHONE CTA */}
            <div className="hidden md:flex items-center ml-5 pl-5 border-l border-[#292929]/15">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3 bg-[#F47721] hover:bg-[#292929] text-white px-5 py-3.5 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-white/15">
                  <Phone className="w-4 h-4" />
                </span>

                <span className="flex flex-col leading-none">
                  <span className="text-[9px] uppercase tracking-[0.16em] font-semibold opacity-80 mb-1">
                    Call PrimeShield
                  </span>

                  <span className="text-[14px] font-extrabold tracking-wide">
                    {phone}
                  </span>
                </span>

                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden w-12 h-12 flex items-center justify-center bg-[#292929] text-white transition-colors duration-200 hover:bg-[#F47721]"
              aria-label={
                open
                  ? "Close PrimeShield navigation menu"
                  : "Open PrimeShield navigation menu"
              }
              aria-expanded={open}
            >
              {open ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-white border-b border-[#292929]/15 shadow-2xl transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }`}
      >
        <div className="px-5 pt-5 pb-6">

          {/* MOBILE BRAND INFO */}
          <div className="bg-[#292929] text-white p-5 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 shrink-0 bg-[#F47721] flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#F47721] font-bold mb-1">
                  Service Area
                </p>

                <p className="text-sm font-bold">
                  {serviceArea}
                </p>

                <p className="text-[11px] text-white/65 mt-1 leading-relaxed">
                  {address}
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE LINKS */}
          <div className="border border-[#292929]/10">

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={mobileNavClass}
            >
              <span>Home</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setOpen(false)}
              className={mobileNavClass}
            >
              <span>Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>

            <NavLink
              to="/about-us"
              onClick={() => setOpen(false)}
              className={mobileNavClass}
            >
              <span>About Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>

            <NavLink
              to="/contact-us"
              onClick={() => setOpen(false)}
              className={mobileNavClass}
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>

          </div>

          {/* MOBILE CALL BUTTON */}
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="mt-4 flex items-center justify-between bg-[#F47721] text-white px-5 py-4 hover:bg-[#292929] transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/15 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] font-bold opacity-80">
                  Call Now
                </p>

                <p className="text-sm font-extrabold tracking-wide">
                  {phone}
                </p>
              </div>
            </div>

            <ArrowUpRight className="w-5 h-5" />
          </a>

        </div>
      </div>
    </header>
  );
}