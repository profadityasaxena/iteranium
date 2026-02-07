"use client";

export function HeroBackground() {
  // Main assembly line — gentle S-curve spanning full width
  const primaryLine =
    "M-100,300 C100,300 200,210 400,210 C600,210 650,390 850,390 C1050,390 1100,250 1300,250 C1450,250 1500,290 1600,290";

  // Upper data / logistics flow
  const upperLine =
    "M-50,150 C200,150 300,190 500,170 C700,150 800,190 1000,160 C1200,130 1350,170 1540,155";

  // Lower supply chain flow
  const lowerLine =
    "M-50,470 C150,470 250,430 450,450 C650,470 750,420 950,440 C1150,460 1300,425 1540,445";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Blueprint grid ── */}
        <defs>
          <pattern
            id="hero-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path d="M60,0 L0,0 L0,60" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" opacity="0.03" />

        {/* ── FLOW PATHS ── */}

        {/* Primary assembly line (solid) */}
        <path
          d={primaryLine}
          stroke="white"
          strokeWidth="1.5"
          opacity="0.08"
          strokeLinecap="round"
        />
        {/* Parallel rail lines */}
        <path
          d="M-100,293 C100,293 200,203 400,203 C600,203 650,383 850,383 C1050,383 1100,243 1300,243 C1450,243 1500,283 1600,283"
          stroke="white"
          strokeWidth="0.4"
          opacity="0.04"
        />
        <path
          d="M-100,307 C100,307 200,217 400,217 C600,217 650,397 850,397 C1050,397 1100,257 1300,257 C1450,257 1500,297 1600,297"
          stroke="white"
          strokeWidth="0.4"
          opacity="0.04"
        />

        {/* Upper logistics line (dashed) */}
        <path
          d={upperLine}
          stroke="white"
          strokeWidth="0.7"
          opacity="0.04"
          strokeDasharray="8 8"
        />

        {/* Lower supply line (dashed) */}
        <path
          d={lowerLine}
          stroke="white"
          strokeWidth="0.7"
          opacity="0.04"
          strokeDasharray="8 8"
        />

        {/* ── VERTICAL CONNECTIONS between layers ── */}
        {[
          [400, 170, 210],
          [850, 390, 450],
          [1000, 160, 250],
          [1300, 250, 425],
        ].map(([x, y1, y2], i) => (
          <line
            key={`vc-${i}`}
            x1={x}
            y1={y1}
            x2={x}
            y2={y2}
            stroke="white"
            strokeWidth="0.5"
            opacity="0.04"
            strokeDasharray="3 5"
          />
        ))}

        {/* ── STATION NODES ── */}

        {/* Station 1 — Input (rectangle) */}
        <rect
          x="370"
          y="190"
          width="60"
          height="40"
          rx="5"
          stroke="white"
          strokeWidth="0.8"
          opacity="0.07"
        />
        <circle cx="400" cy="210" r="5" stroke="white" strokeWidth="0.5" fill="none">
          <animate attributeName="r" values="5;9;5" dur="4s" repeatCount="indefinite" />
          <animate
            attributeName="opacity"
            values="0.12;0.03;0.12"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Station 2 — Processing (hexagon) */}
        <polygon
          points="830,375 850,362 870,375 870,400 850,413 830,400"
          stroke="white"
          strokeWidth="0.8"
          opacity="0.07"
        />
        <circle cx="850" cy="390" r="5" stroke="white" strokeWidth="0.5" fill="none">
          <animate
            attributeName="r"
            values="5;9;5"
            dur="4s"
            begin="1.3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.12;0.03;0.12"
            dur="4s"
            begin="1.3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Station 3 — QC (diamond) */}
        <polygon
          points="1100,230 1125,250 1100,270 1075,250"
          stroke="white"
          strokeWidth="0.8"
          opacity="0.07"
        />
        <circle cx="1100" cy="250" r="5" stroke="white" strokeWidth="0.5" fill="none">
          <animate
            attributeName="r"
            values="5;9;5"
            dur="4s"
            begin="2.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.12;0.03;0.12"
            dur="4s"
            begin="2.6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Station 4 — Output (rectangle) */}
        <rect
          x="1270"
          y="230"
          width="60"
          height="40"
          rx="5"
          stroke="white"
          strokeWidth="0.8"
          opacity="0.07"
        />
        <circle cx="1300" cy="250" r="5" stroke="white" strokeWidth="0.5" fill="none">
          <animate
            attributeName="r"
            values="5;9;5"
            dur="4s"
            begin="0.7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.12;0.03;0.12"
            dur="4s"
            begin="0.7s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Intake arrow */}
        <g opacity="0.08">
          <line x1="100" y1="300" x2="155" y2="300" stroke="white" strokeWidth="0.8" />
          <polygon points="150,296 160,300 150,304" fill="white" />
        </g>

        {/* Output arrow */}
        <g opacity="0.08">
          <line x1="1400" y1="280" x2="1430" y2="280" stroke="white" strokeWidth="0.8" />
          <polygon points="1425,276 1435,280 1425,284" fill="white" />
        </g>

        {/* ── Crosshair markers at junction points ── */}
        {[
          [200, 290],
          [650, 340],
          [1200, 260],
        ].map(([cx, cy], i) => (
          <g key={`xh-${i}`} opacity="0.05">
            <line
              x1={cx - 6}
              y1={cy}
              x2={cx + 6}
              y2={cy}
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1={cx}
              y1={cy - 6}
              x2={cx}
              y2={cy + 6}
              stroke="white"
              strokeWidth="0.5"
            />
          </g>
        ))}

        {/* ── MOVING ITEMS on primary conveyor ── */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={`item-${i}`} r="3" fill="white">
            <animate
              attributeName="opacity"
              values="0;0.15;0.15;0"
              keyTimes="0;0.05;0.95;1"
              dur={`${13 + i * 1.5}s`}
              begin={`${i * 2.2}s`}
              repeatCount="indefinite"
            />
            <animateMotion
              dur={`${13 + i * 1.5}s`}
              begin={`${i * 2.2}s`}
              repeatCount="indefinite"
              path={primaryLine}
            />
          </circle>
        ))}

        {/* Data packets on upper flow */}
        {[0, 1, 2].map((i) => (
          <rect
            key={`du-${i}`}
            width="10"
            height="2"
            rx="1"
            fill="white"
          >
            <animate
              attributeName="opacity"
              values="0;0.08;0.08;0"
              keyTimes="0;0.05;0.95;1"
              dur={`${16 + i * 3}s`}
              begin={`${i * 4}s`}
              repeatCount="indefinite"
            />
            <animateMotion
              dur={`${16 + i * 3}s`}
              begin={`${i * 4}s`}
              repeatCount="indefinite"
              path={upperLine}
            />
          </rect>
        ))}

        {/* Supply items on lower flow (reverse) */}
        {[0, 1].map((i) => (
          <rect
            key={`dl-${i}`}
            width="10"
            height="2"
            rx="1"
            fill="white"
          >
            <animate
              attributeName="opacity"
              values="0;0.08;0.08;0"
              keyTimes="0;0.05;0.95;1"
              dur={`${20 + i * 4}s`}
              begin={`${i * 6}s`}
              repeatCount="indefinite"
            />
            <animateMotion
              dur={`${20 + i * 4}s`}
              begin={`${i * 6}s`}
              repeatCount="indefinite"
              path={lowerLine}
              keyPoints="1;0"
              keyTimes="0;1"
            />
          </rect>
        ))}
      </svg>
    </div>
  );
}
