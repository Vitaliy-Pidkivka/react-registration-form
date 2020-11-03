import React from 'react'
import MainContainer from './MainContainer'
import { NewForm } from './Form'
import { Link } from 'react-router-dom'

const Step2 = () => {
	return (
		<MainContainer>
			<NewForm formTitle="Step2">
				<Link to="/">Go to the first step</Link>
			</NewForm>
		</MainContainer>
	)
}

export default Step2
