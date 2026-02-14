interface StarProps {
  active: boolean
  color: string
  handleClick: () => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

export const Star = ({
  active,
  color,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}: StarProps) => {
  return (
    <span
      className="star"
      style={{
        color: `${active ? color : "#000"}`,
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {"\u2605"}
    </span>
  )
}
