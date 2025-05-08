import { Heart, Calendar } from "lucide-react";

export default function WeddingPlannerComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100 flex flex-col items-center justify-center text-gray-800 p-4">
      <div className="max-w-2xl text-center">
        {/* Decorative element */}
        <div className="flex justify-center mb-6">
          <Heart className="text-rose-400" size={48} fill="#FBCFE8" />
        </div>
        
        {/* Main content */}
        <h1 className="text-6xl font-serif font-light mb-6 text-rose-800">Forever After</h1>
        <p className="text-2xl mb-4 font-light text-gray-700">
          Your perfect day deserves perfect planning.
        </p>
        <p className="mb-12 text-gray-600">
          We&apos;re crafting a new wedding planning experience that will make your journey to &quot;I do&quot; as beautiful as the celebration itself.
        </p>
        
        {/* Countdown or launch date */}
        <div className="flex items-center justify-center gap-2 mb-12 text-rose-700">
          <Calendar size={20} />
          <span>Launching Summer 2025</span>
        </div>
      </div>
       
      {/* Footer */}
      <div className="text-sm text-rose-600 absolute bottom-0 left-0 right-0 text-center pb-4">
        © {new Date().getFullYear()} Forever After Wedding Planning. All rights reserved. Episode Celebrations.
      </div>
    </div>
  );
}