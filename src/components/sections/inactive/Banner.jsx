// "use client";
// import React from "react";
// import { comparisonData } from "../constant";
// import AnimatedContainer from "./ui/AnimatedContainer";
// import { CiCircleCheck } from "react-icons/ci";
// import { IoCloseCircleOutline } from "react-icons/io5";

// const Banner = () => {
//   return (
//     <section id="faq" className="w-full bg-[#1B0002] py-16 px-4 md:px-6 lg:px-8">
//       <div className="max-w-360 mx-auto">
//         <AnimatedContainer animationType="fade-up">
//           <div className="mx-auto w-full flex justify-center pb-3">
//             <h3 className="text-white font-bold bg-linear-to-r from-[#FF7782] to-[#6B3237] px-2 py-1 inline-block rounded-xs uppercase text-sm tracking-wider">
//               The Secret Formula
//             </h3>
//           </div>
//           <h2 className="text-white text-center font-bold text-3xl md:text-4xl lg:text-[44px] mb-10 max-w-3xl mx-auto">
//             The secret to how we do what we do.
//           </h2>
//         </AnimatedContainer>

//         <AnimatedContainer animationType="fade-up" delay={0.1}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
//             <div className="rounded-2xl border border-white/10 bg-[#3a2024]/80 p-8">
//               <h3 className="text-white/70 text-xl font-bold mb-6 text-center">
//                 {comparisonData.othersTitle}
//               </h3>
//               <ul className="space-y-4">
//                 {comparisonData.others.map((item) => (
//                   <li
//                     key={item}
//                     className="flex items-center gap-3 text-white/60 text-sm sm:text-base"
//                   >
//                     <IoCloseCircleOutline className="text-white/40 text-xl shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-[#FF7782]/50 bg-[#6B3237] p-8 shadow-[0_0_40px_rgba(255,119,130,0.12)]">
//               <h3 className="text-[#FF7782] text-xl font-bold mb-6 text-center">
//                 {comparisonData.usTitle}
//               </h3>
//               <ul className="space-y-4">
//                 {comparisonData.us.map((item) => (
//                   <li
//                     key={item}
//                     className="flex items-center gap-3 text-white text-sm sm:text-base"
//                   >
//                     <CiCircleCheck className="text-[#FF7782] text-xl shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </AnimatedContainer>
//       </div>
//     </section>
//   );
// };

// export default Banner;
