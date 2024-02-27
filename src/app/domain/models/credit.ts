import { Client } from "./client";

export interface Credit{
    user:Client,
    value:Number,
    dateCredit:Date
}