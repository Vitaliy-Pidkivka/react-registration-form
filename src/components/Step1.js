import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Map from './Map'
import MainContainer from './MainContainer'
import { NewForm } from './Form'
import DatePicker from 'react-date-picker'
import Form from 'react-bootstrap/Form'
import CountryPicker from './CountryPicker'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import CustomAlert from './CustomAlert'
import { useHistory } from 'react-router-dom'
import { getUserInfo } from '../redux/reducers/formReducer'
import { setFormData } from '../redux/actions'


import '../styles/DatePicker.css'
import '../styles/HelperStyles.css'

const schema = yup.object().shape({
	firstName: yup.string()
		.matches(/^([^0-9]*)$/, 'First name shouldn\'t contain numbers')
		.required('First name is a required field'),
	lastName: yup.string()
		.matches(/^([^0-9]*)$/, 'Last name shouldn\'t contain numbers')
		.required('Last name is a required field'),
	reportSubject: yup.string()
		.required('Report Subject is a required field'),
	phoneNumber: yup.string()
		.required('Phone number is a required field')
		.matches(/[£0-9\+]/, 'Phone number should contain only numbers'),
	email: yup.string()
		.email('Email should have correct format')
		.required('Email is a required field')
})

const normalizePhoneNumber = value => {
	const phoneNumber = parsePhoneNumberFromString(value)
	if (!phoneNumber) {
		return value
	}
	return (
		phoneNumber.formatInternational()
	)
}

const Step1 = () => {
	const history = useHistory()

	const dispatch = useDispatch()
	const formData = useSelector(getUserInfo)

	useEffect(() => {

	}, [])

	const [date, setDate] = useState(new Date())
	const [country, setCountry] = useState('')


	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			firstName: formData?.firstName && formData.firstName,
			lastName: formData?.lastName && formData.lastName,
			reportSubject: formData?.reportSubject && formData.reportSubject,
			phoneNumber: formData?.phoneNumber && formData.phoneNumber,
			email: formData?.email && formData.email
		},
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	const onChangeCountry = country => {
		setCountry(country)
	}

	const onSubmit = data => {
		const newData = {
			...data,
			country,
			date: date.toDateString().slice(4, 16)
		}
		console.log(newData)
		dispatch(setFormData(newData))
		history.push('./step2')
	}

	return (
		<MainContainer>
			<Map/>
			<NewForm
				formTitle="Step 1"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Form.Group controlId="firstName">
					<Form.Label>First name *</Form.Label>
					<Form.Control
						type="text"
						name="firstName"
						placeholder="First Name"
						ref={register}
						isInvalid={!!errors.firstName}
					/>
					{!!errors.firstName && (
						<CustomAlert
							text={errors.firstName.message}
							variant={'danger'}
						/>
					)}
				</Form.Group>
				<Form.Group controlId="lastName">
					<Form.Label>Last name *</Form.Label>
					<Form.Control
						ref={register}
						type="text"
						name="lastName"
						placeholder="Last Name"
						isInvalid={!!errors.lastName}
					/>
					{!!errors.lastName && (
						<CustomAlert
							text={errors.lastName.message}
							variant={'danger'}
						/>
					)}
				</Form.Group>
				<Form.Group controlId="birthday">
					<Form.Label>Birthday *</Form.Label>
					<DatePicker
						className="w-100"
						onChange={setDate}
						value={date}
						id="birthday"
						name="birthday"
						validate={true}
					/>
				</Form.Group>
				<Form.Group controlId="reportSubject">
					<Form.Label>Report Subject *</Form.Label>
					<Form.Control
						ref={register}
						type="text"
						name="reportSubject"
						placeholder="Report subject"
						isInvalid={!!errors.reportSubject}
					/>
					{!!errors.reportSubject && (
						<CustomAlert
							text={errors.reportSubject.message}
							variant={'danger'}
						/>
					)}
				</Form.Group>
				<Form.Group controlId="phoneNumber">
					<Form.Label>Phone number *</Form.Label>
					<Form.Control
						ref={register}
						type="tel"
						name="phoneNumber"
						placeholder="Phone number"
						isInvalid={!!errors.phoneNumber}
						onChange={e => {
							e.target.value = normalizePhoneNumber(e.target.value)
						}}
					/>
					{!!errors.phoneNumber && (
						<CustomAlert
							text={errors.phoneNumber.message}
							variant={'danger'}
						/>
					)}
				</Form.Group>
				<Form.Group controlId="reportSubject">
					<Form.Label>Country *</Form.Label>
					<CountryPicker
						onChangeCountry={onChangeCountry}
					/>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email *</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Email"
						ref={register}
						isInvalid={!!errors.email}
					/>
					{!!errors.email && (
						<CustomAlert
							text={errors.email.message}
							variant={'danger'}
						/>
					)}
				</Form.Group>
				<Button
					className="ml-auto d-block"
					type="submit"
				>
					Next
				</Button>
			</NewForm>
		</MainContainer>
	)
}

export default Step1
