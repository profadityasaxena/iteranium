"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";

interface ServiceProcessFlowProps {
  features: { title: string; description: string }[];
}

const COLORS = {
  nodeFill: "#0066cc",
  nodeStroke: "#0052a3",
  nodeText: "#ffffff",
  lineStroke: "#93c5fd",
  lineFaded: "#dbeafe",
  titleText: "#0f172a",
  descText: "#475569",
  arrowFill: "#60a5fa",
};

const NODE_RADIUS = 22;
const ANIM_DELAY = 500;

export function ServiceProcessFlow({ features }: ServiceProcessFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const hasAnimated = useRef(false);
  const [isVertical, setIsVertical] = useState(false);

  const draw = useCallback(
    (animate: boolean) => {
      const svg = d3.select(svgRef.current);
      const container = containerRef.current;
      if (!container || !svgRef.current) return;

      svg.selectAll("*").remove();

      const width = container.clientWidth;
      const vertical = width < 640;
      setIsVertical(vertical);

      if (vertical) {
        drawVertical(svg, features, width, animate);
      } else {
        drawHorizontal(svg, features, width, animate);
      }
    },
    [features]
  );

  useEffect(() => {
    // Initial draw without animation
    draw(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          draw(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const resizeObserver = new ResizeObserver(() => {
      draw(hasAnimated.current ? false : false);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [draw]);

  return (
    <div ref={containerRef} className="w-full">
      <svg
        ref={svgRef}
        className="w-full"
        style={{ overflow: "visible" }}
      />
    </div>
  );
}

function drawHorizontal(
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>,
  features: { title: string; description: string }[],
  width: number,
  animate: boolean
) {
  const n = features.length;
  const padding = 40;
  const nodeY = 50;
  const spacing = (width - padding * 2) / (n - 1);
  const textY = nodeY + NODE_RADIUS + 24;
  const maxTextWidth = spacing - 16;
  const descLineHeight = 18;
  const titleLineHeight = 20;

  // Calculate height based on wrapped text
  const estimatedLines = features.map((f) => {
    const titleLines = Math.ceil((f.title.length * 8) / maxTextWidth);
    const descLines = Math.ceil((f.description.length * 6.5) / maxTextWidth);
    return { titleLines: Math.max(titleLines, 1), descLines: Math.max(descLines, 1) };
  });
  const maxLines = estimatedLines.reduce(
    (max, l) => Math.max(max, l.titleLines * titleLineHeight + l.descLines * descLineHeight),
    0
  );
  const height = textY + maxLines + 40;

  svg.attr("viewBox", `0 0 ${width} ${height}`).attr("height", height);

  // Defs for arrowhead
  const defs = svg.append("defs");
  defs
    .append("marker")
    .attr("id", "arrowhead-h")
    .attr("viewBox", "0 0 10 8")
    .attr("refX", 10)
    .attr("refY", 4)
    .attr("markerWidth", 10)
    .attr("markerHeight", 8)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 4 L 0 8 Z")
    .attr("fill", COLORS.arrowFill);

  // Draw connecting lines
  for (let i = 0; i < n - 1; i++) {
    const x1 = padding + i * spacing + NODE_RADIUS + 4;
    const x2 = padding + (i + 1) * spacing - NODE_RADIUS - 8;

    const line = svg
      .append("line")
      .attr("x1", x1)
      .attr("y1", nodeY)
      .attr("x2", x2)
      .attr("y2", nodeY)
      .attr("stroke", COLORS.lineStroke)
      .attr("stroke-width", 2.5)
      .attr("marker-end", "url(#arrowhead-h)");

    if (animate) {
      const length = x2 - x1;
      line
        .attr("stroke-dasharray", length)
        .attr("stroke-dashoffset", length)
        .attr("opacity", 0)
        .transition()
        .delay(i * ANIM_DELAY + ANIM_DELAY * 0.5)
        .duration(100)
        .attr("opacity", 1)
        .transition()
        .duration(400)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    }
  }

  // Draw nodes and text
  features.forEach((feature, i) => {
    const cx = padding + i * spacing;
    const delay = i * ANIM_DELAY;

    // Node group
    const nodeGroup = svg.append("g");

    // Outer glow ring
    const glow = nodeGroup
      .append("circle")
      .attr("cx", cx)
      .attr("cy", nodeY)
      .attr("r", NODE_RADIUS + 6)
      .attr("fill", "none")
      .attr("stroke", COLORS.lineFaded)
      .attr("stroke-width", 2);

    // Main circle
    const circle = nodeGroup
      .append("circle")
      .attr("cx", cx)
      .attr("cy", nodeY)
      .attr("r", NODE_RADIUS)
      .attr("fill", COLORS.nodeFill)
      .attr("stroke", COLORS.nodeStroke)
      .attr("stroke-width", 2);

    // Step number
    const num = nodeGroup
      .append("text")
      .attr("x", cx)
      .attr("y", nodeY)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("fill", COLORS.nodeText)
      .attr("font-size", "14px")
      .attr("font-weight", "700")
      .attr("font-family", "Inter, system-ui, sans-serif")
      .text(`0${i + 1}`);

    // Title (wrapped)
    const titleGroup = svg.append("g");
    wrapText(
      titleGroup,
      feature.title,
      cx,
      textY,
      maxTextWidth,
      COLORS.titleText,
      "13px",
      "700",
      titleLineHeight
    );

    // Description (wrapped)
    const titleHeight = titleGroup.selectAll("text").size() * titleLineHeight;
    const descGroup = svg.append("g");
    wrapText(
      descGroup,
      feature.description,
      cx,
      textY + titleHeight + 6,
      maxTextWidth,
      COLORS.descText,
      "12px",
      "400",
      descLineHeight
    );

    if (animate) {
      // Animate node
      glow.attr("opacity", 0).attr("r", NODE_RADIUS + 2);
      circle.attr("r", 0);
      num.attr("opacity", 0);
      titleGroup.attr("opacity", 0);
      descGroup.attr("opacity", 0);

      circle
        .transition()
        .delay(delay)
        .duration(400)
        .ease(d3.easeBackOut.overshoot(1.2))
        .attr("r", NODE_RADIUS);

      glow
        .transition()
        .delay(delay + 200)
        .duration(400)
        .attr("opacity", 1)
        .attr("r", NODE_RADIUS + 6);

      num
        .transition()
        .delay(delay + 150)
        .duration(300)
        .attr("opacity", 1);

      titleGroup
        .transition()
        .delay(delay + 250)
        .duration(350)
        .attr("opacity", 1);

      descGroup
        .transition()
        .delay(delay + 350)
        .duration(350)
        .attr("opacity", 1);
    }
  });
}

function drawVertical(
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>,
  features: { title: string; description: string }[],
  width: number,
  animate: boolean
) {
  const n = features.length;
  const nodeX = 32;
  const textX = nodeX + NODE_RADIUS + 20;
  const maxTextWidth = width - textX - 16;
  const stepHeight = 140;
  const paddingTop = 20;
  const height = paddingTop + n * stepHeight;

  svg.attr("viewBox", `0 0 ${width} ${height}`).attr("height", height);

  // Defs for arrowhead
  const defs = svg.append("defs");
  defs
    .append("marker")
    .attr("id", "arrowhead-v")
    .attr("viewBox", "0 0 8 10")
    .attr("refX", 4)
    .attr("refY", 10)
    .attr("markerWidth", 8)
    .attr("markerHeight", 10)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 4 10 L 8 0 Z")
    .attr("fill", COLORS.arrowFill);

  // Draw connecting lines
  for (let i = 0; i < n - 1; i++) {
    const y1 = paddingTop + i * stepHeight + NODE_RADIUS + 4;
    const y2 = paddingTop + (i + 1) * stepHeight - NODE_RADIUS - 8;

    const line = svg
      .append("line")
      .attr("x1", nodeX)
      .attr("y1", y1)
      .attr("x2", nodeX)
      .attr("y2", y2)
      .attr("stroke", COLORS.lineStroke)
      .attr("stroke-width", 2.5)
      .attr("marker-end", "url(#arrowhead-v)");

    if (animate) {
      const length = y2 - y1;
      line
        .attr("stroke-dasharray", length)
        .attr("stroke-dashoffset", length)
        .attr("opacity", 0)
        .transition()
        .delay(i * ANIM_DELAY + ANIM_DELAY * 0.5)
        .duration(100)
        .attr("opacity", 1)
        .transition()
        .duration(400)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    }
  }

  // Draw nodes and text
  features.forEach((feature, i) => {
    const cy = paddingTop + i * stepHeight;
    const delay = i * ANIM_DELAY;

    // Outer glow ring
    const glow = svg
      .append("circle")
      .attr("cx", nodeX)
      .attr("cy", cy)
      .attr("r", NODE_RADIUS + 6)
      .attr("fill", "none")
      .attr("stroke", COLORS.lineFaded)
      .attr("stroke-width", 2);

    // Main circle
    const circle = svg
      .append("circle")
      .attr("cx", nodeX)
      .attr("cy", cy)
      .attr("r", NODE_RADIUS)
      .attr("fill", COLORS.nodeFill)
      .attr("stroke", COLORS.nodeStroke)
      .attr("stroke-width", 2);

    // Step number
    const num = svg
      .append("text")
      .attr("x", nodeX)
      .attr("y", cy)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("fill", COLORS.nodeText)
      .attr("font-size", "14px")
      .attr("font-weight", "700")
      .attr("font-family", "Inter, system-ui, sans-serif")
      .text(`0${i + 1}`);

    // Title
    const titleGroup = svg.append("g");
    wrapText(
      titleGroup,
      feature.title,
      textX,
      cy - 10,
      maxTextWidth,
      COLORS.titleText,
      "14px",
      "700",
      20,
      "start"
    );

    // Description
    const titleLines = titleGroup.selectAll("text").size();
    const descGroup = svg.append("g");
    wrapText(
      descGroup,
      feature.description,
      textX,
      cy - 10 + titleLines * 20 + 4,
      maxTextWidth,
      COLORS.descText,
      "12.5px",
      "400",
      18,
      "start"
    );

    if (animate) {
      glow.attr("opacity", 0).attr("r", NODE_RADIUS + 2);
      circle.attr("r", 0);
      num.attr("opacity", 0);
      titleGroup.attr("opacity", 0);
      descGroup.attr("opacity", 0);

      circle
        .transition()
        .delay(delay)
        .duration(400)
        .ease(d3.easeBackOut.overshoot(1.2))
        .attr("r", NODE_RADIUS);

      glow
        .transition()
        .delay(delay + 200)
        .duration(400)
        .attr("opacity", 1)
        .attr("r", NODE_RADIUS + 6);

      num
        .transition()
        .delay(delay + 150)
        .duration(300)
        .attr("opacity", 1);

      titleGroup
        .transition()
        .delay(delay + 250)
        .duration(350)
        .attr("opacity", 1);

      descGroup
        .transition()
        .delay(delay + 350)
        .duration(350)
        .attr("opacity", 1);
    }
  });
}

function wrapText(
  group: d3.Selection<SVGGElement, unknown, null, undefined>,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fill: string,
  fontSize: string,
  fontWeight: string,
  lineHeight: number,
  anchor: string = "middle"
) {
  const words = text.split(/\s+/);
  let line: string[] = [];
  let lineNum = 0;
  const charWidth = parseFloat(fontSize) * 0.55;

  words.forEach((word) => {
    const testLine = [...line, word].join(" ");
    const testWidth = testLine.length * charWidth;

    if (testWidth > maxWidth && line.length > 0) {
      group
        .append("text")
        .attr("x", x)
        .attr("y", y + lineNum * lineHeight)
        .attr("text-anchor", anchor)
        .attr("fill", fill)
        .attr("font-size", fontSize)
        .attr("font-weight", fontWeight)
        .attr("font-family", "Inter, system-ui, sans-serif")
        .text(line.join(" "));
      line = [word];
      lineNum++;
    } else {
      line.push(word);
    }
  });

  if (line.length > 0) {
    group
      .append("text")
      .attr("x", x)
      .attr("y", y + lineNum * lineHeight)
      .attr("text-anchor", anchor)
      .attr("fill", fill)
      .attr("font-size", fontSize)
      .attr("font-weight", fontWeight)
      .attr("font-family", "Inter, system-ui, sans-serif")
      .text(line.join(" "));
  }
}
