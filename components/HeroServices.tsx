import { services } from "@/data/site";
import {
  IconBolt,
  IconChart,
  IconCode,
  IconDatabase,
  IconSpark,
} from "./icons";

const serviceIcons: Record<string, (props: { className?: string }) => React.ReactNode> = {
  spark: IconSpark,
  code: IconCode,
  database: IconDatabase,
  chart: IconChart,
  bolt: IconBolt,
};

/**
 * HeroServices — compact dark panel listing the service areas.
 * Placement is owned by Hero's wrapper: below `lg` it sits in normal
 * document flow under the contact details on the ivory canvas; at `lg`
 * and above it floats over the top-right of the hero photograph.
 * An annotation, not a dashboard.
 */
export default function HeroServices() {
  return (
    <div>
      {/* Service panel */}
      <div className="w-full max-w-[232px] rounded-panel border border-white/10 bg-[rgba(20,20,20,0.8)] p-1.5 text-white shadow-[0_18px_45px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md">
        <ul>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? IconSpark;
            return (
              <li
                key={service.label}
                className="flex h-10 items-center gap-2.5 rounded-lg px-3 text-[13px] font-medium text-white/90"
              >
                <Icon className="h-[18px] w-[18px] shrink-0 text-white/70" />
                {service.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
