import { Block } from "./block/block";
import { Blockchain } from "./blockchain/blockchain";

const myBlockchain = new Blockchain();

myBlockchain.addBlock(new Block(Date.now().toString(), { foo: "bar" }));
myBlockchain.addBlock(new Block(Date.now().toString(), { bar: "foo" }));

console.log(myBlockchain.getChain());
