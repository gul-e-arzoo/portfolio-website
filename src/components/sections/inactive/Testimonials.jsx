// // "use client";
// // import React, { useState, useRef, useEffect, useMemo } from "react";
// // import Image from "next/image";
// // import { FaAngleDown } from "react-icons/fa";
// // import { CiCircleCheck } from "react-icons/ci";
// // import { MdOutlineRemoveRedEye } from "react-icons/md";
// // import { servicesData } from "../constant";
// // import Button from "./ui/Button";

// // const Testimonials = () => {
// //   const [openId, setOpenId] = useState(servicesData[0]?.id || null);
// //   const [lightboxOpen, setLightboxOpen] = useState(false);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(null);

// //   const imageRefs = useRef([]);

// //   const toggle = (id) => {
// //     if (openId === id) return;
// //     setOpenId(id);
// //   };

// //   const activeFAQ = useMemo(
// //     () => servicesData.find((faq) => faq.id === openId),
// //     [openId],
// //   );

// //   const activeImages = activeFAQ?.images ?? [];
// //   const previewImages = activeFAQ?.id === 3 ? activeImages.slice(0, 1) : activeImages.slice(0, 3);
// //   const lightboxImages = activeFAQ?.detailImages ?? activeImages;

// //   useEffect(() => {
// //     if (
// //       lightboxOpen &&
// //       currentImageIndex !== null &&
// //       currentImageIndex >= 0 &&
// //       imageRefs.current[currentImageIndex]
// //     ) {
// //       const t = setTimeout(() => {
// //         imageRefs.current[currentImageIndex].scrollIntoView({
// //           behavior: "smooth",
// //           block: "center",
// //         });
// //       }, 100);

// //       return () => clearTimeout(t);
// //     }
// //   }, [lightboxOpen, currentImageIndex]);

// //   const handleCloseLightbox = () => {
// //     setLightboxOpen(false);
// //     setCurrentImageIndex(null);
// //     imageRefs.current = [];
// //   };

// //   return (
// //     <section
// //       id="testimonials"
// //       className="w-full b bg-center py-20 bg-[#1B0002]"
// //     >
// //       <div className="max-w-360 mx-auto px-4 md:px-6 lg:px-8">
// //         <div className="mx-auto w-full flex justify-center pb-3">
// //           <h3 className="text-white font-bold bg-linear-to-r from-[#FF7782] to-[#6B3237] px-2 py-1 inline-block rounded-xs">
// //             SERVICES
// //           </h3>
// //         </div>
// //         <h2 className="text-white text-center text-3xl md:text-4xl xl:text-[48px] max-w-3xl mx-auto font-bold pb-12">
// //           Stop looking like{" "}
// //           <span className="italic text-[#FF7782]">everyone else</span> on
// //           LinkedIn{" "}
// //         </h2>

// //         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
// //           {/* LEFT */}
// //           <div className="w-full lg:w-1/2 gap-5 flex flex-col">
// //             {servicesData.map((faq) => (
// //               <div
// //                 key={faq.id}
// //                 onClick={() => toggle(faq.id)}
// //                 className="border-2 relative border-[#FF7782] bg-[#6B3237] rounded-lg cursor-pointer p-4 sm:p-6 -mt-0.5 first:mt-0 transition-colors duration-300"
// //               >
// //                 <div className="flex justify-between py-2 items-center gap-4">
// //                   <h3 className="text-lg sm:text-xl font-bold text-white flex-1">
// //                     {faq.question}
// //                   </h3>

// //                   <div className="shrink-0 min-w-15 flex justify-end items-center relative h-8">
// //                     <FaAngleDown
// //                       className={`absolute text-2xl text-white/50 transition-all duration-300 ease-in-out ${
// //                         openId === faq.id
// //                           ? "opacity-0 -rotate-180 scale-50"
// //                           : "opacity-100 rotate-0 scale-100"
// //                       }`}
// //                     />
// //                   </div>
// //                 </div>

// //                 {openId === faq.id && (
// //                   <div className="pt-4 ">
// //                     <ul className="text-gray-200 text-sm md:text-base space-y-3">
// //                       {faq.points.map((item, index) => (
// //                         <li key={index} className="flex items-start gap-3">
// //                           <CiCircleCheck className="text-2xl text-[#FF7782] shrink-0 mt-0.5" />
// //                           {item}
// //                         </li>
// //                       ))}
// //                     </ul>

