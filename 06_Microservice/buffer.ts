import {Buffer} from "buffer"
import { json } from "stream/consumers";
const bufferOne = Buffer.alloc(10);
console.log(bufferOne)
const data = Buffer.from("My Name is Mukul")
console.log(data)
console.log(data.toJSON())



const modify = Buffer.byteLength(data);
console.log(modify)