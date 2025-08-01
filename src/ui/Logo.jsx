// import styled from "styled-components";

// const StyledLogo = styled.div`
//   text-align: center;
// `;

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;

function Logo() {
    return (
        <div className="flex justify-center content-center">
            <img
                className="h-[9.6rem] w-auto max-w-[100%]"
                src="/logo-light.png"
                alt="Logo"
            />
        </div>
    );
}

export default Logo;
