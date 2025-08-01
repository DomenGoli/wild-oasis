import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import React from "react";

function Dashboard() {
    return (
        <>
            <Row type="horizontal">
                <h1>Dashboard</h1>
                <DashboardFilter />
            </Row>
            <DashboardLayout />
        </>
    );
}

export default Dashboard;
