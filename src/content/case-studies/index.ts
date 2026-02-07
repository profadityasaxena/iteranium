import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    slug: "intelligent-production-scheduling",
    title: "Intelligent Production Scheduling & Throughput Optimization",
    industryContext: "High-mix discrete manufacturing",
    function: "Production Planning & Execution",
    businessProblem:
      "Manufacturing lines were experiencing frequent schedule overruns, poor synchronization between production orders and shop-floor realities, and manual rescheduling driven by tribal knowledge. Despite having MES and production order systems in place, planning decisions were static, reactive, and unable to adapt to real-time disruptions.",
    strategicIntervention:
      "Iteranium introduced an AI-driven decision layer on top of the existing MES to move scheduling from rule-based planning to adaptive optimization.",
    solutionArchitecture: [
      "Integrated live MES, machine status, and WIP data",
      "Machine learning models to forecast bottlenecks and order completion risk",
      "Reinforcement learning agents to recommend schedule adjustments",
      "Human-in-the-loop approvals to ensure operational trust",
    ],
    businessImpact: [
      "Improved schedule adherence",
      "Higher throughput without additional capital investment",
      "Reduced firefighting by planners and supervisors",
    ],
    whyThisMatters:
      "This transformed production scheduling from a static planning exercise into a learning system that continuously improves with operational feedback.",
  },
  {
    slug: "predictive-quality-intelligence",
    title: "Predictive Quality Intelligence & Scrap Reduction",
    industryContext: "Automotive and precision components",
    function: "Quality Management",
    businessProblem:
      "Quality systems captured inspection data, but defects were identified late in the process, root-cause analysis relied heavily on manual investigation, and scrap and rework costs were rising despite digital tooling.",
    strategicIntervention:
      "Iteranium reframed quality from a control function to a predictive intelligence problem.",
    solutionArchitecture: [
      "Unified quality, process, and machine data",
      "Supervised ML models linking defects to upstream process conditions",
      "Early-warning indicators for quality drift",
      "Explainable AI views for quality engineers and plant leadership",
    ],
    businessImpact: [
      "Earlier detection of quality degradation",
      "Reduced scrap and rework",
      "Faster and more objective root-cause analysis",
    ],
    whyThisMatters:
      'Quality moved from "inspection after the fact" to prevention by design, unlocking both cost savings and customer trust.',
  },
  {
    slug: "rl-energy-optimization",
    title: "Reinforcement Learning–Based Energy Optimization",
    industryContext: "Electronics and consumer goods manufacturing",
    function: "Energy & Sustainability Management",
    businessProblem:
      "Energy consumption was monitored but not optimized: high variability across shifts and product mixes, rising energy costs and sustainability pressure, and no systematic way to balance cost, output, and operational constraints.",
    strategicIntervention:
      "Iteranium applied reinforcement learning with human feedback to optimize energy usage while respecting production constraints.",
    solutionArchitecture: [
      "Energy and machine-level consumption data ingestion",
      "RL agents trained to recommend optimal operating patterns",
      "Human validation loop to ensure safe adoption",
      "Predictive energy forecasting tied to production plans",
    ],
    businessImpact: [
      "Reduced energy consumption per unit produced",
      "Improved sustainability reporting",
      "Lower exposure to energy price volatility",
    ],
    whyThisMatters:
      "Energy optimization shifted from reporting to continuous, intelligent decision-making, directly supporting ESG and margin objectives.",
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance & Asset Reliability Intelligence",
    industryContext: "Discrete manufacturing with critical equipment",
    function: "Maintenance & Asset Management",
    businessProblem:
      "Maintenance strategies were polarized: reactive breakdowns causing costly downtime, and preventive schedules leading to over-maintenance. Both approaches were expensive and inefficient.",
    strategicIntervention:
      "Iteranium repositioned maintenance as a probabilistic decision problem, not a calendar-based task.",
    solutionArchitecture: [
      "Sensor, alarm, and maintenance-history integration",
      "Anomaly detection models for early fault signals",
      "Failure probability estimation",
      "RL-driven prioritization of maintenance actions",
    ],
    businessImpact: [
      "Reduced unplanned downtime",
      "Better utilization of maintenance resources",
      "Improved asset availability and lifecycle management",
    ],
    whyThisMatters:
      "Maintenance became risk-aware and data-driven, improving reliability without increasing cost.",
  },
  {
    slug: "manufacturing-visibility",
    title: "End-to-End Manufacturing Visibility for Executive Decision-Making",
    industryContext: "Multi-plant discrete manufacturing",
    function: "Operations Intelligence & Leadership Reporting",
    businessProblem:
      "Executives lacked a single, trusted view of operational performance, early signals of risk across plants, and decision-ready insights linking operations to business outcomes. Dashboards existed, but they were descriptive, not actionable.",
    strategicIntervention:
      "Iteranium designed an AI-powered operations intelligence layer focused on decision outcomes, not just KPIs.",
    solutionArchitecture: [
      "Aggregated MES, quality, maintenance, and energy data",
      "Predictive KPIs (risk, delay probability, cost exposure)",
      "Executive dashboards tailored for leadership decision cycles",
    ],
    businessImpact: [
      "Faster, more confident executive decisions",
      "Proactive identification of operational risk",
      "Stronger alignment between plant performance and business goals",
    ],
    whyThisMatters:
      "Operations data was elevated from reporting to strategic intelligence.",
  },
  {
    slug: "human-ai-collaboration",
    title: "Human–AI Collaboration for Shop-Floor Decision Support",
    industryContext: "Complex, people-intensive manufacturing",
    function: "Workforce Enablement & Decision Support",
    businessProblem:
      "Operators and supervisors were overwhelmed by alerts without prioritization, conflicting signals from different systems, and lack of decision context during disruptions. This led to alert fatigue and inconsistent responses.",
    strategicIntervention:
      "Iteranium focused on human-centered AI, ensuring that intelligence augmented—not replaced—operators.",
    solutionArchitecture: [
      "Context-aware alert prioritization using ML",
      "RLHF-based recommendations shaped by operator feedback",
      "Explainable suggestions with rationale and confidence levels",
    ],
    businessImpact: [
      "Improved response consistency",
      "Higher operator trust in digital systems",
      "Reduced decision latency during disruptions",
    ],
    whyThisMatters:
      "This bridged the gap between advanced AI and real-world adoption, a critical success factor in manufacturing transformation.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
