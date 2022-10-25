import {roomsData} from '../data/roomsData';

export default function handler(req, res) {
    const {roomName} = req.query

    const filteredArray = roomsData.filter((room) => room.name === roomName);
    if (filteredArray.length === 0) {
        return res.status(404).json(null);
    }

    return res.status(200).json(filteredArray[0]);
}