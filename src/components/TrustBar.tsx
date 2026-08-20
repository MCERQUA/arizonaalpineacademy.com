import { Award, Users, MapPin } from "lucide-react";

const ITEMS = [
  { icon: Award, label: "Experienced Instructors" },
  { icon: Users, label: "Beginner-Focused Teaching" },
  { icon: MapPin, label: "Serving All of Arizona" },
];

export default function TrustBar() {
  return (
    <div className="bg-juniper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-white text-sm font-semibold">
            <Icon size={18} className="text-gold" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
