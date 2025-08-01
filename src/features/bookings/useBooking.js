import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router";

export function useBooking() {
    const {bookingId} =useParams()

    const {
        isLoading,
        data: booking,
        error,
    } = useQuery({
        queryKey: ["booking", bookingId], 
        queryFn: () => getBooking(bookingId), retry: false // mora returnat promise
    });

    return {isLoading, booking, error}
}