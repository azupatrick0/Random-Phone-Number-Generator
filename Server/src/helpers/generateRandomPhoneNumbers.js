import randomPhoneNumbers from '../models/randomPhoneNumbers';

const generateRandomPhoneNumbers = () => {
  let generatedPhoneNumbers = [];
	for (let count = 0; count <= 9000; count++) {
		const randomPhoneNumber = Math.random() * 1234567890;
		if (!randomPhoneNumbers.includes(randomPhoneNumber)) {
      randomPhoneNumbers.push(`0${Math.floor(randomPhoneNumber)}`);
      generatedPhoneNumbers.push(`0${Math.floor(randomPhoneNumber)}`);
		}
  }
  return generatedPhoneNumbers;
};

export default generateRandomPhoneNumbers;
