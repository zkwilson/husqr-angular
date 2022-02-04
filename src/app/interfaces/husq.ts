export interface Husq {
  id: string
  userId: string
  time: Date
  message: string
  repliesto?: string
}

export interface HusqWithName extends Husq {
  name?: string;
}

