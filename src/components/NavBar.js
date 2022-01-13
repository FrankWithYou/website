import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780 px']: {
            flexDirection: "column"
        }
    },
    logo: {
        width: "15%",
        ['@media (max-width:780 px']: {
            display: "none"
        }
    },
    logoMobile:{
        width:"100%",
        display: "none",
        ['@media (max-width:780 px']: {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        ['@media (max-width:780 px']: {
            paddingBottom: "1rem"
        }
    },
})

export default function NavBar() {
    const classes = styles()
    return (
        <div>
            <Toolbar position = "sticky" color = "rgba(0, 0, 0, 0,877)" className = {classes.bar}>
                <img src = {logo} className= {classes.logo}/>
                <img src = {logoMobile} className = {classes.logoMobile}/>

                <Typography variant = "h6" className = {classes.menuItem}>
                    About
                </Typography>

                <Typography variant = "h6" className = {classes.menuItem}>
                    Blog
                </Typography>

                <Typography variant = "h6" className = {classes.menuItem}>
                    Careers
                </Typography>

                <Typography variant = "h6" className = {classes.menuItem}>
                    Demos
                </Typography>

                <Typography variant = "h6" className = {classes.menuItem}>
                    Contact Us
                </Typography>
                <CustomBtn txt="Trial Our Product"/>
            </Toolbar>
        </div>
    )
}
