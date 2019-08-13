import randomPhoneNumbers from '../models/randomPhoneNumbers';

const generateRandomPhoneNumbers = () => {
  let generatedPhoneNumbers = [];
  const totalPhoneNumbersGenerated = Math.floor(Math.random() * 9000);
	for (let count = 0; count <= totalPhoneNumbersGenerated; count++) {
		const randomPhoneNumber = Math.random() * 1234567890;
		if (!randomPhoneNumbers.includes(randomPhoneNumber)) {
      randomPhoneNumbers.push(`0${Math.floor(randomPhoneNumber)}`);
      generatedPhoneNumbers.push(`0${Math.floor(randomPhoneNumber)}`);
		}
  }
  return { generatedPhoneNumbers, totalPhoneNumbersGenerated };
};

export default generateRandomPhoneNumbers;
