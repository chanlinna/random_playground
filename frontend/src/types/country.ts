export interface Country {
  id: number;
  name: string;
  identity: string;
  description?: string;
  population?: number;
  capital?: string;
  currency?: string;
  nationalAnimal?: string;
  nationalFood?: string;
  foundedYear?: number;
  governmentType?: string;
  mostPopularProfession?: string;
  mostCommonHobby?: string;

  // --- Frontend-only fields, not part of the backend schema yet ---
  // `emblem` stands in for a flag/crest so the UI doesn't need image assets.
  // `laws` powers the Weird Laws screen. If these become real product
  // features, they'd need their own tables (Law, or a Country.emblemUrl
  // column) — for now they live only in mock data.
  emblem: string;
  laws: string[];
}