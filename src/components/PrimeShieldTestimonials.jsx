// import React from "react";

// export default function PrimeShieldTestimonials() {
//   const reviews = [
//     {
//       quote:
//         "PrimeShield dealt with a rodent issue in our property quickly and professionally. The inspection was clear, the advice was practical, and the treatment gave us real peace of mind.",
//       name: "Sarah L.",
//       service: "Rodent Control",
//     },
//     {
//       quote:
//         "We had bed bugs in one room and were really stressed. The team explained everything properly, treated the affected areas and helped us understand what to do after the visit.",
//       name: "James R.",
//       service: "Bed Bug Treatment",
//     },
//     {
//       quote:
//         "Very reliable pest control service for our London office. They arrived on time, checked the problem areas and gave us a simple prevention plan going forward.",
//       name: "Amelia T.",
//       service: "Commercial Pest Control",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-[#111111]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-7">
//             <div className="text-[#F36F21] text-[90px] md:text-[130px] font-black leading-none">
//               ”
//             </div>

//             <h2 className="-mt-6 text-[#F36F21] text-2xl sm:text-3xl lg:text-[38px] font-black leading-snug max-w-3xl">
//               “PrimeShield Services Limited helped us deal with a stressful pest
//               issue quickly, safely and with clear communication from start to
//               finish.”
//             </h2>

//             <div className="mt-10">
//               <h4 className="text-[#111111] font-black text-base">
//                 Emily P.
//               </h4>
//               <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.25em]">
//                 London Homeowner
//               </p>
//             </div>
//           </div>

//           <div className="lg:col-span-5">
//             <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
//               <img
//                 src="/images/testimonial-client.webp"
//                 alt="PrimeShield Services Limited happy customer after pest control service in London"
//                 className="w-full h-[420px] md:h-[520px] object-cover object-center"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/25 via-transparent to-transparent" />
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="py-10 md:py-12 md:px-8 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15"
//             >
//               <div className="text-[#F36F21] text-5xl font-black leading-none mb-7">
//                 ”
//               </div>

//               <p className="text-[#333333] text-sm leading-relaxed">
//                 “{review.quote}”
//               </p>

//               <div className="mt-8">
//                 <h4 className="text-[#111111] font-black text-base">
//                   {review.name}
//                 </h4>
//                 <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.22em]">
//                   {review.service}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import React from "react";

// export default function PrimeShieldTestimonials() {
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   const reviews = [
//     {
//       quote:
//         "We noticed scratching sounds in our Kensington flat and contacted PrimeShield. The technician checked the problem areas, explained the rodent activity clearly and gave us useful proofing advice after the treatment.",
//       name: "Hannah M.",
//       service: "Rodent Control Kensington",
//     },
//     {
//       quote:
//         "Our bedroom had signs of bed bugs and we needed help quickly. PrimeShield Kensington inspected the room carefully, treated the affected areas and told us exactly how to prepare and what to do afterwards.",
//       name: "Oliver B.",
//       service: "Bed Bug Treatment Kensington",
//     },
//     {
//       quote:
//         "We booked PrimeShield Kensington for our small business near South Kensington. The visit was organised, discreet and professional, with clear recommendations to help prevent the issue returning.",
//       name: "Priya S.",
//       service: "Commercial Pest Control Kensington",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-[#111111]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-7">
//             <div className="text-[#F36F21] text-[90px] md:text-[130px] font-black leading-none">
//               ”
//             </div>

//             <h2 className="-mt-6 text-[#F36F21] text-2xl sm:text-3xl lg:text-[38px] font-black leading-snug max-w-3xl">
//               “PrimeShield Kensington gave us clear guidance, careful treatment
//               and calm support when pests started affecting our South Kensington
//               property.”
//             </h2>

//             <p className="mt-7 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-2xl">
//               From {address}, PrimeShield Kensington supports local homeowners,
//               landlords and businesses with practical pest control solutions
//               across Kensington and South Kensington.
//             </p>

//             <div className="mt-10">
//               <h4 className="text-[#111111] font-black text-base">
//                 Laura K.
//               </h4>
//               <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.25em]">
//                 South Kensington Homeowner
//               </p>
//             </div>
//           </div>

//           <div className="lg:col-span-5">
//             <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
//               <img
//                 src="/images/testimonial-client.webp"
//                 alt="PrimeShield Kensington happy customer after pest control service in South Kensington"
//                 className="w-full h-[420px] md:h-[520px] object-cover object-center"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/25 via-transparent to-transparent" />
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="py-10 md:py-12 md:px-8 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15"
//             >
//               <div className="text-[#F36F21] text-5xl font-black leading-none mb-7">
//                 ”
//               </div>

//               <p className="text-[#333333] text-sm leading-relaxed">
//                 “{review.quote}”
//               </p>

//               <div className="mt-8">
//                 <h4 className="text-[#111111] font-black text-base">
//                   {review.name}
//                 </h4>
//                 <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.22em]">
//                   {review.service}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }













import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Quote,
  Star,
  ShieldCheck,
} from "lucide-react";

