import randomPhoneNumbers from '../models/randomPhoneNumbers';

const generateRandomPhoneNumbers = () => {
  let generatedPhoneNumbers = [];
	for (let count = 0; count <= 9000; count++) {
    const randomPhoneNumber = Math.random() * 1234567890;
		if ((!randomPhoneNumbers.includes(`0${Math.floor(randomPhoneNumber)}`)) && Math.floor(randomPhoneNumber).toString().length === 9) {
      randomPhoneNumbers.push(`0${Math.floor(randomPhoneNumber)}`);
      generatedPhoneNumbers.push(`0${Math.floor(randomPhoneNumber)}`);
		}
  }
  return {
    generatedPhoneNumbers: generatedPhoneNumbers.sort((a,b) => a-b),
    totalPhoneNumbersGenerated: generatedPhoneNumbers.length
  };
};

export default generateRandomPhoneNumbers;
