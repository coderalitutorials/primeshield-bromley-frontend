


// import React from 'react'
// import AboutStorySection from '../components/AboutStorySection'
// import AboutPassionSection from '../components/AboutPassionSection'
// import MissionVisionSection from '../components/MissionVisionSection'
// import AboutCommitmentSection from '../components/AboutCommitmentSection'

// const About = () => {
//   return (
//     <>
//     <AboutStorySection/>
//     <AboutPassionSection/>
//     <MissionVisionSection/>
//     <AboutCommitmentSection/>
//     </>
//   )
// }

// export default About























import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Search,
  Home,
  Building2,
  MapPin,
  Phone,
  Bug,
  Rat,
  Activity,
  ClipboardCheck,
} from "lucide-react";

export default function AboutPrimeShieldBromley() {
  const phone = "07356 271145";
  const address = "65 Powster Rd, Bromley BR1 5HE";

  const pestServices = [
    {
      icon: Rat,
      title: "Rat & Mice Control",
      text: "Professional inspection and targeted control for signs of rodents around homes, gardens, lofts, kitchens and commercial premises.",
    },
    {
      icon: Bug,
      title: "Bed Bug Treatment",
      text: "A structured approach to identifying bed bug activity and treating affected areas with careful attention to hiding places and surrounding spaces.",
    },
    {
      icon: Activity,
      title: "Wasp Nest Removal",
      text: "Safe and controlled wasp nest treatment for properties where active nests are creating a nuisance or safety concern.",
    },
    {
      icon: ShieldCheck,
      title: "General Pest Control",
      text: "Practical pest management for common household and business pest problems, with solutions based around the individual property.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand the Problem",
      text: "We begin by listening to what you have noticed and gathering the details needed to understand where the pest activity may be coming from.",
    },
    {
      number: "02",
      title: "Inspect the Property",
      text: "The affected areas are assessed carefully for visible signs, activity, access points and conditions that may be allowing pests to remain.",
    },
    {
      number: "03",
      title: "Plan the Treatment",
      text: "Once the situation is clearer, the appropriate treatment approach can be selected according to the pest, location and circumstances.",
    },
    {
      number: "04",
      title: "Treat & Reduce Activity",
      text: "Treatment is carried out in a controlled and professional manner, with the aim of bringing the pest problem back under control.",
    },
    {
      number: "05",
      title: "Prevention & Advice",
      text: "Where appropriate, we highlight practical steps that can help reduce the chance of the same pest problem returning.",
    },
  ];

  return (
    <main className="bg-white text-[#292929] mt-20 font-sans">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[620px] md:min-h-[720px] overflow-hidden">
        <img
          src="/images/about-primeshield-banner.webp"
          alt="PrimeShield Services Bromley professional pest control"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#292929]/75" />

        <div className="absolute top-0 left-0 h-2 w-full bg-[#F47B2B]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-end px-6 py-20 md:min-h-[720px] md:px-10 md:py-24 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 border border-white/30 bg-white/10 px-5 py-3 backdrop-blur-sm">
              <ShieldCheck size={18} className="text-[#F47B2B]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                About PrimeShield Services Bromley
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight text-white md:text-7xl">
              Professional pest control with a clear, practical approach.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              PrimeShield Services Bromley provides professional pest control
              for homes and businesses across Bromley. We focus on
              understanding the problem properly, treating the affected area
              and helping customers regain control of their property.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-3 bg-[#F47B2B] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
              >
                <Phone size={19} />
                Call {phone}
              </a>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-3 border border-white/50 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
              >
                Arrange an Enquiry
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / COMPANY
      ========================================================== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
              Who We Are
            </span>

            <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight md:text-5xl">
              A local pest control service built around the property, not a
              one-size-fits-all solution.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-[#292929]/75">
              Pest problems can start in places that are easy to overlook. A
              few signs around a kitchen, loft, roofline, garden or commercial
              property can sometimes indicate a much larger issue. That is why
              PrimeShield Services Bromley takes a practical approach to pest
              control, looking beyond the most obvious sign and considering the
              wider property.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#292929]/75">
              Our work is centred around careful inspection, suitable
              treatment and straightforward communication. Whether the issue
              involves rodents, bed bugs, wasps or another common pest, the
              objective is to understand the circumstances first and then
              provide a treatment approach suited to the situation.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#292929]/75">
              Serving Bromley, we work with both residential and commercial
              customers who need a professional response to unwanted pest
              activity.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="border-l-4 border-[#F47B2B] bg-[#F7F7F5] p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-[#292929]/50">
                  Based in
                </p>
                <p className="mt-2 font-bold">{address}</p>
              </div>

              <div className="border-l-4 border-[#F47B2B] bg-[#F7F7F5] p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-[#292929]/50">
                  Serving
                </p>
                <p className="mt-2 font-bold">Bromley & surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION / VISION IMAGE
      ========================================================== */}
      <section className="overflow-hidden bg-[#292929]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[430px] lg:min-h-[650px]">
            <img
              src="/images/mission-vision-pest-control.webp"
              alt="PrimeShield Services Bromley pest control approach"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#292929]/25" />

            <div className="absolute bottom-8 left-8 right-8 border border-white/25 bg-[#292929]/80 p-6 backdrop-blur-sm md:left-12 md:right-12 md:bottom-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F47B2B]">
                Our Focus
              </p>
              <p className="mt-3 text-2xl font-bold leading-tight text-white">
                Identify the cause. Treat the problem. Protect the property.
              </p>
            </div>
          </div>

          <div className="flex items-center px-7 py-16 md:px-12 md:py-20 lg:px-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
                Mission & Vision
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
                Better pest control starts with understanding what is actually
                happening.
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/70">
                Our mission is simple: to provide customers in Bromley with a
                professional pest control service that is clear, considered
                and focused on the actual problem at the property.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/70">
                Rather than treating every situation exactly the same, we
                believe the right response should reflect the pest involved,
                the location of activity and the conditions surrounding it.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F47B2B] text-white">
                    <Search size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Look beyond the obvious
                    </h3>
                    <p className="mt-1 leading-7 text-white/60">
                      Understand where signs are appearing and what may be
                      contributing to the problem.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F47B2B] text-white">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Use a considered treatment approach
                    </h3>
                    <p className="mt-1 leading-7 text-white/60">
                      Match the treatment strategy to the pest and property
                      rather than relying on a generic response.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F47B2B] text-white">
                    <Check size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Leave customers with clarity
                    </h3>
                    <p className="mt-1 leading-7 text-white/60">
                      Keep the process straightforward and explain the next
                      practical steps where appropriate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY PRIMESHIELD
      ========================================================== */}
      <section className="bg-[#F5F5F2] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
              Why PrimeShield
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              A straightforward service from the first conversation to the
              final treatment.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#292929]/70">
              When you have a pest problem, you want to know what is happening,
              what can be done and what comes next. Our service is designed
              around keeping that process clear.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center bg-[#292929] text-[#F47B2B]">
                <Search size={21} />
              </div>
              <h3 className="mt-7 text-xl font-bold">Detailed Assessment</h3>
              <p className="mt-3 leading-7 text-[#292929]/65">
                We look at the affected area and surrounding conditions before
                deciding how the situation should be approached.
              </p>
            </div>

            <div className="bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center bg-[#292929] text-[#F47B2B]">
                <ShieldCheck size={21} />
              </div>
              <h3 className="mt-7 text-xl font-bold">Targeted Treatment</h3>
              <p className="mt-3 leading-7 text-[#292929]/65">
                Treatment is selected according to the pest, location and
                circumstances found during the assessment.
              </p>
            </div>

            <div className="bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center bg-[#292929] text-[#F47B2B]">
                <ClipboardCheck size={21} />
              </div>
              <h3 className="mt-7 text-xl font-bold">Clear Process</h3>
              <p className="mt-3 leading-7 text-[#292929]/65">
                We keep communication practical so customers understand what
                is being addressed and what happens next.
              </p>
            </div>

            <div className="bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center bg-[#292929] text-[#F47B2B]">
                <MapPin size={21} />
              </div>
              <h3 className="mt-7 text-xl font-bold">Local Service</h3>
              <p className="mt-3 leading-7 text-[#292929]/65">
                PrimeShield Services Bromley is focused on providing pest
                control support to properties in Bromley and nearby areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
                What We Help With
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Pest control for the problems that disrupt everyday spaces.
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex w-fit items-center gap-3 border-b-2 border-[#F47B2B] pb-2 font-bold transition hover:gap-5"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#292929]/10 bg-[#292929]/10 md:grid-cols-2">
            {pestServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group bg-white p-8 transition hover:bg-[#292929] md:p-10"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center bg-[#F47B2B] text-white">
                      <Icon size={24} />
                    </div>

                    <ArrowRight
                      size={21}
                      className="text-[#292929]/30 transition group-hover:translate-x-1 group-hover:text-[#F47B2B]"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg leading-7 text-[#292929]/65 group-hover:text-white/65">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESIDENTIAL / COMMERCIAL
      ========================================================== */}
      <section className="bg-[#292929] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
                Who We Serve
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
                Support for homes, workplaces and commercial properties.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Different properties can experience very different pest
                pressures. A family home, rental property, office, shop or
                other commercial premises may require a different way of
                investigating and managing the issue.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/65">
                PrimeShield Services Bromley works with both residential and
                commercial customers, adapting the service to the property and
                the pest problem being addressed.
              </p>

              <Link
                to="/contact-us"
                className="mt-9 inline-flex items-center gap-3 bg-[#F47B2B] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
              >
                Talk to PrimeShield
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="border border-white/10 bg-white/5 p-8">
                <Home className="text-[#F47B2B]" size={30} />
                <h3 className="mt-7 text-2xl font-bold text-white">
                  Residential
                </h3>
                <p className="mt-4 leading-7 text-white/60">
                  Pest control support for houses, flats, rental properties
                  and other residential spaces across Bromley.
                </p>
              </div>

              <div className="border border-white/10 bg-white/5 p-8">
                <Building2 className="text-[#F47B2B]" size={30} />
                <h3 className="mt-7 text-2xl font-bold text-white">
                  Commercial
                </h3>
                <p className="mt-4 leading-7 text-white/60">
                  Professional pest management support for workplaces,
                  businesses and commercial environments.
                </p>
              </div>

              <div className="border border-white/10 bg-white/5 p-8 sm:col-span-2">
                <MapPin className="text-[#F47B2B]" size={30} />
                <h3 className="mt-7 text-2xl font-bold text-white">
                  Local to Bromley
                </h3>
                <p className="mt-4 max-w-2xl leading-7 text-white/60">
                  Based at {address}, PrimeShield Services Bromley focuses on
                  providing a local response to pest problems throughout the
                  Bromley service area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR PROCESS
      ========================================================== */}
      <section className="bg-[#F5F5F2] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
              How We Work
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              From the first signs to a clearer path forward.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#292929]/70">
              A professional pest control visit should feel organised rather
              than confusing. Our approach follows a straightforward sequence
              so the property and the pest problem can be considered properly.
            </p>
          </div>

          <div className="mt-14 border-t border-[#292929]/15">
            {process.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 border-b border-[#292929]/15 py-8 md:grid-cols-[100px_0.8fr_1.2fr] md:items-center md:gap-10"
              >
                <span className="text-4xl font-bold text-[#F47B2B]">
                  {item.number}
                </span>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="leading-7 text-[#292929]/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROFESSIONAL VALUES
      ========================================================== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
                Our Standards
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Professional service should be clear at every stage.
              </h2>
            </div>

            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              <div>
                <div className="flex h-10 w-10 items-center justify-center bg-[#F47B2B] text-white">
                  <Check size={19} />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Straightforward Communication
                </h3>
                <p className="mt-3 leading-7 text-[#292929]/65">
                  We keep explanations practical and focused on the pest
                  problem being dealt with.
                </p>
              </div>

              <div>
                <div className="flex h-10 w-10 items-center justify-center bg-[#F47B2B] text-white">
                  <Check size={19} />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Property-Conscious Work
                </h3>
                <p className="mt-3 leading-7 text-[#292929]/65">
                  Treatment is approached with consideration for the
                  surrounding property and affected areas.
                </p>
              </div>

              <div>
                <div className="flex h-10 w-10 items-center justify-center bg-[#F47B2B] text-white">
                  <Check size={19} />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Practical Prevention
                </h3>
                <p className="mt-3 leading-7 text-[#292929]/65">
                  Where relevant, we identify practical measures that may help
                  reduce future pest activity.
                </p>
              </div>

              <div>
                <div className="flex h-10 w-10 items-center justify-center bg-[#F47B2B] text-white">
                  <Check size={19} />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Local Customer Focus
                </h3>
                <p className="mt-3 leading-7 text-[#292929]/65">
                  Our service is focused on helping customers across Bromley
                  deal with unwanted pest activity professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT FAQ
      ========================================================== */}
      <section className="bg-[#F5F5F2] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
              About Our Service
            </span>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Questions customers often have
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#292929]/15 border-y border-[#292929]/15">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
                What areas does PrimeShield Services Bromley cover?
                <span className="text-2xl text-[#F47B2B] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-[#292929]/65">
                PrimeShield Services Bromley provides pest control support
                across Bromley and surrounding areas. Contact us with your
                property location and pest problem to discuss the service.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
                Do you provide pest control for homes and businesses?
                <span className="text-2xl text-[#F47B2B] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-[#292929]/65">
                Yes. Our pest control service is designed for both residential
                and commercial properties, with the approach adjusted to the
                property and circumstances.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
                Why is inspection important before treatment?
                <span className="text-2xl text-[#F47B2B] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-[#292929]/65">
                Inspection can help establish where pest activity is occurring,
                what signs are present and which areas may require attention.
                This information helps shape a more suitable treatment
                approach.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
                What should I do if I notice signs of pests?
                <span className="text-2xl text-[#F47B2B] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-[#292929]/65">
                Avoid disturbing the affected area unnecessarily and contact a
                professional pest control service for advice. Early
                assessment can help establish the extent and nature of the
                problem.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#F47B2B]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[55px] border-[#292929]/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-12">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-white/75">
                Need Professional Pest Control?
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
                Let's get your property back under control.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                If you have noticed signs of rats, mice, bed bugs, wasps or
                another pest problem, speak with PrimeShield Services Bromley
                about the situation at your property.
              </p>

              <p className="mt-5 font-semibold text-white">
                {address}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-4">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-3 bg-[#292929] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
              >
                <Phone size={19} />
                {phone}
              </a>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-3 border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
              >
                Contact PrimeShield
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}