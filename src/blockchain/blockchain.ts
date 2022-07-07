import { Block } from "./../block/block";

export class Blockchain {
  constructor(public chain: Block[] = [], public difficulty = 1) {
    this.chain.push(this.createGenesisBlock());
  }

  createGenesisBlock(): Block {
    return new Block(Date.now().toString());
  }

  getLastBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block: Block): void {
    const { prevHash } = this.getLastBlock();

    block.prevHash = prevHash;
    block.buildHash();
    block.mine(this.difficulty);

    this.chain.push(Object.freeze(block));
  }
}
