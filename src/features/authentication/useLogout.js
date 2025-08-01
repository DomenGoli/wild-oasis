import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries();// odstrani tudi user logedin session v localstorageu
            navigate("/login", { replace: true }); // replace:true omogoci BACK v browserju
        },
    });

    return { logout, isLoading };
}
