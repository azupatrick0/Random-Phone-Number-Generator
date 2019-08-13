import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
// import randomPhoneNumbers from './models/randomPhoneNumbers';
import generateRandomPhoneNumbers from './helpers/generateRandomPhoneNumbers';

const app = express();

const port = process.env.PORT || 4008;

app.use(express.static('./build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/v1/random-phone-numbers', (req, res) => {
  const returnedPhoneNumbers = generateRandomPhoneNumbers();
  res.status(200).json({
    status: 200,
    data: {
      message: 'Phone numbers returned successfully',
      totalPhoneNumberGenerated: returnedPhoneNumbers.totalPhoneNumbersGenerated,
      phoneNumbers: returnedPhoneNumbers.generatedPhoneNumbers,
    }
  });
});

// To use other UI routes
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./build', 'index.html'));
});

app.listen(port, () => {
  console.log(`App running on port => ${port}`);
});

export default app;
