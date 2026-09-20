


// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Grid3X3,
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       icon: Bug,
//       details:
//         "Targeted ant control for kitchens, worktops, floor edges and entry points. We inspect the activity, treat the source and help reduce the chance of ants returning.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Professional bed bug treatment for mattresses, bed frames, furniture and affected rooms. Our approach focuses on inspection, treatment and practical aftercare advice.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       details:
//         "Specialist treatment for carpet moths affecting carpets, rugs, wardrobes and soft furnishings. We help protect fabrics and reduce ongoing moth activity.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       details:
//         "Effective carpet beetle treatment for affected rooms, storage areas and fabric zones. We identify hotspots and apply targeted control methods.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       details:
//         "Cockroach control for homes, kitchens, restaurants and commercial spaces. We inspect harbourage areas and use targeted treatment to reduce infestation risks.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Rodent control for rats and mice in homes, lofts, kitchens and business premises. We focus on inspection, safe treatment and entry-point prevention advice.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       icon: Bug,
//       details:
//         "Flea treatment for affected rooms, carpets and high-traffic areas. We target the infestation cycle and provide clear guidance after treatment.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Fast wasp nest control for gardens, rooflines, sheds and property exteriors. Our team handles active nests with suitable protective methods.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       icon: Bug,
//       details:
//         "Careful bumble bee support where nests cause access or safety concerns. We always aim for responsible handling and suitable advice.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       details:
//         "Squirrel control for lofts, roof spaces and property voids. We help identify access points and provide practical treatment and proofing advice.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       icon: Home,
//       details:
//         "Hygiene cleaning and proofing support for pest-affected areas. We help reduce contamination risks and support long-term property protection.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       icon: Bird,
//       details:
//         "Bird control and prevention services for roofs, ledges, commercial buildings and exposed areas using practical proofing solutions.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${location.state.scrollToService}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((service) => service.cat === selectedCategory);

//   return (
//     <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">
//       <ServicesHeroSection />

