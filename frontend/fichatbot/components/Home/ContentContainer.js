import React from 'react'
import Navbar from './Navbar'
import UserInput from './UserInput'
import Content from './Content'

const ContentContainer = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Content/>
            </div>
            <div>
                <UserInput />
            </div>

        </div>
    )
}

export default ContentContainer
