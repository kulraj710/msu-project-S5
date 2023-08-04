import {format} from "date-fns"

export const formatDate = (date) => {
    try{
        return format(date , "hh:mm aa")
    }
    catch (e){
        if (e instanceof RangeError){
            return "Invalid date"
        }
    }
}