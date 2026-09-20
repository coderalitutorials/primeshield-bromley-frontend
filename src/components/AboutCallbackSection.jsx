// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { PhoneCall, MapPin, ShieldCheck } from "lucide-react";

// const brandColors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   grey: "#5F5F5F",
//   light: "#F7F3EF",
// };

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

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
//         loading: "Securing connection grid...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request queued! A technician will call shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Transmission failed. Try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "16px",
//           padding: "12px 20px",
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
//     <section className="relative overflow-hidden min-h-[720px] bg-[#111111] font-sans">
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
//             border: "1px solid rgba(243,111,33,0.35)",
//             borderRadius: "16px",
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

//       <img
//         src="/images/callback-pest-control-bg.webp"
//         alt="PrimeShield Services Limited pest control callback consultation for London properties"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="lazy"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/62" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/55 to-[#F36F21]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-6 text-left">
//             <div className="w-16 h-[3px] bg-[#F36F21] mb-8" />

//             <h2 className="text-white text-4xl sm:text-5xl lg:text-[66px] font-black leading-[1.08] tracking-tight">
//               Need pest control support in London?
//             </h2>

//             <p className="mt-7 text-white/82 text-base md:text-lg leading-relaxed max-w-xl">
//               Send your details and PrimeShield Services Limited will contact you
//               to discuss the issue, your postcode and the right treatment option
//               for your property.
//             </p>

//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//               {[
//                 {
//                   icon: PhoneCall,
//                   title: "Quick Callback",
//                 },
//                 {
//                   icon: MapPin,
//                   title: "London Service",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Safe Treatment",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="bg-white/10 border border-white/15 backdrop-blur-sm p-4"
//                   >
//                     <Icon className="w-5 h-5 text-[#F36F21] mb-3" />
//                     <p className="text-white text-sm font-black">
//                       {item.title}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto">
//             <div className="bg-white p-7 sm:p-10 lg:p-12 shadow-2xl border-t-[6px] border-[#F36F21]">
//               <div className="mb-8">
//                 <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.28em]">
//                   Free Consultation
//                 </span>
//                 <h3 className="mt-3 text-[#111111] text-2xl sm:text-3xl font-black tracking-tight">
//                   Request a Callback
//                 </h3>
//                 <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
//                   Fill in your details and our team will call you back shortly.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-5 text-left">
//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Full Name <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="e.g. John Doe"
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Postcode <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="e.g. W1S 4PW"
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Phone Number <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Best phone number"
//                     required
//                     className={`w-full bg-white border px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:ring-1 transition-colors duration-200 ${
//                       phoneError
//                         ? "border-red-500 focus:ring-red-500/25"
//                         : "border-[#D7D7D7] focus:border-[#F36F21] focus:ring-[#F36F21]/25"
//                     }`}
//                   />
//                 </div>

//                 {phoneError && (
//                   <p className="text-red-600 text-xs font-semibold flex items-center gap-1.5">
//                     <span>⚠️</span> {phoneError}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#F36F21] text-white py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#D95A13]"
//                 >
//                   {loading ? "TRANSMITTING DATA..." : "SEND"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { PhoneCall, MapPin, ShieldCheck } from "lucide-react";

// const brandColors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   grey: "#5F5F5F",
//   light: "#F7F3EF",
// };

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";
//   const businessName = "PrimeShield Kensington";

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
//       }),
//       {
//         loading: "Sending your Kensington callback request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request received! PrimeShield Kensington will call shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Request failed. Try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "16px",
//           padding: "12px 20px",
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
//     <section className="relative overflow-hidden min-h-[720px] bg-[#111111] font-sans">
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
//             border: "1px solid rgba(243,111,33,0.35)",
//             borderRadius: "16px",
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

//       <img
//         src="/images/callback-pest-control-bg.webp"
//         alt="PrimeShield Kensington pest control callback consultation for Kensington and South Kensington properties"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="lazy"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/62" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/55 to-[#F36F21]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-6 text-left">
//             <div className="w-16 h-[3px] bg-[#F36F21] mb-8" />

//             <h2 className="text-white text-4xl sm:text-5xl lg:text-[66px] font-black leading-[1.08] tracking-tight">
//               Need pest control support in Kensington?
//             </h2>

