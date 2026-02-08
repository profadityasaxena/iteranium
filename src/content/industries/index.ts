import type { Industry } from "@/types/content";

export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive & Auto Components",
    description:
      "We help automotive manufacturers improve production efficiency, quality consistency, and asset utilization across high-volume, high-variant environments.",
    processSteps: [
      {
        title: "Map Production Lines & Data Sources",
        detail:
          "Assess current OT/IT landscape — PLCs, SCADA systems, MES, and ERP interfaces — to establish a clear picture of data availability, gaps, and integration points across stamping, welding, paint, and assembly lines.",
      },
      {
        title: "Integrate Real-Time Shop-Floor Data",
        detail:
          "Connect machine-level signals, quality inspection results, and production counts into a unified data layer, enabling live visibility into OEE, cycle times, and first-pass yield across every work centre.",
      },
      {
        title: "Deploy Predictive Quality & Defect Analytics",
        detail:
          "Apply machine learning models to in-process data to detect quality drift and predict defects before they propagate downstream, reducing scrap, rework, and warranty exposure.",
      },
      {
        title: "Optimize Production Scheduling with AI",
        detail:
          "Use reinforcement-learning-driven scheduling to balance throughput, changeover times, and order priorities across parallel lines, adapting dynamically to demand shifts and unplanned disruptions.",
      },
      {
        title: "Enable Predictive Maintenance & Asset Reliability",
        detail:
          "Monitor equipment health indicators in real time, forecast failure windows, and schedule maintenance proactively — reducing unplanned downtime and extending asset life across critical machinery.",
      },
      {
        title: "Iterate & Scale Across Plants",
        detail:
          "Validate outcomes at a pilot line, refine models with production feedback, and roll out proven solutions to additional lines and facilities with a repeatable deployment framework.",
      },
    ],
  },
  {
    slug: "ev-battery",
    name: "Electric Vehicles & Battery Manufacturing",
    description:
      "We support EV and battery plants with traceability, process intelligence, and yield optimization for safety-critical manufacturing processes.",
    processSteps: [
      {
        title: "Establish Cell-Level Traceability & Genealogy",
        detail:
          "Implement end-to-end traceability from raw material lots through electrode coating, cell assembly, and module/pack integration — linking every cell to its process parameters and material inputs.",
      },
      {
        title: "Integrate Formation & Testing Data",
        detail:
          "Capture and correlate formation cycling data, impedance measurements, and grading results into a centralized platform for real-time quality monitoring and batch disposition.",
      },
      {
        title: "Deploy Yield & Process Optimization Models",
        detail:
          "Apply analytics to identify root causes of yield loss across coating thickness, electrolyte fill, and formation steps — enabling targeted process adjustments that improve good-cell output.",
      },
      {
        title: "Monitor Energy Consumption & Environmental Controls",
        detail:
          "Track energy usage across dry rooms, formation equipment, and thermal systems to optimize consumption while maintaining the strict environmental conditions battery production demands.",
      },
      {
        title: "Enable Lifecycle Data for Safety & Compliance",
        detail:
          "Structure manufacturing data to support downstream warranty analysis, field performance correlation, and regulatory compliance — creating a digital thread from production to end-of-life.",
      },
      {
        title: "Scale with Modular MES Architecture",
        detail:
          "Design manufacturing execution systems that scale from pilot lines to gigafactory volumes, with standardized recipes, equipment integration patterns, and reporting frameworks.",
      },
    ],
  },
  {
    slug: "electronics-semiconductor",
    name: "Electronics & Semiconductor Manufacturing",
    description:
      "We deliver high-precision manufacturing intelligence for complex, fast-cycle production lines to reduce defects and improve throughput.",
    processSteps: [
      {
        title: "Audit Process & Equipment Data Landscape",
        detail:
          "Map data flows across wafer fabrication, assembly, and test operations — identifying sensor feeds, equipment interfaces (SECS/GEM, EDA), and gaps in data collection or integration.",
      },
      {
        title: "Build Real-Time Process Monitoring",
        detail:
          "Aggregate high-frequency equipment and sensor data into dashboards that provide live visibility into process drift, tool health, and lot progress across hundreds of concurrent operations.",
      },
      {
        title: "Deploy Anomaly Detection & Fault Classification",
        detail:
          "Train models on historical process and test data to detect subtle anomalies in real time, classify fault signatures, and trigger automated holds before defective material advances.",
      },
      {
        title: "Optimize Recipe Parameters & Throughput",
        detail:
          "Use AI-driven experimentation to fine-tune process recipes for yield improvement, cycle time reduction, and tighter specification compliance across critical process steps.",
      },
      {
        title: "Implement Predictive Equipment Maintenance",
        detail:
          "Correlate equipment telemetry with maintenance history to predict tool degradation and schedule interventions during planned downtime windows, protecting production schedules.",
      },
      {
        title: "Standardize & Replicate Across Fabs",
        detail:
          "Package validated analytics, integration patterns, and monitoring frameworks into reusable templates that accelerate deployment across additional fabrication and assembly sites.",
      },
    ],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    description:
      "We enable operational visibility, quality compliance, and energy optimization across packaging, processing, and discrete production lines.",
    processSteps: [
      {
        title: "Assess Production & Compliance Workflows",
        detail:
          "Review current batch records, quality checks, and traceability processes to identify manual bottlenecks, compliance gaps, and opportunities for digital capture and automation.",
      },
      {
        title: "Digitize Quality & Traceability Records",
        detail:
          "Replace paper-based logs with electronic batch records and lot tracking systems that connect raw material receipts to finished goods, supporting recall readiness and audit compliance.",
      },
      {
        title: "Integrate Line Performance Monitoring",
        detail:
          "Connect packaging and processing equipment to a centralized OEE monitoring platform, providing real-time visibility into line speeds, downtime events, and changeover efficiency.",
      },
      {
        title: "Apply Waste Reduction & Yield Analytics",
        detail:
          "Analyze production data to identify patterns driving waste, giveaway, and off-spec output — enabling targeted adjustments that improve material utilization and product consistency.",
      },
      {
        title: "Optimize Energy & Utility Consumption",
        detail:
          "Monitor energy usage across refrigeration, heating, compressed air, and packaging systems to identify reduction opportunities and align consumption with production schedules.",
      },
      {
        title: "Continuously Improve with Data-Driven Insights",
        detail:
          "Establish feedback loops where production, quality, and maintenance data drive ongoing process refinement, standard operating procedure updates, and operator training priorities.",
      },
    ],
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods & Packaging",
    description:
      "We help manufacturers manage high product mix and demand variability through intelligent scheduling and adaptive decision-support systems.",
    processSteps: [
      {
        title: "Map Product Mix & Scheduling Complexity",
        detail:
          "Analyze current scheduling practices, changeover patterns, and demand variability to understand the constraints and trade-offs driving production planning decisions.",
      },
      {
        title: "Deploy Intelligent Production Scheduling",
        detail:
          "Implement AI-driven scheduling that balances order priorities, changeover costs, and capacity constraints in real time — improving on-time delivery while reducing unproductive time.",
      },
      {
        title: "Integrate Performance & Downtime Analytics",
        detail:
          "Connect line equipment to a performance monitoring platform that captures downtime reasons, speed losses, and quality events — making root causes visible and actionable.",
      },
      {
        title: "Enable Demand-Responsive Production",
        detail:
          "Link production planning with demand signals to enable agile response to order changes, promotional spikes, and seasonal shifts without excessive inventory buildup.",
      },
      {
        title: "Optimize Changeover & Line Efficiency",
        detail:
          "Use data analysis to identify changeover time reduction opportunities, optimize production sequences, and establish best practices that improve line utilization across shifts.",
      },
      {
        title: "Scale Analytics Across Product Lines",
        detail:
          "Extend proven scheduling and performance solutions to additional lines and categories, building a consistent operational intelligence layer across the manufacturing network.",
      },
    ],
  },
  {
    slug: "industrial-equipment",
    name: "Industrial Equipment & Heavy Manufacturing",
    description:
      "We support complex build-to-order and engineered products with production tracking, asset reliability intelligence, and predictive maintenance.",
    processSteps: [
      {
        title: "Understand Build-to-Order Complexity",
        detail:
          "Assess production workflows for engineered and configured products — mapping work order routing, assembly sequences, and the variability that makes planning and tracking difficult.",
      },
      {
        title: "Implement Work Order & Progress Tracking",
        detail:
          "Deploy digital production tracking that gives real-time visibility into work order status, operation completion, and bottleneck locations across complex, multi-stage assembly processes.",
      },
      {
        title: "Monitor Critical Asset Health",
        detail:
          "Instrument high-value equipment — CNC machines, large presses, welding cells — with condition monitoring that tracks vibration, temperature, and performance degradation over time.",
      },
      {
        title: "Deploy Predictive Maintenance Models",
        detail:
          "Build machine learning models that forecast equipment failures and remaining useful life, enabling maintenance teams to plan interventions that avoid costly unplanned shutdowns.",
      },
      {
        title: "Improve Delivery Reliability with Planning Analytics",
        detail:
          "Analyze historical production data to improve lead time estimation, identify recurring delays, and optimize resource allocation for better on-time delivery performance.",
      },
      {
        title: "Build a Continuous Improvement Framework",
        detail:
          "Establish data-driven feedback loops that connect production outcomes, maintenance events, and quality findings to drive ongoing improvements in process reliability and efficiency.",
      },
    ],
  },
  {
    slug: "metals-mining",
    name: "Metals, Mining & Process-Intensive Discrete Operations",
    description:
      "We provide end-to-end operational intelligence spanning production execution, energy monitoring, and asset health in capital-intensive environments.",
    processSteps: [
      {
        title: "Assess Operational Data Maturity",
        detail:
          "Evaluate the current state of instrumentation, data historians, and reporting across extraction, processing, and finishing operations to identify the highest-impact integration opportunities.",
      },
      {
        title: "Unify Production & Process Data",
        detail:
          "Connect disparate data sources — DCS systems, SCADA networks, lab systems, and manual logs — into a consolidated operational data platform that enables cross-functional visibility.",
      },
      {
        title: "Deploy Energy & Resource Optimization",
        detail:
          "Monitor and model energy consumption across furnaces, mills, crushers, and auxiliary systems to identify waste, optimize load profiles, and reduce per-unit energy costs.",
      },
      {
        title: "Implement Asset Health Monitoring",
        detail:
          "Instrument critical rotating and high-wear equipment with condition-based monitoring to detect degradation early, reduce catastrophic failures, and extend equipment service intervals.",
      },
      {
        title: "Enable Regulatory & Environmental Reporting",
        detail:
          "Automate the collection and reporting of emissions, waste, and compliance data to streamline regulatory submissions and support environmental performance targets.",
      },
      {
        title: "Drive Operational Excellence with Analytics",
        detail:
          "Use operational data to identify throughput bottlenecks, quality improvement opportunities, and process variability — building a data-driven culture of continuous improvement.",
      },
    ],
  },
  {
    slug: "life-sciences",
    name: "Life Sciences & Regulated Manufacturing",
    description:
      "We enable compliance-ready digital manufacturing with traceability, quality intelligence, and explainable analytics for validated processes.",
    processSteps: [
      {
        title: "Map Regulatory & Process Requirements",
        detail:
          "Document current manufacturing processes, quality systems, and regulatory obligations (GxP, FDA 21 CFR Part 11, EU Annex 11) to define a compliant digitalization roadmap.",
      },
      {
        title: "Implement Electronic Batch Records & Audit Trails",
        detail:
          "Deploy validated electronic batch record systems with full audit trails, electronic signatures, and version control — replacing paper-based documentation while maintaining compliance.",
      },
      {
        title: "Establish End-to-End Traceability",
        detail:
          "Build material genealogy and process traceability from incoming raw materials through in-process steps to finished product release, supporting investigation and recall workflows.",
      },
      {
        title: "Deploy Explainable Quality Analytics",
        detail:
          "Apply interpretable analytics and statistical process control to quality data — ensuring that AI-assisted decisions are transparent, auditable, and acceptable to regulatory reviewers.",
      },
      {
        title: "Automate Deviation & CAPA Workflows",
        detail:
          "Digitize deviation detection, investigation, and corrective action workflows to accelerate resolution, improve documentation quality, and demonstrate systematic quality management.",
      },
      {
        title: "Validate & Continuously Improve",
        detail:
          "Execute qualification and validation protocols for all digital systems, then use production data to drive continuous process verification and ongoing compliance improvement.",
      },
    ],
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy & Clean Manufacturing",
    description:
      "We help manufacturers align sustainability goals with operational performance through energy optimization and intelligent production monitoring.",
    processSteps: [
      {
        title: "Baseline Energy & Environmental Performance",
        detail:
          "Measure current energy consumption, emissions, and resource usage across production operations to establish benchmarks and identify the highest-impact improvement opportunities.",
      },
      {
        title: "Integrate Energy Monitoring with Production Data",
        detail:
          "Connect utility meters, sub-meters, and equipment-level energy sensors with production systems to understand energy consumption per unit, per product, and per process step.",
      },
      {
        title: "Deploy AI-Driven Energy Optimization",
        detail:
          "Apply machine learning to optimize energy-intensive processes — adjusting schedules, setpoints, and load profiles to reduce consumption while maintaining production targets and quality standards.",
      },
      {
        title: "Monitor Asset Efficiency & Degradation",
        detail:
          "Track equipment performance over time to detect efficiency losses in motors, compressors, HVAC, and process equipment — enabling proactive maintenance that preserves energy performance.",
      },
      {
        title: "Automate Sustainability Reporting",
        detail:
          "Structure production and energy data to support ESG reporting, carbon footprint calculations, and regulatory compliance — reducing manual effort while improving data accuracy.",
      },
      {
        title: "Iterate Toward Net-Zero Targets",
        detail:
          "Use operational data to model scenarios, track progress against sustainability targets, and continuously refine optimization strategies as production conditions and technology evolve.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
