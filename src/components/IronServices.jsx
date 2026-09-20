

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   Rat,
//   ArrowRight,
//   Home,
//   Building2,
//   BadgeCheck,
// } from "lucide-react";

// export default function PrimeShieldServices() {
//   const navigate = useNavigate();

//   const servicesData = [
//     {
//       id: "01",
//       title: "Rodent Control",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Professional rat and mice control for London homes and businesses, including inspection, safe treatment and entry-point advice.",
//     },
//     {
//       id: "02",
//       title: "Bed Bug Treatment",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Targeted bed bug inspections and treatment plans for bedrooms, furniture and affected areas to help restore a clean, comfortable space.",
//     },
//     {
//       id: "03",
//       title: "Wasp Nest Removal",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Fast and careful wasp nest control for residential and commercial properties, handled with the right protective methods.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#111111]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="max-w-4xl mb-14 md:mb-18 animate-[fadeUp_0.7s_ease-out_both]">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             Our Services
//           </span>

//           <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.08] tracking-tight">
//             Expert pest control services built to protect London properties.
//           </h2>

//           <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-2xl">
//             PrimeShield Services Limited provides reliable pest inspections,
//             treatments and prevention advice for homeowners, landlords and
//             businesses across London.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={service.id}
//                 onClick={() => navigate("/contact-us")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigate("/contact-us");
//                   }
//                 }}
//                 className="group relative px-0 md:px-6 lg:px-8 py-10 md:py-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15 animate-[fadeUp_0.7s_ease-out_both] cursor-pointer"
//                 style={{ animationDelay: `${index * 0.08}s` }}
//               >
//                 <div className="flex items-center justify-between mb-7">
//                   <div className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors duration-300">
//                     <Icon size={22} strokeWidth={2.2} />
//                   </div>

//                   <span className="text-[#F36F21] text-xs font-black tracking-[0.22em]">
//                     {service.id}
//                   </span>
//                 </div>

//                 <h3 className="text-[#111111] text-2xl font-black leading-tight mb-5 group-hover:text-[#F36F21] transition-colors duration-300">
//                   {service.title}
//                 </h3>

//                 <p className="text-[#5F5F5F] text-sm leading-relaxed mb-7 min-h-[96px]">
//                   {service.details}
//                 </p>

//                 <div className="inline-flex items-center gap-2 text-[#111111] group-hover:text-[#F36F21] text-xs font-black uppercase tracking-[0.22em] transition-colors duration-300 mb-8">
//                   Contact Us
//                   <ArrowRight
//                     size={16}
//                     className="group-hover:translate-x-1 transition-transform duration-300"
//                   />
//                 </div>

//                 <div className="relative overflow-hidden rounded-br-[130px] rounded-tl-2xl shadow-xl">
//                   <img
//                     src={service.image}
//                     alt={`PrimeShield Services Limited ${service.title} service in London`}
//                     className="w-full h-[310px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                     decoding="async"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/55 via-transparent to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
//                     {/* <span className="bg-white text-[#111111] px-3 py-2 text-[10px] font-black uppercase tracking-widest">
//                       London Service
//                     </span> */}
//                     {/* <span className="bg-[#F36F21] text-white w-10 h-10 flex items-center justify-center">
//                       <ArrowRight size={18} />
//                     </span> */}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             {
//               icon: Home,
//               title: "Residential Properties",
//               text: "Safe treatments for homes, flats and rented properties.",
//             },
//             {
//               icon: Building2,
//               title: "Commercial Premises",
//               text: "Support for offices, shops, restaurants and businesses.",
//             },
//             {
//               icon: BadgeCheck,
//               title: "Professional Approach",
//               text: "Clear inspection, treatment planning and prevention advice.",
//             },
//           ].map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="bg-white border border-[#111111]/10 p-6 flex items-start gap-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="w-11 h-11 bg-[#F36F21]/10 text-[#F36F21] flex items-center justify-center shrink-0">
//                   <Icon size={21} />
//                 </div>
//                 <div>
//                   <h4 className="text-[#111111] font-black text-base">
//                     {item.title}
//                   </h4>
//                   <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-14">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-9 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors cursor-pointer"
//           >
//             View All Services
//             <ArrowRight size={17} />
//           </button>
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
//       `}</style>
//     </section>
//   );
// }







// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   Rat,
//   ArrowRight,
//   Home,
//   Building2,
//   BadgeCheck,
// } from "lucide-react";

// export default function PrimeShieldServices() {
//   const navigate = useNavigate();

//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   const servicesData = [
//     {
//       id: "01",
//       title: "Rodent Control Kensington",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Local rat and mice control in Kensington, including inspection, safe treatment and entry-point advice for homes, flats and business premises.",
//     },
//     {
//       id: "02",
//       title: "Bed Bug Treatment Kensington",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Focused bed bug inspections and treatment support across Kensington and South Kensington for bedrooms, furniture and affected living spaces.",
//     },
//     {
//       id: "03",
//       title: "Wasp Nest Removal Kensington",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Careful wasp nest removal in Kensington for residential and commercial properties, using suitable protective methods and targeted treatment.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#111111]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="max-w-4xl mb-14 md:mb-18 animate-[fadeUp_0.7s_ease-out_both]">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             Pest Control Services Kensington
//           </span>

