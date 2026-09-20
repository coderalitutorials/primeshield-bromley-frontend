


// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   ChevronDown,
//   Send,
//   User,
//   FileText,
//   Lock,
//   HelpCircle,
//   Building2,
// } from "lucide-react";

// const colors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   cream: "#F7F3EF",
//   grey: "#5F5F5F",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Control",
//     "Carpet Moth Control Treatment",
//     "Carpet Beetle Treatment",
//     "Cockroach Control Service",
//     "Rats & Mice Control",
//     "Flea Control",
//     "Wasps Nest Control",
//     "Bumble Bee Control",
//     "Squirrel Control",
//     "Hygiene and Proofing Services",
//     "Birds Control Services",
//     "Pigeons Control Services",
//   ];

//   const faqs = [
//     {
//       question: "Do you cover pest control across London?",
//       answer:
//         "Yes, PrimeShield Services Limited provides professional pest control support for homes, landlords and businesses across London.",
//     },
//     {
//       question: "Are your treatments suitable for homes and businesses?",
//       answer:
//         "Yes, we support residential and commercial properties with inspection, targeted treatment and prevention advice.",
//     },
//     {
//       question: "Can you help with rats, mice and bed bugs?",
//       answer:
//         "Yes, we deal with common pest issues including rats, mice, bed bugs, cockroaches, ants, fleas, moths, wasps and more.",
//     },
//     {
//       question: "Do you provide prevention advice?",
//       answer:
//         "Yes, after inspection and treatment we provide practical guidance to help reduce the risk of future pest activity.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your request securely...", {
//       style: {
//         background: colors.dark,
//         color: "#FFFFFF",
//         borderRadius: "12px",
//         border: `1px solid ${colors.orange}55`,
//       },
//     });

//     try {
//       const res = await axios.post("https://primesheild-backend.vercel.app/api/contact", formData);

//       toast.success(
//         res.data.message || "Pest service request submitted successfully!",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "12px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: "#7f1d1d",
//             color: "#FFFFFF",
//             borderRadius: "12px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#F7F3EF] text-[#111111] min-h-screen font-sans overflow-x-hidden">
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* Hero */}
//       <section className="relative h-[360px] md:h-[430px] lg:h-[500px] overflow-hidden">
//         <img
//           src="/images/contact-hero1.webp"
//           alt="PrimeShield Services Limited contact page for pest control services in London"
//           // className="absolute inset-0 w-full h-full object-cover object-center"
//           className="absolute inset-0 w-full h-full object-cover object-top lg:object-[center_10%]"
//           loading="eager"
//           decoding="async"
//         />

//         <div className="absolute inset-0 bg-[#111111]/68" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/85 via-[#111111]/45 to-[#111111]/75" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 h-full flex items-center">
//           <div>
//             <span className="inline-flex items-center gap-3 text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//               <span className="w-10 h-[2px] bg-[#F36F21]" />
//               Contact PrimeShield
//             </span>

//             <h1 className="text-white text-5xl sm:text-6xl lg:text-[78px] font-black leading-none tracking-tight">
//               Contact
//             </h1>

//             <div className="w-20 h-[3px] bg-[#F36F21] mt-8" />
//           </div>
//         </div>
//       </section>

//       {/* Contact Info + Form */}
//       <section className="py-20 md:py-28 relative overflow-hidden">
//         <div className="absolute -top-28 right-0 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//         <div className="absolute -bottom-28 left-0 w-96 h-96 rounded-full bg-[#111111]/8 blur-3xl" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//           <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#111111]/15">
//             {/* <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15">
//               <Building2 className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Company Reg No 
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black">17263881</h3>
//             </div> */}

//             <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15">
//               <MapPin className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Address
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black leading-relaxed">
//                 12 Old Bond Street, London, England, W1S 4PW
//               </h3>
//             </div>

//             <div className="py-8 md:px-8">
//               <PhoneCall className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Service Area
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black">London, UK</h3>
//             </div>
//           </div>

//           <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//             <div className="lg:col-span-5">
//               <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//                 Get In Touch
//               </span>

//               <h2 className="text-[#111111] text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight">
//                 Request pest control support for your property.
//               </h2>

//               <div className="w-20 h-[3px] bg-[#F36F21] my-8" />

//               <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                 Tell us about your pest issue and our team will review your
//                 details. We support London homes, landlords and businesses with
//                 clear inspection, treatment and prevention advice.
//               </p>
//             </div>

