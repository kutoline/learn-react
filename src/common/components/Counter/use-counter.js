import { useState } from "react"

export const useCounter = (currentCount) => {
    const [count, setCount] = useState(currentCount);

    const setIncrement = () => setCount(count => count + 1)
    const setDecrement = () => setCount(count => count - 1);

    return {
        count,
        setDecrement,
        setIncrement
    }
}