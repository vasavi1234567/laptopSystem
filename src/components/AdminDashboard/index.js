import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './index.css'

function AdminDashboard() {
    const [overview, setOverview] = useState({
        totalLaptops: 0,
        assignedLaptops: 0,
        availableLaptops: 0,
        laptopsUnderMaintenance: 0
    })
    const [laptops, setLaptops] = useState([])
    const [newLaptop, setNewLaptop] = useState({
        brand: "",
        model: "",
        serialNumber: "",
        purchaseDate: "",
    })
    const [assignLaptop, setAssignLaptop] = useState([])

    useEffect(() => {
        axios.get("http://localhost:7000/laptops").then((response) => {
            setLaptops(response.data)
            const assigned = response.data.filter((laptop) => laptop.assigned_to !== null).length
            const maintenance = response.data.filter((laptop) => laptop.status === "Maintenance").length
            setOverview({
                totalLaptops: response.data.length,
                assignedLaptops: assigned,
                availableLaptops: response.data.length - assigned - maintenance,
                laptopsUnderMaintenance: maintenance,
            })
        })
    }, [])

    const deleteLaptop = (id) => {
        axios
        .delete(`http://localhost:7000/laptops/${id}`
        .then(() => {
            alert("Laptop Deleteted")
            setLaptops(laptops.filter((laptop) => laptop.id !== id))
        })
        .catch((err) => console.error(err))
        )
    }

    const assignedLaptops = () => {
        axios
          .put(`http://localhost:7000/laptops/${assignLaptop.laptopId}`, {
            assigned_to: assignLaptop.employeeId,
          })
          .then(() => {
            alert("Laptop assigned")
            setAssignLaptop({laptopId: "", employeeId: ""})
          })
          .catch((err) => console.error(err))
    }

    return (
        <div className="admin-dashboard-conainer">
            <h1>Admin Dashboard</h1>
            <div className="overview-container">
                <h1>Overview cards</h1>
                <div className="content">Total laptops: {overview.totalLaptops}</div>
                <div className="content">Assigned laptops: {overview.assignedLaptops}</div>
                <div className="content">Available laptops: {overview.availableLaptops}</div>
                <div className="content">Laptops under maintenance: {overview.laptopsUnderMaintenance}</div>
            </div>
            <div>
                <h1>Manage Laptops</h1>
                <div>
                    <input type="text" placeholder="brand" value={newLaptop.brand} onChange={(event) => setNewLaptop({ ...newLaptop, brand: event.target.value})} />
                    <input type="text" placeholder="model" value={newLaptop.model} onChange={(event) => setNewLaptop({ ...newLaptop, model: event.target.value})} />
                    <input type="text" placeholder="serial number" value={newLaptop.serialNumber} onChange={(event) => setNewLaptop({ ...newLaptop, serialNumber: event.target.value})} />
                    <input type="date" placeholder="purchase date" value={newLaptop.purchaseDate} onChange={(event) => setNewLaptop({ ...newLaptop, purchaseDate: event.target.value})} />
                </div>
            </div>
        </div>
    )

}

export default AdminDashboard
