export interface Characteristic {
  id: number;
  name: string; // snake_case identifier, e.g. "trusts_pigeons"
  description?: string;
}