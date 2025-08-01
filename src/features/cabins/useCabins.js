import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
    const {
        isLoading,
        data: cabins,
        error,
    } = useQuery({
        queryKey: ["cabins"], // ID za ta data
        queryFn: getCabins, // mora returnat promise
    });

    return {isLoading, cabins, error}
}