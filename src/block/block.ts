import { encrypt } from "../utils/utils";

export class Block {
  constructor(
    public timestamp: string,
    public data = [],
    public prevHash: string = "",
    public hash = ""
  ) {}

  buildHash(): void {
    this.hash = encrypt(
      `${this.prevHash}${this.timestamp}${JSON.stringify(this.data)}`
    );
  }
}
