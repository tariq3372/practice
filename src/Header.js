import React from 'react'
import { Box } from './HeaderStyles'

const Header = () => {
    return (
        <Box>
            <h1 style={{
                color: "green",
                textAlign: "center",
                marginBottom: "5px"
            }}>
                MVP-APPS
            </h1>
        </Box>
    )
}

export default Header