export const siteConfig = {
  name: "INGEXIA",
  tagline: "Ingeniería para la transformación digital",
  description:
    "INGEXIA es una empresa de ingeniería especializada en Inteligencia Artificial, desarrollo de software, arquitectura empresarial, cloud, integración de sistemas, automatización y ciberseguridad para organizaciones medianas y grandes que buscan acelerar su transformación digital.",
  url: "https://www.ingexia.cl",
  email: "contacto@ingexia.cl",
  social: {
    linkedin: "https://www.linkedin.com/company/ingexia",
  },
  nav: [
    { label: "Capacidades", href: "#capacidades" },
    { label: "Servicios", href: "#servicios" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const contactHref = `mailto:${siteConfig.email}`;
