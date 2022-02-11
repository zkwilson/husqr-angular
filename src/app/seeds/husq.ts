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
    message: 'This is the first reply to Jon',
    repliesTo: '1'
  },
  {
    id: '3',
    userId: '3',
    time: new Date(),
    message: 'Test 789789'
  },
  {
    id: '4',
    userId: '3',
    time: new Date(),
    message: 'This is the first reply to Zaeem',
    repliesTo: '2'
  },
  {
    id: '5',
    userId: '1',
    time: new Date(),
    message: 'This is the second reply to Zaeem',
    repliesTo: '2'
  },
  {
    id: '6',
    userId: '1',
    time: new Date(),
    message: 'Reply to Allie on main page',
    repliesTo: '3'
  },
  {
    id: '7',
    userId: '1',
    time: new Date(),
    message: 'Reply to Allies reply',
    repliesTo: '4'
  },
]


