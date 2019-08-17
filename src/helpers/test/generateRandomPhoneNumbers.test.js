import generateRandomPhoneNumbers from '../generateRandomPhoneNumbers';
import randomPhoneNumbers from '../../models/randomPhoneNumbers';

describe('Unit test - generateRandomPhoneNumbers()', () => {
  it('generateRandomPhoneNumbers() should be an object that has properties {generatedPhoneNumbers,totalPhoneNumbersGenerated, maximumNumber, minimumNumber}', () => {
    const phoneNumbers = generateRandomPhoneNumbers();
    expect(randomPhoneNumbers.length).toBeGreaterThan(0);
    expect(phoneNumbers.hasOwnProperty('phoneNumbers')).toBe(true);
    expect(phoneNumbers.hasOwnProperty('totalPhoneNumbersGenerated')).toBe(true);
    expect(phoneNumbers.hasOwnProperty('maximumNumber')).toBe(true);
    expect(phoneNumbers.hasOwnProperty('minimumNumber')).toBe(true);
  });
});