import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'
import { mergeClasses } from '@material-ui/styles'
import CustomBtn from './CustomBtn'

const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 5rem 0 5rem"
    },
    item: {
        paddingTop: "1rem"
    }
})
export default function Grid(props) {
    const {icon, title, btnTitle} = props;
    const classes = styles();
    return (
        <div className = {classes.wrapper}>
            <div className ={classes.item}>{icon}</div>
            <Typography className = {classes.item} variant = "h5">{title}</Typography>
            <div className = {classes.item}>
                <CustomBtn txt= {btnTitle}/>
            </div>
        </div>
    )
}
