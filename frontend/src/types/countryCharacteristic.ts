export interface CountryCharacteristic {
  id: number;
  countryId: number;
  characteristicId: number;
  weight: number; // how strongly this country embodies the characteristic, 0–3
}