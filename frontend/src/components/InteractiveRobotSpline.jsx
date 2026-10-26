// import { Suspense, lazy } from "react";

// const Spline = lazy(() => import("@splinetool/react-spline"));

// export default function InteractiveRobotSpline({ scene, className = "" }) {
//   return (
//     <Suspense
//       fallback={
//         <div
//           className={`w-full h-full flex items-center justify-center bg-slate-950 text-slate-100 ${className}`}
//         >
//           <div className="text-sm text-slate-400 animate-pulse">
//             Loading 3D...
//           </div>
//         </div>
//       }
//     >
//       {/* Wrapper to crop the watermark corner */}
//       <div className={`relative w-full h-full overflow-hidden ${className}`}>
//         <div className="absolute inset-0 scale-[1.08] translate-x-2 translate-y-2">
//           <Spline scene={scene} className="w-full h-full" />
//         </div>
//       </div>
//     </Suspense>
//   );
// }
export default function InteractiveRobotSpline() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-950 rounded-xl">
      <div className="text-center text-white p-8">
        <div className="text-5xl mb-4">🤖</div>
        <h2 className="text-xl font-semibold">
          Interactive Robot
        </h2>
        <p className="text-slate-400 mt-2">
          3D animation temporarily unavailable
        </p>
      </div>
    </div>
  );
}