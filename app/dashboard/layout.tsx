import React from 'react'

const DashboardLayout = ({
    children,
    users,
    revenue,
    notifications
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode

}) => {
    return (
        // <div>style this   again</div>
        <div>
            
            <div>{children}</div>
            <div className='flex gap-4'>
                <div>
                    <div>
                        {revenue}
                    </div>
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
    )
}

export default DashboardLayout