




// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     // h-full ki jagah mobile par min-h aur automatic spacing handle karne ke liye padding add ki hai
//     <section className="relative min-h-[620px] sm:min-h-[680px] md:min-h-[640px] lg:h-[720px] flex items-center overflow-hidden bg-[#7a6363] font-sans pt-28 pb-12 md:py-0">
//       <img
//         src="/images/services-primeshield-banner.webp"
//         alt="PrimeShield Services Limited pest control services for London homes and businesses"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="eager"
//         decoding="async"
//       />

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-[#111111]/65" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/65 to-[#111111]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       {/* Decorative Bars */}
//       <div className="absolute top-0 right-0 w-64 md:w-96 h-[6px] bg-[#F36F21]" />
//       <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#F36F21]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full flex items-center">
//         <div className="max-w-4xl w-full">
          
//           {/* Subtitle */}
//           <span className="inline-flex items-center gap-3 text-[#F36F21] text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] mb-4 sm:mb-6">
//             <span className="w-6 sm:w-10 h-[2px] bg-[#F36F21]" />
//             PrimeShield Pest Control
//           </span>

//           {/* Main Heading - Responsive sizing saaf overlap khatam karega */}
//           <h1 className="text-white text-4xl sm:text-6xl lg:text-[88px] font-black leading-[1.05] sm:leading-[1.02] tracking-tight uppercase">
//             Services
//           </h1>

//           {/* Divider Line */}
//           <div className="w-16 sm:w-24 h-[3px] bg-[#F36F21] mt-5 mb-5 sm:mt-8 sm:mb-8" />

//           {/* Description */}
//           <p className="text-white/80 text-xs sm:text-sm md:text-lg leading-relaxed max-w-2xl">
//             Professional pest control services for London homes, landlords and
//             businesses. From rodents and bed bugs to wasps, cockroaches, ants
//             and fleas, our team helps protect your property with reliable
//             treatment and prevention support.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
//             <Link
//               to="/contact-us"
//               className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors w-full sm:w-auto"
//             >
//               Contact Us
//               <ArrowRight size={17} />
//             </Link>

//             <Link
//               to="/about-us"
//               className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#111111] transition-colors w-full sm:w-auto"
//             >
//               About Company
//             </Link>
//           </div>

//           {/* Info Badges - Grid automatic rows control karega */}
//           <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                 Safe & Targeted Treatments
//               </span>
//             </div>

//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <MapPin className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                12 Old Bond Street, London, England,W1S4PW
//               </span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }













// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     <section className="relative min-h-[620px] sm:min-h-[680px] md:min-h-[640px] lg:h-[720px] flex items-center overflow-hidden bg-[#7a6363] font-sans pt-28 pb-12 md:py-0">
//       <img
//         src="/images/services-primeshield-banner.webp"
//         alt="PrimeShield Kensington pest control services for Kensington and South Kensington properties"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="eager"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/65" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/65 to-[#111111]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       <div className="absolute top-0 right-0 w-64 md:w-96 h-[6px] bg-[#F36F21]" />
//       <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#F36F21]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full flex items-center">
//         <div className="max-w-4xl w-full">
//           <span className="inline-flex items-center gap-3 text-[#F36F21] text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] mb-4 sm:mb-6">
//             <span className="w-6 sm:w-10 h-[2px] bg-[#F36F21]" />
//             PrimeShield Kensington
//           </span>

//           <h1 className="text-white text-4xl sm:text-6xl lg:text-[88px] font-black leading-[1.05] sm:leading-[1.02] tracking-tight uppercase">
//             Services
//           </h1>

//           <div className="w-16 sm:w-24 h-[3px] bg-[#F36F21] mt-5 mb-5 sm:mt-8 sm:mb-8" />

//           <p className="text-white/80 text-xs sm:text-sm md:text-lg leading-relaxed max-w-2xl">
//             Professional pest control services for Kensington homes, landlords
//             and businesses. From rodents and bed bugs to wasps, cockroaches,
//             ants and fleas, PrimeShield Kensington helps protect local
//             properties with reliable treatment, inspection and prevention
//             support from 40 Harrington Rd, South Kensington, London SW7 3ND.
//           </p>

//           <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
//             <Link
//               to="/contact-us"
//               className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors w-full sm:w-auto"
//             >
//               Contact Kensington Team
//               <ArrowRight size={17} />
//             </Link>

//             <Link
//               to="/about-us"
//               className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#111111] transition-colors w-full sm:w-auto"
//             >
//               About PrimeShield Kensington
//             </Link>
//           </div>

//           <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                 Safe & Targeted Treatments
//               </span>
//             </div>

//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <MapPin className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                 40 Harrington Rd, South Kensington, London SW7 3ND
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Phone,
  Bug,
} from "lucide-react";