//       <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-md border-y border-[#111111]/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[#111111] text-xs font-black uppercase tracking-[0.22em]">
//             <Grid3X3 className="w-4 h-4 text-[#F36F21]" />
//             Filter Services
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => {
//               const active = selectedCategory === cat;

//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-colors ${
//                     active
//                       ? "bg-[#F36F21] text-white"
//                       : "bg-[#F7F3EF] text-[#111111] hover:bg-[#111111] hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 space-y-20">
//           {filteredServices.map((service, index) => {
//             const Icon = service.icon;
//             const reverse = index % 2 !== 0;

//             return (
//               <article
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigate("/contact-us");
//                   }
//                 }}
//                 className={`group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center cursor-pointer border-t border-[#111111]/15 pt-12 animate-[fadeUp_0.7s_ease-out_both] ${
//                   reverse ? "lg:[&>*:first-child]:order-2" : ""
//                 }`}
//                 style={{ animationDelay: `${index * 0.04}s` }}
//               >
//                 <div className="lg:col-span-6">
//                   <div
//                     className={`relative overflow-hidden shadow-2xl ${
//                       reverse
//                         ? "rounded-tl-[180px] md:rounded-tl-[260px]"
//                         : "rounded-tr-[180px] md:rounded-tr-[260px]"
//                     }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={`PrimeShield Services Limited ${service.title} in London`}
//                       className="w-full h-[360px] md:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                       decoding="async"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />

//                     {/* Bottom layout elements without the top-left orange tag */}
//                     <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
//                       <span className="bg-white text-[#111111] px-4 py-3 text-xs font-black uppercase tracking-[0.18em]">
//                         {service.cat}
//                       </span>

//                       <span className="w-12 h-12 bg-[#F36F21] text-white flex items-center justify-center group-hover:bg-[#D95A13] transition-colors">
//                         <ArrowRight size={20} />
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:col-span-6">
//                   <div className="max-w-xl">
//                     <div className="flex items-center gap-4 mb-7">
//                       <div className="w-14 h-14 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors">
//                         <Icon size={24} strokeWidth={2.2} />
//                       </div>

//                       <span className="text-[#F36F21] text-sm font-black tracking-[0.3em]">
//                         {service.id}
//                       </span>
//                     </div>

//                     <h2 className="text-[#111111] text-3xl sm:text-4xl lg:text-[48px] font-black leading-[1.12] tracking-tight group-hover:text-[#F36F21] transition-colors">
//                       {service.title}
//                     </h2>

//                     <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

//                     <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                       {service.details}
//                     </p>

//                     <div className="mt-9 inline-flex items-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] group-hover:bg-[#D95A13] transition-colors">
//                       Contact Us
//                       <ArrowRight size={17} />
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

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

//       <AboutCallbackSection />
//     </main>
//   );
// };

// export default Services;






// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Grid3X3,
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ants Control Kensington",
//       image: "/images/ants.webp",
//       icon: Bug,
//       details:
//         "Ant control in Kensington for kitchens, worktops, skirting boards and entry points. PrimeShield Kensington inspects the ant activity, targets the source and provides prevention advice for properties around Kensington and South Kensington.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bugs Control Kensington",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Bed bug treatment in Kensington for mattresses, bed frames, furniture and affected rooms. Our team provides careful inspections, targeted treatment and clear aftercare guidance for homes, flats and rental properties.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment Kensington",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       details:
//         "Carpet moth treatment in Kensington for carpets, rugs, wardrobes and soft furnishings. PrimeShield Kensington helps identify moth activity, protect fabric areas and reduce the risk of repeat infestation.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Treatment Kensington",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       details:
//         "Carpet beetle treatment in Kensington for affected rooms, storage spaces, fabric zones and hidden harbourage areas. We inspect hotspots and apply suitable control methods for long-term property protection.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Service Kensington",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       details:
//         "Cockroach control in Kensington for homes, kitchens, restaurants and commercial premises. Our inspection focuses on harbourage points, food-risk areas and targeted treatment to reduce infestation pressure.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control Kensington",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Rats and mice control in Kensington for homes, lofts, kitchens, basements and business premises. PrimeShield Kensington provides inspection, safe treatment and entry-point advice from our local base at 40 Harrington Rd, South Kensington, London SW7 3ND.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control Kensington",
//       image: "/images/flea.webp",
//       icon: Bug,
//       details:
//         "Flea treatment in Kensington for carpets, bedrooms, living spaces and high-traffic areas. Our service targets the flea cycle and includes practical guidance to help reduce activity after treatment.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasps Nest Control Kensington",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Wasp nest control in Kensington for gardens, rooflines, sheds, loft spaces and property exteriors. PrimeShield Kensington handles active nests with suitable protective methods and controlled treatment.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Control Kensington",
//       image: "/images/bee.webp",
//       icon: Bug,
//       details:
//         "Bumble bee support in Kensington where nests create access, safety or property concerns. We focus on responsible advice, careful assessment and suitable handling for homes and commercial sites.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control Kensington",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       details:
//         "Squirrel control in Kensington for lofts, roof voids and property entry points. Our team helps identify access routes and provides practical treatment and proofing advice for affected buildings.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services Kensington",
//       image: "/images/hygene.webp",
//       icon: Home,
//       details:
//         "Hygiene and proofing services in Kensington for pest-affected areas, contamination risks and vulnerable entry points. PrimeShield Kensington supports cleaner, safer and better protected properties.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Birds Control Services Kensington",
//       image: "/images/birds.webp",
//       icon: Bird,
//       details:
//         "Bird control services in Kensington for roofs, ledges, commercial buildings and exposed property areas. We provide practical proofing solutions designed to reduce nesting, fouling and repeat bird activity.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${location.state.scrollToService} Kensington"], [data-title="${location.state.scrollToService}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((service) => service.cat === selectedCategory);

//   return (
//     <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">
//       <ServicesHeroSection />

//       <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-md border-y border-[#111111]/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[#111111] text-xs font-black uppercase tracking-[0.22em]">
//             <Grid3X3 className="w-4 h-4 text-[#F36F21]" />
//             Filter Kensington Services
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => {
//               const active = selectedCategory === cat;

//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-colors ${
//                     active
//                       ? "bg-[#F36F21] text-white"
//                       : "bg-[#F7F3EF] text-[#111111] hover:bg-[#111111] hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 space-y-20">
//           {filteredServices.map((service, index) => {
//             const Icon = service.icon;
//             const reverse = index % 2 !== 0;

//             return (
//               <article
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigate("/contact-us");
//                   }
//                 }}
//                 className={`group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center cursor-pointer border-t border-[#111111]/15 pt-12 animate-[fadeUp_0.7s_ease-out_both] ${
//                   reverse ? "lg:[&>*:first-child]:order-2" : ""
//                 }`}
//                 style={{ animationDelay: `${index * 0.04}s` }}
//               >
//                 <div className="lg:col-span-6">
//                   <div
//                     className={`relative overflow-hidden shadow-2xl ${
//                       reverse
//                         ? "rounded-tl-[180px] md:rounded-tl-[260px]"
//                         : "rounded-tr-[180px] md:rounded-tr-[260px]"
//                     }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={`PrimeShield Kensington ${service.title} near South Kensington`}
//                       className="w-full h-[360px] md:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                       decoding="async"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />

//                     <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
//                       <span className="bg-white text-[#111111] px-4 py-3 text-xs font-black uppercase tracking-[0.18em]">
//                         {service.cat}
//                       </span>

//                       <span className="w-12 h-12 bg-[#F36F21] text-white flex items-center justify-center group-hover:bg-[#D95A13] transition-colors">
//                         <ArrowRight size={20} />
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:col-span-6">
//                   <div className="max-w-xl">
//                     <div className="flex items-center gap-4 mb-7">
//                       <div className="w-14 h-14 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors">
//                         <Icon size={24} strokeWidth={2.2} />
//                       </div>

//                       <span className="text-[#F36F21] text-sm font-black tracking-[0.3em]">
//                         {service.id}
//                       </span>
//                     </div>

//                     <h2 className="text-[#111111] text-3xl sm:text-4xl lg:text-[48px] font-black leading-[1.12] tracking-tight group-hover:text-[#F36F21] transition-colors">
//                       {service.title}
//                     </h2>

//                     <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

//                     <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                       {service.details}
//                     </p>

//                     <p className="mt-5 text-[#5F5F5F] text-sm leading-relaxed">
//                       Serving Kensington and South Kensington from {address}.
//                     </p>

//                     <div className="mt-9 inline-flex items-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] group-hover:bg-[#D95A13] transition-colors">
//                       Contact Kensington Team
//                       <ArrowRight size={17} />
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

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

//       <AboutCallbackSection />
//     </main>
//   );
// };

// export default Services;











// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowUpRight,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Grid3X3,
//   Phone,
//   CheckCircle2,
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const address = "65 Powster Rd, Bromley BR1 5HE";
//   const phone = "07356 271145";

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ant Control Bromley",
//       image: "/images/ants.webp",
//       icon: Bug,
//       short:
//         "Targeted control for persistent ant activity around kitchens, entry points and living spaces.",
//       details:
//         "PrimeShield Services Bromley assesses visible activity and likely access routes before applying suitable control measures for residential and commercial properties.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bug Treatment Bromley",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       short:
//         "Focused treatment for bedrooms, furniture and areas affected by bed bug activity.",
//       details:
//         "Our service combines careful inspection, targeted treatment and practical aftercare guidance to help manage bed bug activity throughout the property.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Treatment Bromley",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       short:
//         "Protection for carpets, rugs, wardrobes and other vulnerable fabric areas.",
//       details:
//         "We investigate signs of carpet moth activity and provide suitable treatment and prevention advice for affected areas.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Control Bromley",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       short:
//         "Control for beetle activity around carpets, furnishings, storage and fabric materials.",
//       details:
//         "PrimeShield Services Bromley identifies likely harbourage areas and recommends an appropriate control approach based on the property.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Bromley",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       short:
//         "Professional cockroach control for kitchens, homes, restaurants and commercial premises.",
//       details:
//         "We assess harbourage areas, food-risk zones and signs of activity before carrying out targeted treatment and providing practical prevention advice.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rat & Mice Control Bromley",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       short:
//         "Rodent control for kitchens, lofts, garages, wall voids and business premises.",
//       details:
//         "Our approach looks at evidence of activity, possible entry routes and conditions around the property before suitable control measures are recommended.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control Bromley",
//       image: "/images/flea.webp",
//       icon: Bug,
//       short:
//         "Treatment support for flea activity affecting carpets, bedrooms and living areas.",
//       details:
//         "We focus treatment on affected areas and provide practical guidance around the flea life cycle and activity following treatment.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasp Nest Removal Bromley",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       short:
//         "Professional response to active wasp nests around homes, gardens and buildings.",
//       details:
//         "PrimeShield Services Bromley assesses the nest location and applies an appropriate treatment approach for active wasp activity.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Nest Support Bromley",
//       image: "/images/bee.webp",
//       icon: Bug,
//       short:
//         "Practical assessment and advice when bumble bee nests create property concerns.",
//       details:
//         "We consider the nest location, access and circumstances before recommending the most appropriate course of action.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control Bromley",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       short:
//         "Support for squirrel activity affecting lofts, roof spaces and property structures.",
//       details:
//         "Our service investigates signs of squirrel activity and possible access routes before suitable control and proofing options are considered.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Property Proofing Bromley",
//       image: "/images/hygene.webp",
//       icon: Home,
//       short:
//         "Practical property protection against vulnerable pest access and hygiene concerns.",
//       details:
//         "We help identify areas that may allow pests to enter or return while addressing relevant hygiene and property protection concerns.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Bird Control Services Bromley",
//       image: "/images/birds.webp",
//       icon: Bird,
//       short:
//         "Bird control and proofing for roofs, ledges, commercial buildings and exposed areas.",
//       details:
//         "PrimeShield Services Bromley provides practical options designed to reduce unwanted nesting, fouling and repeated bird activity.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const serviceName = location.state.scrollToService;

//           const element = document.querySelector(
//             `[data-title="${serviceName} Bromley"], [data-title="${serviceName}"]`
//           );

//           if (element) {
//             element.scrollIntoView({
//               behavior: "smooth",
//               block: "center",
//             });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter(
//           (service) => service.cat === selectedCategory
//         );

//   const featuredService = filteredServices[0];
//   const remainingServices = filteredServices.slice(1);

//   return (
//     <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">
//       <ServicesHeroSection />

//       {/* Intro */}
//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

//           <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-end">

//             <div>
//               <span className="inline-flex items-center gap-3 text-[#F47B2B] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em]">
//                 <span className="w-8 h-[2px] bg-[#F47B2B]" />
//                 Our Service Range
//               </span>

//               <h2 className="mt-6 text-[#292929] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black uppercase leading-[0.94] tracking-[-0.04em] max-w-4xl">
//                 One property.
//                 <span className="block text-[#F47B2B]">
//                   Many ways
//                 </span>
//                 pests can enter.
//               </h2>
//             </div>

//             <div className="lg:border-l border-[#292929]/15 lg:pl-10">
//               <p className="text-[#292929]/65 text-base md:text-lg leading-7">
//                 From insects appearing indoors to rodents entering hidden
//                 spaces, every pest problem has different circumstances.
//                 PrimeShield Services Bromley provides a range of focused
//                 services for homes, landlords and businesses across Bromley.
//               </p>

//               <div className="flex items-center gap-3 mt-7">
//                 <CheckCircle2
//                   size={18}
//                   className="text-[#F47B2B]"
//                 />

//                 <span className="text-[#292929] text-xs font-black uppercase tracking-[0.16em]">
//                   Residential & Commercial
//                 </span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Filter Bar */}
//       <section className="bg-[#292929]">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-5">

//           <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">

//             <div className="flex items-center gap-4">
//               <div className="w-10 h-10 bg-[#F47B2B] text-white flex items-center justify-center">
//                 <Grid3X3 size={17} />
//               </div>

//               <div>
//                 <span className="block text-white text-[10px] font-black uppercase tracking-[0.2em]">
//                   Browse Services
//                 </span>

//                 <span className="text-white/45 text-[10px] uppercase tracking-[0.15em]">
//                   Choose a category
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {categories.map((cat) => {
//                 const active = selectedCategory === cat;

//                 return (
//                   <button
//                     key={cat}
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`px-4 sm:px-5 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] transition-all ${
//                       active
//                         ? "bg-[#F47B2B] text-white"
//                         : "bg-white/10 text-white/65 hover:bg-white hover:text-[#292929]"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 );
//               })}
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Service Directory */}
//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

//           {featuredService && (
//             <article
//               data-title={featuredService.title}
//               onClick={() => navigate("/contact-us")}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                   navigate("/contact-us");
//                 }
//               }}
//               className="group relative grid lg:grid-cols-12 min-h-[560px] mb-16 cursor-pointer"
//             >
//               {/* Featured Image */}
//               <div className="lg:col-span-7 relative overflow-hidden min-h-[400px]">

//                 <img
//                   src={featuredService.image}
//                   alt={`PrimeShield Services Bromley ${featuredService.title}`}
//                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   loading="lazy"
//                   decoding="async"
//                   onError={(e) => {
//                     e.currentTarget.style.display = "none";
//                   }}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-transparent to-transparent" />

//                 <div className="absolute top-6 left-6">
//                   <span className="bg-[#F47B2B] text-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em]">
//                     Featured Service
//                   </span>
//                 </div>

//                 <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
//                   <span className="text-white text-6xl sm:text-8xl font-black leading-none">
//                     {featuredService.id}
//                   </span>

//                   <div className="w-14 h-14 bg-white text-[#292929] flex items-center justify-center group-hover:bg-[#F47B2B] group-hover:text-white transition-colors">
//                     <ArrowUpRight size={23} />
//                   </div>
//                 </div>
//               </div>

//               {/* Featured Content */}
//               <div className="lg:col-span-5 bg-white flex flex-col justify-center p-8 sm:p-10 lg:p-12">

//                 <div className="flex items-center gap-3 mb-7">
//                   <div className="w-11 h-11 bg-[#292929] text-white flex items-center justify-center">
//                     <featuredService.icon size={19} />
//                   </div>

//                   <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.2em]">
//                     {featuredService.cat}
//                   </span>
//                 </div>

//                 <h3 className="text-[#292929] text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1] tracking-tight group-hover:text-[#F47B2B] transition-colors">
//                   {featuredService.title}
//                 </h3>

//                 <div className="w-16 h-[3px] bg-[#F47B2B] mt-7 mb-6" />

//                 <p className="text-[#292929]/65 text-base leading-7">
//                   {featuredService.short}
//                 </p>

//                 <p className="text-[#292929]/50 text-sm leading-6 mt-4">
//                   {featuredService.details}
//                 </p>

//                 <div className="mt-8 pt-6 border-t border-[#292929]/10 flex items-center justify-between">

//                   <span className="text-[#292929] text-[10px] font-black uppercase tracking-[0.17em]">
//                     Bromley Service
//                   </span>

//                   <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.17em] flex items-center gap-2">
//                     Enquire
//                     <ArrowUpRight size={15} />
//                   </span>

//                 </div>
//               </div>
//             </article>
//           )}

//           {/* Remaining Services */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#292929]/15 border border-[#292929]/15">

//             {remainingServices.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={service.id}
//                   data-title={service.title}
//                   onClick={() => navigate("/contact-us")}
//                   role="button"
//                   tabIndex={0}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       navigate("/contact-us");
//                     }
//                   }}
//                   className="group bg-white min-h-[430px] flex flex-col cursor-pointer"
//                 >
//                   {/* Card Image */}
//                   <div className="relative h-52 overflow-hidden">

//                     <img
//                       src={service.image}
//                       alt={`PrimeShield Services Bromley ${service.title}`}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                       decoding="async"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/70 via-transparent to-transparent" />

//                     <span className="absolute top-4 left-4 bg-[#292929] text-white px-3 py-2 text-[10px] font-black tracking-[0.18em]">
//                       {service.id}
//                     </span>

//                     <span className="absolute bottom-4 left-4 text-white text-[10px] font-black uppercase tracking-[0.17em]">
//                       {service.cat}
//                     </span>

//                   </div>

//                   {/* Card Content */}
//                   <div className="p-6 sm:p-7 flex flex-col flex-1">

//                     <div className="flex items-center justify-between mb-5">

//                       <div className="w-10 h-10 bg-[#F7F3EF] text-[#292929] flex items-center justify-center group-hover:bg-[#F47B2B] group-hover:text-white transition-colors">
//                         <Icon size={18} />
//                       </div>

//                       <ArrowUpRight
//                         size={20}
//                         className="text-[#292929]/30 group-hover:text-[#F47B2B] transition-colors"
//                       />

//                     </div>

//                     <h3 className="text-[#292929] text-xl sm:text-2xl font-black uppercase leading-tight group-hover:text-[#F47B2B] transition-colors">
//                       {service.title}
//                     </h3>

//                     <p className="text-[#292929]/60 text-sm leading-6 mt-4">
//                       {service.short}
//                     </p>

//                     <div className="mt-auto pt-6">
//                       <span className="inline-flex items-center gap-2 text-[#292929] text-[10px] font-black uppercase tracking-[0.18em] group-hover:text-[#F47B2B] transition-colors">
//                         View Service
//                         <ArrowRight size={14} />
//                       </span>
//                     </div>

//                   </div>
//                 </article>
//               );
//             })}

//           </div>

//           {filteredServices.length === 0 && (
//             <div className="bg-white py-20 text-center">
//               <p className="text-[#292929] font-black uppercase tracking-[0.18em]">
//                 No services found in this category.
//               </p>
//             </div>
//           )}

//         </div>
//       </section>

//       {/* Local Bromley Panel */}
//       <section className="bg-[#292929] py-20 md:py-24">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

//           <div className="grid lg:grid-cols-12 gap-12 items-center">

//             <div className="lg:col-span-7">

//               <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                 Local Pest Control
//               </span>

//               <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight mt-5">
//                 Not sure which
//                 <span className="block text-[#F47B2B]">
//                   service you need?
//                 </span>
//               </h2>

//               <p className="text-white/60 text-sm md:text-base leading-7 max-w-2xl mt-6">
//                 You do not need to identify the pest before getting in touch.
//                 Share what you have noticed, where you have seen it and any
//                 signs of activity around the property. PrimeShield Services
//                 Bromley can help you understand the next step.
//               </p>

//             </div>

//             <div className="lg:col-span-5">

//               <div className="border border-white/15 p-7 sm:p-8">

//                 <div className="flex items-start gap-4 pb-6 border-b border-white/10">
//                   <div className="w-11 h-11 bg-[#F47B2B] text-white flex items-center justify-center shrink-0">
//                     <MapPinIcon />
//                   </div>

//                   <div>
//                     <span className="block text-white text-[10px] font-black uppercase tracking-[0.18em] mb-2">
//                       Bromley Base
//                     </span>

//                     <p className="text-white/60 text-sm leading-6">
//                       {address}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 py-6">
//                   <Phone
//                     size={20}
//                     className="text-[#F47B2B]"
//                   />

//                   <div>
//                     <span className="block text-white/40 text-[9px] font-black uppercase tracking-[0.18em] mb-1">
//                       Call PrimeShield
//                     </span>

//                     <a
//                       href="tel:07356271145"
//                       className="text-white font-black text-lg hover:text-[#F47B2B] transition-colors"
//                     >
//                       {phone}
//                     </a>
//                   </div>
//                 </div>

//                 <Link
//                   to="/contact-us"
//                   className="w-full inline-flex items-center justify-center gap-3 bg-[#F47B2B] text-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
//                 >
//                   Contact PrimeShield
//                   <ArrowRight size={16} />
//                 </Link>

//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//       <AboutCallbackSection />
//     </main>
//   );
// };

// function MapPinIcon() {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
//       <circle cx="12" cy="10" r="2.5" />
//     </svg>
//   );
// }

// export default Services;




import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import {
  ShieldAlert,
  ArrowUpRight,
  ArrowRight,
  Bug,
  Rat,
  Bird,
  Sparkles,
  Home,
  Grid3X3,
  Phone,
  CheckCircle2,
} from "lucide-react";

import AboutCallbackSection from "../components/AboutCallbackSection";
import ServicesHeroSection from "../components/ServicesHeroSection";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const address = "65 Powster Rd, Bromley BR1 5HE";
  const phone = "07356 271145";

  const categories = [
    "All",
    "Insects",
    "Rodents & Wildlife",
    "Birds & Prevention",
  ];

  const servicesData = [
    {
      id: "01",
      cat: "Insects",
      title: "Ant Control Bromley",
      image: "/images/ants.webp",
      icon: Bug,
      short:
        "Targeted control for persistent ant activity around kitchens, entry points and living spaces.",
    },
    {
      id: "02",
      cat: "Insects",
      title: "Bed Bug Treatment Bromley",
      image: "/images/bedbugs.webp",
      icon: Bug,
      short:
        "Focused treatment for bedrooms, furniture and areas affected by bed bug activity.",
    },
    {
      id: "03",
      cat: "Insects",
      title: "Carpet Moth Treatment Bromley",
      image: "/images/moths.webp",
      icon: Sparkles,
      short:
        "Protection for carpets, rugs, wardrobes and other vulnerable fabric areas.",
    },
    {
      id: "04",
      cat: "Insects",
      title: "Carpet Beetle Control Bromley",
      image: "/images/beetle.webp",
      icon: Bug,
      short:
        "Control for beetle activity around carpets, furnishings, storage and fabric materials.",
    },
    {
      id: "05",
      cat: "Insects",
      title: "Cockroach Control Bromley",
      image: "/images/cockroach.webp",
      icon: Bug,
      short:
        "Professional cockroach control for kitchens, homes, restaurants and commercial premises.",
    },
    {
      id: "06",
      cat: "Rodents & Wildlife",
      title: "Rat & Mice Control Bromley",
      image: "/images/rodents.webp",
      icon: Rat,
      short:
        "Rodent control for kitchens, lofts, garages, wall voids and business premises.",
    },
    {
      id: "07",
      cat: "Insects",
      title: "Flea Control Bromley",
      image: "/images/flea.webp",
      icon: Bug,
      short:
        "Treatment support for flea activity affecting carpets, bedrooms and living areas.",
    },
    {
      id: "08",
      cat: "Insects",
      title: "Wasp Nest Removal Bromley",
      image: "/images/wasps.webp",
      icon: ShieldAlert,
      short:
        "Professional response to active wasp nests around homes, gardens and buildings.",
    },
    {
      id: "09",
      cat: "Insects",
      title: "Bumble Bee Nest Support Bromley",
      image: "/images/bee.webp",
      icon: Bug,
      short:
        "Practical assessment and advice when bumble bee nests create property concerns.",
    },
    {
      id: "10",
      cat: "Rodents & Wildlife",
      title: "Squirrel Control Bromley",
      image: "/images/squirrel.webp",
      icon: Rat,
      short:
        "Support for squirrel activity affecting lofts, roof spaces and property structures.",
    },
    {
      id: "11",
      cat: "Birds & Prevention",
      title: "Hygiene & Property Proofing Bromley",
      image: "/images/hygene.webp",
      icon: Home,
      short:
        "Practical property protection against vulnerable pest access and hygiene concerns.",
    },
    {
      id: "12",
      cat: "Birds & Prevention",
      title: "Bird Control Services Bromley",
      image: "/images/birds.webp",
      icon: Bird,
      short:
        "Bird control and proofing for roofs, ledges, commercial buildings and exposed areas.",
    },
  ];

  useEffect(() => {
    if (location.state) {
      const targetCategory = location.state.category || "All";

      setSelectedCategory(targetCategory);

      if (location.state.scrollToService) {
        const timer = setTimeout(() => {
          const serviceName = location.state.scrollToService;

          const element = document.querySelector(
            `[data-title="${serviceName} Bromley"], [data-title="${serviceName}"]`
          );

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300);

        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter(
          (service) => service.cat === selectedCategory
        );

  const handleServiceClick = () => {
    navigate("/contact-us");
  };

  return (
    <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <ServicesHeroSection />


      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-end">

            {/* LEFT */}
            <div>

              <span className="inline-flex items-center gap-3 text-[#F47B2B] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em]">

                <span className="w-8 h-[2px] bg-[#F47B2B]" />

                Our Service Range

              </span>


              <h2 className="mt-6 text-[#292929] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black uppercase leading-[0.94] tracking-[-0.04em] max-w-4xl">

                One property.

                <span className="block text-[#F47B2B]">
                  Many ways
                </span>

                pests can enter.

              </h2>

            </div>


            {/* RIGHT */}
            <div className="lg:border-l border-[#292929]/15 lg:pl-10">

              <p className="text-[#292929]/65 text-base md:text-lg leading-7">

                From insects appearing indoors to rodents entering hidden
                spaces, every pest problem has different circumstances.
                PrimeShield Services Bromley provides a range of focused
                services for homes, landlords and businesses across Bromley.

              </p>


              <div className="flex items-center gap-3 mt-7">

                <CheckCircle2
                  size={18}
                  className="text-[#F47B2B]"
                />

                <span className="text-[#292929] text-xs font-black uppercase tracking-[0.16em]">
                  Residential & Commercial
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CATEGORY FILTER
      ========================================================= */}
      <section className="bg-[#292929]">

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-5">

          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">

            {/* FILTER TITLE */}
            <div className="flex items-center gap-4">

              <div className="w-10 h-10 bg-[#F47B2B] text-white flex items-center justify-center">

                <Grid3X3 size={17} />

              </div>


              <div>

                <span className="block text-white text-[10px] font-black uppercase tracking-[0.2em]">
                  Browse Services
                </span>

                <span className="text-white/45 text-[10px] uppercase tracking-[0.15em]">
                  Choose a category
                </span>

              </div>

            </div>


            {/* CATEGORY BUTTONS */}
            <div className="flex flex-wrap gap-2">

              {categories.map((cat) => {

                const active = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 sm:px-5 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] transition-all ${
                      active
                        ? "bg-[#F47B2B] text-white"
                        : "bg-white/10 text-white/65 hover:bg-white hover:text-[#292929]"
                    }`}
                  >
                    {cat}
                  </button>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">


          {/* SECTION HEADING */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

            <div>

              <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
                What We Handle
              </span>


              <h2 className="mt-4 text-[#292929] text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-[-0.03em]">

                Pest Control

                <span className="block text-[#F47B2B]">
                  Services
                </span>

              </h2>

            </div>


            <div className="md:max-w-sm">

              <p className="text-[#292929]/55 text-sm md:text-base leading-6">

                Explore the services available across Bromley. Select a
                category above or choose a service below to get in touch.

              </p>

            </div>

          </div>


          {/* =====================================================
              CONNECTED SERVICE GRID
          ===================================================== */}
          {filteredServices.length > 0 ? (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-t border-l border-[#292929]/10 rounded-xl overflow-hidden">

              {filteredServices.map((service) => {

                const Icon = service.icon;

                return (

                  <article
                    key={service.id}
                    data-title={service.title}
                    onClick={handleServiceClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {

                      if (e.key === "Enter" || e.key === " ") {
                        handleServiceClick();
                      }

                    }}
                    className="group bg-white border-r border-b border-[#292929]/10 cursor-pointer flex flex-col overflow-hidden transition-colors duration-300 hover:bg-[#F7F3EF]"
                  >


                    {/* =================================================
                        IMAGE
                    ================================================= */}
                    <div className="relative h-56 overflow-hidden">

                      <img
                        src={service.image}
                        alt={`PrimeShield Services Bromley ${service.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />


                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-[#292929]/10 to-transparent" />


                      {/* NUMBER */}
                      <div className="absolute top-4 left-4">

                        <span className="inline-flex items-center justify-center min-w-[42px] h-[32px] px-3 bg-[#292929] text-white text-[10px] font-black tracking-[0.16em]">

                          {service.id}

                        </span>

                      </div>


                      {/* CATEGORY */}
                      <div className="absolute bottom-4 left-4 right-4">

                        <span className="text-white text-[9px] font-black uppercase tracking-[0.18em]">

                          {service.cat}

                        </span>

                      </div>

                    </div>


                    {/* =================================================
                        CONTENT
                    ================================================= */}
                    <div className="p-6 flex flex-col flex-1">


                      {/* ICON + ARROW */}
                      <div className="flex items-center justify-between mb-5">

                        <div className="w-11 h-11 bg-[#F7F3EF] text-[#292929] flex items-center justify-center group-hover:bg-[#F47B2B] group-hover:text-white transition-colors duration-300">

                          <Icon size={19} />

                        </div>


                        <div className="w-9 h-9 border border-[#292929]/10 flex items-center justify-center text-[#292929]/40 group-hover:bg-[#292929] group-hover:text-white group-hover:border-[#292929] transition-all duration-300">

                          <ArrowUpRight size={17} />

                        </div>

                      </div>


                      {/* TITLE */}
                      <h3 className="text-[#292929] text-lg sm:text-xl font-black uppercase leading-[1.05] tracking-tight group-hover:text-[#F47B2B] transition-colors duration-300">

                        {service.title}

                      </h3>


                      {/* ORANGE LINE */}
                      <div className="w-10 h-[3px] bg-[#F47B2B] mt-5 mb-4 group-hover:w-16 transition-all duration-300" />


                      {/* DESCRIPTION */}
                      <p className="text-[#292929]/55 text-sm leading-6">

                        {service.short}

                      </p>


                      {/* BOTTOM */}
                      <div className="mt-7 pt-5 border-t border-[#292929]/10 flex items-center justify-between">

                        <span className="text-[#292929] text-[9px] font-black uppercase tracking-[0.16em]">

                          Bromley

                        </span>


                        <span className="inline-flex items-center gap-2 text-[#F47B2B] text-[9px] font-black uppercase tracking-[0.16em]">

                          Enquire

                          <ArrowRight size={13} />

                        </span>

                      </div>

                    </div>

                  </article>

                );

              })}

            </div>

          ) : (

            /* =====================================================
               EMPTY STATE
            ===================================================== */
            <div className="bg-white border border-[#292929]/10 py-20 text-center">

              <p className="text-[#292929] font-black uppercase tracking-[0.18em]">

                No services found in this category.

              </p>

            </div>

          )}

        </div>

      </section>


      {/* =========================================================
          LOCAL BROMLEY CTA
      ========================================================= */}
      <section className="bg-[#292929] py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

          <div className="grid lg:grid-cols-12 gap-12 items-center">


            {/* LEFT */}
            <div className="lg:col-span-7">

              <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">

                Local Pest Control

              </span>


              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight mt-5">

                Not sure which

                <span className="block text-[#F47B2B]">

                  service you need?

                </span>

              </h2>


              <p className="text-white/60 text-sm md:text-base leading-7 max-w-2xl mt-6">

                You do not need to identify the pest before getting in touch.
                Share what you have noticed, where you have seen it and any
                signs of activity around the property. PrimeShield Services
                Bromley can help you understand the next step.

              </p>

            </div>


            {/* RIGHT */}
            <div className="lg:col-span-5">

              <div className="border border-white/15 p-7 sm:p-8">


                {/* ADDRESS */}
                <div className="flex items-start gap-4 pb-6 border-b border-white/10">

                  <div className="w-11 h-11 bg-[#F47B2B] text-white flex items-center justify-center shrink-0">

                    <MapPinIcon />

                  </div>


                  <div>

                    <span className="block text-white text-[10px] font-black uppercase tracking-[0.18em] mb-2">

                      Bromley Base

                    </span>


                    <p className="text-white/60 text-sm leading-6">

                      {address}

                    </p>

                  </div>

                </div>


                {/* PHONE */}
                <div className="flex items-center gap-4 py-6">

                  <Phone
                    size={20}
                    className="text-[#F47B2B]"
                  />


                  <div>

                    <span className="block text-white/40 text-[9px] font-black uppercase tracking-[0.18em] mb-1">

                      Call PrimeShield

                    </span>


                    <a
                      href="tel:07356271145"
                      className="text-white font-black text-lg hover:text-[#F47B2B] transition-colors"
                    >

                      {phone}

                    </a>

                  </div>

                </div>


                {/* CTA */}
                <Link
                  to="/contact-us"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#F47B2B] text-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
                >

                  Contact PrimeShield

                  <ArrowRight size={16} />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ABOUT CALLBACK
      ========================================================= */}
      <AboutCallbackSection />

    </main>
  );
};


/* =============================================================
   MAP PIN ICON
============================================================= */
function MapPinIcon() {

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >

      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />

      <circle
        cx="12"
        cy="10"
        r="2.5"
      />

    </svg>
  );
}


export default Services;











