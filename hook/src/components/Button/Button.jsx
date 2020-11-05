import React, {useState} from 'react';

export function  Button () {
    // useState 这个hook相当于在class组件中的state变量
    const [buttonText, setButtonText] = useState('点击');

    function handleBtnClick () {
        setButtonText('终于点我了')
    }
    return (
        <div>
            <button onClick={handleBtnClick}>{buttonText}</button>
        </div>
    )
};
