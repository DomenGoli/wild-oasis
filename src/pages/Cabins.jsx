import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {


    useEffect(function () {
        getCabins().then((data) => console.log(data));
    }, []);
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-[3rem] font-bold">All cabins</h1>
                <CabinTableOperations />
                {/* <img src="https://fluxcwouorfsotwzorrh.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg"></img> */}
            </div>
            <div className="flex flex-col gap-[1.6rem]">
                <CabinTable />

                <AddCabin />
            </div>
        </>
    );
}

export default Cabins;

// const Row = styled.div`
//   display: flex;

//   ${(props) =>
//     props.type === "horizontal" &&
//     css`
//       justify-content: space-between;
//       align-items: center;
//     `}


// const Heading = styled.h1`
//   ${(props) =>
//     props.as === "h1" &&
//     css`
//       font-size: 3rem;
//       font-weight: 600;
//     `}

//   ${(props) =>
//     props.as === "h2" &&
//     css`
//       font-size: 2rem;
//       font-weight: 600;
//     `}
    
//     ${(props) =>
//     props.as === "h3" &&
//     css`
//       font-size: 2rem;
//       font-weight: 500;
//     `}
    
//   line-height: 1.4;
// `;