import { rooms } from './data/rooms';

export default function handler(req, res) {
        res.status(200).json(rooms);
}