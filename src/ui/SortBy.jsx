import { useSearchParams } from "react-router"
import Select from "./Select"

function SortBy({options}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentSortBy = searchParams.get("sortBy") || ""

function handleChange(e) {
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select options={options} type="white" onChange={handleChange} value={currentSortBy}/>    
    )
}

export default SortBy
