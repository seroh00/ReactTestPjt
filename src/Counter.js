import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    // 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수입니다

    const onIncrease = () => {
        console.log('+1');
        setNumber(number + 1);
    }
    const onDecrease = () => {
        console.log('-1');
        setNumber(number -1);
    }
  return (
    <div>
      <h1>{ number }</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;