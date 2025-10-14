"use client"

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(91, 26, 154, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(91, 26, 154, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(91, 26, 154, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(91, 26, 154, 0.1) 0%, transparent 50%)
          `,
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
