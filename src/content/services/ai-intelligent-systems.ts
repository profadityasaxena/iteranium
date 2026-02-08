import type { Service } from "@/types/content";

export const aiIntelligentSystems: Service = {
  slug: "ai-intelligent-systems",
  title: "AI & Intelligent Systems",
  shortDescription:
    "Reinforcement-learning AI, computer vision, and process optimization that learns from your live shop-floor data.",
  longDescription:
    "Our AI solutions are not generic machine learning applied to manufacturing—they are purpose-built intelligent systems trained on live shop-floor data using reinforcement learning. Our models learn directly from your production environment to optimize scheduling, reduce downtime, predict failures, and maximize throughput. This is Canadian-developed IP that adapts continuously to your unique operational patterns.",
  icon: "Brain",
  features: [
    {
      title: "Reinforcement Learning for Scheduling",
      description:
        "AI agents that learn optimal production scheduling by interacting with real-time shop-floor data—adapting to changing demand, machine availability, and material constraints.",
    },
    {
      title: "Predictive Maintenance",
      description:
        "Machine learning models that analyze sensor data to predict equipment failures before they happen, enabling condition-based maintenance that reduces unplanned downtime.",
    },
    {
      title: "Computer Vision & Quality Inspection",
      description:
        "Automated visual inspection systems that detect defects in real-time on the production line—with accuracy that exceeds manual inspection.",
    },
    {
      title: "Process Optimization",
      description:
        "AI-driven optimization of process parameters—cycle times, energy consumption, material usage—to find the optimal operating point that maximizes yield and minimizes waste.",
    },
  ],
  deliveryRoadmap: [
    {
      title: "Identify the Right Problems to Solve with AI",
      description:
        "Not every manufacturing problem needs AI, and we start by figuring out which ones do. We work with your production, quality, and maintenance teams to identify where decisions are being made under uncertainty, where patterns exist in data that humans can't see fast enough, and where the cost of getting it wrong is high enough to justify intelligent automation.",
    },
    {
      title: "Acquire, Clean, and Structure the Production Data",
      description:
        "AI models are only as good as the data they learn from. We extract historical and real-time data from your PLCs, historians, MES, and quality systems — then clean, label, and structure it into training-ready datasets. Gaps are documented, biases are identified, and data pipelines are built to keep the flow consistent going forward.",
    },
    {
      title: "Develop and Train Models in a Controlled Environment",
      description:
        "Models are built and trained offline using your production data — not in your live environment. We iterate through multiple approaches, evaluate performance against real operational scenarios, and select architectures that balance accuracy with explainability. Every model decision needs to be traceable and defensible.",
    },
    {
      title: "Validate Against Production Reality",
      description:
        "Before any model touches a live system, it's tested in shadow mode — running alongside your existing processes, comparing its recommendations against actual outcomes. We measure drift, edge cases, and failure modes under real conditions. If a model isn't ready, it doesn't deploy — no matter how good the lab results look.",
    },
    {
      title: "Deploy to Production with Monitoring and Guardrails",
      description:
        "Approved models are deployed with full monitoring — tracking prediction accuracy, input drift, and operational impact in real time. Guardrails ensure that AI recommendations are bounded within safe operating limits. Your operators retain override authority, and every decision the system makes is logged and auditable.",
    },
    {
      title: "Learn, Adapt, and Improve with Every Production Cycle",
      description:
        "Production environments change — new products, new materials, equipment wear, seasonal variation. Our models are designed to adapt. We establish retraining pipelines, performance review cadences, and feedback loops with your operations team so the system gets smarter over time, not stale.",
    },
  ],
  technologies: [
    "PyTorch",
    "TensorFlow",
    "Ray RLlib",
    "OpenCV",
    "Apache Spark",
    "MLflow",
    "ONNX Runtime",
  ],
  benefits: [
    { metric: "35%", description: "improvement in production scheduling efficiency" },
    { metric: "45%", description: "reduction in unplanned machine downtime" },
    { metric: "20%", description: "increase in first-pass yield through AI quality inspection" },
  ],
};
