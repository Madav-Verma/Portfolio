import Image from "next/image";
import { certificationsHero } from "@/data/certifications";

/**
 * CertificateCollage — the page's signature moment. Three REAL certificate
 * images in a controlled composition: one sharp front certificate, one
 * slightly tilted behind it, one small and partial. Restrained rotation
 * (-2deg / +1deg max), subtle shadows, 8–12px rounding.
 */
export default function CertificateCollage() {
  return (
    <div
      aria-label="A selection of Daksh Verma's certificates"
      className="relative mx-auto w-full max-w-[560px] pb-6 pl-4 pr-2 pt-10 lg:pt-6"
    >
      {/* back certificate — tilted, dimmed */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-2 w-[46%] -rotate-2 overflow-hidden rounded-[10px] border border-line bg-white opacity-80 shadow-[0_2px_10px_rgba(17,17,17,0.08)] blur-[0.6px] sm:right-10"
      >
        <Image
          src="/certifications/03.png"
          alt=""
          width={900}
          height={695}
          className="h-auto w-full"
        />
      </div>
      {/* partial certificate — lower right, reduced opacity */}
      <div
        aria-hidden="true"
        className="absolute -bottom-1 right-0 w-[38%] rotate-1 overflow-hidden rounded-[10px] border border-line bg-white opacity-70 shadow-[0_2px_10px_rgba(17,17,17,0.08)]"
      >
        <Image
          src="/certifications/08.png"
          alt=""
          width={900}
          height={635}
          className="h-auto w-full"
        />
      </div>
      {/* front certificate — sharp */}
      <div className="relative z-10 w-[78%] overflow-hidden rounded-[12px] border border-line bg-white shadow-[0_10px_30px_rgba(17,17,17,0.12)]">
        <Image
          src="/certifications/01.png"
          alt="Business Analysis Foundations: Strategy Analysis — LinkedIn Learning"
          width={900}
          height={695}
          priority
          className="h-auto w-full"
        />
      </div>
      {/* handwritten micro-annotation */}
      <p className="absolute -left-1 top-0 z-20 rotate-[-4deg] font-hand text-[22px] font-semibold leading-none text-ink-soft sm:text-[24px]">
        {certificationsHero.annotation}
        <svg
          aria-hidden="true"
          viewBox="0 0 64 28"
          fill="none"
          className="ml-8 mt-1 h-[26px] w-[60px] text-ink-soft"
        >
          <path
            d="M4 4 C 24 2, 44 8, 58 22 M52 16 l6 6 l2 -8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </p>
    </div>
  );
}
