import { roomsData } from './data/roomsData';

export default function handler(req, res) {
        res.status(200).json(roomsData);
}