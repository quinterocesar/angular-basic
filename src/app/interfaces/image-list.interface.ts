import { CommentInterface } from "./comment.interface"

export interface ImageInterface {
  id: number,
  title: string,
  path: string,
  description: string,
  likes: number,
  comments: CommentInterface[],
  tags: string[]
};

export interface ImageListInterface {
  images: ImageInterface[]
};


