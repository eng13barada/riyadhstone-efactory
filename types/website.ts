export interface Link {
  label: string;
  href: string;
  dropdown?: Link[];
}

export interface NavigationData {
  mainLinks: Link[];
}

export interface FooterData {
  copyright: string;
  links: Link[];
  socials: Link[];
  contact: {
    address: string;
    email: string;
    phone: string;
  };
}

export interface HeroData {
  est: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  cta: {
    primary: Link;
    secondary: Link;
  };
  trustStrip: string[];
  imagePlaceholder: string;
}

export interface WhyUsCard {
  title: string;
  desc: string;
  imgAlt: string;
}

export interface WhyUsData {
  heading: string;
  cards: WhyUsCard[];
}

export interface ProductSolution {
  name: string;
  desc: string;
  colSpan: string;
  bg: string;
}

export interface SolutionsData {
  heading: string;
  subheading: string;
  products: ProductSolution[];
}

export interface ApproachStep {
  step: string;
  label: string;
}

export interface ApproachData {
  heading: string;
  subheading: string;
  steps: ApproachStep[];
}

export interface TrustCard {
  title: string;
  items: string[];
}

export interface TrustTrioData {
  cards: TrustCard[];
}

export interface ArtTechData {
  heading: string;
  description: string;
  technologies: string[];
  imagePlaceholder: string;
  badge: string;
}

export interface LibraryData {
  heading: string;
  description: string;
  searchPlaceholder: string;
  links: string[];
}

export interface ContactData {
  heading: string;
  subheading: string;
  form: {
    placeholders: {
      name: string;
      phone: string;
      email: string;
      role: string;
      message: string;
    };
    roles: string[];
    button: string;
  };
  mapPlaceholder: string;
  info: {
    title: string;
    address: string;
    email: string;
  };
}

export interface HomeData {
  hero: HeroData;
  whyUs: WhyUsData;
  solutions: SolutionsData;
  approach: ApproachData;
  trustTrio: TrustTrioData;
  artTech: ArtTechData;
  library: LibraryData;
  contact: ContactData;
}