export default function PrimeShieldTestimonials() {
  const navigate = useNavigate();

  const address = "65 Powster Rd, Bromley BR1 5HE";

  const reviews = [
    {
      quote:
        "We started hearing scratching around the kitchen and contacted PrimeShield Services Bromley. The technician checked the likely activity areas, explained what they had found and talked us through the treatment and prevention steps.",
      name: "Daniel R.",
      service: "Rat & Mice Control",
    },
    {
      quote:
        "We had concerns about possible bed bugs in one of our bedrooms. The inspection was thorough and the treatment process was explained clearly, which made the whole situation much easier to manage.",
      name: "Emma T.",
      service: "Bed Bug Treatment",
    },
    {
      quote:
        "PrimeShield helped us deal with a wasp nest at our property in Bromley. Everything was handled professionally and we were given clear information about what to expect during the treatment.",
      name: "Michael P.",
      service: "Wasp Nest Removal",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5F5F3] py-20 md:py-28 font-sans">
      {/* Decorative brand shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#F47B2B] pointer-events-none" />

      <div className="absolute top-24 right-24 w-36 h-36 border-[22px] border-[#292929]/10 rounded-full pointer-events-none hidden md:block" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#292929] rounded-tr-[180px] opacity-[0.035] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 lg:gap-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-[#F47B2B]" />

              <span className="text-[#292929] text-xs font-black uppercase tracking-[0.25em]">
                Customer Experiences
              </span>
            </div>

            <h2 className="text-[#292929] text-4xl sm:text-5xl lg:text-[60px] font-black leading-[1] tracking-[-0.04em] max-w-3xl">
              What local customers say about{" "}
              <span className="text-[#F47B2B]">PrimeShield.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="text-[#292929]/65 text-sm md:text-base leading-7 max-w-lg">
              Every pest problem is different. Our focus is on providing clear
              information, practical treatment and a professional service for
              homes and businesses across Bromley.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <ShieldCheck
                size={19}
                className="text-[#F47B2B]"
                strokeWidth={2.3}
              />

              <span className="text-[#292929] text-xs font-black uppercase tracking-[0.18em]">
                Local Bromley Service
              </span>
            </div>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-[0.38fr_1fr]">
          {/* Accent panel */}
          <div className="relative bg-[#292929] min-h-[280px] lg:min-h-[410px] p-8 md:p-10 overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-48 h-48 border-[30px] border-[#F47B2B]/15 rounded-full" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#F47B2B] text-[#292929] flex items-center justify-center">
                  <Quote size={23} fill="currentColor" />
                </div>

                <div className="flex gap-1 mt-7">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="#F47B2B"
                      className="text-[#F47B2B]"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-white text-xs font-black uppercase tracking-[0.22em]">
                  PrimeShield Services
                </p>

                <p className="mt-2 text-white/45 text-xs">
                  Bromley pest control
                </p>
              </div>
            </div>
          </div>

          {/* Main quote */}
          <div className="bg-white p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            <p className="text-[#292929] text-xl md:text-2xl lg:text-[30px] font-black leading-[1.35] tracking-tight max-w-4xl">
              “The technician was clear about what was happening, explained
              the treatment properly and gave us practical advice for reducing
              the chance of the problem coming back.”
            </p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
              <div className="w-11 h-11 bg-[#F47B2B] text-[#292929] flex items-center justify-center font-black">
                JR
              </div>

              <div>
                <h4 className="text-[#292929] font-black text-base">
                  James R.
                </h4>

                <p className="mt-1 text-[#292929]/45 text-[10px] font-black uppercase tracking-[0.2em]">
                  Bromley Homeowner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="group bg-white border border-[#292929]/10 p-7 md:p-8 hover:border-[#F47B2B] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="#F47B2B"
                      className="text-[#F47B2B]"
                    />
                  ))}
                </div>

                <span className="text-[#F47B2B] text-[10px] font-black tracking-[0.2em]">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-7">
                <Quote
                  size={24}
                  className="text-[#F47B2B]"
                  strokeWidth={2.5}
                />

                <p className="mt-4 text-[#292929]/70 text-sm leading-7">
                  “{review.quote}”
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#292929]/10">
                <h4 className="text-[#292929] font-black text-base">
                  {review.name}
                </h4>

                <p className="mt-1 text-[#292929]/45 text-[10px] font-black uppercase tracking-[0.18em]">
                  {review.service}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA / local information */}
        <div className="mt-14 md:mt-16 bg-[#F47B2B] p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-7">
          <div>
            <p className="text-[#292929] text-xl font-black">
              Looking for professional pest control in Bromley?
            </p>

            <p className="mt-2 text-[#292929]/65 text-sm">
              PrimeShield Services Bromley · {address}
            </p>
          </div>

          <button
            onClick={() => navigate("/contact-us")}
            className="group inline-flex items-center justify-center gap-3 bg-[#292929] text-white px-7 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#292929] transition-colors duration-300 cursor-pointer"
          >
            Contact PrimeShield

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}