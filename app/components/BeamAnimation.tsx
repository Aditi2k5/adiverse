export default function BeamAnimation() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 opacity-20"
            style={{
              transform: `translateY(${i * 25}%)`,
            }}
          >
            <div
              className="h-40 bg-white animate-beam-fast"
              style={{
                animationDelay: `${i * 0.5}s`,
              }}
            />
          </div>
        ))}
      </div>
    )
  }
  
  