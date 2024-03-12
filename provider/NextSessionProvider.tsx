"use client"

import { SessionProvider  } from "next-auth/react";

type PropTypes = {
    children?: React.ReactNode
}

const NextSessionProvider = ({children}: PropTypes) => {
    return (
    <SessionProvider>
        {children}
    </SessionProvider>
    );
};

export default NextSessionProvider;