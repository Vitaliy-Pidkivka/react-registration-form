import React from 'react'
import Alert from 'react-bootstrap/Alert'

const CustomAlert = ({ variant, text }) => {
	return (
		<Alert
			className="mt-3 mb-3"
			variant={variant}
		>
			{text}
		</Alert>
	)
}

export default CustomAlert