//             <div className="lg:col-span-7 bg-white border-t-[6px] border-[#F36F21] p-7 sm:p-10 shadow-[0_25px_70px_rgba(17,17,17,0.08)]">
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   {[
//                     {
//                       label: "Your Full Name",
//                       name: "name",
//                       type: "text",
//                       placeholder: "e.g. John Doe",
//                       icon: <User className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Email Address",
//                       name: "email",
//                       type: "email",
//                       placeholder: "e.g. john@example.com",
//                       icon: <Mail className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Phone Number",
//                       name: "phone",
//                       type: "tel",
//                       placeholder: "Best phone number",
//                       icon: <PhoneCall className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Postcode Location",
//                       name: "postcode",
//                       type: "text",
//                       placeholder: "e.g. W1S 4PW",
//                       icon: <MapPin className="w-4 h-4" />,
//                     },
//                   ].map((field) => (
//                     <div key={field.name}>
//                       <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                         <span className="text-[#F36F21]">{field.icon}</span>
//                         {field.label}
//                         <span className="text-[#F36F21]">*</span>
//                       </label>

//                       <input
//                         type={field.type}
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleChange}
//                         placeholder={field.placeholder}
//                         required
//                         className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     <FileText className="w-4 h-4 text-[#F36F21]" />
//                     Required Pest Service
//                     <span className="text-[#F36F21]">*</span>
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-white border border-[#D7D7D7] px-5 py-4 pr-12 text-sm text-[#111111] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors appearance-none cursor-pointer"
//                     >
//                       <option value="">Select pest service...</option>
//                       {services.map((srv, idx) => (
//                         <option key={idx} value={srv}>
//                           {srv}
//                         </option>
//                       ))}
//                     </select>

//                     <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F36F21] pointer-events-none" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     <FileText className="w-4 h-4 text-[#F36F21]" />
//                     Message
//                     <span className="text-[#F36F21]">*</span>
//                   </label>

//                   <textarea
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about the pest issue..."
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors resize-none"
//                   />
//                 </div>

//                 <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div className="flex items-center gap-2 text-xs text-[#5F5F5F]">
//                     <Lock className="w-4 h-4 text-[#F36F21]" />
//                     <span>Your details are submitted securely.</span>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#D95A13] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
//                   >
//                     {loading ? (
//                       "Processing Request..."
//                     ) : (
//                       <>
//                         Send Request
//                         <Send className="w-4 h-4" />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Only */}
//       <section className="bg-white py-16 md:py-20 border-y border-[#111111]/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//           <div className="mb-8">
//             <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-4">
//               Find Us
//             </span>
//             <h2 className="text-[#111111] text-3xl md:text-5xl font-black">
//              12 Old Bond Street, London, England, W1S 4PW
//             </h2>
//           </div>

//           <div className="w-full h-[380px] md:h-[460px] overflow-hidden shadow-2xl border-t-[6px] border-[#F36F21]">
//             <iframe
//               title="PrimeShield Services Limited 12 Old Bond Street London Map"
//               // src="https://www.google.com/maps?q=12%20Old%20Bond%20Street%2C%20London%2C%20England%2C%20W1S%204PW&output=embed"
//               src="https://www.google.com/maps?q=12%20Old%20Bond%20Street%2C%20London%2C%20England%2C%20W1S%204PW%2C%20UK&z=18&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-[#F7F3EF] py-20 md:py-28">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.3em]">
//               FAQ
//             </span>

//             <h2 className="mt-4 text-[#111111] text-3xl md:text-5xl font-black">
//               Common Questions
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => {
//               const isOpen = activeFaq === idx;

//               return (
//                 <div
//                   key={idx}
//                   className={`bg-white border transition-colors ${
//                     isOpen ? "border-[#F36F21]" : "border-[#111111]/10"
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaq(idx)}
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
//                   >
//                     <span className="font-black text-[#111111] flex items-center gap-3">
//                       <HelpCircle className="w-5 h-5 text-[#F36F21] shrink-0" />
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`text-[#F36F21] transition-transform ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     >
//                       ▼
//                     </span>
//                   </button>

//                   {isOpen && (
//                     <div className="px-6 pb-5 text-[#5F5F5F] text-sm leading-relaxed border-t border-[#111111]/10 pt-4">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;









// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   ChevronDown,
//   Send,
//   User,
//   FileText,
//   Lock,
//   HelpCircle,
// } from "lucide-react";

// const colors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   cream: "#F7F3EF",
//   grey: "#5F5F5F",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const phoneNumber = "07404 736153";
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   const services = [
//     "Ants Control Kensington",
//     "Bed Bugs Control Kensington",
//     "Carpet Moth Control Treatment Kensington",
//     "Carpet Beetle Treatment Kensington",
//     "Cockroach Control Service Kensington",
//     "Rats & Mice Control Kensington",
//     "Flea Control Kensington",
//     "Wasps Nest Control Kensington",
//     "Bumble Bee Control Kensington",
//     "Squirrel Control Kensington",
//     "Hygiene and Proofing Services Kensington",
//     "Birds Control Services Kensington",
//     "Pigeons Control Services Kensington",
//   ];

//   const faqs = [
//     {
//       question: "Do you provide pest control throughout Kensington?",
//       answer:
//         "Yes, PrimeShield Kensington provides professional pest control support for homes, landlords and businesses across Kensington and South Kensington.",
//     },
//     {
//       question: "Are your treatments suitable for homes and businesses in Kensington?",
//       answer:
//         "Yes, we support houses, flats, rented properties, offices, shops, restaurants and commercial premises with inspection, targeted treatment and prevention advice.",
//     },
//     {
//       question: "Which pests do you treat in Kensington?",
//       answer:
//         "We help with rats, mice, bed bugs, cockroaches, ants, fleas, carpet moths, carpet beetles, wasps, birds, squirrels and other common pest problems.",
//     },
//     {
//       question: "Do you provide prevention advice after treatment?",
//       answer:
//         "Yes, our technicians explain the cause of the pest issue and provide practical recommendations to help reduce future pest activity around your property.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your Kensington request securely...", {
//       style: {
//         background: colors.dark,
//         color: "#FFFFFF",
//         borderRadius: "12px",
//         border: `1px solid ${colors.orange}55`,
//       },
//     });

//     try {
//       const res = await axios.post(
//         "https://primesheild-backend.vercel.app/api/contact",
//         {
//           ...formData,
//           area: "Kensington",
//           business: "PrimeShield Kensington",
//           address,
//           phoneNumber,
//         }
//       );

//       toast.success(
//         res.data.message || "PrimeShield Kensington request submitted successfully!",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "12px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: "#7f1d1d",
//             color: "#FFFFFF",
//             borderRadius: "12px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#F7F3EF] text-[#111111] min-h-screen font-sans overflow-x-hidden">
//       <Toaster position="top-right" reverseOrder={false} />

//       <section className="relative h-[360px] md:h-[430px] lg:h-[500px] overflow-hidden">
//         <img
//           src="/images/contact-hero1.webp"
//           alt="PrimeShield Kensington contact page for pest control services in Kensington and South Kensington"
//           className="absolute inset-0 w-full h-full object-cover object-top lg:object-[center_10%]"
//           loading="eager"
//           decoding="async"
//         />

//         <div className="absolute inset-0 bg-[#111111]/68" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/85 via-[#111111]/45 to-[#111111]/75" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 h-full flex items-center">
//           <div>
//             <span className="inline-flex items-center gap-3 text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//               <span className="w-10 h-[2px] bg-[#F36F21]" />
//               Contact PrimeShield Kensington
//             </span>

//             <h1 className="text-white text-5xl sm:text-6xl lg:text-[78px] font-black leading-none tracking-tight">
//               Contact
//             </h1>

//             <div className="w-20 h-[3px] bg-[#F36F21] mt-8" />
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-28 relative overflow-hidden">
//         <div className="absolute -top-28 right-0 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//         <div className="absolute -bottom-28 left-0 w-96 h-96 rounded-full bg-[#111111]/8 blur-3xl" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//           <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#111111]/15">
//             <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15">
//               <MapPin className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Address
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black leading-relaxed">
//                 {address}
//               </h3>
//             </div>

//             <a
//               href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//               className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15 block"
//             >
//               <PhoneCall className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Phone
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black">{phoneNumber}</h3>
//             </a>

//             <div className="py-8 md:px-8">
//               <MapPin className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Service Area
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black">
//                 Kensington & South Kensington
//               </h3>
//             </div>
//           </div>

//           <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//             <div className="lg:col-span-5">
//               <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//                 Get In Touch
//               </span>

//               <h2 className="text-[#111111] text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight">
//                 Need professional pest control in Kensington?
//               </h2>

//               <div className="w-20 h-[3px] bg-[#F36F21] my-8" />

//               <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                 Tell PrimeShield Kensington about your pest issue and our team
//                 will review your details. We support Kensington and South
//                 Kensington homes, landlords and businesses with clear
//                 inspection, targeted treatment and practical prevention advice.
//               </p>
//             </div>

//             <div className="lg:col-span-7 bg-white border-t-[6px] border-[#F36F21] p-7 sm:p-10 shadow-[0_25px_70px_rgba(17,17,17,0.08)]">
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   {[
//                     {
//                       label: "Your Full Name",
//                       name: "name",
//                       type: "text",
//                       placeholder: "e.g. John Doe",
//                       icon: <User className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Email Address",
//                       name: "email",
//                       type: "email",
//                       placeholder: "e.g. john@example.com",
//                       icon: <Mail className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Phone Number",
//                       name: "phone",
//                       type: "tel",
//                       placeholder: "Best phone number",
//                       icon: <PhoneCall className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Postcode Location",
//                       name: "postcode",
//                       type: "text",
//                       placeholder: "e.g. SW7 3ND",
//                       icon: <MapPin className="w-4 h-4" />,
//                     },
//                   ].map((field) => (
//                     <div key={field.name}>
//                       <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                         <span className="text-[#F36F21]">{field.icon}</span>
//                         {field.label}
//                         <span className="text-[#F36F21]">*</span>
//                       </label>

//                       <input
//                         type={field.type}
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleChange}
//                         placeholder={field.placeholder}
//                         required
//                         className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     <FileText className="w-4 h-4 text-[#F36F21]" />
//                     Required Pest Service
//                     <span className="text-[#F36F21]">*</span>
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-white border border-[#D7D7D7] px-5 py-4 pr-12 text-sm text-[#111111] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors appearance-none cursor-pointer"
//                     >
//                       <option value="">Select Kensington pest service...</option>
//                       {services.map((srv, idx) => (
//                         <option key={idx} value={srv}>
//                           {srv}
//                         </option>
//                       ))}
//                     </select>

//                     <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F36F21] pointer-events-none" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     <FileText className="w-4 h-4 text-[#F36F21]" />
//                     Message
//                     <span className="text-[#F36F21]">*</span>
//                   </label>

//                   <textarea
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about the pest issue in your Kensington property..."
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors resize-none"
//                   />
//                 </div>

//                 <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div className="flex items-center gap-2 text-xs text-[#5F5F5F]">
//                     <Lock className="w-4 h-4 text-[#F36F21]" />
//                     <span>Your details are submitted securely.</span>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#D95A13] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
//                   >
//                     {loading ? (
//                       "Processing Request..."
//                     ) : (
//                       <>
//                         Send Request
//                         <Send className="w-4 h-4" />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-16 md:py-20 border-y border-[#111111]/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//           <div className="mb-8">
//             <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-4">
//               Find PrimeShield Kensington
//             </span>
//             <h2 className="text-[#111111] text-3xl md:text-5xl font-black">
//               {address}
//             </h2>
//           </div>

//           <div className="w-full h-[380px] md:h-[460px] overflow-hidden shadow-2xl border-t-[6px] border-[#F36F21]">
//             <iframe
//               title="PrimeShield Kensington 40 Harrington Rd South Kensington London SW7 3ND Map"
//               src="https://www.google.com/maps?q=40%20Harrington%20Rd%2C%20South%20Kensington%2C%20London%20SW7%203ND%2C%20UK&z=18&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#F7F3EF] py-20 md:py-28">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.3em]">
//               FAQ
//             </span>

//             <h2 className="mt-4 text-[#111111] text-3xl md:text-5xl font-black">
//               Kensington Pest Control Questions
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => {
//               const isOpen = activeFaq === idx;

//               return (
//                 <div
//                   key={idx}
//                   className={`bg-white border transition-colors ${
//                     isOpen ? "border-[#F36F21]" : "border-[#111111]/10"
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaq(idx)}
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
//                   >
//                     <span className="font-black text-[#111111] flex items-center gap-3">
//                       <HelpCircle className="w-5 h-5 text-[#F36F21] shrink-0" />
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`text-[#F36F21] transition-transform ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     >
//                       ▼
//                     </span>
//                   </button>

//                   {isOpen && (
//                     <div className="px-6 pb-5 text-[#5F5F5F] text-sm leading-relaxed border-t border-[#111111]/10 pt-4">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;





















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   ChevronDown,
//   ArrowRight,
//   User,
//   FileText,
//   Lock,
//   HelpCircle,
//   ShieldCheck,
//   Building2,
//   Home,
//   Send,
// } from "lucide-react";

// const colors = {
//   dark: "#292929",
//   orange: "#F47B2B",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const phoneNumber = "07356 271145";
//   const address = "65 Powster Rd, Bromley BR1 5HE";
//   const email = "info@primeshieldbromley.uk";

//   const services = [
//     "Rat & Mice Control Bromley",
//     "Bed Bug Treatment Bromley",
//     "Cockroach Control Bromley",
//     "Ant Control Bromley",
//     "Flea Control Bromley",
//     "Carpet Beetle Treatment Bromley",
//     "Carpet Moth Treatment Bromley",
//     "Wasp Nest Removal Bromley",
//     "Squirrel Control Bromley",
//     "Bird & Pigeon Control Bromley",
//     "Hygiene & Proofing Services Bromley",
//     "Other Pest Control Enquiry",
//   ];

//   const faqs = [
//     {
//       question: "How can I contact PrimeShield Services Bromley?",
//       answer:
//         "You can call PrimeShield Services Bromley on 07356 271145, email info@primeshieldbromley.uk, or use the enquiry form on this page to send us details about your pest problem.",
//     },
//     {
//       question: "What pest problems can I contact you about?",
//       answer:
//         "We can help with a range of common pest problems including rats, mice, bed bugs, cockroaches, ants, fleas, carpet beetles, carpet moths, wasps, squirrels and birds. If you are unsure which pest you are dealing with, you can describe the signs in your enquiry.",
//     },
//     {
//       question: "Do you provide pest control for homes and businesses?",
//       answer:
//         "Yes. PrimeShield Services Bromley provides pest control support for residential and commercial properties. The approach can be considered according to the type of property, location of activity and pest problem involved.",
//     },
//     {
//       question: "What information should I include in my enquiry?",
//       answer:
//         "It is useful to tell us which area of the property is affected, what signs you have noticed, when the problem started and which pest you believe may be involved. Your postcode also helps us understand the service location.",
//     },
//     {
//       question: "Can I contact you if I am not sure what the pest is?",
//       answer:
//         "Yes. You do not need to identify the pest with certainty before contacting us. Describe what you have seen or heard and where you have noticed the activity, and the information can help establish what type of pest issue may be involved.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading(
//       "Sending your Bromley pest control enquiry...",
//       {
//         style: {
//           background: colors.dark,
//           color: "#FFFFFF",
//           borderRadius: "4px",
//           border: `1px solid ${colors.orange}`,
//         },
//       }
//     );

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/contact",
//         {
//           ...formData,
//           area: "Bromley",
//           business: "PrimeShield Services Bromley",
//           address,
//           phoneNumber,
//           email,
//         }
//       );

//       toast.success(
//         res.data.message ||
//           "Your PrimeShield Services Bromley enquiry has been submitted successfully.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "4px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "4px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[#292929]">
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* =========================================================
//           HERO
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#292929]">
//         <div className="absolute right-0 top-0 hidden h-full w-[38%] bg-[#F47B2B] lg:block" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid min-h-[520px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.55fr] lg:py-24">
//             <div className="max-w-3xl">
//               <div className="mb-7 flex items-center gap-4">
//                 <span className="h-[3px] w-12 bg-[#F47B2B]" />

//                 <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//                   PrimeShield Services Bromley
//                 </span>
//               </div>

//               <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
//                 Let's talk about
//                 <span className="block text-[#F47B2B]">
//                   your pest problem.
//                 </span>
//               </h1>

//               <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
//                 Whether you have noticed signs of rodents, insects or another
//                 unwanted pest, PrimeShield Services Bromley is here to discuss
//                 the situation and help you understand the next step.
//               </p>

//               <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//                 <a
//                   href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                   className="inline-flex items-center justify-center gap-3 bg-[#F47B2B] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//                 >
//                   <PhoneCall size={19} />
//                   Call {phoneNumber}
//                 </a>

//                 <a
//                   href={`mailto:${email}`}
//                   className="inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 font-bold text-white transition hover:border-[#F47B2B] hover:text-[#F47B2B]"
//                 >
//                   <Mail size={18} />
//                   Email Us
//                 </a>
//               </div>
//             </div>

//             <div className="relative hidden lg:block">
//               <div className="ml-auto max-w-sm border-l-[8px] border-[#292929] bg-white p-9 shadow-2xl">
//                 <ShieldCheck size={36} className="text-[#F47B2B]" />

//                 <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45">
//                   Local Service
//                 </p>

//                 <h2 className="mt-3 text-3xl font-black leading-tight">
//                   Pest control support across Bromley.
//                 </h2>

//                 <div className="mt-7 flex gap-3 border-t border-[#292929]/10 pt-6">
//                   <MapPin
//                     className="mt-1 shrink-0 text-[#F47B2B]"
//                     size={19}
//                   />

//                   <p className="text-sm font-semibold leading-6">
//                     {address}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 h-2 w-full bg-[#F47B2B]" />
//       </section>

//       {/* =========================================================
//           CONTACT INFORMATION
//       ========================================================== */}
//       <section className="bg-[#F5F5F2]">
//         <div className="mx-auto grid max-w-7xl md:grid-cols-3">
//           <a
//             href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//             className="group border-b border-[#292929]/10 p-8 transition hover:bg-[#292929] md:border-b-0 md:border-r"
//           >
//             <div className="flex items-center justify-between">
//               <PhoneCall
//                 size={25}
//                 className="text-[#F47B2B] transition group-hover:text-white"
//               />

//               <ArrowRight
//                 size={18}
//                 className="text-[#292929]/30 transition group-hover:translate-x-1 group-hover:text-[#F47B2B]"
//               />
//             </div>

//             <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45 group-hover:text-white/45">
//               Call PrimeShield
//             </p>

//             <p className="mt-2 text-xl font-black group-hover:text-white">
//               {phoneNumber}
//             </p>
//           </a>

//           <a
//             href={`mailto:${email}`}
//             className="group border-b border-[#292929]/10 p-8 transition hover:bg-[#292929] md:border-b-0 md:border-r"
//           >
//             <div className="flex items-center justify-between">
//               <Mail
//                 size={25}
//                 className="text-[#F47B2B] transition group-hover:text-white"
//               />

//               <ArrowRight
//                 size={18}
//                 className="text-[#292929]/30 transition group-hover:translate-x-1 group-hover:text-[#F47B2B]"
//               />
//             </div>

//             <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45 group-hover:text-white/45">
//               Email
//             </p>

//             <p className="mt-2 break-all text-lg font-black group-hover:text-white">
//               {email}
//             </p>
//           </a>

//           <div className="group p-8 transition hover:bg-[#292929]">
//             <MapPin
//               size={25}
//               className="text-[#F47B2B] transition group-hover:text-white"
//             />

//             <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45 group-hover:text-white/45">
//               Location
//             </p>

//             <p className="mt-2 text-lg font-black leading-7 group-hover:text-white">
//               {address}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FORM + SIDE CONTENT
//       ========================================================== */}
//       <section className="py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
//             {/* LEFT */}
//             <div>
//               <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//                 Send An Enquiry
//               </span>

//               <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
//                 Tell us what's happening at your property.
//               </h2>

//               <p className="mt-7 text-lg leading-8 text-[#292929]/65">
//                 A few details can help us understand your enquiry before we
//                 speak with you. Tell us what you have noticed, where the
//                 activity is occurring and which service you are looking for.
//               </p>

//               <div className="mt-10 border-l-4 border-[#F47B2B] bg-[#F5F5F2] p-6">
//                 <div className="flex gap-4">
//                   <ShieldCheck
//                     className="mt-1 shrink-0 text-[#F47B2B]"
//                     size={22}
//                   />

//                   <div>
//                     <h3 className="font-black">
//                       Straightforward communication
//                     </h3>

//                     <p className="mt-2 text-sm leading-6 text-[#292929]/60">
//                       The more information you provide, the easier it is to
//                       understand what you are experiencing and discuss the
//                       appropriate next steps.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-10 space-y-6">
//                 <div className="flex gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                     <Home size={19} />
//                   </div>

//                   <div>
//                     <h3 className="font-black">Residential enquiries</h3>

//                     <p className="mt-1 text-sm leading-6 text-[#292929]/60">
//                       Houses, flats, rental properties and other residential
//                       spaces.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                     <Building2 size={19} />
//                   </div>

//                   <div>
//                     <h3 className="font-black">Commercial enquiries</h3>

//                     <p className="mt-1 text-sm leading-6 text-[#292929]/60">
//                       Offices, shops, workplaces and other commercial
//                       premises.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                     <MapPin size={19} />
//                   </div>

//                   <div>
//                     <h3 className="font-black">Bromley service area</h3>

//                     <p className="mt-1 text-sm leading-6 text-[#292929]/60">
//                       Local pest control support for properties across Bromley.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* FORM */}
//             <div className="border border-[#292929]/10 bg-[#F5F5F2] p-6 sm:p-8 md:p-10">
//               <div className="mb-8 border-b border-[#292929]/10 pb-7">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47B2B]">
//                   Contact Form
//                 </p>

//                 <h3 className="mt-3 text-2xl font-black md:text-3xl">
//                   Request pest control information
//                 </h3>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                       <User size={15} className="text-[#F47B2B]" />
//                       Full Name
//                       <span className="text-[#F47B2B]">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       required
//                       className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F47B2B]"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                       <Mail size={15} className="text-[#F47B2B]" />
//                       Email
//                       <span className="text-[#F47B2B]">*</span>
//                     </label>

//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="you@example.com"
//                       required
//                       className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F47B2B]"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                       <PhoneCall size={15} className="text-[#F47B2B]" />
//                       Phone
//                       <span className="text-[#F47B2B]">*</span>
//                     </label>

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Your phone number"
//                       required
//                       className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F47B2B]"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                       <MapPin size={15} className="text-[#F47B2B]" />
//                       Postcode
//                       <span className="text-[#F47B2B]">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. BR1 5HE"
//                       required
//                       className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm uppercase outline-none transition focus:border-[#F47B2B]"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                     <FileText size={15} className="text-[#F47B2B]" />
//                     Pest Service
//                     <span className="text-[#F47B2B]">*</span>
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className="w-full appearance-none border border-[#292929]/15 bg-white px-4 py-4 pr-12 text-sm outline-none transition focus:border-[#F47B2B]"
//                     >
//                       <option value="">
//                         Select the pest service you need...
//                       </option>

//                       {services.map((service, index) => (
//                         <option key={index} value={service}>
//                           {service}
//                         </option>
//                       ))}
//                     </select>

//                     <ChevronDown
//                       size={19}
//                       className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F47B2B]"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                     <FileText size={15} className="text-[#F47B2B]" />
//                     Tell Us About The Problem
//                     <span className="text-[#F47B2B]">*</span>
//                   </label>

//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="6"
//                     required
//                     placeholder="Describe what you have noticed, where the activity is happening and when you first noticed it..."
//                     className="w-full resize-none border border-[#292929]/15 bg-white px-4 py-4 text-sm leading-6 outline-none transition focus:border-[#F47B2B]"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-5 border-t border-[#292929]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
//                   <div className="flex items-center gap-2 text-xs text-[#292929]/55">
//                     <Lock size={15} className="text-[#F47B2B]" />
//                     <span>Your enquiry is submitted securely.</span>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="inline-flex items-center justify-center gap-3 bg-[#292929] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#F47B2B] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? (
//                       "Sending..."
//                     ) : (
//                       <>
//                         Send Enquiry
//                         <Send size={16} />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHAT HAPPENS NEXT
//       ========================================================== */}
//       <section className="bg-[#292929] py-20 md:py-24">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
//             <div>
//               <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//                 What Happens Next
//               </span>

//               <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
//                 A simple way to start dealing with the problem.
//               </h2>

//               <p className="mt-6 text-lg leading-8 text-white/60">
//                 You do not need to have all the answers before contacting us.
//                 Start by explaining what you have noticed and where.
//               </p>
//             </div>

//             <div className="grid gap-px bg-white/10 sm:grid-cols-3">
//               <div className="bg-[#292929] p-7">
//                 <span className="text-4xl font-black text-[#F47B2B]">
//                   01
//                 </span>

//                 <h3 className="mt-6 text-xl font-black text-white">
//                   Send Details
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-white/55">
//                   Tell us about the pest activity and your property.
//                 </p>
//               </div>

//               <div className="bg-[#292929] p-7">
//                 <span className="text-4xl font-black text-[#F47B2B]">
//                   02
//                 </span>

//                 <h3 className="mt-6 text-xl font-black text-white">
//                   Discuss The Issue
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-white/55">
//                   The information can help establish what support may be
//                   appropriate.
//                 </p>
//               </div>

//               <div className="bg-[#292929] p-7">
//                 <span className="text-4xl font-black text-[#F47B2B]">
//                   03
//                 </span>

//                 <h3 className="mt-6 text-xl font-black text-white">
//                   Plan The Next Step
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-white/55">
//                   Move forward with a clear approach to the pest problem.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCATION
//       ========================================================== */}
//       <section className="bg-white py-20 md:py-24">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
//             <div>
//               <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//                 Local To Bromley
//               </span>

//               <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
//                 PrimeShield Services Bromley
//               </h2>

//               <p className="mt-6 text-lg leading-8 text-[#292929]/65">
//                 Our Bromley service is focused on helping residential and
//                 commercial customers with unwanted pest activity across the
//                 local area.
//               </p>

//               <div className="mt-8 flex gap-4 border-l-4 border-[#F47B2B] bg-[#F5F5F2] p-5">
//                 <MapPin
//                   className="mt-1 shrink-0 text-[#F47B2B]"
//                   size={21}
//                 />

//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-[#292929]/45">
//                     Address
//                   </p>

//                   <p className="mt-2 font-black leading-7">{address}</p>
//                 </div>
//               </div>

//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="mt-7 inline-flex items-center gap-3 font-black text-[#292929] transition hover:text-[#F47B2B]"
//               >
//                 <PhoneCall size={18} className="text-[#F47B2B]" />
//                 {phoneNumber}
//                 <ArrowRight size={17} />
//               </a>
//             </div>

//             <div className="min-h-[360px] overflow-hidden border-t-4 border-[#F47B2B] bg-[#F5F5F2]">
//               <iframe
//                 title="PrimeShield Services Bromley location map"
//                 src="https://www.google.com/maps?q=65%20Powster%20Rd%2C%20Bromley%20BR1%205HE%2C%20UK&z=17&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0, minHeight: "360px" }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FAQ
//       ========================================================== */}
//       <section className="bg-[#F5F5F2] py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 md:px-10">
//           <div className="text-center">
//             <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//               Frequently Asked Questions
//             </span>

//             <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
//               Before you get in touch
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#292929]/60">
//               A few common questions about contacting PrimeShield Services
//               Bromley and arranging pest control support.
//             </p>
//           </div>

//           <div className="mt-12 space-y-3">
//             {faqs.map((faq, index) => {
//               const isOpen = activeFaq === index;

//               return (
//                 <div
//                   key={index}
//                   className={`border bg-white transition ${
//                     isOpen
//                       ? "border-[#F47B2B]"
//                       : "border-[#292929]/10"
//                   }`}
//                 >
//                   <button
//                     type="button"
//                     onClick={() => toggleFaq(index)}
//                     className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
//                   >
//                     <span className="flex items-start gap-4 font-black">
//                       <HelpCircle
//                         size={19}
//                         className="mt-0.5 shrink-0 text-[#F47B2B]"
//                       />

//                       {faq.question}
//                     </span>

//                     <ChevronDown
//                       size={19}
//                       className={`shrink-0 text-[#F47B2B] transition-transform ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {isOpen && (
//                     <div className="border-t border-[#292929]/10 px-6 pb-6 pt-5">
//                       <p className="pl-9 text-sm leading-7 text-[#292929]/65">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#F47B2B]">
//         <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full border-[55px] border-white/10" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-12">
//           <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
//             <div className="max-w-3xl">
//               <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
//                 PrimeShield Services Bromley
//               </span>

//               <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
//                 Have a pest problem? Start with a conversation.
//               </h2>

//               <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
//                 Contact our Bromley team with the details of the issue at your
//                 property and take the first step towards getting it properly
//                 addressed.
//               </p>
//             </div>

//             <div className="flex shrink-0 flex-col gap-3">
//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="inline-flex items-center justify-center gap-3 bg-[#292929] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//               >
//                 <PhoneCall size={19} />
//                 Call {phoneNumber}
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="inline-flex items-center justify-center gap-3 border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//               >
//                 <Mail size={18} />
//                 {email}
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;


















import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  Mail,
  PhoneCall,
  MapPin,
  ChevronDown,
  ArrowRight,
  User,
  FileText,
  Lock,
  HelpCircle,
  ShieldCheck,
  Building2,
  Home,
  Send,
} from "lucide-react";

const colors = {
  dark: "#292929",
  orange: "#F47B2B",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const phoneNumber = "07356 271145";
  const address = "65 Powster Rd, Bromley BR1 5HE";
  const businessEmail = "info@primeshieldbromley.uk";

  const services = [
    "Rat & Mice Control Bromley",
    "Bed Bug Treatment Bromley",
    "Cockroach Control Bromley",
    "Ant Control Bromley",
    "Flea Control Bromley",
    "Carpet Beetle Treatment Bromley",
    "Carpet Moth Treatment Bromley",
    "Wasp Nest Removal Bromley",
    "Squirrel Control Bromley",
    "Bird & Pigeon Control Bromley",
    "Hygiene & Proofing Services Bromley",
    "Other Pest Control Enquiry",
  ];

  const faqs = [
    {
      question: "How can I contact PrimeShield Services Bromley?",
      answer:
        "You can call PrimeShield Services Bromley on 07356 271145, email info@primeshieldbromley.uk, or use the enquiry form on this page to send us details about your pest problem.",
    },
    {
      question: "What pest problems can I contact you about?",
      answer:
        "We can help with a range of common pest problems including rats, mice, bed bugs, cockroaches, ants, fleas, carpet beetles, carpet moths, wasps, squirrels and birds. If you are unsure which pest you are dealing with, you can describe the signs in your enquiry.",
    },
    {
      question: "Do you provide pest control for homes and businesses?",
      answer:
        "Yes. PrimeShield Services Bromley provides pest control support for residential and commercial properties. The approach can be considered according to the type of property, location of activity and pest problem involved.",
    },
    {
      question: "What information should I include in my enquiry?",
      answer:
        "It is useful to tell us which area of the property is affected, what signs you have noticed, when the problem started and which pest you believe may be involved. Your postcode also helps us understand the service location.",
    },
    {
      question: "Can I contact you if I am not sure what the pest is?",
      answer:
        "Yes. You do not need to identify the pest with certainty before contacting us. Describe what you have seen or heard and where you have noticed the activity, and the information can help establish what type of pest issue may be involved.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loaderToast = toast.loading(
      "Sending your Bromley pest control enquiry...",
      {
        style: {
          background: colors.dark,
          color: "#FFFFFF",
          borderRadius: "4px",
          border: `1px solid ${colors.orange}`,
        },
      }
    );

    try {
      /*
        IMPORTANT:

        Do NOT add:
        email: businessEmail

        after ...formData.

        formData.email contains the customer's email address.
        That exact email must be sent to the backend.
      */

      const res = await axios.post("https://primeshield-bromley-backend.vercel.app/api/contact", {
        ...formData,
        area: "Bromley",
        business: "PrimeShield Services Bromley",
        address,
        phoneNumber,
        businessEmail,
      });

      toast.success(
        res.data.message ||
          "Your PrimeShield Services Bromley enquiry has been submitted successfully.",
        {
          id: loaderToast,
          duration: 4000,
          icon: "🛡️",
          style: {
            background: colors.dark,
            color: "#FFFFFF",
            border: `1px solid ${colors.orange}`,
            borderRadius: "4px",
          },
        }
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
        {
          id: loaderToast,
          duration: 4000,
          style: {
            background: colors.dark,
            color: "#FFFFFF",
            border: `1px solid ${colors.orange}`,
            borderRadius: "4px",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[#292929]">
      <Toaster position="top-right" reverseOrder={false} />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#292929]">
        <div className="absolute right-0 top-0 hidden h-full w-[38%] bg-[#F47B2B] lg:block" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid min-h-[520px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.55fr] lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-[3px] w-12 bg-[#F47B2B]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
                  PrimeShield Services Bromley
                </span>
              </div>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
                Let's talk about
                <span className="block text-[#F47B2B]">
                  your pest problem.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Whether you have noticed signs of rodents, insects or another
                unwanted pest, PrimeShield Services Bromley is here to discuss
                the situation and help you understand the next step.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-3 bg-[#F47B2B] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
                >
                  <PhoneCall size={19} />
                  Call {phoneNumber}
                </a>

                <a
                  href={`mailto:${businessEmail}`}
                  className="inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 font-bold text-white transition hover:border-[#F47B2B] hover:text-[#F47B2B]"
                >
                  <Mail size={18} />
                  Email Us
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="ml-auto max-w-sm border-l-[8px] border-[#292929] bg-white p-9 shadow-2xl">
                <ShieldCheck size={36} className="text-[#F47B2B]" />

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45">
                  Local Service
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight">
                  Pest control support across Bromley.
                </h2>

                <div className="mt-7 flex gap-3 border-t border-[#292929]/10 pt-6">
                  <MapPin
                    className="mt-1 shrink-0 text-[#F47B2B]"
                    size={19}
                  />

                  <p className="text-sm font-semibold leading-6">
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-full bg-[#F47B2B]" />
      </section>

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================== */}
      <section className="bg-[#F5F5F2]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="group border-b border-[#292929]/10 p-8 transition hover:bg-[#292929] md:border-b-0 md:border-r"
          >
            <div className="flex items-center justify-between">
              <PhoneCall
                size={25}
                className="text-[#F47B2B] transition group-hover:text-white"
              />

              <ArrowRight
                size={18}
                className="text-[#292929]/30 transition group-hover:translate-x-1 group-hover:text-[#F47B2B]"
              />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45 group-hover:text-white/45">
              Call PrimeShield
            </p>

            <p className="mt-2 text-xl font-black group-hover:text-white">
              {phoneNumber}
            </p>
          </a>

          <a
            href={`mailto:${businessEmail}`}
            className="group border-b border-[#292929]/10 p-8 transition hover:bg-[#292929] md:border-b-0 md:border-r"
          >
            <div className="flex items-center justify-between">
              <Mail
                size={25}
                className="text-[#F47B2B] transition group-hover:text-white"
              />

              <ArrowRight
                size={18}
                className="text-[#292929]/30 transition group-hover:translate-x-1 group-hover:text-[#F47B2B]"
              />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45 group-hover:text-white/45">
              Email
            </p>

            <p className="mt-2 break-all text-lg font-black group-hover:text-white">
              {businessEmail}
            </p>
          </a>

          <div className="group p-8 transition hover:bg-[#292929]">
            <MapPin
              size={25}
              className="text-[#F47B2B] transition group-hover:text-white"
            />

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45 group-hover:text-white/45">
              Location
            </p>

            <p className="mt-2 text-lg font-black leading-7 group-hover:text-white">
              {address}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FORM + SIDE CONTENT
      ========================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            {/* LEFT */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
                Send An Enquiry
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                Tell us what's happening at your property.
              </h2>

              <p className="mt-7 text-lg leading-8 text-[#292929]/65">
                A few details can help us understand your enquiry before we
                speak with you. Tell us what you have noticed, where the
                activity is occurring and which service you are looking for.
              </p>

              <div className="mt-10 border-l-4 border-[#F47B2B] bg-[#F5F5F2] p-6">
                <div className="flex gap-4">
                  <ShieldCheck
                    className="mt-1 shrink-0 text-[#F47B2B]"
                    size={22}
                  />

                  <div>
                    <h3 className="font-black">
                      Straightforward communication
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#292929]/60">
                      The more information you provide, the easier it is to
                      understand what you are experiencing and discuss the
                      appropriate next steps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#292929] text-[#F47B2B]">
                    <Home size={19} />
                  </div>

                  <div>
                    <h3 className="font-black">Residential enquiries</h3>

                    <p className="mt-1 text-sm leading-6 text-[#292929]/60">
                      Houses, flats, rental properties and other residential
                      spaces.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#292929] text-[#F47B2B]">
                    <Building2 size={19} />
                  </div>

                  <div>
                    <h3 className="font-black">Commercial enquiries</h3>

                    <p className="mt-1 text-sm leading-6 text-[#292929]/60">
                      Offices, shops, workplaces and other commercial
                      premises.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#292929] text-[#F47B2B]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <h3 className="font-black">Bromley service area</h3>

                    <p className="mt-1 text-sm leading-6 text-[#292929]/60">
                      Local pest control support for properties across Bromley.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="border border-[#292929]/10 bg-[#F5F5F2] p-6 sm:p-8 md:p-10">
              <div className="mb-8 border-b border-[#292929]/10 pb-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47B2B]">
                  Contact Form
                </p>

                <h3 className="mt-3 text-2xl font-black md:text-3xl">
                  Request pest control information
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <User size={15} className="text-[#F47B2B]" />
                      Full Name
                      <span className="text-[#F47B2B]">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F47B2B]"
                    />
                  </div>

                  {/* CLIENT EMAIL */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <Mail size={15} className="text-[#F47B2B]" />
                      Email
                      <span className="text-[#F47B2B]">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F47B2B]"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <PhoneCall size={15} className="text-[#F47B2B]" />
                      Phone
                      <span className="text-[#F47B2B]">*</span>
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F47B2B]"
                    />
                  </div>

                  {/* POSTCODE */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <MapPin size={15} className="text-[#F47B2B]" />
                      Postcode
                      <span className="text-[#F47B2B]">*</span>
                    </label>

                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="e.g. BR1 5HE"
                      required
                      className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm uppercase outline-none transition focus:border-[#F47B2B]"
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <FileText size={15} className="text-[#F47B2B]" />
                    Pest Service
                    <span className="text-[#F47B2B]">*</span>
                  </label>

                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none border border-[#292929]/15 bg-white px-4 py-4 pr-12 text-sm outline-none transition focus:border-[#F47B2B]"
                    >
                      <option value="">
                        Select the pest service you need...
                      </option>

                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={19}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F47B2B]"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <FileText size={15} className="text-[#F47B2B]" />
                    Tell Us About The Problem
                    <span className="text-[#F47B2B]">*</span>
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    placeholder="Describe what you have noticed, where the activity is happening and when you first noticed it..."
                    className="w-full resize-none border border-[#292929]/15 bg-white px-4 py-4 text-sm leading-6 outline-none transition focus:border-[#F47B2B]"
                  />
                </div>

                {/* SUBMIT */}
                <div className="flex flex-col gap-5 border-t border-[#292929]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#292929]/55">
                    <Lock size={15} className="text-[#F47B2B]" />
                    <span>Your enquiry is submitted securely.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-3 bg-[#292929] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#F47B2B] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT HAPPENS NEXT
      ========================================================== */}
      <section className="bg-[#292929] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
                What Happens Next
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
                A simple way to start dealing with the problem.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/60">
                You do not need to have all the answers before contacting us.
                Start by explaining what you have noticed and where.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-3">

              <div className="bg-[#292929] p-7">
                <span className="text-4xl font-black text-[#F47B2B]">
                  01
                </span>

                <h3 className="mt-6 text-xl font-black text-white">
                  Send Details
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Tell us about the pest activity and your property.
                </p>
              </div>

              <div className="bg-[#292929] p-7">
                <span className="text-4xl font-black text-[#F47B2B]">
                  02
                </span>

                <h3 className="mt-6 text-xl font-black text-white">
                  Discuss The Issue
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  The information can help establish what support may be
                  appropriate.
                </p>
              </div>

              <div className="bg-[#292929] p-7">
                <span className="text-4xl font-black text-[#F47B2B]">
                  03
                </span>

                <h3 className="mt-6 text-xl font-black text-white">
                  Plan The Next Step
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Move forward with a clear approach to the pest problem.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
                Local To Bromley
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                PrimeShield Services Bromley
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#292929]/65">
                Our Bromley service is focused on helping residential and
                commercial customers with unwanted pest activity across the
                local area.
              </p>

              <div className="mt-8 flex gap-4 border-l-4 border-[#F47B2B] bg-[#F5F5F2] p-5">
                <MapPin
                  className="mt-1 shrink-0 text-[#F47B2B]"
                  size={21}
                />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#292929]/45">
                    Address
                  </p>

                  <p className="mt-2 font-black leading-7">
                    {address}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="mt-7 inline-flex items-center gap-3 font-black text-[#292929] transition hover:text-[#F47B2B]"
              >
                <PhoneCall size={18} className="text-[#F47B2B]" />
                {phoneNumber}
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="min-h-[360px] overflow-hidden border-t-4 border-[#F47B2B] bg-[#F5F5F2]">
              <iframe
                title="PrimeShield Services Bromley location map"
                src="https://www.google.com/maps?q=65%20Powster%20Rd%2C%20Bromley%20BR1%205HE%2C%20UK&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="bg-[#F5F5F2] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">

          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Before you get in touch
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#292929]/60">
              A few common questions about contacting PrimeShield Services
              Bromley and arranging pest control support.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={index}
                  className={`border bg-white transition ${
                    isOpen
                      ? "border-[#F47B2B]"
                      : "border-[#292929]/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                  >
                    <span className="flex items-start gap-4 font-black">
                      <HelpCircle
                        size={19}
                        className="mt-0.5 shrink-0 text-[#F47B2B]"
                      />

                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#F47B2B] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#292929]/10 px-6 pb-6 pt-5">
                      <p className="pl-9 text-sm leading-7 text-[#292929]/65">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#F47B2B]">
        <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full border-[55px] border-white/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-12">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                PrimeShield Services Bromley
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                Have a pest problem? Start with a conversation.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                Contact our Bromley team with the details of the issue at your
                property and take the first step towards getting it properly
                addressed.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-3 bg-[#292929] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
              >
                <PhoneCall size={19} />
                Call {phoneNumber}
              </a>

              <a
                href={`mailto:${businessEmail}`}
                className="inline-flex items-center justify-center gap-3 border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
              >
                <Mail size={18} />
                {businessEmail}
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;