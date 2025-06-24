import React, { useState } from 'react'

function Github() {
    const [input, setInput] = useState('')
    const onSumbit = (e) => {
        e.preventDefault();
    }

    const getGithub = () => {
        try {
            const url = ` https://api.github.com/users/${input}`
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data)
                    // setInput('')
                    setInput(data)
                })
        } catch (error) {
            console.log(error)
        }
        // fetch(`https://api.github.com/users/${input}`)

        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         setInput(data)
        //         // setInput('')
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    return (
        <>
            <div className='mt-10'>
                <h1 className='font-bold text-2xl '>Github Username Search App</h1>
                <form action="" onSubmit={onSumbit} className='mt-10 shadow-green-400 w-110 p-6 mx-auto shadow-2xl'>
                    <input onChange={(e) => setInput(e.target.value)} className='border-2 rounded-lg outline-0 mt-4 px-2 py-1' type="text" placeholder='Enter GitHub username' />
                    <button onClick={getGithub} className='mt-4 px-3 py-1 ms-3 bg-blue-600 text-white font-bold ' type='submit'>Submit</button>
                    {input && <div className='text-start mt-6'>
                        <p className='font-bold'>Username : {input.login}</p>
                        <p className='font-bold'>Repositories : {input.public_repos}</p>
                        <p className='font-bold'>Followers : {input.followers}</p>
                        <p className='font-bold'>Followers : {input.followers}</p>
                        <p className='font-bold'>Following : {input.following}</p>
                        <p className='font-bold'>URL : {input.url}</p>
                    </div>}
                </form>
            </div>

        </>
    )
}

export default Github
