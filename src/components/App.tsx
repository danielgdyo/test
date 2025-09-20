import React, { useState } from 'react';

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Welcome to My React App</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default App;