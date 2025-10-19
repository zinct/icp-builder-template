import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Todo { 'id' : bigint, 'text' : string }
export interface _SERVICE {
  'addTodo' : ActorMethod<[string], bigint>,
  'deleteTodo' : ActorMethod<[bigint], boolean>,
  'getTodos' : ActorMethod<[], Array<Todo>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
