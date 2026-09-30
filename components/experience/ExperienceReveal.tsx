"use client";

import Reveal, { type RevealProps } from "../Reveal";

/**
 * ExperienceReveal — /experience entrance preset. A thin wrapper over the
 * shared Reveal primitive: it holds no animation logic of its own. Text: fade +
 * 15px rise. Image: the same plus a 0.98 → 1 settle. 0.6s, power3.out, once.
 */
export default function ExperienceReveal(
  props: Omit<RevealProps, "y" | "duration" | "ease">
) {
  return <Reveal {...props} y={15} duration={0.6} ease="power3.out" />;
}
