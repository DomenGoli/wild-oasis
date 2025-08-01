import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import CabinRow from './CabinRow'
import { useCabins } from "./useCabins";
import { getCabins } from "../../services/apiCabins";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);
//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

function CabinTable() {
    const {isLoading, cabins} = useCabins()
    

    if (isLoading) return <Spinner />;

    return (
        <div
            role="table"
            className="border border-solid border-[var(--color-grey-200)] text-[1.4rem] bg-[var(--color-grey)] rounded-[7px] overflow-hidden"
        >
            <header
                role="row"
                className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]"
            >
                <div></div>
                <div>Cabin</div>
                <div>Capacity</div>
                <div>Price</div>
                <div>Discount</div>
                <div></div>
                <div></div>
                <div></div>
            </header>
            {cabins.map(cabin => <CabinRow cabin={cabin} key={cabin.id}/>)}
        </div>
    );
}

export default CabinTable;
