import { ContactForm } from "./components/contact-form";
import { ThemeToggle } from "./components/theme-toggle";
const navItems = ["Services", "Portfolio", "Approach", "Contact"];

const stats = [
  { value: "42", label: "Launches delivered globally" },
  { value: "11", label: "Years shaping product brands" },
  { value: "96%", label: "Clients retained after first sprint" }
];

const services = [
  {
    title: "UI/UX Design",
    description:
      "Editorial interfaces, product flows, and polished systems that make advanced platforms feel effortless."
  },
  {
    title: "Web Development",
    description:
      "Performance-focused frontends and marketing experiences engineered for speed, scale, and durability."
  },
  {
    title: "Brand Identity",
    description:
      "Verbal and visual identities with the precision to win investor confidence and enterprise trust."
  },
  {
    title: "Digital Marketing",
    description:
      "Launch narratives, campaign systems, and conversion journeys tuned for ambitious growth teams."
  }
];

const work = [
  { title: "Northstar OS", category: "Product Design", image: "/work/northstar.svg" },
  { title: "Aureline Capital", category: "Brand System", image: "/work/aureline.svg" },
  { title: "Cascade Cloud", category: "SaaS Platform", image: "/work/cascade.svg" },
  { title: "Harbor Health", category: "Digital Experience", image: "/work/harbor.svg" },
  { title: "Monograph AI", category: "Web Launch", image: "/work/monograph.svg" },
  { title: "Verve Mobility", category: "Growth Website", image: "/work/verve.svg" }
];

const clients = ["Notion", "Stripe", "Ramp", "Vercel", "Figma", "Linear"];

