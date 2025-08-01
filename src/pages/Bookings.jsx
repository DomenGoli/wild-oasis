import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import { useEffect } from "react";
import { getBookings } from "../services/apiBookings";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
    // useEffect(function () {
    //     getBookings().then((data) => console.log(data));
    // }, []);
    return (
        <>
            <Row type="horizontal">
                <h1>All bookings</h1>
                <BookingTableOperations />
            </Row>
            <BookingTable />
        </>
    );
}

export default Bookings;
