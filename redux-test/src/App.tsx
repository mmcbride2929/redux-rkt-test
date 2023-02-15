import { useSelector } from 'react-redux'
import './App.css'

const App = (): React.ReactElement => {
  const { isTrue } = useSelector((state) => state.switch)
  console.log(isTrue)
  return <div className="App">{isTrue.toString()}</div>
}

export default App
