import {roomsData} from './data/roomsData';


export default function handler(req, res) {
    const {limit} = req.query

    if (limit) {
        const limitedArray = roomsData.slice(0, limit);
        return res.status(200).json(limitedArray);
    }
    return res.status(200).json(roomsData);
}


// console.log("limit is:" + limit)

