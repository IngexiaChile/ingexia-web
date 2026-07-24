import {
  BrainCircuit,
  Code2,
  Network,
  Cloud,
  Share2,
  Workflow,
  ShieldCheck,
  Search,
  Hammer,
  Gauge,
  Infinity as InfinityIcon,
  HeartPulse,
  Factory,
  ShoppingBag,
  Truck,
  GraduationCap,
  Zap,
  Landmark,
  type LucideIcon,
} from "lucide-react";

/**
 * Credibility strip: qualitative, verifiable-by-nature statements about how
 * Ingexia operates. Deliberately free of invented numbers, client names or
 * testimonials — replace with real metrics as they become available.
 */
export type CredibilityPoint = { label: string };

export const credibilityPoints: CredibilityPoint[] = [
  { label: "Equipos de arquitectura senior en cada proyecto" },
  { label: "Proyectos en banca, salud, industria y logística" },
  { label: "Metodología propia, del diagnóstico a la operación continua" },
  { label: "Socios de la firma involucrados directamente, no solo comercial" },
];

/**
 * System graph: the single place in the site where the isotype's node
 * geometry appears as a diagram. Arquitectura Empresarial is the hub because
 * it is, in practice, the discipline that connects the other six — the
 * diagram documents a real relationship between services, not a decorative
 * network. Each node's `note` folds in what used to be the separate
 * "Why Ingexia" value props.
 */
export type SystemNode = {
  icon: LucideIcon;
  label: string;
  note: string;
};

export const systemHub: SystemNode = {
  icon: Network,
  label: "Arquitectura Empresarial",
  note: "La disciplina que conecta y ordena el resto.",
};

export const systemNodes: SystemNode[] = [
  {
    icon: BrainCircuit,
    label: "Inteligencia Artificial",
    note: "Aplicada donde genera valor medible, no como moda.",
  },
  {
    icon: Code2,
    label: "Ingeniería de Software",
    note: "Soluciones escalables, no atajos de corto plazo.",
  },
  {
    icon: Cloud,
    label: "Cloud",
    note: "Costo, seguridad y rendimiento en equilibrio.",
  },
  {
    icon: Share2,
    label: "Integración de Sistemas",
    note: "Plataformas complejas convertidas en un solo ecosistema.",
  },
  {
    icon: Workflow,
    label: "Automatización",
    note: "Menos complejidad operativa, menos error humano.",
  },
  {
    icon: ShieldCheck,
    label: "Ciberseguridad",
    note: "Seguridad incorporada desde el diseño, no al final.",
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: BrainCircuit,
    title: "Inteligencia Artificial",
    description:
      "Modelos y sistemas de IA aplicados a procesos reales de negocio, con foco en valor medible y gobernanza responsable.",
  },
  {
    icon: Code2,
    title: "Ingeniería de Software",
    description:
      "Desarrollo de software robusto, mantenible y escalable, alineado a estándares de ingeniería de nivel empresarial.",
  },
  {
    icon: Network,
    title: "Arquitectura Empresarial",
    description:
      "Diseño de arquitecturas tecnológicas coherentes que conectan la estrategia de negocio con las capacidades técnicas.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "Estrategias de adopción, migración y operación en la nube, optimizando costo, seguridad y rendimiento.",
  },
  {
    icon: Share2,
    title: "Integración de Sistemas",
    description:
      "Conexión de plataformas, datos y procesos dispersos en un ecosistema tecnológico unificado.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Automatización de procesos críticos para reducir errores operativos y liberar capacidad humana.",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad",
    description:
      "Protección de plataformas y datos mediante prácticas de seguridad aplicadas desde el diseño.",
  },
];

export type MethodologyStep = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

export const methodologySteps: MethodologyStep[] = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    description:
      "Analizamos el estado actual de la plataforma, los procesos y la arquitectura para identificar oportunidades reales.",
  },
  {
    icon: Network,
    step: "02",
    title: "Arquitectura",
    description:
      "Diseñamos la solución técnica óptima, alineada a los objetivos de negocio y a estándares de ingeniería.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Implementación",
    description:
      "Desarrollamos e integramos la solución con rigor técnico y control de calidad en cada etapa.",
  },
  {
    icon: Gauge,
    step: "04",
    title: "Optimización",
    description:
      "Ajustamos rendimiento, seguridad y escalabilidad una vez la solución está en operación.",
  },
  {
    icon: InfinityIcon,
    step: "05",
    title: "Evolución Continua",
    description:
      "Acompañamos la evolución de la plataforma en el tiempo, adaptándola a nuevas necesidades del negocio.",
  },
];

/**
 * Engagement model ("modelo de intervención"): describes how a project is
 * governed and staffed, distinct from `methodologySteps` (the technical
 * engineering phases). Written as operating principles rather than a
 * fabricated case study — no client names or invented outcomes.
 */
export type EngagementPrinciple = {
  step: string;
  title: string;
  description: string;
};

export const engagementModel: EngagementPrinciple[] = [
  {
    step: "01",
    title: "Un equipo, no un ticket",
    description:
      "Arquitectos senior asignados de forma estable al proyecto, con continuidad de principio a fin.",
  },
  {
    step: "02",
    title: "Gobierno conjunto",
    description:
      "Las decisiones técnicas se revisan junto al equipo de TI del cliente, no se ejecutan a ciegas desde afuera.",
  },
  {
    step: "03",
    title: "Entregables medibles por fase",
    description:
      "Cada etapa cierra con resultados verificables, no con promesas abiertas hacia la siguiente.",
  },
  {
    step: "04",
    title: "Transferencia real de conocimiento",
    description:
      "El equipo interno queda capacitado para operar y evolucionar la solución, sin dependencia permanente.",
  },
];

export type Industry = {
  icon: LucideIcon;
  label: string;
};

export const industries: Industry[] = [
  { icon: HeartPulse, label: "Salud" },
  { icon: Factory, label: "Industria" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Truck, label: "Logística" },
  { icon: GraduationCap, label: "Educación" },
  { icon: Zap, label: "Utilities" },
  { icon: Landmark, label: "Servicios Financieros" },
];
