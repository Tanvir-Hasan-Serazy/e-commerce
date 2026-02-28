import { Star } from "lucide-react";

export const RatingStars = ({ rating, total = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = total - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <div className="relative w-4 h-4">
          {/* Filled half */}
          <Star className="absolute w-4 h-4 fill-yellow-400 text-yellow-400 clip-half" />
          {/* Outline */}
          <Star className="absolute w-4 h-4 text-yellow-400" />
        </div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400" />
      ))}
    </div>
  );
};