//             <p className="mt-7 text-white/82 text-base md:text-lg leading-relaxed max-w-xl">
//               Send your details and PrimeShield Kensington will contact you to
//               discuss the pest issue, your postcode and the right treatment
//               option for your property. Our local service supports Kensington
//               and South Kensington from {address}.
//             </p>

//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//               {[
//                 {
//                   icon: PhoneCall,
//                   title: "Quick Callback",
//                 },
//                 {
//                   icon: MapPin,
//                   title: "Kensington Service",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Safe Treatment",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="bg-white/10 border border-white/15 backdrop-blur-sm p-4"
//                   >
//                     <Icon className="w-5 h-5 text-[#F36F21] mb-3" />
//                     <p className="text-white text-sm font-black">
//                       {item.title}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto">
//             <div className="bg-white p-7 sm:p-10 lg:p-12 shadow-2xl border-t-[6px] border-[#F36F21]">
//               <div className="mb-8">
//                 <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.28em]">
//                   Kensington Consultation
//                 </span>
//                 <h3 className="mt-3 text-[#111111] text-2xl sm:text-3xl font-black tracking-tight">
//                   Request a Callback
//                 </h3>
//                 <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
//                   Fill in your details and PrimeShield Kensington will call you
//                   back shortly.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-5 text-left">
//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Full Name <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="e.g. John Doe"
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Postcode <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="e.g. SW7 3ND"
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Phone Number <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Best phone number"
//                     required
//                     className={`w-full bg-white border px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:ring-1 transition-colors duration-200 ${
//                       phoneError
//                         ? "border-red-500 focus:ring-red-500/25"
//                         : "border-[#D7D7D7] focus:border-[#F36F21] focus:ring-[#F36F21]/25"
//                     }`}
//                   />
//                 </div>

