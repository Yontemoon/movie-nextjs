import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className=' h-full min-h-screen flex flex-col items-center min-w-[384px]'>
            {children}
        </div>
    );
};

export default layout;