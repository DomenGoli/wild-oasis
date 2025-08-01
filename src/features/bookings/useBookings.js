import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router";
import SortBy from "../../ui/SortBy";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();

    //FILTER
    const filterValue = searchParams.get("status");
    const filter =
        !filterValue || filterValue === "all"
            ? null
            : { field: "status", value: filterValue, method: "gte" };
    // : { field: "totalPrice", value: 5000, method: "gte" };
    // SORT
    const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
    const [field, direction] = sortByRaw.split("-");
    const sortBy = { field, direction };
    // PAGINATION
    const page = !searchParams.get("page")
        ? 1
        : Number(searchParams.get("page"));

    const {
        isLoading,
        data: { data: bookings, count } = {}, // data je async, za damo inital prazn object da ne breaka
        error,
    } = useQuery({
        queryKey: ["bookings", filter, sortBy, page], // ID za ta data // filter in sortBy, page so tukaj kot dependency array, kadar se spremeni, RQ refetcha
        queryFn: () => getBookings({ filter, sortBy, page }), // mora returnat promise
    });

    // PRE-FETCHING
    const pageCount = Math.ceil(count / PAGE_SIZE);
    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter, sortBy, page + 1],
            queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
        });
if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter, sortBy, page - 1],
            queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
        });
    return { isLoading, bookings, error, count };
}
