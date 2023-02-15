import './App.css'

import { useAppSelector, useAppDispatch } from '../src/app/hooks'
import {
  updateIsTrue,
  selectIsTrue,
} from './features/application/applicationSlice'

const App = (): React.ReactElement => {
  const isTrue = useAppSelector(selectIsTrue)
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <>{isTrue.toString()}</>
      <>
        <button onClick={() => dispatch(updateIsTrue())}>hello</button>
      </>
    </div>
  )
}

export default App
