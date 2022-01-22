import { Husq } from "../interfaces/husq";
import { v4 as uuidv4 } from "uuid";

export const initialHusqs: Husq[] = [
  {
    id: uuidv4(),
    name: 'Eric Cornell',
    time: new Date(),
    message: 'Testing 123123123'
  },
  {
    id: uuidv4(),
    name: 'Jessie Williamson',
    time: new Date(),
    message: 'Test 456456'
  },
  {
    id: uuidv4(),
    name: 'Andy Freeman',
    time: new Date(),
    message: 'Test 789789'
  },
]


