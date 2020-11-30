import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import {useSelector,useDispatch}from 'react-redux'
import { incrementAction,decrementAction } from './Redux/action';

function App(props) {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  
  return (
    <div className="d-flex justify-content-center text-center">
      <div className="card bg-light mt-5" style={{ width: "20rem" }}>
        <div className="card-header">Counter</div>
        <div className="card-body">
          <button type="button" class="btn btn-light btn-lg mx-3" onClick={()=>dispatch(incrementAction())}><FontAwesomeIcon size="1px" icon={faPlus}/></button>
          <button type="button" class="btn btn-dark  btn-lg mx-3">{count}</button>
          <button type="button" class="btn btn-light btn-lg mx-3" onClick={()=>dispatch(decrementAction())}><FontAwesomeIcon size="1px" icon={faMinus}/></button>
        </div>
      </div>
    </div>  
  );
};




export default App;