//                 {phoneError && (
//                   <p className="text-red-600 text-xs font-semibold flex items-center gap-1.5">
//                     <span>⚠️</span> {phoneError}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#F36F21] text-white py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#D95A13]"
//                 >
//                   {loading ? "TRANSMITTING DATA..." : "SEND"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  PhoneCall,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const brandColors = {
  dark: "#292929",
  orange: "#F47B2B",
  light: "#F7F3EF",
};

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const address = "65 Powster Rd, Bromley BR1 5HE";
  const businessName = "PrimeShield Services Bromley";

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
          area: "Bromley",
          business: businessName,
          address,
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

          return "Callback request received! PrimeShield Services Bromley will contact you shortly. 📞";
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
          borderRadius: "12px",
          padding: "12px 20px",
        },

        success: {
          style: {
            background: "#292929",
            color: "#FFFFFF",
            border: "1px solid #F47B2B",
          },
        },

        error: {
          style: {
            background: "#292929",
            color: "#FFFFFF",
            border: "1px solid #F47B2B",
          },
        },
      }
    );
  };

  return (
    <section className="relative overflow-hidden font-sans">

      {/* =========================================================
          TOASTER
      ========================================================= */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: "110px",
          zIndex: 999999,
        }}
        toastOptions={{
          duration: 4500,

          style: {
            background: "#292929",
            color: "#FFFFFF",
            border: "1px solid rgba(244,123,43,0.35)",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
          },

          loading: {
            style: {
              background: "#292929",
              color: "#FFFFFF",
              border: "1px solid #F47B2B",
            },
          },
        }}
      />

      {/* =========================================================
          FULL BACKGROUND IMAGE
      ========================================================= */}
      <img
        src="/images/callback-pest-control-bg.webp"
        alt="PrimeShield Services Bromley professional pest control consultation"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />

      {/* =========================================================
          IMAGE OVERLAY
          Keeps text readable while allowing the image to remain
          clearly visible behind the section.
      ========================================================= */}
      <div className="absolute inset-0 bg-[#292929]/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#292929]/70 via-[#292929]/45 to-[#292929]/25" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#292929]/45 via-transparent to-[#292929]/65" />

      {/* =========================================================
          TOP ORANGE LINE
      ========================================================= */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#F47B2B]" />

      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================= */}
      <div className="absolute right-[-120px] top-[-120px] w-[360px] h-[360px] rounded-full border border-[#F47B2B]/25" />

      <div className="absolute right-[-60px] top-[-60px] w-[240px] h-[240px] rounded-full border border-[#F47B2B]/15" />

      {/* =========================================================
          MAIN WRAPPER
      ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">

        {/* =======================================================
            TOP INTRO
        ======================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">

          {/* LABEL */}
          <div className="lg:col-span-3">

            <div className="flex items-center gap-3">

              <span className="w-9 h-[2px] bg-[#F47B2B]" />

              <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.28em]">
                Bromley Pest Control
              </span>

            </div>

          </div>

          {/* MAIN HEADING */}
          <div className="lg:col-span-9">

            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black uppercase leading-[0.92] tracking-[-0.045em] max-w-5xl">

              A pest problem

              <span className="text-[#F47B2B]">
                {" "}starts with a call.
              </span>

            </h2>

          </div>

        </div>

        {/* =======================================================
            MAIN PANEL
        ======================================================= */}
        <div className="grid lg:grid-cols-12 border border-white/10">

          {/* =====================================================
              LEFT ORANGE PANEL
          ===================================================== */}
          <div className="lg:col-span-3 bg-[#F47B2B] p-7 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[520px]">

            <div>

              <div className="w-12 h-12 bg-[#292929] text-white flex items-center justify-center mb-8">

                <PhoneCall size={21} />

              </div>

              <span className="block text-[#292929] text-[10px] font-black uppercase tracking-[0.22em] mb-4">
                Request a Callback
              </span>

              <h3 className="text-[#292929] text-3xl sm:text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em]">

                Tell us what&apos;s happening.

              </h3>

              <p className="mt-6 text-[#292929]/75 text-sm leading-6">

                A few simple details are enough to start the conversation
                about pest activity at your property.

              </p>

            </div>

            <div className="mt-12">

              <div className="w-full h-px bg-[#292929]/20 mb-5" />

              <div className="flex items-center justify-between gap-4">

                <span className="text-[#292929] text-[9px] font-black uppercase tracking-[0.18em]">
                  Local Service
                </span>

                <ArrowUpRight
                  size={19}
                  className="text-[#292929]"
                />

              </div>

            </div>

          </div>

          {/* =====================================================
              CENTRE FORM
          ===================================================== */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-10 lg:p-12">

            <div className="mb-8">

              <div className="flex items-center justify-between gap-5">

                <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
                  Bromley Enquiry
                </span>

                <span className="text-[#292929]/25 text-[9px] font-black uppercase tracking-[0.16em]">
                  01 / 03
                </span>

              </div>

              <h3 className="mt-4 text-[#292929] text-2xl sm:text-3xl font-black uppercase leading-none tracking-tight">
                Let&apos;s get the details.
              </h3>

              <p className="mt-4 text-[#292929]/55 text-sm leading-6">
                Complete the short form and PrimeShield Services Bromley can
                contact you about the issue you have noticed.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>

                <label className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#292929] mb-2">

                  Your Name

                  <span className="text-[#F47B2B] ml-1">
                    *
                  </span>

                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="w-full bg-[#F7F3EF] border border-[#292929]/10 px-5 py-4 text-sm text-[#292929] placeholder:text-[#292929]/35 font-medium outline-none focus:border-[#F47B2B] focus:ring-1 focus:ring-[#F47B2B]/20 transition-all duration-200"
                />

              </div>

              {/* POSTCODE */}
              <div>

                <label className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#292929] mb-2">

                  Property Postcode

                  <span className="text-[#F47B2B] ml-1">
                    *
                  </span>

                </label>

                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="e.g. BR1 5HE"
                  required
                  className="w-full bg-[#F7F3EF] border border-[#292929]/10 px-5 py-4 text-sm text-[#292929] placeholder:text-[#292929]/35 font-medium outline-none focus:border-[#F47B2B] focus:ring-1 focus:ring-[#F47B2B]/20 transition-all duration-200"
                />

              </div>

              {/* PHONE */}
              <div>

                <label className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#292929] mb-2">

                  Phone Number

                  <span className="text-[#F47B2B] ml-1">
                    *
                  </span>

                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Best number to reach you"
                  required
                  className={`w-full bg-[#F7F3EF] border px-5 py-4 text-sm text-[#292929] placeholder:text-[#292929]/35 font-medium outline-none focus:ring-1 transition-all duration-200 ${
                    phoneError
                      ? "border-red-500 focus:ring-red-500/20"
                      : "border-[#292929]/10 focus:border-[#F47B2B] focus:ring-[#F47B2B]/20"
                  }`}
                />

              </div>

              {/* ERROR */}
              {phoneError && (
                <p className="text-red-600 text-xs font-semibold flex items-center gap-1.5">

                  <span>⚠️</span>

                  {phoneError}

                </p>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-[#292929] text-white px-6 py-4.5 flex items-center justify-between gap-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all duration-200 hover:bg-[#F47B2B] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >

                <span>
                  {loading
                    ? "Sending Request..."
                    : "Request A Callback"}
                </span>

                {!loading && (
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                )}

              </button>

            </form>

            {/* FORM NOTE */}
            <div className="mt-6 flex items-center gap-2">

              <ShieldCheck
                size={14}
                className="text-[#F47B2B]"
              />

              <span className="text-[#292929]/40 text-[9px] font-black uppercase tracking-[0.14em]">
                Your enquiry goes directly to our Bromley service
              </span>

            </div>

          </div>

          {/* =====================================================
              RIGHT INFORMATION PANEL
          ===================================================== */}
          <div className="lg:col-span-4 bg-[#292929] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between min-h-[520px]">

            <div>

              <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
                Where We Work
              </span>

              <h3 className="mt-5 text-white text-3xl sm:text-4xl font-black uppercase leading-[0.98] tracking-[-0.025em]">

                Bromley

                <span className="block text-white/35">
                  & nearby areas.
                </span>

              </h3>

              <p className="mt-6 text-white/50 text-sm leading-6">

                PrimeShield Services Bromley provides focused pest control
                support for residential and commercial properties across the
                local area.

              </p>

            </div>

            <div className="mt-12">

              {/* ADDRESS */}
              <div className="py-6 border-t border-white/10">

                <div className="flex gap-4">

                  <div className="w-10 h-10 bg-[#F47B2B] text-white flex items-center justify-center shrink-0">

                    <MapPin size={17} />

                  </div>

                  <div>

                    <span className="block text-white/35 text-[9px] font-black uppercase tracking-[0.18em] mb-2">
                      Local Base
                    </span>

                    <p className="text-white text-sm leading-6">
                      {address}
                    </p>

                  </div>

                </div>

              </div>

              {/* PHONE */}
              <div className="py-6 border-t border-white/10">

                <div className="flex gap-4">

                  <div className="w-10 h-10 bg-[#F47B2B] text-white flex items-center justify-center shrink-0">

                    <PhoneCall size={17} />

                  </div>

                  <div>

                    <span className="block text-white/35 text-[9px] font-black uppercase tracking-[0.18em] mb-2">
                      Speak To Us
                    </span>

                    <a
                      href="tel:07356271145"
                      className="text-white text-lg font-black hover:text-[#F47B2B] transition-colors"
                    >
                      07356 271145
                    </a>

                  </div>

                </div>

              </div>

              {/* CALLBACK */}
              <div className="py-6 border-t border-white/10">

                <div className="flex items-center gap-3">

                  <Clock3
                    size={16}
                    className="text-[#F47B2B]"
                  />

                  <span className="text-white/55 text-[9px] font-black uppercase tracking-[0.17em]">
                    Callback Enquiry
                  </span>

                </div>

              </div>

            </div>

            {/* BOTTOM BRAND */}
            <div className="mt-8 pt-6 border-t border-white/10">

              <div className="flex items-center justify-between gap-4">

                <span className="text-white text-[9px] font-black uppercase tracking-[0.18em]">
                  PrimeShield Services Bromley
                </span>

                <span className="w-2 h-2 bg-[#F47B2B] rounded-full" />

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            BOTTOM MESSAGE
        ======================================================= */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <p className="text-white/35 text-[10px] uppercase font-black tracking-[0.18em]">
            Pest control support for Bromley properties
          </p>

          <div className="flex items-center gap-3">

            <span className="w-8 h-px bg-[#F47B2B]" />

            <span className="text-white/45 text-[9px] uppercase font-black tracking-[0.16em]">
              Local • Professional • Practical
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}