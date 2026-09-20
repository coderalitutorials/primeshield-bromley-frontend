// import React from "react";

// export default function MissionBannerSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Image */}
//       <div className="relative h-[450px] md:h-[520px]">
//         <img
//           src="/images/pest-banner.webp"
//           alt="PrimeShield Services Limited pest control inspection in London"
//           className="absolute inset-0 w-full h-full object-cover"
//           loading="lazy"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#111111]/65" />

//         {/* Orange Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-[#F36F21]/10" />

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center justify-center px-6">
//           <div className="max-w-4xl text-center">
//             {/* Small Orange Line */}
//             <div className="w-16 h-[3px] bg-[#F36F21] mx-auto mb-8"></div>

//             <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.15] tracking-tight">
//               Protecting Homes & Businesses
//               <br />
//               Across London With Trusted
//               <br />
//               Pest Control Solutions
//             </h2>

//             <p className="mt-8 text-white/80 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
//               PrimeShield Services Limited delivers professional pest control,
//               prevention and proofing services designed to keep residential and
//               commercial properties safe, compliant and pest-free throughout
//               London.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import React from "react";

// export default function MissionBannerSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Image */}
//       <div className="relative h-[450px] md:h-[520px]">
//         <img
//           src="/images/pest-banner.webp"
//           alt="PrimeShield Kensington providing professional pest control in South Kensington"
//           className="absolute inset-0 w-full h-full object-cover"
//           loading="lazy"
//           decoding="async"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#111111]/65" />

//         {/* Orange Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-[#F36F21]/10" />

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center justify-center px-6">
//           <div className="max-w-4xl text-center">
//             <div className="w-16 h-[3px] bg-[#F36F21] mx-auto mb-8"></div>

//             <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.15] tracking-tight">
//               Professional Pest Control
//               <br />
//               For Homes & Businesses
//               <br />
//               Across Kensington
//             </h2>

//             <p className="mt-8 text-white/80 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
//               PrimeShield Kensington delivers professional pest control,
//               proofing and prevention services for residential and commercial
//               properties throughout Kensington and South Kensington. Operating
//               from <strong>40 Harrington Rd, South Kensington, London SW7 3ND</strong>,
//               our experienced team provides reliable pest management with safe,
//               effective treatments designed to protect your property all year
//               round.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import React from "react";

export default function MissionBannerSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F1] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative grid overflow-hidden rounded-[28px] bg-[#292929] lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left Content Panel */}
          <div className="relative flex min-h-[480px] items-center px-7 py-14 sm:px-10 md:min-h-[540px] md:px-14 lg:px-16">
            
            {/* Decorative Elements */}
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full border border-[#EE6C1A]/30" />
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full border border-[#EE6C1A]/20" />

            <div className="relative z-10 max-w-xl">
              
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-[3px] w-12 bg-[#EE6C1A]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#EE6C1A]">
                  PrimeShield Services Bromley
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                Reliable Pest
                <span className="block text-[#EE6C1A]">
                  Protection
                </span>
                For Bromley Properties
              </h2>

              {/* Description */}
              <p className="mt-7 max-w-lg text-base leading-7 text-white/70 md:text-lg md:leading-8">
                From unwanted visitors in the home to persistent pest activity
                in commercial premises, PrimeShield Services Bromley provides
                practical pest control designed around the property, the
                infestation and the problem at hand.
              </p>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/55 md:text-base">
                Based at{" "}
                <strong className="font-semibold text-white/80">
                  65 Powster Rd, Bromley BR1 5HE
                </strong>
                , our service covers properties throughout Bromley with a
                focus on effective treatment, careful inspection and sensible
                prevention.
              </p>

              {/* Contact Row */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="tel:07356271145"
                  className="inline-flex items-center gap-3 rounded-full bg-[#EE6C1A] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f47b2b]"
                >
                  <span className="text-base">☎</span>
                  07356 271145
                </a>

                <span className="text-sm font-medium text-white/45">
                  Serving Bromley
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Panel */}
          <div className="relative min-h-[360px] lg:min-h-[540px]">
            <img
              src="/images/contact-hero1.webp"
              alt="Professional pest control service in Bromley"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3F3F3F] via-[#3F3F3F]/20 to-transparent lg:from-[#3F3F3F]/70 lg:via-transparent lg:to-transparent" />

            {/* Orange Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#EE6C1A]" />

            {/* Service Area Badge */}
            <div className="absolute bottom-7 right-7 rounded-2xl border border-white/20 bg-[#3F3F3F]/90 px-5 py-4 backdrop-blur-md sm:bottom-10 sm:right-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE6C1A]">
                Service Area
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                Bromley
              </p>
            </div>

            {/* Decorative Orange Block */}
            <div className="absolute right-0 top-0 h-24 w-24 bg-[#EE6C1A]/90 sm:h-28 sm:w-28" />
            <div className="absolute right-6 top-6 h-12 w-12 border border-white/40 sm:right-8 sm:top-8" />
          </div>
        </div>
      </div>
    </section>
  );
}