export interface IPost {
  _id?: string;
  author: string;
  title: string;
  description: string;
  photo?: string;
  categories?: string[];
  isPublished: boolean;
  createdAt?: string;
  updatedAt?: string;
}
