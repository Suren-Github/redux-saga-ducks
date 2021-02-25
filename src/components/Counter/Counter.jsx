import React, { useState } from 'react';
import { connect } from 'react-redux';

import Constants from './constants';

const Counter = (props) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        debugger;
        setCount(count + 1);
    }

    return (
        <>
            <div> Counter: {count}</div>
            <button data-test='tIncrement' onClick={() => increment()}>{Constants.increment}</button>
            <button data-test='tDecrement' onClick={() => setCount(count - 1)}>{Constants.decrement}</button>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);



