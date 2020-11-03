import React, { useState } from 'react'

import { CountryDropdown } from 'react-country-region-selector'

//styles
import '../styles/CountryPicker.css'

const CountryPicker = ({ onChangeCountry }) => {

	const [state, changeState] = useState({ country: '' })

	const onChange = val => {
		onChangeCountry(val)
		changeState((prev) => ({
			...prev,
			country: val
		}))
	}

	const { country } = state
	return (
		<div>
			<CountryDropdown
				className="countryPicker"
				value={country}
				onChange={onChange}
			/>
		</div>
	)
}
export default CountryPicker