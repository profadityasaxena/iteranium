import type { TrainingProgram } from "@/types/content";

export const trainingPrograms: TrainingProgram[] = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence for Industry",
    description:
      "Comprehensive training on applying AI in manufacturing and industrial settings. From foundational concepts to advanced deployment strategies, participants learn to identify AI opportunities, design intelligent systems, and measure business impact in production environments.",
    icon: "Brain",
    targetAudience: ["Industry Professionals", "Academia"],
    topics: [
      "Foundations of AI and industrial applications",
      "Computer vision for quality inspection and defect detection",
      "Natural language processing for maintenance logs and documentation",
      "Reinforcement learning for process optimization",
      "AI governance, ethics, and responsible deployment",
      "Building business cases for AI adoption",
    ],
    deliveryFormats: ["On-site workshops", "Virtual instructor-led", "Self-paced online"],
    duration: "3–5 days",
  },
  {
    slug: "data-science-analytics",
    title: "Data Science & Analytics",
    description:
      "Hands-on training in data science methods tailored for industrial and manufacturing data. Participants work with real-world datasets to build analytical pipelines, create predictive models, and generate actionable insights for operational decision-making.",
    icon: "BarChart3",
    targetAudience: ["Industry Professionals", "Academia"],
    topics: [
      "Statistical analysis and exploratory data analysis",
      "Data wrangling and feature engineering for industrial data",
      "Predictive analytics and time-series forecasting",
      "Data visualization and dashboard design",
      "Big data architectures for manufacturing",
      "From insight to action: operationalizing analytics",
    ],
    deliveryFormats: ["On-site workshops", "Virtual instructor-led", "Self-paced online"],
    duration: "3–5 days",
  },
  {
    slug: "machine-learning",
    title: "Machine Learning Engineering",
    description:
      "Deep-dive into machine learning model development, training, and deployment for industrial applications. Covers supervised and unsupervised learning, deep learning, and MLOps practices for maintaining models in production environments.",
    icon: "Cpu",
    targetAudience: ["Industry Professionals", "Academia"],
    topics: [
      "Supervised and unsupervised learning fundamentals",
      "Deep learning and neural network architectures",
      "Model training, validation, and hyperparameter tuning",
      "MLOps: model deployment, monitoring, and lifecycle management",
      "Edge ML for real-time manufacturing applications",
      "Transfer learning and domain adaptation",
    ],
    deliveryFormats: ["On-site workshops", "Virtual instructor-led"],
    duration: "4–5 days",
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing & Infrastructure",
    description:
      "Training on cloud platforms and infrastructure for industrial digitalization. Covers cloud architecture, data pipelines, security, and hybrid cloud strategies relevant to manufacturing and operational technology environments.",
    icon: "Cloud",
    targetAudience: ["Industry Professionals", "Academia"],
    topics: [
      "Cloud fundamentals: IaaS, PaaS, SaaS for industry",
      "Azure IoT Hub, AWS Industrial IoT, and GCP for manufacturing",
      "Data lake and data warehouse architectures",
      "Cloud security and compliance for OT environments",
      "Hybrid and edge-cloud architectures",
      "Cost optimization and scalability planning",
    ],
    deliveryFormats: ["On-site workshops", "Virtual instructor-led", "Self-paced online"],
    duration: "3–4 days",
  },
  {
    slug: "core-digitalization",
    title: "Core Digitalization Technologies",
    description:
      "Foundational training on the core technologies driving Industry 4.0 transformation. Covers IIoT, digital twins, smart sensors, connectivity protocols, and integration strategies for building a connected manufacturing operation.",
    icon: "Network",
    targetAudience: ["Industry Professionals", "Academia"],
    topics: [
      "Industrial IoT: sensors, gateways, and connectivity",
      "Communication protocols: OPC-UA, MQTT, Kafka",
      "Digital twins and simulation-based optimization",
      "MES and ERP integration strategies",
      "Cybersecurity for operational technology",
      "Building a digitalization roadmap",
    ],
    deliveryFormats: ["On-site workshops", "Virtual instructor-led"],
    duration: "3–5 days",
  },
];

export function getTrainingProgramBySlug(
  slug: string
): TrainingProgram | undefined {
  return trainingPrograms.find((tp) => tp.slug === slug);
}
