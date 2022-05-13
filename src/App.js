import './App.css';
import React, {useCallback, useState} from 'react';
import CounterButtons from "./useCallback/CounterButtons";
import Posts from "./useEffect/Posts";
import CounterEffect from "./useEffect/CounterEffect";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./useEffect/Employees";
import Comments from "./useEffect/Comments";
import Profiles from "./useEffect/Profiles";


const initialPerson = {
    name: 'Joe',
    age: '26'
}

const Counter = ({setCount}) => {
    return <button className="btn-success" onClick={() => setCount(10)}>Make me 10</button>
}

const App = () => {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState(initialPerson);
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(false);
    const [visiblePosts, setVisiblePosts] = useState(false);
    const [visibleEmployees, setVisibleEmployees] = useState(false);
    const [visibleComments, setVisibleComments] = useState(false);
    const [visibleProfiles, setVisibleProfiles] = useState(false);

    const handleClick = () => {
        setPerson({...person, surname: 'Smith'});
    }

    const increment = useCallback(() => {
        setCount((c) => c + value);
    }, [value]);

    const decrement = useCallback(() => {
        setCount((c) => c - value);
    }, [value]);

    //for debugging purposes
    // useEffect(() => {
    //     console.log('visiblePosts', visiblePosts);
    // }, [visible]);

    return <div className="container">
        {JSON.stringify(person)}
        <br/>
        <button className="btn-secondary" onClick={handleClick}>Set Surname</button>
        <br/>
        <div>
            <button className="btn-success" onClick={() => setCount(count + 1)}>+</button>
            <button className="btn-danger" onClick={() => setCount(count - 1)}>-</button>
        </div>
        {count}
        <br/>
        <Counter setCount={setCount}/>
        <h2>useState Sample Finish</h2>
        <CounterButtons increment={increment} decrement={decrement}/>
        <input type="number" onChange={(e) => setValue(+e.target.value)}/>
        <br/>
        {count}
        <br/>
        <h2>useCallBack Sample Finish</h2>
        <button className="btn-warning" onClick={() => setVisible((v) => !v)}>Toggle</button>
        {visible && <CounterEffect/>}
        <h2>useEffect Sample Finish</h2>
        <button className="btn-primary" onClick={() => setVisiblePosts((v) => !v)}>Get Posts</button>
        {visiblePosts && <Posts/>}
        <br/>
        <button className="btn-primary" onClick={() => setVisibleEmployees((v) => !v)}>Get Employees</button>
        {visibleEmployees && <Employees/>}
        <br/>
        <button className="btn-primary" onClick={() => setVisibleComments((v) => !v)}>Get Comments</button>
        {visibleComments && <Comments/>}
        <br/>
        <button className="btn-primary" onClick={() => setVisibleProfiles((v) => !v)}>Get Profiles</button>
        {visibleProfiles && <Profiles/>}

        <h2>useEffect with Api Finish</h2>


    </div>
}

export default App;
