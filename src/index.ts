import { Block } from "./block/block";
import { Blockchain } from "./blockchain/blockchain";

const myBlockchain = new Blockchain();
const block = new Block(Date.now().toString(), { foo: "bar" });

myBlockchain.addBlock(block);

console.log(myBlockchain.chain);
