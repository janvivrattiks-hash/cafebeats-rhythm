import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ subtitle, title, description, centered = true, light = false }: SectionTitleProps) => (
  <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
    {subtitle && (
      <ScrollReveal>
        <span className="text-gradient-accent font-body text-sm font-semibold uppercase tracking-[0.2em]">
          {subtitle}
        </span>
      </ScrollReveal>
    )}
    <ScrollReveal delay={0.1}>
      <h2 className={`mt-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
    </ScrollReveal>
    {description && (
      <ScrollReveal delay={0.2}>
        <p className={`mx-auto mt-4 max-w-2xl text-base md:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      </ScrollReveal>
    )}
  </div>
);

export default SectionTitle;
