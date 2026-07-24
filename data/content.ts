import {
  BrainCircuit,
  Code2,
  Network,
  Cloud,
  Share2,
  Workflow,
  ShieldCheck,
  RefreshCw,
  Puzzle,
  Sparkles,
  Layers,
  Minimize2,
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

export type Capability = {
  icon: LucideIcon;
  label: string;
};

export const capabilities: Capability[] = [
  { icon: BrainCircuit, label: "Inteligencia Artificial" },
  { icon: Code2, label: "Ingeniería de Software" },
  { icon: Network, label: "Arquitectura Empresarial" },
  { icon: Cloud, label: "Cloud" },
  { icon: Share2, label: "Integración de Sistemas" },
  { icon: Workflow, label: "Automatización" },
  { icon: ShieldCheck, label: "Ciberseguridad" },
];

export type ValueProp = {
  icon: LucideIcon;
  title: string;
};

export const valueProps: ValueProp[] = [
  { icon: RefreshCw, title: "Modernizamos plataformas críticas." },
  { icon: Puzzle, title: "Integramos sistemas complejos." },
  { icon: Sparkles, title: "Aplicamos IA donde realmente genera valor." },
  { icon: Layers, title: "Diseñamos soluciones escalables." },
  { icon: Minimize2, title: "Reducimos la complejidad tecnológica." },
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
