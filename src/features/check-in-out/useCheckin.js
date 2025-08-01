import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useCheckin () {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate: checkin, isLoadin: isCheckingIn} = useMutation({
        mutationFn: ({bookingId, breakfast}) => updateBooking(bookingId, {status: 'checked-in', isPaid: true, ...breakfast}),
        onSuccess: (data) => { // data pride returnan iz updateBooking
            toast.success(`Booking #${data.id} successfully checked in`)
            queryClient.invalidateQueries({active: true})
            navigate("/")
        },
        onError: () => toast.error("There was an error while checking in")
    })

    return {checkin, isCheckingIn}


}