export default function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#292929] font-sans pt-24 lg:pt-28">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Main Hero */}
        <div className="relative min-h-[680px] lg:min-h-[700px] grid lg:grid-cols-[0.92fr_1.08fr]">

          {/* Left Content Panel */}
          <div className="relative z-20 flex flex-col justify-center bg-[#292929] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            {/* Small Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 flex items-center justify-center border border-[#F47B2B]">
                <Bug size={15} className="text-[#F47B2B]" />
              </div>

              <span className="text-[#F47B2B] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em]">
                Pest Control • Bromley
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase leading-[0.94] tracking-[-0.04em]">
              The Right
              <span className="block text-[#F47B2B] mt-2">
                Response
              </span>
              <span className="block mt-2">
                For Pests.
              </span>
            </h1>

            {/* Orange Divider */}
            <div className="flex items-center gap-4 mt-8 mb-7">
              <div className="w-20 h-[3px] bg-[#F47B2B]" />
              <div className="w-2 h-2 rounded-full bg-[#F47B2B]" />
            </div>

            {/* Description */}
            <p className="text-white/75 text-sm sm:text-base leading-7 max-w-xl">
              From an isolated sighting to a pest problem that keeps returning,
              PrimeShield Services Bromley provides focused pest control for
              residential and commercial properties. Our services are built
              around identifying the issue, treating it appropriately and
              helping reduce the chance of further activity.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <Link
                to="/contact-us"
                className="group inline-flex items-center justify-center gap-4 bg-[#F47B2B] text-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
              >
                Arrange An Enquiry
                <ArrowUpRight
                  size={17}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>

              <Link
                to="/about-us"
                className="inline-flex items-center justify-center gap-3 border border-white/25 text-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] hover:bg-white hover:text-[#292929] transition-colors"
              >
                About PrimeShield
              </Link>
            </div>

            {/* Local Detail */}
            <div className="mt-10 pt-7 border-t border-white/15 grid sm:grid-cols-2 gap-6">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#F47B2B] mt-0.5 shrink-0"
                />

                <div>
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-1">
                    Local Office
                  </p>

                  <p className="text-white/60 text-xs leading-5">
                    65 Powster Rd,
                    <br />
                    Bromley BR1 5HE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-[#F47B2B] mt-0.5 shrink-0"
                />

                <div>
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-1">
                    Call PrimeShield
                  </p>

                  <a
                    href="tel:07356271145"
                    className="text-white/70 text-sm font-bold hover:text-[#F47B2B] transition-colors"
                  >
                    07356 271145
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">

            <img
              src="/images/services-primeshield-banner.webp"
              alt="PrimeShield Services Bromley pest control"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#292929]/45 via-transparent to-[#292929]/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/70 via-transparent to-transparent" />

            {/* Orange Vertical Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#F47B2B]" />

            {/* Image Label */}
            <div className="absolute top-7 right-7 sm:top-10 sm:right-10 bg-[#292929] px-5 py-4">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={18}
                  className="text-[#F47B2B]"
                />

                <span className="text-white text-[10px] font-black uppercase tracking-[0.18em]">
                  Professional Service
                </span>
              </div>
            </div>

            {/* Image Bottom Information */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

              <div className="max-w-md bg-[#292929]/90 backdrop-blur-sm p-6 sm:p-7 border-l-4 border-[#F47B2B]">

                <p className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.22em] mb-3">
                  Services Across Bromley
                </p>

                <p className="text-white text-xl sm:text-2xl font-black leading-tight uppercase">
                  One place for
                  <span className="text-[#F47B2B]"> pest control support.</span>
                </p>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom Service Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">

          <div className="px-5 sm:px-8 py-6 border-r border-white/10">
            <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
              01
            </p>

            <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
              Rodent Control
            </p>
          </div>

          <div className="px-5 sm:px-8 py-6 lg:border-r border-white/10">
            <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
              02
            </p>

            <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
              Bed Bug Treatment
            </p>
          </div>

          <div className="px-5 sm:px-8 py-6 border-r border-white/10">
            <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
              03
            </p>

            <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
              Cockroach Control
            </p>
          </div>

          <div className="px-5 sm:px-8 py-6">
            <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
              04
            </p>

            <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
              Wasp & Insect Control
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}