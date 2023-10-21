import {format} from "date-fns"
import { Timestamp } from 'firebase/firestore';

export const formatDate = (date) => {
    try{
        return (date instanceof Timestamp) ? format(date.toDate() , "hh:mm aa") : format(date, "hh:mm aa")
    }
    catch (e){
        if (e instanceof RangeError){
            return "Invalid date"
        }
    }
}