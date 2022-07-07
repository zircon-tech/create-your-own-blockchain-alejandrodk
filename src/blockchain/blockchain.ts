import { Block } from "./../block/block";

export class Blockchain {
  constructor(private chain: Block[] = [], public difficulty = 1) {
    this.chain.push(this.createGenesisBlock());
  }

  getChain(): Block[] {
    return this.chain;
  }

  createGenesisBlock(): Block {
    const genesis = new Block(Date.now().toString());
    genesis.buildHash();

    return genesis;
  }

  getLastBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block: Block): void {
    const { hash } = this.getLastBlock();

    block.prevHash = hash;
    block.buildHash();
    block.mine(this.difficulty);

    this.chain.push(Object.freeze(block));
  }
}
