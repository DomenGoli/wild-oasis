import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const FullPage = styled.div`
    hight: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    // 1. Load the authenticated user
    const { isLoading, isAuthenticated } = useUser();

    // 2. If there is NO authenticated user, redirect to the /login
    useEffect(function () {
        if (!isAuthenticated && !isLoading) navigate("/login");
    }, [isAuthenticated, isLoading, navigate]);
    // 3. While loading show spinner
    if (isLoading)
        return (
            <FullPage>
                <Spinner />
            </FullPage>
        );
    // 4. If there IS a user, render app
    if(isAuthenticated) return children;
}

export default ProtectedRoute;
