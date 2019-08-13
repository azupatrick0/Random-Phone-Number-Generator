import randomPhoneNumbers from '../models/randomPhoneNumbers';
import maxNumber from '../helpers/maxNumber';
import minNumber from '../helpers/minNumber';

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
    totalPhoneNumbersGenerated: generatedPhoneNumbers.length,
    maximumNumber: maxNumber(generatedPhoneNumbers),
    minimumNumber: minNumber(generatedPhoneNumbers)
  };
};

export default generateRandomPhoneNumbers;
