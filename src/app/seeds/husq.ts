import {Husq} from "../interfaces/husq";
import {v4 as uuidv4} from "uuid";

export const initialHusqs: Husq[] = [
  {
    id: '1',
    userId: '1',
    time: new Date(),
    message: 'Testing 123123123'
  },
  {
    id: '2',
    userId: '2',
    time: new Date(),
    message: 'Test 456456',
    repliesTo: '1'
  },
  {
    id: '3',
    userId: '3',
    time: new Date(),
    message: 'Test 789789'
  },
]


