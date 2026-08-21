export interface OptionCharacteristic {
  id: number;
  optionId: number;
  characteristicId: number;
  weight: number; // signed: +3 strong match ... -2 strong mismatch
}