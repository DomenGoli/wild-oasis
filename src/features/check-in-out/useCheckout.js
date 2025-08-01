import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useCheckout () {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate: checkout, isLoadin: isCheckingOut} = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId, {status: 'checked-out'}),
        onSuccess: (data) => { // data pride returnan iz updateBooking
            toast.success(`Booking #${data.id} successfully checked out`)
            queryClient.invalidateQueries({active: true})
            navigate("/")
        },
        onError: () => toast.error("There was an error while checking out")
    })

    return {checkout, isCheckingOut}


}