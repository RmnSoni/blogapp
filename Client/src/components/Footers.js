import React from 'react'

export default function Footers() {
    return (

        <footer className="bg-gray-800 text-white p-4">

            <div className="container mx-auto text-center">

                <p>&copy; {new Date().getFullYear()} <a href='https://kushalsoni.in'>kushalsoni.in</a> | All rights reserved.</p>
                
            </div>

        </footer>
    )
}
