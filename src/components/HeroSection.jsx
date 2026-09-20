


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const brandColors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   charcoal: "#3B3B3B",
//   grey: "#5F5F5F",
//   light: "#F7F7F7",
// };

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 22 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.55, ease: "easeOut" },
//     },
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("https://primesheild-backend.vercel.app/api/callback", formData),
//       {
//         loading: "Sending your callback request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request sent! Our pest control team will contact you shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Request failed. Please try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "14px",
//           padding: "12px 18px",
//         },
//         success: {
//           style: {
//             background: "#111111",
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.orange}`,
//           },
//         },
//         error: {
//           style: {
//             background: "#4c0519",
//             color: "#fecdd3",
//             border: "1px solid #f43f5e",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#111111] text-white font-sans">
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#111111",
//             color: "#FFFFFF",
//             border: "1px solid rgba(243,111,33,0.38)",
//             borderRadius: "14px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
//           },
//           loading: {
//             style: {
//               background: "#111111",
//               color: "#FFFFFF",
//               border: `1px solid ${brandColors.orange}`,
//             },
//           },
//         }}
//       />

//       <div className="absolute inset-0 z-0">
//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img
//             src="/images/herohome.webp"
//             alt="PrimeShield Services Limited pest control London"
//             className="h-full w-full object-cover object-center"
//             loading="eager"
//             decoding="async"
//             fetchPriority="high"
//           />
//         </picture>

//         <div className="absolute inset-0 bg-[#111111]/55" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#F36F21]/48 via-[#111111]/58 to-[#3B3B3B]/42" />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/42 via-transparent to-[#111111]/78" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-32 md:pt-40 pb-16 md:pb-24">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           transition={{ staggerChildren: 0.08 }}
//           className="max-w-6xl"
//         >
//           <motion.div
//             variants={fadeInUp}
//             className="mb-8 h-[2px] w-full bg-white/60"
//           />

//           <motion.h1
//             variants={fadeInUp}
//             className="text-4xl sm:text-6xl lg:text-[82px] font-black leading-[1.08] tracking-tight max-w-6xl"
//           >
//             Protect Your London Property —
//             <br />
//             From Pests Before They Spread
//           </motion.h1>
//         </motion.div>

//         <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             transition={{ staggerChildren: 0.08, delayChildren: 0.12 }}
//             className="lg:col-span-5 text-left"
//           >
//             <motion.div
//               variants={fadeInUp}
//               className="w-20 h-[3px] bg-[#F36F21] mb-8"
//             />

//             <motion.h2
//               variants={fadeInUp}
//               className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight max-w-md"
//             >
//               Request a  pest control callback to our London team.
//             </motion.h2>

//             <motion.p
//               variants={fadeInUp}
//               className="mt-6 text-white/85 text-sm sm:text-base leading-relaxed max-w-md"
//             >
//               PrimeShield Services Limited provides professional pest control
//               support for homes, landlords and businesses across London. Send
//               your details and our team will contact you to discuss the safest
//               treatment option for your property.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 to="/services"
//                 className="inline-flex items-center justify-center bg-[#F36F21] text-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] hover:bg-[#D95A13] transition-colors"
//               >
//                 View Services
//               </Link>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center border border-white/60 text-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] hover:bg-white hover:text-[#111111] transition-colors"
//               >
//                 Contact Us
//               </Link>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 28 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
//             className="lg:col-span-7 w-full"
//           >
//             <div className="bg-white text-[#111111] p-6 sm:p-10 lg:p-12 shadow-2xl">
//               <div className="mb-8">
//                 <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
//                   Book Consultation
//                 </h3>
//                 <p className="mt-2 text-sm text-[#5F5F5F] leading-relaxed">
//                   Fill in your details and we will call you back shortly.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6 text-left">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Full Name *"
//                     required
//                     className="w-full border border-[#D7D7D7] bg-white px-5 py-4 text-base text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/30 transition"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="Postcode *"
//                     required
//                     className="w-full border border-[#D7D7D7] bg-white px-5 py-4 text-base text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/30 transition"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Phone Number *"
//                     required
//                     className={`w-full border bg-white px-5 py-4 text-base text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:ring-1 transition ${
//                       phoneError
//                         ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
//                         : "border-[#D7D7D7] focus:border-[#F36F21] focus:ring-[#F36F21]/30"
//                     }`}
//                   />
//                 </div>

//                 {phoneError && (
//                   <p className="text-red-600 text-xs font-semibold -mt-2 flex items-center gap-1.5">
//                     <span>⚠️</span> {phoneError}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex items-center justify-center bg-[#F36F21] text-white px-9 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
//                 >
//                   {loading ? "Sending..." : "Send"}
//                 </button>
//               </form>

//               <div className="mt-8 pt-6 border-t border-[#E5E5E5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
//                 <div>
//                   <p className="font-black text-[#F36F21] uppercase text-xs tracking-widest">
//                     Company
//                   </p>
//                   <p className="mt-1 text-[#5F5F5F]">
//                     PrimeShield Services Limited
//                   </p>
//                 </div>

//                 {/* <div>
//                   <p className="font-black text-[#F36F21] uppercase text-xs tracking-widest">
//                     Status
//                   </p>
//                   <p className="mt-1 text-[#5F5F5F]">Active</p>
//                 </div> */}

//                 <div>
//                   <p className="font-black text-[#F36F21] uppercase text-xs tracking-widest">
//                     Location
//                   </p>
//                   <p className="mt-1 text-[#5F5F5F]">12 Old Bond Street London England W1S4PW</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const brandColors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   charcoal: "#3B3B3B",
//   grey: "#5F5F5F",
//   light: "#F7F7F7",
// };

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const businessName = "PrimeShield Kensington";
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";
//   const phoneNumber = "07404 736153";

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 22 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.55, ease: "easeOut" },
//     },
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("https://primesheild-backend.vercel.app/api/callback", {
//         ...formData,
//         area: "Kensington",
//         business: businessName,
//         address,
//         phoneNumber,
//       }),
//       {
//         loading: "Sending your Kensington callback request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request sent! PrimeShield Kensington will contact you shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Request failed. Please try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "14px",
//           padding: "12px 18px",
//         },
//         success: {
//           style: {
//             background: "#111111",
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.orange}`,
//           },
//         },
//         error: {
//           style: {
//             background: "#4c0519",
//             color: "#fecdd3",
//             border: "1px solid #f43f5e",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#111111] text-white font-sans">
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#111111",
//             color: "#FFFFFF",
//             border: "1px solid rgba(243,111,33,0.38)",
//             borderRadius: "14px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
//           },
//           loading: {
//             style: {
//               background: "#111111",
//               color: "#FFFFFF",
//               border: `1px solid ${brandColors.orange}`,
//             },
//           },
//         }}
//       />

//       <div className="absolute inset-0 z-0">
//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img
//             src="/images/herohome.webp"
//             alt="PrimeShield Kensington pest control technician serving South Kensington London"
//             className="h-full w-full object-cover object-center"
//             loading="eager"
//             decoding="async"
//             fetchPriority="high"
//           />
//         </picture>

//         <div className="absolute inset-0 bg-[#111111]/55" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#F36F21]/48 via-[#111111]/58 to-[#3B3B3B]/42" />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/42 via-transparent to-[#111111]/78" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-32 md:pt-40 pb-16 md:pb-24">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           transition={{ staggerChildren: 0.08 }}
//           className="max-w-6xl"
//         >
//           <motion.div
//             variants={fadeInUp}
//             className="mb-8 h-[2px] w-full bg-white/60"
//           />

//           <motion.h1
//             variants={fadeInUp}
//             className="text-4xl sm:text-6xl lg:text-[82px] font-black leading-[1.08] tracking-tight max-w-6xl"
//           >
//             Pest Control in Kensington —
//             <br />
//             Protect Your Property Before Pests Spread
//           </motion.h1>
//         </motion.div>

//         <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             transition={{ staggerChildren: 0.08, delayChildren: 0.12 }}
//             className="lg:col-span-5 text-left"
//           >
//             <motion.div
//               variants={fadeInUp}
//               className="w-20 h-[3px] bg-[#F36F21] mb-8"
//             />

//             <motion.h2
//               variants={fadeInUp}
//               className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight max-w-md"
//             >
//               Request a callback from our Kensington pest control team.
//             </motion.h2>

//             <motion.p
//               variants={fadeInUp}
//               className="mt-6 text-white/85 text-sm sm:text-base leading-relaxed max-w-md"
//             >
//               PrimeShield Kensington provides professional pest control support
//               for homes, landlords and businesses across Kensington and South
//               Kensington. Based at {address}, our team helps identify pest
//               activity quickly and recommend safe, targeted treatment options
//               for your property.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 to="/services"
//                 className="inline-flex items-center justify-center bg-[#F36F21] text-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] hover:bg-[#D95A13] transition-colors"
//               >
//                 View Kensington Services
//               </Link>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center border border-white/60 text-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] hover:bg-white hover:text-[#111111] transition-colors"
//               >
//                 Contact Kensington Team
//               </Link>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 28 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
//             className="lg:col-span-7 w-full"
//           >
//             <div className="bg-white text-[#111111] p-6 sm:p-10 lg:p-12 shadow-2xl">
//               <div className="mb-8">
//                 <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
//                   Book Kensington Consultation
//                 </h3>
//                 <p className="mt-2 text-sm text-[#5F5F5F] leading-relaxed">
//                   Fill in your details and PrimeShield Kensington will call you back shortly.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6 text-left">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Full Name *"
//                     required
//                     className="w-full border border-[#D7D7D7] bg-white px-5 py-4 text-base text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/30 transition"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="Kensington Postcode *"
//                     required
//                     className="w-full border border-[#D7D7D7] bg-white px-5 py-4 text-base text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/30 transition"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Phone Number *"
//                     required
//                     className={`w-full border bg-white px-5 py-4 text-base text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:ring-1 transition ${
//                       phoneError
//                         ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
//                         : "border-[#D7D7D7] focus:border-[#F36F21] focus:ring-[#F36F21]/30"
//                     }`}
//                   />
//                 </div>

//                 {phoneError && (
//                   <p className="text-red-600 text-xs font-semibold -mt-2 flex items-center gap-1.5">
//                     <span>⚠️</span> {phoneError}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex items-center justify-center bg-[#F36F21] text-white px-9 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
//                 >
//                   {loading ? "Sending..." : "Send"}
//                 </button>
//               </form>

//               <div className="mt-8 pt-6 border-t border-[#E5E5E5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
//                 <div>
//                   <p className="font-black text-[#F36F21] uppercase text-xs tracking-widest">
//                     Company
//                   </p>
//                   <p className="mt-1 text-[#5F5F5F]">
//                     PrimeShield Kensington
//                   </p>
//                 </div>

//                 <div>
//                   <p className="font-black text-[#F36F21] uppercase text-xs tracking-widest">
//                     Phone
//                   </p>
//                   <p className="mt-1 text-[#5F5F5F]">{phoneNumber}</p>
//                 </div>

//                 <div>
//                   <p className="font-black text-[#F36F21] uppercase text-xs tracking-widest">
//                     Location
//                   </p>
//                   <p className="mt-1 text-[#5F5F5F]">{address}</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }















import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const brandColors = {
  orange: "#F47721",
  charcoal: "#292929",
  dark: "#111111",
  grey: "#666666",
  light: "#F6F5F2",
};

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const businessName = "PrimeShield Services Bromley";
  const address = "65 Powster Rd, Bromley BR1 5HE";
  const phoneNumber = "07356 271145";
  const serviceArea = "Bromley";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post(
        "https://primeshield-bromley-backend.vercel.app/api/callback",
        {
          ...formData,
          area: serviceArea,
          business: businessName,
          address,
          phoneNumber,
        }
      ),
      {
        loading: "Sending your Bromley callback request...",
        success: () => {
          setFormData({
            name: "",
            postcode: "",
            phone: "",
          });

          setLoading(false);

          return `${businessName} will contact you shortly.`;
        },
        error: (error) => {
          setLoading(false);

          return (
            error.response?.data?.message ||
            "Request failed. Please try again."
          );
        },
      },
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: "14px",
          borderRadius: "2px",
          padding: "12px 18px",
        },

        success: {
          style: {
            background: brandColors.charcoal,
            color: "#FFFFFF",
            border: `1px solid ${brandColors.orange}`,
          },
        },

        error: {
          style: {
            background: brandColors.charcoal,
            color: "#FFFFFF",
            border: "1px solid #ef4444",
          },
        },
      }
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F5F2] text-[#292929] font-sans">

      {/* =====================================================
          TOASTER
      ====================================================== */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: "120px",
          zIndex: 999999,
        }}
        toastOptions={{
          duration: 4500,
          style: {
            background: "#292929",
            color: "#FFFFFF",
            border: "1px solid rgba(244,119,33,0.45)",
            borderRadius: "2px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
          },
        }}
      />

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}
      <div className="absolute top-0 right-0 w-[28%] h-full bg-[#292929] hidden lg:block" />

      <div className="absolute top-[18%] right-[23%] w-24 h-24 border-[16px] border-[#F47721]/20 rounded-full hidden xl:block" />

      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F47721]/10 rounded-tr-[100%] pointer-events-none" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-[125px] md:pt-[145px] pb-16 md:pb-24">

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="lg:col-span-6 xl:col-span-5 relative z-20"
          >

            {/* SMALL LABEL */}
            <div className="inline-flex items-center gap-2 mb-7">

              <span className="w-8 h-[2px] bg-[#F47721]" />

              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#666666]">
                Pest Control · Bromley
              </span>

            </div>

            {/* MAIN HEADING */}
            <h1 className="text-[43px] sm:text-[55px] md:text-[64px] lg:text-[66px] xl:text-[76px] font-black leading-[0.96] tracking-[-0.045em] text-[#292929]">

              Keep Your
              <span className="block text-[#F47721]">
                Property
              </span>
              Pest-Free.

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-xl text-[15px] md:text-[16px] leading-[1.75] text-[#666666]">
              Professional pest control for homes, landlords and
              businesses across Bromley. From early signs of pest
              activity to established infestations, PrimeShield
              Services Bromley provides practical inspection,
              treatment and prevention solutions.
            </p>

            {/* QUICK INFO */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">

              <div className="flex items-center gap-2.5 text-[12px] font-bold text-[#292929]">
                <span className="w-8 h-8 bg-[#F47721] text-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </span>

                Professional Service
              </div>

              <div className="flex items-center gap-2 text-[12px] font-bold text-[#292929]">
                <MapPin className="w-4 h-4 text-[#F47721]" />

                Serving Bromley
              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                to="/services"
                className="group inline-flex items-center gap-4 bg-[#F47721] hover:bg-[#292929] text-white px-6 py-4 text-[11px] font-black uppercase tracking-[0.16em] transition-all duration-300"
              >
                Explore Services

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 border border-[#292929]/25 hover:border-[#F47721] hover:text-[#F47721] text-[#292929] px-6 py-4 text-[11px] font-black uppercase tracking-[0.16em] transition-all duration-300"
              >
                <Phone className="w-4 h-4" />

                Call {phoneNumber}
              </a>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT VISUAL
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="lg:col-span-6 xl:col-span-7 relative z-10"
          >

            <div className="relative lg:ml-4 xl:ml-10">

              {/* ORANGE FRAME */}
              <div className="absolute -top-5 -right-5 md:-top-7 md:-right-7 w-[70%] h-[70%] border-[12px] md:border-[18px] border-[#F47721] z-0" />

              {/* IMAGE */}
              <div className="relative z-10 overflow-hidden bg-[#292929]">

                <img
                  src="/images/herohome.webp"
                  alt="PrimeShield Services Bromley pest control"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[570px] object-cover object-center"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/65 via-transparent to-transparent" />

                {/* IMAGE LABEL */}
                <div className="absolute left-5 bottom-5 md:left-7 md:bottom-7">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 bg-[#F47721] text-white flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] font-bold text-white/65">
                        Based in
                      </p>

                      <p className="text-sm md:text-base font-black text-white">
                        Bromley, London
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* ORANGE NUMBER BLOCK */}
              <div className="absolute -bottom-5 -left-4 md:-bottom-7 md:-left-7 z-20 bg-[#F47721] text-white px-5 md:px-7 py-4 md:py-5">

                <p className="text-[9px] uppercase tracking-[0.18em] font-bold text-white/75">
                  Local Pest Control
                </p>

                <p className="mt-1 text-xl md:text-2xl font-black">
                  Bromley
                </p>

              </div>

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            CALLBACK PANEL
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="relative z-30 mt-16 md:mt-20"
        >

          <div className="bg-white border border-[#292929]/10 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">

            <div className="grid lg:grid-cols-12">

              {/* CALLBACK INTRO */}
              <div className="lg:col-span-4 bg-[#292929] text-white p-7 md:p-9 lg:p-10">

                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#F47721]">
                  Need Help?
                </p>

                <h2 className="mt-3 text-2xl md:text-3xl font-black leading-tight">
                  Tell us where the problem is.
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  Leave your details and our Bromley team can
                  get in touch to discuss your pest control needs.
                </p>

                <div className="mt-7 flex items-center gap-3">

                  <div className="w-10 h-10 bg-[#F47721] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.16em] text-white/45">
                      Direct Line
                    </p>

                    <a
                      href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                      className="text-sm font-extrabold hover:text-[#F47721] transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>

                </div>

              </div>


              {/* FORM */}
              <div className="lg:col-span-8 p-6 md:p-8 lg:p-10">

                <form
                  onSubmit={handleSubmit}
                  className="grid md:grid-cols-3 gap-4"
                >

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="hero-name"
                      className="block mb-2 text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#666666]"
                    >
                      Your Name
                    </label>

                    <input
                      id="hero-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className="w-full h-14 border border-[#292929]/15 bg-[#F6F5F2] px-4 text-sm text-[#292929] placeholder:text-[#999999] outline-none focus:border-[#F47721] transition-colors"
                    />
                  </div>


                  {/* POSTCODE */}
                  <div>
                    <label
                      htmlFor="hero-postcode"
                      className="block mb-2 text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#666666]"
                    >
                      Postcode
                    </label>

                    <input
                      id="hero-postcode"
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="Your postcode"
                      required
                      className="w-full h-14 border border-[#292929]/15 bg-[#F6F5F2] px-4 text-sm text-[#292929] placeholder:text-[#999999] outline-none focus:border-[#F47721] transition-colors"
                    />
                  </div>


                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="hero-phone"
                      className="block mb-2 text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#666666]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="hero-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className={`w-full h-14 border bg-[#F6F5F2] px-4 text-sm text-[#292929] placeholder:text-[#999999] outline-none transition-colors ${
                        phoneError
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#292929]/15 focus:border-[#F47721]"
                      }`}
                    />
                  </div>


                  {/* ERROR */}
                  {phoneError && (
                    <div className="md:col-span-3 -mt-1 text-xs font-semibold text-red-600">
                      {phoneError}
                    </div>
                  )}


                  {/* SUBMIT ROW */}
                  <div className="md:col-span-3 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">

                    <p className="text-xs leading-relaxed text-[#777777] max-w-md">
                      By submitting your details, you are requesting
                      a callback from PrimeShield Services Bromley.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group shrink-0 inline-flex items-center justify-center gap-4 bg-[#F47721] hover:bg-[#292929] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 text-[11px] font-black uppercase tracking-[0.18em] transition-all duration-300"
                    >
                      {loading ? "Sending..." : "Request a Callback"}

                      {!loading && (
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </motion.div>


        {/* =====================================================
            LOCATION STRIP
        ====================================================== */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-[#777777]">

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#F47721]" />
            <span>
              {address}
            </span>
          </div>

          <div className="font-bold uppercase tracking-[0.12em]">
            Serving {serviceArea}
          </div>

        </div>

      </div>
    </section>
  );
}