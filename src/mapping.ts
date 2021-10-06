import { BigInt } from "@graphprotocol/graph-ts"
import { Publication, Publish } from "../generated/Publication/Publication"
import { Post } from "../generated/schema"

export function handlePublish(event: Publish): void {

  let entity = Post.load(event.params.id.toHex())

  if (entity == null) {
    entity = new Post(event.params.id.toHex())

    
  }
  //entity.blockTime = event.block.number;
  entity.author = event.params.author
  entity.data = event.params.data;
  entity.name = event.params.name;

 
  entity.save()
}
