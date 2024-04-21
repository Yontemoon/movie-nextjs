import React from 'react';

const PersonLayoutPage = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='min-h-screen w-full lg:flex gap-10 my-5'>
            {children}
        </div>
    );
};

export default PersonLayoutPage;