import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import generateRandomPhoneNumbers from '../helpers/generateRandomPhoneNumbers';

chai.use(chaiHttp);
chai.should();

describe('Random-Phone-Number-Generator Test Suite', () => {
	// ==== Generate random phone numbers ==== //

	describe(' GET /random-phone-numbers - Generate random phone numbers', () => {
		it('should return status 200 on generating random phone numbers', (done) => {
			chai.request(app).get('/api/v1/random-phone-numbers').end((err, res) => {
				res.status.should.equal(200);
				res.body.should.be.a('object');
				res.body.should.have.property('status');
				res.body.should.have.property('data');
				res.body.data.message.should.equal('Phone numbers returned successfully');
				done(err);
			});
		});
  });

  // ==== Unit test - generateRandomPhoneNumbers() ==== //

	describe('Unit test - generateRandomPhoneNumbers()', () => {
		it('generateRandomPhoneNumbers() should be an object that has properties {generatedPhoneNumbers,totalPhoneNumbersGenerated}', (done) => {
      const randomPhoneNumbers = generateRandomPhoneNumbers();
      expect(randomPhoneNumbers).to.be.an('object');
      expect(randomPhoneNumbers).to.have.own.property('generatedPhoneNumbers');
      expect(randomPhoneNumbers).to.have.own.property('totalPhoneNumbersGenerated');
      expect(randomPhoneNumbers.generatedPhoneNumbers[0][0]).to.eql('0');
			done();
		});
  });
});
