import { useEffect, useRef } from "react";

export function useOutsideClick(handler) {
    const ref = useRef(); // za rocno izbiro elementa

    //Effekt za zapiranje modala z klikom izvn okna. Mora biti posebaj, ker moramo tudi onemogocit funkcijo z clean
    useEffect(
        function () {
            function handleClick(e) {
                if (ref.current && !ref.current.contains(e.target)) handler();
            }

            document.addEventListener("click", handleClick, true); // true; event bo handlan v capturing phase, namesto v bubling

            return () =>
                document.removeEventListener("click", handleClick, true);
        },
        [handler]

    );
    return {ref}
}
