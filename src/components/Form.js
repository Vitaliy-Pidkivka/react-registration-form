import React from 'react'
import Form from 'react-bootstrap/Form'

export const NewForm = ({ children, formTitle, onSubmit, ...props }) => {

	return (
		<Form
			onSubmit={onSubmit}
			noValidate
			className="p-3"
			{...props}
		>
			<fieldset>
				<legend className="text-center">{formTitle}</legend>
			</fieldset>
			{children}
		</Form>
	)
}
