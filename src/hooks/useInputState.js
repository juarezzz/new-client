import { useState } from "react";
const useInputState = initialVal => {
    const [value, setValue] = useState(initialVal)

    const handleChange = evt => {
        setValue(evt.target.value)
    }

    return [value, handleChange, setValue]
}

export default useInputState