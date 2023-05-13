import React from 'react'
import { BsTwitter, BsFileEarmark, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsFileEarmark />
      </div>
      <div>
        <BsGithub />
      </div>
    </div>
  )
}

export default SocialMedia;
