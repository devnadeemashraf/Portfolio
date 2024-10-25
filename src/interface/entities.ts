/* eslint-disable @typescript-eslint/no-empty-object-type */

interface ICharacter {
  spritesheet: [];
  isUserControlled: boolean;
  position: [number, number];
}

interface IPlayer extends ICharacter {}
interface NPC extends ICharacter {}

export { ICharacter, IPlayer, NPC };
