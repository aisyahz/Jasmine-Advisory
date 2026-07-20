export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface MissionCard {
  title: string;
  description: string;
  icon: string;
}

export interface ProductItem {
  name: string;
  spec?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  icon: string;
  image: string;
  description: string;
  items: ProductItem[];
}

export interface NetworkLocation {
  id: string;
  name: string;
  coordinates: { x: number; y: number }; // Percentage coordinate on world map projection
  status: "active" | "strategic";
  description: string;
}

export interface WhyUsCard {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
