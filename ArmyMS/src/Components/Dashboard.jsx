import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <Link to="/dashboard">CWC</Link>
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Soldier</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Unit</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Mission_type</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Mission_duration</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Equipment_type</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Equipment_info</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Training</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Training_duration</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
