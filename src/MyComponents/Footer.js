import React from 'react'


export const Footer = () => { 
    let c={
        position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-3" style={c}>
            <p className="text-center">
            Copyright &copy; ARgone
            </p>
        </footer>
    )
}
