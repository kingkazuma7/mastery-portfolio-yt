import React from 'react'
import { BsTwitter, BsFileEarmark, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  // github
  function onClickLinkGithub () {
    window.open("https://github.com/kingkazuma7");
  }

  return (
    <div className='app__social'>
      {/* <div>
        <BsTwitter />
      </div> */}
      {/* <div>
        <BsFileEarmark />
      </div> */}
      <div>
        <BsGithub onClick={onClickLinkGithub} />
      </div>
    </div>
  )
}

export default SocialMedia;
