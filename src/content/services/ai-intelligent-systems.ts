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
