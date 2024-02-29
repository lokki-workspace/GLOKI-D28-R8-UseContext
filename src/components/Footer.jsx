// import { Link } from "react-router-dom"


// function Footer() {
//   return (
//     <>
//     <footer className="py-5 bg-dark">
//         <div className="container">
//             <p className="m-0 text-center text-white">Copyright <Link to={"mailTo:vijaymayhul@gmail.com"}>©vijaymayhul@gmail.com</Link> 2024</p>
//         </div>
//     </footer>
//     </>
//   )
// }

// export default Footer


import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="py-5 bg-dark">
        <div className="container">
            <p className="m-0 text-center text-white">
                Copyright <a href="mailTo:vijaymayhul@gmail.com">©lokkiWebDesign</a> 2024
            </p>
        </div>
    </footer>
    </>
  )
}

export default Footer