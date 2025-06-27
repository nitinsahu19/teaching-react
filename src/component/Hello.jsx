import React, { useState } from 'react'

const Hello = () => {
    const [user, setUser] = useState()

    const Names = [

        {
            id: 1,
            name: 'Raju',
            Age: 20,
            Address: 'Jaipur'
        },

        {
            id: 2,
            name: 'Rahul',
            Age: 18,
            Address: 'Ghinoi'
        },

        {
            id: 3,
            name: 'Mukesh',
            Age: 66,
            Address: 'chomu'
        },

        {
            id: 4,
            name: 'Vikas',
            Age: 20,
            Address: 'Delhi'
        },

        {
            id: 5,
            name: 'Pooran',
            Age: 50,
            Address: 'jaipur'
        },
    ]
    return (
        <>

            {/* <div className='w-100 h-50 border-2 p-5 mt-10 ml-10'>
                {["Rahul", "Rakesh", "Suresh", "Vikas"].map((name) => <div>
                    <div key={name.id} className='p-1 flex gap-3'>
                        <input defaultChecked={name === 'Suresh'} type="radio" checke id={name} onChange={(e) => setUser(e.target.value)} name='user' value={name} />
                        <label className='cursor-pointer' htmlFor={name}>{name}</label>
                    </div>

                </div>)}
                <h1 className='text-2xl font-bold text-green-400 ml-10'>Salect Your Name:-{user}</h1>
            </div>  */}

            {/* <table>
                <thead>
                    <tr>
                        <td>{user.id}</td>
                    </tr>
                </thead>
            </table>

            <div>
                {Names.map((item) => <div>
                    <h1>{item.id}</h1>
                </div>)}
            </div> */}
        </>
    )
}

export default Hello
