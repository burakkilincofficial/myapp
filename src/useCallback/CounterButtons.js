import React from 'react';

const CounterButtons = React.memo(({increment,decrement}) => {
    return (
        <>
            <button className="btn-success" onClick={increment}>Increment</button>
            <button className="btn-danger" onClick={decrement}>Decrement</button>
        </>
    );
});

export default CounterButtons;