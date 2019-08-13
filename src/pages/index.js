import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import Loader from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../App.css';
import Card from '../components/Card';
import Table from '../components/Table';
import generateRandomPhoneNumbers from '../actions/index';

export class RandomPhoneNumberGenerator extends Component {
	state = {
		status: '',
		visible: false,
		phoneNumbers: undefined,
		sorting: false,
		start: 0,
		end: 5,
		paginationStarted: false
	};

	static getDerivedStateFromProps(props, state) {
		if (
			props.generatedRandomPhoneNumbers &&
			props.generatedRandomPhoneNumbers.status === 'SUCCESS' &&
			!state.sorting &&
			!state.paginationStarted
		) {
			toast.success('Hurray! Phone numbers generated successfully', {
				position: toast.POSITION.TOP_RIGHT
			});
			return {
				...state,
				status: 'SUCCESS',
				phoneNumbers: props.generatedRandomPhoneNumbers.generatedPhoneNumbers.phoneNumbers,
				visible: false
			};
		} else if (props.generatedRandomPhoneNumbers && props.generatedRandomPhoneNumbers.status === 'ERROR') {
			toast.error(
				'Sorry! An error occurred while generating phone numbers, please check your internet connection and retry',
				{
					position: toast.POSITION.TOP_CENTER
				}
			);
			return {
				...state,
				status: 'ERROR',
				visible: false
			};
		}
		return null;
	}

	generateRandomPhoneNumbers = async () => {
		this.setState({
			visible: true,
			sorting: false,
			paginationStarted: false
		});
		const { generateRandomPhoneNumbers } = this.props;
		await generateRandomPhoneNumbers();
	};

	sortPhoneNumbersAscending = () => {
		const { phoneNumbers } = this.state;
		phoneNumbers &&
			this.setState({
				phoneNumbers: phoneNumbers.sort((a, b) => a - b),
				sorting: true
			});
		toast.success('Phone numbers sorted successfully in Ascending order', {
			position: toast.POSITION.TOP_RIGHT
		});
	};

	sortPhoneNumbersDescending = () => {
		const { phoneNumbers } = this.state;
		phoneNumbers &&
			this.setState({
				phoneNumbers: phoneNumbers.sort((a, b) => b - a),
				sorting: true
			});
		toast.success('Phone numbers sorted successfully in Descending order', {
			position: toast.POSITION.TOP_RIGHT
		});
	};

	handlePagination = async (selected) => {
		await this.setState({
			start: (selected + 1 - 1) * 5,
			end: (selected + 1) * 5,
			paginationStarted: true
		});
	};

	render() {
		const { visible, phoneNumbers, start, end } = this.state;
		const { generatedRandomPhoneNumbers } = this.props;

		return (
			<Fragment>
				<Helmet>
					<title>Random Phone Number Generator | An app that generates phone numbers</title>
				</Helmet>

				<div style={{ display: 'flex' }}>
					<ToastContainer />
					<div style={{ width: '20vw', height: '100vh', backgroundColor: 'plum' }}>
						<p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Sort Phone Numbers</p>
						<div style={{ textAlign: 'center' }}>
							<button
								type="button"
								style={{
									backgroundColor: 'gray',
									color: 'white',
									height: '7vh',
									width: '20vw',
									cursor: 'pointer',
									fontSize: 20
								}}
								onClick={this.sortPhoneNumbersAscending}
							>
								ASCENDING ORDER
							</button>

							<button
								type="button"
								style={{
									backgroundColor: 'green',
									color: 'white',
									height: '7vh',
									width: '20vw',
									cursor: 'pointer',
									fontSize: 20
								}}
								onClick={this.sortPhoneNumbersDescending}
							>
								DESCENDING ORDER
							</button>
						</div>
					</div>

					<div style={{ width: '80vw' }}>
						<div
							style={{
								textAlign: 'center',
								fontSize: 50,
								fontWeight: 'bold',
								fontFamilt: 'Arial',
								color: 'green'
							}}
						>
							RANDOM PHONE NUMBER GENERATOR
						</div>
						<br />
						<div style={{ textAlign: 'center' }}>
							<button
								type="button"
								style={{
									backgroundColor: 'green',
									color: 'white',
									height: '7vh',
									width: '20vw',
									borderRadius: 4,
									cursor: 'pointer',
									fontSize: 20
								}}
								onClick={this.generateRandomPhoneNumbers}
							>
								<Loader type="Circles" visible={visible} color="#00BFFF" height={40} width={40} />
								<span>{!visible && 'GENERATE PHONE NUMBERS'}</span>
							</button>
						</div>
						<br />
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
							<Card
								title="Total of Phone Numbers"
								cardValue={
									(generatedRandomPhoneNumbers &&
										generatedRandomPhoneNumbers.generatedPhoneNumbers.hasOwnProperty(
											'phoneNumbers'
										) &&
										generatedRandomPhoneNumbers.generatedPhoneNumbers.totalPhoneNumberGenerated) ||
									'0'
								}
							/>
							<Card
								title="Maximum Phone Number"
								cardValue={
									(generatedRandomPhoneNumbers &&
										generatedRandomPhoneNumbers.generatedPhoneNumbers.hasOwnProperty(
											'phoneNumbers'
										) &&
										generatedRandomPhoneNumbers.generatedPhoneNumbers.maximumNumber) ||
									'0'
								}
							/>
							<Card
								title="Minimum Phone Number"
								cardValue={
									(generatedRandomPhoneNumbers &&
										generatedRandomPhoneNumbers.generatedPhoneNumbers.hasOwnProperty(
											'phoneNumbers'
										) &&
										generatedRandomPhoneNumbers.generatedPhoneNumbers.minimumNumber) ||
									'0'
								}
							/>
						</div>
						<br />
						<div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
							List of Phone Numbers
						</div>
						<br />
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
							<div>
								<Table serialNumber={'S/N'} tableValue={'Phone Numbers'} />
								{phoneNumbers &&
									phoneNumbers
										.slice(start, end)
										.map((phoneNumber, index) => (
											<Table serialNumber={index + 1} tableValue={phoneNumber} />
										))}
								{phoneNumbers &&
								phoneNumbers.length > 0 && (
									<ReactPaginate
										previousLabel="&#8592;"
										nextLabel="&#8594;"
										breakLabel="..."
										breakClassName="break-me"
										pageCount={phoneNumbers ? phoneNumbers.length / 5 : 1}
										marginPagesDisplayed={2}
										pageRangeDisplayed={5}
										onPageChange={({ selected }) => this.handlePagination(selected)}
										containerClassName="pagination"
										subContainerClassName="pages pagination"
										activeClassName="active"
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	generatedRandomPhoneNumbers: state.generatedPhoneNumbers
});

export default connect(mapStateToProps, { generateRandomPhoneNumbers })(RandomPhoneNumberGenerator);
