type Node = {
  x: number;
  y: number;
  r: number;
  delay: number;
  hub?: boolean;
};

type Line = {
  from: number;
  to: number;
  flow?: boolean;
};

const nodes: Node[] = [
  { x: 220, y: 258, r: 7, hub: true, delay: 0 },
  { x: 90, y: 130, r: 4, delay: 0.2 },
  { x: 330, y: 92, r: 3.5, delay: 0.6 },
  { x: 380, y: 212, r: 4.5, delay: 1 },
  { x: 340, y: 362, r: 4, delay: 1.4 },
  { x: 202, y: 432, r: 3.5, delay: 0.4 },
  { x: 68, y: 350, r: 4, delay: 1.8 },
  { x: 58, y: 228, r: 3, delay: 0.8 },
  { x: 262, y: 130, r: 3, delay: 1.2 },
  { x: 150, y: 300, r: 3, delay: 1.6 },
  { x: 300, y: 248, r: 3, delay: 0.3 },
];

const lines: Line[] = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3, flow: true },
  { from: 0, to: 4 },
  { from: 0, to: 5, flow: true },
  { from: 0, to: 6 },
  { from: 1, to: 8 },
  { from: 8, to: 2 },
  { from: 7, to: 1 },
  { from: 7, to: 6 },
  { from: 9, to: 6, flow: true },
  { from: 9, to: 5 },
  { from: 10, to: 3 },
  { from: 10, to: 4 },
];

export function HeroGraphic() {
  return (
    <div
      className="network-float relative mx-auto aspect-square w-full max-w-md"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-brand-blue/20 blur-[90px]" />

      <svg
        viewBox="0 0 440 520"
        fill="none"
        className="relative h-full w-full"
      >
        <rect
          x="24"
          y="24"
          width="392"
          height="472"
          rx="24"
          stroke="white"
          strokeOpacity="0.08"
          strokeDasharray="2 6"
        />

        {lines.map((line, index) => {
          const from = nodes[line.from];
          const to = nodes[line.to];
          return (
            <line
              key={index}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={line.flow ? "#3B82F6" : "white"}
              strokeOpacity={line.flow ? 0.55 : 0.12}
              strokeWidth={line.flow ? 1.5 : 1}
              className={line.flow ? "network-line-flow" : undefined}
            />
          );
        })}

        {nodes.map((node, index) => (
          <circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.hub ? "#2563EB" : "#3B82F6"}
            fillOpacity={node.hub ? 1 : 0.8}
            className="network-node-pulse"
            style={{ animationDelay: `${node.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
