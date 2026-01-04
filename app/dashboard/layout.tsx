import React from 'react'
import Card from '../components/Card';

const DashboardLayout = ({
    children,
    users,
    revenue,
    notifications,
    login
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode
    login: React.ReactNode

}) => {
    const loggedIn = false; // Replace with actual authentication logic

    return loggedIn ? (
        // <div>style this   again</div>
        <div>
            
            <div>{children}</div>
            <div className='flex gap-4'>
                <div>
                   
                        {revenue}
                  
                </div>
                <div className='flex flex-col gap-4'>
                        <div>
                    {users}

                </div>

                <div>
                    {notifications}
                </div>
                </div>
                
            </div>

        </div>
    ):(
        <Card >{login}</Card>
    )
}

export default DashboardLayout