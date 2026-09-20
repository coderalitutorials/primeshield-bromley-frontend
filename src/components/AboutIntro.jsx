// import React from "react";
// import { Link } from "react-router-dom";

// export default function AboutIntroSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-[#3B3B3B]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="max-w-5xl animate-[fadeUp_0.7s_ease-out_both]">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             About Us
//           </span>

//           <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.08] tracking-tight">
//             Welcome to PrimeShield Services Limited, where reliable pest control
//             meets professional London protection...
//           </h2>
//         </div>

//         <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-t border-[#3B3B3B]/20 pt-10">
//           <div className="lg:col-span-6 animate-[fadeLeft_0.75s_ease-out_both]">
//             <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
//               <img
//                 src="/images/about-pest-control.webp"
//                 alt="PrimeShield Services Limited pest control technician inspecting a London property"
//                 className="w-full h-[420px] md:h-[520px] object-contain object-center"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/35 via-transparent to-transparent" />
//             </div>
//           </div>

//           <div className="lg:col-span-6 lg:pl-6 animate-[fadeRight_0.75s_ease-out_both]">
//             <h3 className="text-[#111111] text-xl md:text-2xl font-black leading-snug max-w-lg">
//               We understand that every pest problem is different, and our team is
//               here to provide safe, effective and discreet treatment support.
//             </h3>

//             <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

//             <p className="text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
//               PrimeShield Services Limited helps homeowners, landlords and local
//               businesses across London deal with unwanted pests quickly and
//               professionally. From rodents and bed bugs to cockroaches, ants,
//               fleas, moths and wasp nests, we focus on clear inspection,
//               targeted treatment and practical prevention advice.
//             </p>

//             <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
//               Based at 12 Old Bond Street, London, England, W1S 4PW, our service
//               approach is built around reliability, careful property protection
//               and responsive customer support for residential and commercial
//               pest control needs.
//             </p>

//             <div className="mt-9">
//               <Link
//                 to="/about-us"
//                 className="inline-flex items-center justify-center bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeRight {
//           from {
//             opacity: 0;
//             transform: translateX(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }







// import React from "react";
// import { Link } from "react-router-dom";

