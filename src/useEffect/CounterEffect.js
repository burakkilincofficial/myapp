import React, {useEffect} from 'react';

const CounterEffect = () => {
    useEffect(() => {

        return () => {
        }
    }, []);
    return (
        <>I am a counter</>
    );
};

export default CounterEffect;