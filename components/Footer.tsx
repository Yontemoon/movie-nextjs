import React from 'react';
import { Separator } from './ui/separator';
import GithubIcon from './icons/externalIcons/GithubIcon';
import LinkdinIcon from './icons/externalIcons/LinkdinIcon';

const Footer = () => {
    return (
        <>
            <Separator className='mt-10'/>
            <footer className='flex flex-col items-center gap-3 justify-between w-full text-sm py-3 md:flex-row md:items-center my-4'>
                <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/monte-yoon-a1108114a/" rel='noopener noreferrer' target="_blank">
                        <LinkdinIcon/>
                        

                    </a>
                    <a href="https://github.com/Yontemoon/movie-nextjs" rel='noopener noreferrer' target="_blank">
                        <GithubIcon/>
                    </a>
                </div>
                <div className='flex flex-col items-center'>
                    {/* <h2 className='uppercase mb-3'>Privacy Policy</h2> */}
                    <p className=''>This Website uses the TMDb API but is not endorsed or certified by TMDb.</p>
                </div>
                <div>
                    Monte Movies 2024
                </div>
            </footer>
        </>
    );
};

export default Footer;