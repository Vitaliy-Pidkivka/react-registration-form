import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Step1 from './components/Step1'
import Step2 from './components/Step2'

const SharePage = () => <>sharePage</>
const FinalList = () => <>finalList</>

function App() {
	return (
		<>
			<Header/>
			<Router>
				<Switch>
					<Route exact path="/" component={Step1}/>
					<Route path="/step2" component={Step2}/>
					<Route path="/sharePage" component={SharePage}/>
					<Route path="/finalList" component={FinalList}/>
				</Switch>
			</Router>
		</>
	)
}

export default App
