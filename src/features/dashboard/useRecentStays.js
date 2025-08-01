import {useSearchParams} from "react-router"
import {subDays} from "date-fns"
import {useQuery} from "@tanstack/react-query"
import { getStaysAfterDate} from "../../services/apiBookings"

export function useRecentStays() {
    const [searchParams] = useSearchParams()


    const numDays = !searchParams.get('last') ? 7 : Number(searchParams.get("last"))

    const queryDate = subDays(new Date(), numDays).toISOString()

    const {isLoading, data: stays} = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ["stays", `last-${numDays}`]
    })

    const confirmedStays = stays?.filter(stay => stay.status === "checked-out")

    return {isLoading, stays, confirmedStays, numDays}
}