import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import { ExportToCsv } from 'export-to-csv';
import ReactPaginate from 'react-paginate';
import Loader from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../App.css';
import Card from '../components/Card';
import Table from '../components/Table';
import generatesRandomPhoneNumbers from '../actions/generateRandomPhoneNumbers';
import Button from '../components/Button';
import SideNav from '../components/SideNav';

export class RandomPhoneNumberGenerator extends Component {
	state = {
		status: '',
		visible: false,
		phoneNumbers: undefined,
		sorting: false,
		start: 0,
		end: 5,
		paginationStarted: false,
		displaySideNav: false
	};

	static getDerivedStateFromProps(props, state) {
		if (
			props.generatedRandomPhoneNumbers &&
			props.generatedRandomPhoneNumbers.status === 'SUCCESS' &&
			!state.sorting &&
			!state.paginationStarted
		) {
			return {
				...state,
				status: 'SUCCESS',
				phoneNumbers: props.generatedRandomPhoneNumbers.generatedPhoneNumbers.phoneNumbers,
				visible: false
			};
		} else if (props.generatedRandomPhoneNumbers && props.generatedRandomPhoneNumbers.status === 'ERROR') {
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
		const { generatesRandomPhoneNumbers } = this.props;
		await generatesRandomPhoneNumbers();
	};

	sortPhoneNumbersAscending = () => {
		const { phoneNumbers } = this.state;
		if (!phoneNumbers) {
			toast.error('Please generate phone numbers first', {
				position: toast.POSITION.TOP_RIGHT
			});
		} else {
			phoneNumbers &&
				this.setState({
					phoneNumbers: phoneNumbers.sort((a, b) => a - b),
					sorting: true
				});
			toast.success('Phone numbers sorted successfully in Ascending order', {
				position: toast.POSITION.TOP_RIGHT
			});
		}
	};

	sortPhoneNumbersDescending = () => {
		const { phoneNumbers } = this.state;
		if (!phoneNumbers) {
			toast.error('Please generate phone numbers first', {
				position: toast.POSITION.TOP_RIGHT
			});
		} else {
			phoneNumbers &&
				this.setState({
					phoneNumbers: phoneNumbers.sort((a, b) => b - a),
					sorting: true
				});
			toast.success('Phone numbers sorted successfully in Descending order', {
				position: toast.POSITION.TOP_RIGHT
			});
		}
	};

	handlePagination = async (selected) => {
		await this.setState({
			start: (selected + 1 - 1) * 5,
			end: (selected + 1) * 5,
			paginationStarted: true
		});
	};

	generateCSV = () => {
		const { phoneNumbers } = this.state;
		if (!phoneNumbers) {
			toast.error('Please generate phone numbers first', {
				position: toast.POSITION.TOP_RIGHT
			});
		} else {
			const csvExporter = new ExportToCsv({
				fieldSeparator: ',',
				quoteStrings: '"',
				decimalSeparator: '.',
				showLabels: true,
				showTitle: true,
				title: 'Phone Numbers',
				useTextFile: false,
				useBom: true,
				useKeysAsHeaders: false
			});
			csvExporter.generateCsv(phoneNumbers);
		}
	};

	displaySideNav = () => {
		this.setState({
			displaySideNav: !this.state.displaySideNav,
			status: 'displaying side nav'
		});
	};

	render() {
		const { visible, phoneNumbers, start, end, displaySideNav } = this.state;
		const { generatedRandomPhoneNumbers } = this.props;

		return (
			<Fragment>
				<Helmet>
					<title>Random Phone Number Generator | An app that generates phone numbers</title>
				</Helmet>

				<div style={{ display: 'flex', fontFamily: 'Verdana', color: 'rgba(90, 14, 90, 0.8)' }}>
					<ToastContainer />
					{displaySideNav && (
						<SideNav
							className={'side-nav-mobile'}
							displaySideNav={this.displaySideNav}
							sortPhoneNumbersAscending={this.sortPhoneNumbersAscending}
							sortPhoneNumbersDescending={this.sortPhoneNumbersDescending}
							generateCSV={this.generateCSV}
						/>
					)}

					<SideNav
						className={'side-nav'}
						displaySideNav={this.displaySideNav}
						sortPhoneNumbersAscending={this.sortPhoneNumbersAscending}
						sortPhoneNumbersDescending={this.sortPhoneNumbersDescending}
						generateCSV={this.generateCSV}
					/>

					<div style={{ width: '80vw' }}>
						{/* RPNG */}
						<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
							<div className="hamburger" onClick={this.displaySideNav}>
								&#9776;
							</div>
							<div
								style={{
									textAlign: 'center',
									fontSize: 50,
									fontWeight: 'bold',
									fontFamily: 'Verdana',
									color: 'rgba(90, 14, 90, 0.8)'
								}}
							>
								RPNG
							</div>
						</div>
						<br />

						{/* Generate phone numbers button */}
						<div className="generate-phone-number-button">
							<span className="shift-generate-phone-number-button" />
							<Button
								btnBackgroundColor="rgba(90, 14, 90, 0.8)"
								btnText={!visible && 'GENERATE PHONE NUMBERS'}
								onClick={this.generateRandomPhoneNumbers}
								border="0"
							>
								<Loader type="Circles" visible={visible} color="#00BFFF" height={40} width={40} />
							</Button>
						</div>
						<br />

						{/* Cards */}
						<div className="cards-space">
							<Card
								title="Total of Phone Numbers"
								cardValue={
									(generatedRandomPhoneNumbers &&
										generatedRandomPhoneNumbers.generatedPhoneNumbers.hasOwnProperty(
											'phoneNumbers'
										) &&
										generatedRandomPhoneNumbers.generatedPhoneNumbers.totalPhoneNumbersGenerated) ||
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
										`0${generatedRandomPhoneNumbers.generatedPhoneNumbers.maximumNumber}`) ||
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
										`0${generatedRandomPhoneNumbers.generatedPhoneNumbers.minimumNumber}`) ||
									'0'
								}
							/>
						</div>
						<br />

						{/* List of Phone Numbers */}
						<div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
							<span className="list-of-numbers-text">List of Phone Numbers</span>
						</div>
						<br />
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
							<div className="phone-number-space">
								<Table serialNumber={'S/N'} tableValue={'Phone Numbers'} />
								{phoneNumbers &&
									phoneNumbers
										.slice(start, end)
										.map((phoneNumber, index) => (
											<Table serialNumber={index + 1} tableValue={phoneNumber} />
										))}
								<span className="pagination-block">
									{
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
									}
								</span>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ generatedPhoneNumbers }) => ({
	generatedRandomPhoneNumbers: generatedPhoneNumbers
});

export default connect(mapStateToProps, { generatesRandomPhoneNumbers })(RandomPhoneNumberGenerator);
