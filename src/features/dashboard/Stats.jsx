import Stat from "./Stat"
import {HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar} from "react-icons/hi2"
import { formatCurrency } from "../../utils/helpers"

function Stats({bookings, confirmedStays, numDays, cabinCount}) {
    // 1. bookings
    const numBookings = bookings.length

    // 2. total sales
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)

    // 3. checkins
    const checkIns = confirmedStays.length

    // 4. occ rate
    // num check in nights / all available nights(num days*num of cabins)

    const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays*cabinCount)
    console.log(bookings);

    return (
        <>
          <Stat title="Bookings" color="blue" icon={<HiOutlineBriefcase />} value={numBookings}/>  
          <Stat title="Sales" color="green" icon={<HiOutlineBanknotes />} value={formatCurrency(sales)}/>  
          <Stat title="Check ins" color="indigo" icon={<HiOutlineCalendarDays />} value={checkIns}/>  
          <Stat title="Occupancy rate" color="yellow" icon={<HiOutlineChartBar />} value={Math.round(occupation*100)+"%"}/>  
        </>
    )
}

export default Stats
