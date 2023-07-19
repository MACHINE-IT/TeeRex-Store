import React from 'react';
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from "@mui/material";

function Footer() {
    return (
        <div className="footer">
            <Grid spacing={3} className="footer-content">
                <p >
                    &copy; TeeRex Store - {new Date().getFullYear()}
                </p>
                <a href="https://www.linkedin.com/in/yogeshkumar08/" target='_blank' className='github-logo'>
                    <GitHubIcon size={25} />
                </a>
            </Grid>
        </div >
    )
}

export default Footer
