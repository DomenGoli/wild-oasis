import {useMutation, useQueryClient} from "@tanstack/react-query"
import {useNavigate} from "react-router"
import { login as loginApi } from "../../services/apiAuth"
import toast from "react-hot-toast"

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const {mutate: login, isLoading} = useMutation({
        mutationFn:({email, password}) => loginApi({email, password}),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user) // za hitrejse nadaljno loadanje, iz cacha namesto supabase
            navigate("/dashboard", {replace: true}) // replace:true omogoci BACK v browserju
        },
        onError: (err) => {
            console.log("ERROR", err);
toast.error("Provided email or password are incorrect")
        }
    })

    return {login, isLoading}
}