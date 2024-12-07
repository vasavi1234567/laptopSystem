import React, {useEffect, useState} from 'react'
import axios from 'axios'

function EmployeePortal({employeeId}) {
    const [assignedLaptop, setAssignedLaptop] = useState(null)
    
    //Details of assigned laptop
    useEffect(() => {
        axios
        .get('https://localhost:5000/employees/${employeeId}/laptop')
        .then((response) => setAssignedLaptop(response.data))
        .catch((err) => console.error("Assigned laptop error", err))
    }, [employeeId])

    return (
        <div className="employee-portal-container">
            <h1>Employee Portal</h1>
            <div>
                <h1>Assign Laptops</h1>
                <div>
                    <input type="text" placeholder="brand" value={assignedLaptop.brand} />
                    <input type="text" placeholder="model" value={assignedLaptop.model} />
                    <input type="text" placeholder="serial number" value={assignedLaptop.serialNumber} />
                    <input type="text" placeholder="condition" value={assignedLaptop.condition} />
                </div>
            </div>
            <div>
                <h1>Assign Laptops</h1>
                <div>
                    <input type="text" placeholder="brand" value={assignedLaptop.brand} />
                    <input type="text" placeholder="model" value={assignedLaptop.model} />
                    <input type="text" placeholder="serial number" value={assignedLaptop.serialNumber} />
                    <input type="text" placeholder="condition" value={assignedLaptop.condition} />
                </div>
            </div>
            <div>
                <h1>Issue Report</h1>
                <input type="text" />
            </div>
        </div>
    )
}

export default EmployeePortal
