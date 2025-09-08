export default function FloatingBubbles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`floating-bubble w-3 h-3`}
          style={{
            top: `${80 + (i * 3)}%`,
            left: `${10 + (i * 12)}%`,
            animationDelay: `${i * 0.5}s`,
            width: `${8 + (i % 3) * 4}px`,
            height: `${8 + (i % 3) * 4}px`
          }}
        />
      ))}
    </div>
  );
}