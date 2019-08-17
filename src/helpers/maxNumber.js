const maxNumber = (arrayOfNumbers) => (arrayOfNumbers.reduce((element, nextElement) => Math.max(element, nextElement)));

export default maxNumber;