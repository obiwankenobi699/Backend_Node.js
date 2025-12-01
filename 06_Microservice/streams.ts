import crypto from "crypto";
import zlib from "zlib";
import fs from "fs";
import {Transform } from "stream";

// Custom Transform Stream for Encryption
class EncryptStream extends Transform {
    private key: Buffer;
    private vector: Buffer;
    private cipher: crypto.Cipheriv;

    constructor(key: Buffer, vector: Buffer) {
        super();
        this.key = key;
        this.vector = vector;

        // Create streaming-friendly cipher (AES-256-CTR)
        this.cipher = crypto.createCipheriv("aes-256-ctr", this.key, this.vector);
    }

    // Runs for every chunk of data
    _transform(chunk: Buffer, encoding: BufferEncoding, callback: any) {
        try {
            const encrypted = this.cipher.update(chunk);
            this.push(encrypted);
            callback();
        } catch (err) {
            callback(err as Error);
        }
    }

    // Called at end of stream
    _flush(callback: any) {
        try {
            const final = this.cipher.final();
            this.push(final);
            callback();
        } catch (err) {
            callback(err as Error);
        }
    }
}

// --- Generate Key & IV ---
const key = crypto.randomBytes(32);   // 256-bit AES key
const vector = crypto.randomBytes(16); // 128-bit IV

// --- Create Streams ---
const readStream = fs.createReadStream("input.txt");
const gzipStream = zlib.createGzip();
const encryptStream = new EncryptStream(key, vector);
const writeStream = fs.createWriteStream("input.txt.gz.enc");

// --- Pipeline: Read → Compress → Encrypt → Write ---
readStream
  .pipe(gzipStream)
  .pipe(encryptStream)
  .pipe(writeStream);

console.log("Encryption Complete");
