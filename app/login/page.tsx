import React from 'react';
import CredentialsForm from '@/components/CredentialsForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { fetchData } from '@/library/db';
import { redirect } from 'next/navigation';

const LoginPage = async () => {

    
    return (
        <div>

            {/* TRY ONLCIK INSTEAD */}
            <CredentialsForm/>
        </div>
    );
};

export default LoginPage;