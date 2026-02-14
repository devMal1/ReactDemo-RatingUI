import { useState } from "react"

import { Star } from "./star-component.tsx"

interface RatingProps {
  heading?: string
  starColor?: string
  ratingMessages?: string[]
}

export const Rating = ({
  heading = "Rater your Experience",
  starColor = "gold",
  ratingMessages = ["Poor", "I guess", "Average.", "Okay Nice!", "FANTASTIC!!"],
}: RatingProps) => {
  const [rating, setRating] = useState<number>(0)
  const [hovered, setHovered] = useState<number>(0)

  const stars: number[] = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star: number) => (
          <Star
            key={star}
            active={star <= (hovered || rating)}
            color={starColor}
            handleClick={() => setRating(star)}
            handleMouseEnter={() => setHovered(star)}
            handleMouseLeave={() => setHovered(0)}
          />
        ))}
      </div>
      <div>
        {rating > 0 && (
          <p className="feedback">{ratingMessages.at(rating - 1)}</p>
        )}
      </div>
    </div>
  )
}
