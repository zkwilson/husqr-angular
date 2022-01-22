import { v4 as uuidv4 } from "uuid";
import {User} from "../interfaces/user";


export const initialUsers: User[] = [
  {
    id: uuidv4(),
    name: 'Nathan Campbell',
    location: 'Omaha, NE'
  },
  {
    id: uuidv4(),
    name: 'Zaeem Haq',
    location: 'Omaha, NE'
  },
  {
    id: uuidv4(),
    name: 'Allie Herink',
    location: 'Bellevue, NE'
  }

]
