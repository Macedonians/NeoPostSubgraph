import { BigInt } from "@graphprotocol/graph-ts"
import { Publication, Publish, LibrarianCreated } from "../generated/Publication/Publication"
import { Librarian, Post } from "../generated/schema"

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

export function handleLibrarianCreated(event: LibrarianCreated): void {

  let entity = Librarian.load(event.params.librarianAddress.toHex())

  if (entity == null) {
    entity = new Librarian(event.params.librarianAddress.toHex())

    
  }
  //entity.blockTime = event.block.number;
  entity.name = event.params.name;
  entity.address = event.params.librarianAddress;
  entity.isOmni = event.params.isOmni;
  entity.creator = event.params.omniAddress;

 
  entity.save()
}
