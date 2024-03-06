import React from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebsiteIcon from '@mui/icons-material/Language';

import './footer.css'

function contactMe() {
  return (
    <div className='footer'>
        <h3>Copyright © 2023 SONAL SANGVI</h3>
        <div className='social-media'>
          <HorizontalRuleIcon></HorizontalRuleIcon>
          <a href='#' target='_blank'><WebsiteIcon></WebsiteIcon></a>
          <a href='https://www.linkedin.com/in/sonal-sangvi/' target='_blank'><LinkedInIcon></LinkedInIcon></a>
          <a href='https://github.com/sonals58' target='_blank'><GitHubIcon></GitHubIcon></a>
          <a href='https://www.instagram.com/_.sonal.05/' target='_blank'><InstagramIcon></InstagramIcon></a>
          <HorizontalRuleIcon></HorizontalRuleIcon>
        </div>
        <div className='credits'>
          <h3>By</h3> 
          <h3 className='credits-name'> SONAL SANGVI</h3>
        </div>
    </div>
  )
}

export default contactMe