// social media section
// it basically a link that has icon with link
// github, twitter, linkedin, instagram, discord
// the icon is using lucide-react
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";

export default function SocialSection() {
  return (
    <div className='mt-5 flex flex-col items-start gap-3'>
      <div className='flex gap-3'>
        <a
          href='//github.com/akrindev'
          target='__blank'
          className='text-gray-500 hover:text-gray-700'>
          <GithubIcon size={24} />
        </a>
        <a
          href='//twitter.com/syakirinam'
          target='__blank'
          className='text-gray-500 hover:text-gray-700'>
          <TwitterIcon size={24} />
        </a>
        <a
          href='//linkedin.com/in/syakirin-amin'
          target='__blank'
          className='text-gray-500 hover:text-gray-700'>
          <LinkedinIcon size={24} />
        </a>
        {/* <a
          href='//instagram.com/akrinart'
          target='__blank'
          className='text-gray-500 hover:text-gray-700'>
          <InstagramIcon size={24} />
        </a> */}
      </div>
    </div>
  );
}
