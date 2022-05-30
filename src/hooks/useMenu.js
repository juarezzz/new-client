import { useState } from 'react'
import useToggle from './useToggle'

const useMenu = (initialValue) => {
    const [menuState, setMenuState] = useToggle(initialValue)
    const [opener, setOpener] = useState(null)
    return [menuState, setMenuState, opener, setOpener]
}

export default useMenu;