const socials = ["Instagram", "LinkedIn", "Behance", "Dribbble"];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    "M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8Zm4 0h8",
    "M5 7h14M7 12h10M9 17h6",
    "M12 4l7 4v8l-7 4-7-4V8l7-4Z",
    "M6 17V7l6 4 6-4v10"
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        d={icons[index]}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function App() {
  return (
    <main className="selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[color:var(--bg-primary)/0.85] backdrop-blur-xl">
        <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <a href="#top" className="group flex items-center gap-3 text-sm font-medium tracking-[0.28em]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-secondary)] text-xs">
              AN
            </span>
            <span className="text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--text-primary)]">
              ATELIER NUME
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[var(--text-secondary)] transition-all duration-300 hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full bg-[var(--cta-bg)] px-5 py-3 text-sm font-medium text-[var(--cta-text)] transition-transform duration-300 ease-editorial hover:-translate-y-0.5 md:inline-flex"
            >
              Book a strategy call
            </a>
          </div>

          <nav className="-order-1 flex w-full gap-3 overflow-x-auto pb-1 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="whitespace-nowrap rounded-full border border-[var(--border-subtle)] bg-[color:var(--bg-secondary)/0.7] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grain" />
        <div className="absolute left-1/2 top-28 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(213,101,48,0.18),transparent_62%)] blur-3xl" />
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="relative lg:col-span-7">
            <div className="fade-up inline-flex items-center gap-3 rounded-full border border-[var(--border-subtle)] bg-[color:var(--bg-secondary)/0.72] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)]">
              Boutique design partner for category leaders
            </div>
            <h1 className="fade-up mt-8 max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.05em] text-[var(--text-primary)] md:text-7xl xl:text-[7.25rem]">
              We compose digital brands with the precision of an editorial studio.
            </h1>
            <p className="fade-up mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              Atelier Nume helps startups and enterprise teams launch products, websites, and
              identities that feel rare, intelligent, and commercially sharp.
            </p>
            <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cta-bg)] px-6 py-4 text-sm font-medium text-[var(--cta-text)] transition-transform duration-300 ease-editorial hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
              >
                View selected work <ArrowUpRight />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[color:var(--bg-secondary)/0.55] px-6 py-4 text-sm font-medium text-[var(--text-primary)] transition-colors duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--bg-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
              >
                Explore capabilities
              </a>
            </div>

            <div className="fade-up mt-14 grid gap-6 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl tracking-[-0.04em] text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="fade-up relative ml-auto flex min-h-[38rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[linear-gradient(180deg,var(--surface-top),var(--surface-bottom))] p-6 shadow-soft">
              <div className="absolute inset-x-6 top-6 h-px bg-[linear-gradient(90deg,transparent,var(--border-hover),transparent)]" />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-[color:var(--bg-primary)/0.58] p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Now booking</p>
                  <p className="mt-3 text-2xl font-display tracking-[-0.04em]">Q3 2026</p>
                </div>
                <div className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-[color:var(--bg-primary)/0.58] p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Typical sprint</p>
                  <p className="mt-3 text-2xl font-display tracking-[-0.04em]">6-12 weeks</p>
                </div>
              </div>

              <div className="relative mt-8 flex-1 overflow-hidden rounded-[1.75rem] border border-[var(--border-subtle)] bg-[var(--visual-bg)] p-6">
                <div className="absolute left-8 top-8 h-32 w-32 rounded-full border border-[color:var(--accent)/0.3] bg-[radial-gradient(circle,rgba(213,101,48,0.34),transparent_68%)]" />
                <div className="absolute bottom-10 right-8 h-44 w-44 rounded-full border border-[color:var(--accent)/0.2] bg-[radial-gradient(circle,rgba(127,105,71,0.28),transparent_72%)]" />
                <div className="absolute inset-x-10 bottom-14 top-20 rounded-[999px] border border-[color:var(--border-strong)] opacity-70" />
                <div className="absolute inset-x-20 bottom-20 top-10 rounded-[999px] border border-[color:var(--border-subtle)] opacity-80" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_100%)]" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="max-w-xs">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                      Signature methodology
                    </p>
                    <p className="mt-3 text-3xl font-display leading-tight tracking-[-0.04em] text-[var(--text-primary)]">
                      Strategy, systems, and storytelling in one continuous motion.
                    </p>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                        Trusted by product-led teams
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
                        {clients.slice(0, 4).map((client) => (
                          <span
                            key={client}
                            className="rounded-full border border-[var(--border-subtle)] px-3 py-2"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden text-right text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)] sm:block">
                      Scroll
                      <div className="mx-auto mt-3 h-14 w-px animate-pulse bg-[var(--border-hover)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up flex items-center justify-between gap-6 border-t border-[var(--border-subtle)] pt-8 text-sm text-[var(--text-tertiary)] lg:col-span-12">
            <p>Selected by founders, CMOs, and product leaders who need calm sophistication with measurable momentum.</p>
            <div className="hidden flex-wrap gap-6 lg:flex">
              {clients.map((client) => (
                <span key={client} className="tracking-[0.18em]">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-8xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="fade-up lg:col-span-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-tertiary)]">Services</p>
            <h2 className="mt-5 max-w-md font-display text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
              Built for ambitious launches, refined for long-term brand equity.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[var(--text-secondary)]">
              We bring the rigor of a product team and the taste level of an editorial house,
              balancing clarity, conversion, and lasting memorability.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="fade-up group rounded-[1.75rem] border border-[var(--border-subtle)] bg-[var(--card-bg)] p-7 transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-secondary)] text-[var(--accent)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                    <ServiceIcon index={index} />
                  </div>
                  <h3 className="mt-8 font-display text-3xl tracking-[-0.04em] text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-base leading-8 text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                  <div className="mt-10 inline-flex items-center gap-2 text-sm text-[var(--text-primary)]">
                    Learn more <ArrowUpRight />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-8xl px-6 py-24 lg:px-10">
          <div className="fade-up flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-tertiary)]">Portfolio</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                Six launch stories shaped for visibility, trust, and product momentum.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]"
            >
              Start your next chapter <ArrowUpRight />
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {work.map((project) => (
              <a
                key={project.title}
                href="#contact"
                className="fade-up group overflow-hidden rounded-[1.9rem] border border-[var(--border-subtle)] bg-[var(--card-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-secondary)]"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(24,20,17,0.68)_100%)] opacity-[0.85]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/[0.72]">{project.category}</p>
                    <div className="mt-3 flex items-end justify-between gap-4">
                      <h3 className="font-display text-3xl leading-tight tracking-[-0.04em] text-white">
                        {project.title}
                      </h3>
                      <span className="inline-flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-8xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 md:grid-cols-3 lg:p-10">
          <div className="fade-up">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-tertiary)]">Approach</p>
            <h2 className="mt-5 font-display text-4xl tracking-[-0.04em]">Small team. Senior eyes. Full accountability.</h2>
          </div>
          <div className="fade-up space-y-4 text-[var(--text-secondary)] md:col-span-2">
            <p className="leading-8">
              Our strongest agency references all share a common discipline: clear hierarchy,
              restraint, and emotionally intelligent motion. This concept translates those signals
              into a quieter luxury palette, a Swiss grid, and editorial pacing that feels crafted
              rather than templated.
            </p>
            <p className="leading-8">
              The result is a homepage built to reassure enterprise buyers while still feeling sharp
              enough for founders seeking distinction.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-8xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="fade-up relative overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[linear-gradient(180deg,var(--surface-top),var(--surface-bottom))] p-8 lg:col-span-5 lg:p-10">
            <div className="absolute -right-10 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(213,101,48,0.22),transparent_66%)] blur-2xl" />
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-tertiary)]">Contact</p>
            <h2 className="mt-5 max-w-sm font-display text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
              Ready for a homepage that feels as premium as the company behind it?
            </h2>
            <div className="mt-10 space-y-6 text-[var(--text-secondary)]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Location</p>
                <p className="mt-2 text-lg text-[var(--text-primary)]">London and New York</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Email</p>
                <a
                  href="mailto:hello@ateliernume.com"
                  className="mt-2 inline-block text-lg text-[var(--text-primary)] underline decoration-[color:var(--border-hover)] underline-offset-4"
                >
                  hello@ateliernume.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Response time</p>
                <p className="mt-2 text-lg text-[var(--text-primary)]">Within 1 business day</p>
              </div>
            </div>

            <div className="mt-12 rounded-[1.75rem] border border-[var(--border-subtle)] bg-[color:var(--bg-primary)/0.6] p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">What to expect</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                <li>Discovery call and clear scope recommendation</li>
                <li>Senior-led delivery with weekly decision checkpoints</li>
                <li>Strategy, design, and implementation thinking in one loop</li>
              </ul>
            </div>
          </div>

          <div className="fade-up rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 lg:col-span-7 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <div className="mx-auto flex max-w-8xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-sm tracking-[0.28em] text-[var(--text-secondary)]">ATELIER NUME</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-tertiary)]">
              Premium digital design for teams building the next category-defining product.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--text-secondary)]">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[var(--text-primary)]">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--text-secondary)]">
            {socials.map((social) => (
              <a key={social} href="#" className="hover:text-[var(--text-primary)]">
                {social}
              </a>
            ))}
            <a href="#top" className="text-[var(--text-primary)]">
              Back to top
            </a>
          </div>
        </div>
        <div className="border-t border-[var(--border-subtle)] px-6 py-5 text-center text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
          © 2026 Atelier Nume. Crafted for modern founders and enterprise teams.
        </div>
      </footer>
    </main>
  );
}
