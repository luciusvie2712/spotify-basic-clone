import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'

const Display = () => {
    return (
        <div className='w-[100%] bg-[#121212] rounded m-2 px-6 pt-4 overflow-auto lg:w-[75%] lg:ml-0 text-white'>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default Display