// //                     <div className="pt-6">
// //                       <Button
// //                         variant="primary"
// //                         className="rounded-sm! min-w-60"
// //                       >
// //                         {faq.btn}
// //                       </Button>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>

// //           {/* RIGHT */}
// //           <div className="w-full lg:w-1/2 flex flex-col gap-4">
// //             <div className="flex flex-col gap-4 md:gap-5 ">
// //               {previewImages.map((img, idx) => (
// //                 <Image
// //                   key={idx}
// //                   className={`w-full ${
// //                     activeFAQ?.id === 3 ? "h-auto" : "max-h-75"
// //                   } object-contain cursor-pointer hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 rounded-xl`}
// //                   src={img}
// //                   alt={`Service ${idx + 1}`}
// //                   width={800}
// //                   height={600}
// //                   onClick={() => {
// //                     setLightboxOpen(true);
// //                     setCurrentImageIndex(idx);
// //                   }}
// //                 />
// //               ))}
// //             </div>

// //             <button
// //               type="button"
// //               className="text-white flex items-center justify-center gap-2 mt-4 py-2 px-4 rounded-xl font-semibold text-center hover:text-[#FF7782] transition-colors duration-300"
// //               onClick={() => {
// //                 if (!lightboxImages.length) return;
// //                 setLightboxOpen(true);
// //                 setCurrentImageIndex(0);
// //               }}
// //             >
// //               <MdOutlineRemoveRedEye className="text-xl" />
// //               See more work
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* LIGHTBOX */}
// //       {lightboxOpen && (
// //         <div
// //           className="fixed inset-0 z-9999  flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
// //           onClick={handleCloseLightbox}
// //         >
// //           <div
// //             className="relative w-full max-w-5xl bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <button
// //               onClick={handleCloseLightbox}
// //               className="absolute top-6 right-6 z-50 text-5xl text-white/70 hover:text-[#FF7782] transition-colors"
// //               aria-label="Close"
// //             >
// //               &times;
// //             </button>

// //             <div className="max-h-[90vh] overflow-y-auto py-12 flex flex-col gap-8 snap-y snap-mandatory no-scrollbar">
// //               {lightboxImages.map((img, idx) => (
// //                 <div key={idx} className="snap-center flex justify-center">
// //                   <Image
// //                     ref={(el) => (imageRefs.current[idx] = el)}
// //                     src={img}
// //                     alt={`Service image ${idx + 1}`}
// //                     width={1920}
// //                     height={1080}
// //                     className={`w-full max-w-4xl object-contain shadow-2xl ${
// //                       [3, 5].includes(activeFAQ?.id) ? "h-auto" : "max-h-[75vh]"
// //                     }`}
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };

// // export default Testimonials;



// "use client";

// import React from "react";
// import { CiCircleCheck } from "react-icons/ci";
// import { servicesData } from "../constant";
// import Button from "./ui/Button";

// const Testimonials = () => {
//   return (
//     <section
//       id="testimonials"
//       className="relative w-full overflow-hidden bg-[#1B0002] py-20 md:py-24 lg:py-28"
//     >
//       {/* Background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-[45%] h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7782]/[0.035] blur-[120px]" />