//           <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.08] tracking-tight">
//             Expert pest control services in Kensington for homes, landlords and
//             local businesses.
//           </h2>

//           <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-2xl">
//             PrimeShield Kensington provides reliable pest inspections,
//             treatments and prevention advice across Kensington and South
//             Kensington. From our local base at {address}, we support properties
//             with safe, practical and professional pest control solutions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={service.id}
//                 onClick={() => navigate("/contact-us")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigate("/contact-us");
//                   }
//                 }}
//                 className="group relative px-0 md:px-6 lg:px-8 py-10 md:py-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15 animate-[fadeUp_0.7s_ease-out_both] cursor-pointer"
//                 style={{ animationDelay: `${index * 0.08}s` }}
//               >
//                 <div className="flex items-center justify-between mb-7">
//                   <div className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors duration-300">
//                     <Icon size={22} strokeWidth={2.2} />
//                   </div>

//                   <span className="text-[#F36F21] text-xs font-black tracking-[0.22em]">
//                     {service.id}
//                   </span>
//                 </div>

//                 <h3 className="text-[#111111] text-2xl font-black leading-tight mb-5 group-hover:text-[#F36F21] transition-colors duration-300">
//                   {service.title}
//                 </h3>

//                 <p className="text-[#5F5F5F] text-sm leading-relaxed mb-7 min-h-[96px]">
//                   {service.details}
//                 </p>

//                 <div className="inline-flex items-center gap-2 text-[#111111] group-hover:text-[#F36F21] text-xs font-black uppercase tracking-[0.22em] transition-colors duration-300 mb-8">
//                   Contact Kensington Team
//                   <ArrowRight
//                     size={16}
//                     className="group-hover:translate-x-1 transition-transform duration-300"
//                   />
//                 </div>

//                 <div className="relative overflow-hidden rounded-br-[130px] rounded-tl-2xl shadow-xl">
//                   <img
//                     src={service.image}
//                     alt={`PrimeShield Kensington ${service.title} service near South Kensington`}
//                     className="w-full h-[310px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                     decoding="async"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/55 via-transparent to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between"></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             {
//               icon: Home,
//               title: "Kensington Homes & Flats",
//               text: "Safe pest treatments for houses, flats, apartments and rented properties across Kensington.",
//             },
//             {
//               icon: Building2,
//               title: "Kensington Commercial Premises",
//               text: "Support for offices, shops, restaurants and local businesses in Kensington and South Kensington.",
//             },
//             {
//               icon: BadgeCheck,
//               title: "Local Professional Approach",
//               text: `Clear inspection, treatment planning and prevention advice from ${address}.`,
//             },
//           ].map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="bg-white border border-[#111111]/10 p-6 flex items-start gap-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="w-11 h-11 bg-[#F36F21]/10 text-[#F36F21] flex items-center justify-center shrink-0">
//                   <Icon size={21} />
//                 </div>
//                 <div>
//                   <h4 className="text-[#111111] font-black text-base">
//                     {item.title}
//                   </h4>
//                   <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-14">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-9 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors cursor-pointer"
//           >
//             View All Kensington Services
//             <ArrowRight size={17} />
//           </button>
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
//       `}</style>
//     </section>
//   );
// }













import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Rat,
  Bug,
  ShieldAlert,
  Home,
  Building2,
  SearchCheck,
} from "lucide-react";

