import { useState } from 'react'

const useInputLength = (initialValue, maxLength) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = evt => {
        if (evt.target.value.length < maxLength) {
            setValue(evt.target.value)
        }
    }

    return [value, handleChange, setValue]
}

export default useInputLength