// export default function AboutIntroSection() {
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-[#3B3B3B]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="max-w-5xl animate-[fadeUp_0.7s_ease-out_both]">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             About PrimeShield Kensington
//           </span>

//           <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.08] tracking-tight">
//             Local pest control in Kensington with careful inspections, targeted
//             treatments and reliable property protection.
//           </h2>
//         </div>

//         <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-t border-[#3B3B3B]/20 pt-10">
//           <div className="lg:col-span-6 animate-[fadeLeft_0.75s_ease-out_both]">
//             <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
//               <img
//                 src="/images/about-pest-control.webp"
//                 alt="PrimeShield Kensington pest control technician inspecting a property near South Kensington"
//                 className="w-full h-[420px] md:h-[520px] object-contain object-center"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/35 via-transparent to-transparent" />
//             </div>
//           </div>

//           <div className="lg:col-span-6 lg:pl-6 animate-[fadeRight_0.75s_ease-out_both]">
//             <h3 className="text-[#111111] text-xl md:text-2xl font-black leading-snug max-w-lg">
//               We help homes, landlords and businesses across Kensington deal
//               with pest problems quickly, safely and discreetly.
//             </h3>

//             <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

//             <p className="text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
//               PrimeShield Kensington provides professional pest control support
//               across Kensington and South Kensington, helping local properties
//               manage rodents, bed bugs, cockroaches, ants, fleas, moths, carpet
//               beetles and wasp nests. Our work begins with a clear inspection,
//               followed by a treatment plan designed around the property, pest
//               activity and level of infestation.
//             </p>

//             <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
//               Based at {address}, PrimeShield Kensington focuses on dependable
//               service, safe treatment methods and practical prevention advice
//               for residential and commercial pest control needs throughout the
//               Kensington area.
//             </p>

//             <div className="mt-9">
//               <Link
//                 to="/about-us"
//                 className="inline-flex items-center justify-center bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors"
//               >
//                 Read About Kensington Team
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeRight {
//           from {
//             opacity: 0;
//             transform: translateX(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }













import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function AboutIntroSection() {
  const companyName = "PrimeShield Services Bromley";
  const phone = "07356 271145";
  const address = "65 Powster Rd, Bromley BR1 5HE";
  const serviceArea = "Bromley";

  return (
    <section className="relative overflow-hidden bg-white font-sans py-20 md:py-28 lg:py-32">

      {/* =====================================================
          DECORATIVE ELEMENTS
      ====================================================== */}
      <div className="absolute top-0 right-0 w-28 md:w-44 h-full bg-[#F6F5F2] pointer-events-none" />

      <div className="absolute top-20 right-8 md:right-16 w-20 h-20 border-[8px] border-[#F47721]/15 rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-[#292929] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* =================================================
            SECTION INTRO
        ================================================== */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">

          <div className="lg:col-span-8">

            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#F47721]" />

              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#777777]">
                Local Pest Control
              </span>
            </div>

            <h2 className="text-[#292929] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[0.98] tracking-[-0.045em] max-w-4xl">
              A practical approach to
              <span className="text-[#F47721]"> pest control.</span>
            </h2>

          </div>

          <div className="lg:col-span-4 lg:pb-2">

            <p className="text-[#666666] text-sm md:text-[15px] leading-[1.8] max-w-md">
              PrimeShield Services Bromley supports local homes,
              landlords and businesses with structured pest
              inspections, targeted treatments and sensible
              prevention measures.
            </p>

          </div>

        </div>


        {/* =================================================
            MAIN CONTENT
        ================================================== */}
        <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* =================================================
              IMAGE SIDE
          ================================================== */}
          <div className="lg:col-span-7 relative">

            {/* Number marker */}
            <div className="absolute -top-5 -left-3 md:-top-7 md:-left-5 z-20 w-16 h-16 md:w-20 md:h-20 bg-[#F47721] text-white flex flex-col items-center justify-center">

              <span className="text-[9px] uppercase tracking-[0.18em] font-bold opacity-75">
                Since
              </span>

              <span className="text-xl md:text-2xl font-black">
                Local
              </span>

            </div>

            {/* Image */}
            <div className="relative overflow-hidden bg-[#292929] h-[390px] sm:h-[480px] md:h-[560px]">

              <img
                src="/images/about-pest-control.webp"
                alt={`${companyName} professional pest control service in Bromley`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-[#111111]/5" />

              {/* Image caption */}
              <div className="absolute left-6 md:left-8 bottom-6 md:bottom-8 text-white">

                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#F47721] mb-2">
                  Serving the local area
                </p>

                <p className="text-xl md:text-2xl font-black">
                  Bromley & surrounding areas
                </p>

              </div>

            </div>


            {/* Small address card */}
            <div className="absolute -bottom-6 right-4 md:right-8 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] px-5 md:px-7 py-5 md:py-6 max-w-[290px]">

              <div className="flex items-start gap-3">

                <div className="w-9 h-9 shrink-0 bg-[#292929] text-[#F47721] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] font-black text-[#777777]">
                    Bromley Base
                  </p>

                  <p className="mt-1 text-xs md:text-[13px] font-bold leading-relaxed text-[#292929]">
                    {address}
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              CONTENT SIDE
          ================================================== */}
          <div className="lg:col-span-5 lg:pt-5">

            <div className="border-l-[3px] border-[#F47721] pl-6 md:pl-8">

              <p className="text-[#292929] text-xl md:text-2xl font-black leading-[1.35]">
                Pest problems are easier to manage when the
                signs are identified early and the treatment is
                suited to the property.
              </p>

            </div>


            <div className="mt-8 space-y-5">

              <p className="text-[#666666] text-sm md:text-[15px] leading-[1.85]">
                PrimeShield Services Bromley provides pest control
                services for residential and commercial properties
                across Bromley. We help address common pest issues
                including rodents, cockroaches, bed bugs, ants,
                fleas, wasps and other unwanted pest activity.
              </p>

              <p className="text-[#666666] text-sm md:text-[15px] leading-[1.85]">
                Each situation can require a different response.
                Our approach focuses on understanding where pest
                activity is occurring, assessing the property and
                carrying out appropriate treatment with practical
                steps to help reduce the chance of recurring
                problems.
              </p>

            </div>


            {/* SERVICE APPROACH */}
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#292929]/10 border border-[#292929]/10">

              <div className="bg-white p-5">

                <ShieldCheck className="w-5 h-5 text-[#F47721] mb-4" />

                <h3 className="text-sm font-black text-[#292929]">
                  Targeted Treatment
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#777777]">
                  Treatment based around the pest activity and
                  property requirements.
                </p>

              </div>


              <div className="bg-white p-5">

                <MapPin className="w-5 h-5 text-[#F47721] mb-4" />

                <h3 className="text-sm font-black text-[#292929]">
                  Local Coverage
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#777777]">
                  Professional pest control support throughout
                  Bromley.
                </p>

              </div>

            </div>


            {/* CTA AREA */}
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">

              <Link
                to="/about-us"
                className="group inline-flex items-center justify-center gap-4 bg-[#292929] hover:bg-[#F47721] text-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.17em] transition-all duration-300"
              >
                Discover PrimeShield

                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#292929] hover:text-[#F47721] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F47721]" />

                {phone}
              </a>

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM BRAND STATEMENT
        ================================================== */}
        <div className="mt-20 md:mt-28 border-t border-[#292929]/15 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">

          <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#777777]">
            {companyName}
          </p>

          <div className="flex items-center gap-3">

            <span className="w-2 h-2 bg-[#F47721]" />

            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#777777]">
              Professional Pest Control · {serviceArea}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}