export default function PrimeShieldServices() {
  const navigate = useNavigate();

  const address = "65 Powster Rd, Bromley BR1 5HE";

  const servicesData = [
    {
      number: "01",
      title: "Rat & Mice Control",
      image: "/images/rodents.webp",
      icon: Rat,
      description:
        "Practical rat and mice control for Bromley homes and businesses, with focused inspections, targeted treatment and advice to help reduce repeat activity.",
    },
    {
      number: "02",
      title: "Bed Bug Treatment",
      image: "/images/bedbugs.webp",
      icon: Bug,
      description:
        "Professional bed bug treatment for bedrooms, flats and rented properties in Bromley, with careful inspection and a treatment approach suited to the affected space.",
    },
    {
      number: "03",
      title: "Wasp Nest Removal",
      image: "/images/wasps.webp",
      icon: ShieldAlert,
      description:
        "Targeted wasp nest treatment for residential and commercial properties across Bromley, helping deal with active nests safely and efficiently.",
    },
  ];

  const propertyTypes = [
    {
      icon: Home,
      label: "Residential",
      title: "Homes, Flats & Rentals",
      text:
        "Pest control support for houses, apartments, landlords and tenants throughout Bromley.",
    },
    {
      icon: Building2,
      label: "Commercial",
      title: "Local Businesses",
      text:
        "Professional pest management for shops, offices, restaurants and other Bromley premises.",
    },
    {
      icon: SearchCheck,
      label: "Approach",
      title: "Inspect Before Treating",
      text:
        "A practical approach focused on understanding the pest problem before selecting suitable treatment.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 font-sans">
      {/* Decorative brand elements */}
      <div className="absolute top-0 right-0 w-[42%] h-[520px] bg-[#F47B2B] hidden lg:block" />

      <div className="absolute top-[420px] right-[18%] w-32 h-32 border-[18px] border-[#292929]/10 rounded-full pointer-events-none" />

      <div className="absolute bottom-20 left-0 w-40 h-40 bg-[#292929]/[0.035] rounded-r-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-20 items-end mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[3px] bg-[#F47B2B]" />

              <span className="text-[#292929] text-xs font-bold uppercase tracking-[0.25em]">
                Bromley Pest Control
              </span>
            </div>

            <h2 className="text-[#292929] text-4xl sm:text-5xl lg:text-[62px] font-black leading-[0.98] tracking-[-0.04em] max-w-3xl">
              Pest control built around the way{" "}
              <span className="text-[#F47B2B]">Bromley properties</span> are
              actually used.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="text-[#292929]/70 text-base md:text-lg leading-[1.75] max-w-xl">
              PrimeShield Services Bromley provides straightforward pest
              control for local homes, landlords and businesses. From the
              first signs of activity through to treatment and practical
              prevention advice, our approach is focused on dealing with the
              problem properly rather than simply treating what is visible.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-bold text-[#292929]">
              <span className="w-2.5 h-2.5 bg-[#F47B2B] rounded-full" />
              Serving Bromley and surrounding local properties
            </div>
          </div>
        </div>

        {/* Featured service layout */}
        <div className="space-y-5">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                onClick={() => navigate("/contact-us")}
                className="group relative grid grid-cols-1 lg:grid-cols-[110px_1fr_0.9fr_70px] min-h-[230px] overflow-hidden border border-[#292929]/15 bg-[#F6F6F5] cursor-pointer transition-all duration-500 hover:bg-[#292929]"
              >
                {/* Number */}
                <div className="hidden lg:flex items-start justify-center pt-9 border-r border-[#292929]/10 group-hover:border-white/10">
                  <span className="text-[#F47B2B] text-sm font-black tracking-widest">
                    {service.number}
                  </span>
                </div>

                {/* Service content */}
                <div className="p-7 md:p-9 lg:p-10">
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-11 h-11 bg-[#292929] text-white flex items-center justify-center group-hover:bg-[#F47B2B] transition-colors duration-500">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <span className="lg:hidden text-[#F47B2B] text-xs font-black tracking-[0.2em]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#292929] group-hover:text-white text-2xl md:text-3xl font-black tracking-tight transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[#292929]/65 group-hover:text-white/65 text-sm md:text-base leading-7 max-w-xl transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative min-h-[240px] lg:min-h-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={`PrimeShield Services Bromley ${service.title}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#292929]/20 via-transparent to-[#292929]/10" />

                  <div className="absolute bottom-5 left-5">
                    <span className="inline-flex items-center bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#292929]">
                      Bromley Service
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center bg-[#F47B2B] text-[#292929] transition-colors duration-500 group-hover:bg-white">
                  <ArrowUpRight
                    size={25}
                    strokeWidth={2.3}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Property support strip */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <span className="text-[#F47B2B] text-xs font-black uppercase tracking-[0.25em]">
                Where We Help
              </span>

              <h3 className="mt-3 text-[#292929] text-3xl md:text-4xl font-black tracking-tight">
                One local team. Different property needs.
              </h3>
            </div>

            <p className="text-[#292929]/60 text-sm max-w-md leading-6">
              From a single household pest issue to ongoing problems at a
              commercial premises, our service is adapted to the property and
              situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#292929]/15 border border-[#292929]/15">
            {propertyTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-7 md:p-8 hover:bg-[#F47B2B] transition-colors duration-500 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 bg-[#292929] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#292929] transition-colors duration-500">
                      <Icon size={21} />
                    </div>

                    <span className="text-[#F47B2B] group-hover:text-[#292929]/70 text-[10px] font-black uppercase tracking-[0.2em]">
                      {item.label}
                    </span>
                  </div>

                  <h4 className="mt-7 text-[#292929] group-hover:text-[#292929] text-xl font-black">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-[#292929]/60 group-hover:text-[#292929]/75 text-sm leading-6">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 md:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#292929]/15 pt-8">
          <div>
            <p className="text-[#292929] font-black text-lg">
              Need help with a pest problem in Bromley?
            </p>

            <p className="text-[#292929]/55 text-sm mt-1">
              Speak with PrimeShield Services Bromley about your property.
            </p>
          </div>

          <button
            onClick={() => navigate("/services")}
            className="group inline-flex items-center justify-center gap-4 bg-[#292929] text-white px-7 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#F47B2B] hover:text-[#292929] transition-all duration-300 cursor-pointer"
          >
            Explore Our Services

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Local address */}
        <div className="mt-8 text-center">
          <p className="text-[#292929]/45 text-xs tracking-wide">
            PrimeShield Services Bromley · {address}
          </p>
        </div>
      </div>
    </section>
  );
}