//       <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
//         {/* =========================================
//             SECTION HEADER
//         ========================================== */}
//         <div className="mx-auto mb-12 max-w-[760px] text-center md:mb-14">
//           {/* Small Label */}
//           <div className="mb-5 flex justify-center">
//             <span
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-[#FF7782]/35
//                 bg-[#FF7782]/10
//                 px-4
//                 py-1.5
//                 text-[10px]
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//                 text-[#FF7782]
//               "
//             >
//               Services
//             </span>
//           </div>

//           {/* Main Heading */}
//           <h2
//             className="
//               text-[30px]
//               font-bold
//               leading-[1.1]
//               tracking-[-0.03em]
//               text-white
//               sm:text-4xl
//               md:text-[44px]
//               lg:text-[48px]
//             "
//           >
//             Four ways to make your
//             <br className="hidden sm:block" />{" "}
//             <span className="italic text-[#FF7782]">LinkedIn brand</span>{" "}
//             impossible to miss
//           </h2>

//           {/* Supporting Text */}
//           <p className="mx-auto mt-5 max-w-[620px] text-sm leading-6 text-white/55 md:text-[15px]">
//             Strategic design services built to make your personal brand look
//             credible, memorable, and impossible to scroll past.
//           </p>
//         </div>

//         {/* =========================================
//             SERVICES GRID
//         ========================================== */}
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
//           {servicesData.slice(0, 4).map((service, index) => (
//             <div
//               key={service.id}
//               className="
//                 group
//                 relative
//                 flex
//                 min-h-[300px]
//                 flex-col
//                 overflow-hidden
//                 rounded-[16px]
//                 border
//                 border-[#FF7782]/35
//                 bg-[#2A070A]
//                 p-6
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-[#FF7782]/80
//                 hover:shadow-[0_0_30px_rgba(255,119,130,0.13),inset_0_0_35px_rgba(255,119,130,0.04)]
//                 sm:p-7
//                 lg:p-8
//               "
//             >
//               {/* Subtle Card Glow */}
//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-20
//                   -top-20
//                   h-[180px]
//                   w-[180px]
//                   rounded-full
//                   bg-[#FF7782]/0
//                   blur-[70px]
//                   transition-all
//                   duration-500
//                   group-hover:bg-[#FF7782]/10
//                 "
//               />

//               {/* Top line */}
//               <div
//                 className="
//                   absolute
//                   left-0
//                   top-0
//                   h-px
//                   w-full
//                   bg-linear-to-r
//                   from-transparent
//                   via-[#FF7782]/45
//                   to-transparent
//                 "
//               />

//               {/* Number */}
//               <span
//                 className="
//                   relative
//                   z-10
//                   mb-4
//                   text-[11px]
//                   font-bold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#FF7782]
//                 "
//               >
//                 0{index + 1}
//               </span>

//               {/* Service Title */}
//               <h3
//                 className="
//                   relative
//                   z-10
//                   mb-5
//                   text-xl
//                   font-bold
//                   leading-tight
//                   text-white
//                   sm:text-[22px]
//                   lg:text-2xl
//                 "
//               >
//                 {service.question}
//               </h3>

//               {/* Service Points */}
//               <ul className="relative z-10 mb-7 space-y-3">
//                 {service.points?.slice(0, 5).map((item, itemIndex) => (
//                   <li
//                     key={itemIndex}
//                     className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-white/65 sm:text-sm"
//                   >
//                     <CiCircleCheck className="mt-[1px] shrink-0 text-[18px] text-[#FF7782]" />

//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Button pushed to bottom */}
//               <div className="relative z-10 mt-auto pt-2">
//                 <Button
//                   variant="primary"
//                   className="
//                     min-w-0!
//                     rounded-full!
//                     px-5!
//                     py-2.5!
//                     text-sm!
//                   "
//                 >
//                   {service.btn}
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    name: "Annaya (Imrana)",
    role: "Personal Brand Strategist",
    image: "/C1.svg",
    verified: "Verified 2026",
    rating: "07/10",
    review:
      "I had the pleasure of working with Gul E Arzoo, and I must say her graphic designing skills are truly exceptional. She designed a beautiful, clean carousel that perfectly captured the vision I had in mind.",
    fullReview: "#",
  },
  {
    id: 2,
    name: "Client Name 02",
    role: "Founder & Entrepreneur",
    image: "/C2.svg",
    verified: "Verified 2026",
    rating: "09/10",
    review:
      "Working with Gul E Arzoo was an amazing experience. She understood the vision immediately and transformed it into professional and engaging designs that perfectly represented my personal brand.",
    fullReview: "#",
  },
  {
    id: 3,
    name: "Client Name 03",
    role: "LinkedIn Strategist",
    image: "/C3.svg",
    verified: "Verified 2026",
    rating: "10/10",
    review:
      "Gul has an exceptional eye for personal branding. Every design felt intentional, premium and completely aligned with the direction I wanted for my LinkedIn presence.",
    fullReview: "#",
  },
  {
    id: 4,
    name: "Client Name 04",
    role: "Business Coach",
    image: "/C4.svg",
    verified: "Verified 2026",
    rating: "09/10",
    review:
      "The entire design process was smooth and professional. Gul took my ideas and turned them into a visual identity that feels much more polished, consistent and memorable.",
    fullReview: "#",
  },
  {
    id: 5,
    name: "Client Name 05",
    role: "Content Creator",
    image: "/C5.svg",
    verified: "Verified 2026",
    rating: "10/10",
    review:
      "The quality of the work exceeded my expectations. My content now has a much stronger visual identity and the designs immediately stand out when people see them in their feed.",
    fullReview: "#",
  },
  {
    id: 6,
    name: "Client Name 06",
    role: "Personal Branding Expert",
    image: "/C6.svg",
    verified: "Verified 2026",
    rating: "09/10",
    review:
      "Gul understood exactly what my personal brand needed. The final designs were clean, strategic and visually strong while still feeling completely authentic to my personality.",
    fullReview: "#",
  },
  {
    id: 7,
    name: "Client Name 07",
    role: "Founder & CEO",
    image: "/C7.svg",
    verified: "Verified 2026",
    rating: "10/10",
    review:
      "I was impressed by the attention to detail and creativity throughout the project. The final branding looks professional and gives my LinkedIn profile a much stronger presence.",
    fullReview: "#",
  },
  {
    id: 8,
    name: "Client Name 08",
    role: "Marketing Consultant",
    image: "/C8.svg",
    verified: "Verified 2026",
    rating: "09/10",
    review:
      "The designs are visually impressive while still being strategic and easy to understand. Gul managed to create something that looks premium without making the content feel complicated.",
    fullReview: "#",
  },
  {
    id: 9,
    name: "Client Name 09",
    role: "Executive Coach",
    image: "/C9.svg",
    verified: "Verified 2026",
    rating: "10/10",
    review:
      "Working together was a fantastic experience. The new visual direction has completely transformed how my content looks and has made my personal brand feel much more established.",
    fullReview: "#",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalTestimonials = testimonialsData.length;
  const activeTestimonial = testimonialsData[activeIndex];

  const previousIndex =
    (activeIndex - 1 + totalTestimonials) % totalTestimonials;

  const nextIndex = (activeIndex + 1) % totalTestimonials;

  const clientPositions = [
    {
      index: previousIndex,
      position: "top",
    },
    {
      index: activeIndex,
      position: "center",
    },
    {
      index: nextIndex,
      position: "bottom",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#1B0002] py-20 md:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[56%] h-[650px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A252D]/20 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* =====================================
            HEADER
        ====================================== */}
        <div className="mx-auto mb-10 max-w-[800px] text-center md:mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center justify-center rounded-full border border-[#FF7782]/80 px-5 py-1.5 text-[10px] font-medium uppercase tracking-wide text-white">
              Testimonial
            </span>
          </div>

          <h2 className="text-[34px] font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-[42px] md:text-[50px] lg:text-[56px]">
            Don&apos;t Take My Word For It.
            <br />
            Take <span className="text-[#FF7782]">Theirs.</span>
          </h2>

          <p className="mt-5 text-sm text-white/70 md:text-[15px]">
            Coaches, founders and execs who got seen and got booked.
          </p>
        </div>

        {/* =====================================
            TESTIMONIAL CONTAINER
        ====================================== */}
        <div className="relative mx-auto w-full max-w-[1040px] overflow-hidden rounded-[28px] border border-[#FF7782] bg-[#390D11]/90">
          {/* Inner Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,119,130,0.035),transparent_65%)]" />

          <div className="relative grid min-h-[500px] grid-cols-1 lg:grid-cols-[42%_58%]">
            {/* =====================================
                LEFT SIDE
            ====================================== */}
            <div className="relative px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-14">
              <h3 className="relative z-20 text-lg font-bold text-white sm:text-xl">
                Client Reviews
              </h3>

              {/* =====================================
                  DESKTOP CLIENT SELECTOR
              ====================================== */}
              <div className="relative mt-7 hidden h-[350px] lg:block">
                {/* Curved Dotted Line */}
                <svg
                  className="pointer-events-none absolute left-[75px] top-[25px] h-[300px] w-[140px]"
                  viewBox="0 0 140 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10 C115 70, 115 230, 15 290"
                    stroke="#FF7782"
                    strokeWidth="3"
                    strokeDasharray="9 10"
                    strokeLinecap="round"
                  />
                </svg>

                {clientPositions.map((item) => {
                  const testimonial = testimonialsData[item.index];

                  const isActive = item.position === "center";

                  let positionClasses = "";

                  if (item.position === "top") {
                    positionClasses =
                      "top-0 left-0 opacity-40 scale-[0.90]";
                  }

                  if (item.position === "center") {
                    positionClasses =
                      "top-1/2 left-[55px] -translate-y-1/2 opacity-100 scale-100";
                  }

                  if (item.position === "bottom") {
                    positionClasses =
                      "bottom-0 left-0 opacity-40 scale-[0.90]";
                  }

                  return (
                    <button
                      key={`${testimonial.id}-${item.position}`}
                      type="button"
                      onClick={() => setActiveIndex(item.index)}
                      className={`
                        absolute
                        z-10
                        flex
                        min-w-[245px]
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-left
                        transition-all
                        duration-500
                        ${positionClasses}
                        ${
                          isActive
                            ? "bg-[#FF7782] shadow-[0_12px_30px_rgba(255,119,130,0.20)]"
                            : "bg-[#A64B54] hover:opacity-70"
                        }
                      `}
                    >
                      {/* Client Image */}
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#E6C9B8]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      {/* Client Details */}
                      <div className="min-w-0">
                        <p
                          className={`truncate text-base font-bold ${
                            isActive ? "text-white" : "text-white/70"
                          }`}
                        >
                          {testimonial.name}
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="text-[13px] text-[#FFF000]">
                            ★
                          </span>

                          <span
                            className={`text-xs ${
                              isActive ? "text-white" : "text-white/55"
                            }`}
                          >
                            {testimonial.verified}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* =====================================
                  MOBILE / TABLET CLIENT SELECTOR
              ====================================== */}
              <div className="mt-7 flex gap-3 overflow-x-auto pb-3 lg:hidden">
                {testimonialsData.map((testimonial, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={testimonial.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`
                        flex
                        min-w-[220px]
                        shrink-0
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-left
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-[#FF7782]"
                            : "bg-[#7E353C] opacity-55"
                        }
                      `}
                    >
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#E6C9B8]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-white">
                          {testimonial.name}
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="text-xs text-[#FFF000]">★</span>

                          <span className="text-[11px] text-white/80">
                            {testimonial.verified}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* =====================================
                  DOT NAVIGATION
              ====================================== */}
              <div className="mt-6 flex items-center justify-center gap-2 lg:mt-0">
                {testimonialsData.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-6 bg-[#FF7782]"
                        : "w-1.5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* =====================================
                RIGHT SIDE
            ====================================== */}
            <div className="relative flex items-center px-6 pb-10 sm:px-10 lg:px-14 lg:py-14">
              {/* Vertical Divider */}
              <div className="absolute bottom-[60px] left-0 top-[60px] hidden w-px bg-[#FF7782]/55 lg:block" />

              <div
                key={activeTestimonial.id}
                className="testimonial-content w-full"
              >
                {/* Quote */}
                <div className="mb-6 text-center">
                  <span className="font-serif text-[90px] font-bold leading-[0.5] text-[#FF7782]">
                    “
                  </span>
                </div>

                {/* Review Text */}
                <p className="mx-auto max-w-[530px] text-center text-[15px] leading-[1.3] text-white sm:text-base lg:text-[17px]">
                  {activeTestimonial.review}
                </p>

                {/* Full Review Link */}
                <div className="mt-8 text-center">
                  <a
                    href={activeTestimonial.fullReview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/85 underline underline-offset-4 transition-colors duration-200 hover:text-[#FF7782]"
                  >
                    READ Full Review
                  </a>
                </div>

                {/* Horizontal Divider */}
                <div className="mx-auto mt-7 h-px w-full max-w-[500px] bg-[#FF7782]/55" />

                {/* Client Details */}
                <div className="mt-7 text-center">
                  <h4 className="text-xl font-bold text-white md:text-[23px]">
                    {activeTestimonial.name}
                  </h4>

                  <p className="mt-2 text-sm text-white/90">
                    {activeTestimonial.role}
                  </p>

                  <p className="mt-7 text-xl font-extrabold text-[#FF7782]">
                    {activeTestimonial.rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          ANIMATION
      ====================================== */}
      <style jsx>{`
        .testimonial-content {
          animation: testimonialFade 0.4s ease;
        }

        @keyframes testimonialFade {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;