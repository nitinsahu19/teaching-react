// import { useState } from "react"

import { useState } from "react";

// const useLocalStorage = (key, inVaue) => {
//     const [value, setValue] = useState(() => {
//         const storagedValue = localStorage.getItem(key)
//         return storagedValue ? JSON.parse(storagedValue) : inVaue
//     })

//     localStorage.setItem(key , JSON.stringify(value))

//     return [value , setValue]

// }

// export default useLocalStorage;



const useLocalStorage = (key, inValue) => {
    const [value, setValue] = useState(() => {
        const storagedValue = localStorage.getItem(key);
        return storagedValue ? JSON.parse(storagedValue) : inValue
    })
    localStorage.setItem(key , JSON.stringify(value))
    return [value , setValue]
}

export default useLocalStorage