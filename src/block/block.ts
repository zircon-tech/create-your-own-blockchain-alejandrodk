import { encrypt } from "../utils/utils";

export class Block {
  constructor(
    public timestamp: string,
    public data: any = null,
    public prevHash: string = "",
    public hash = "",
    public nonce = 0
  ) {}

  buildHash(): void {
    this.hash = encrypt(
      `${this.prevHash}${this.timestamp}${JSON.stringify(this.data)}${
        this.nonce
      }}`
    );
  }

  mine(difficulty: number) {
    // Basically, it loops until our hash starts with
    // the string 0...000 with length of <difficulty>.
    while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
      // We increases our nonce so that we can get a whole different hash.
      this.nonce++;
      // Update our new hash with the new nonce value.
      this.buildHash();
    }
  }
}
