export interface IPost {
  _id: string;
  title: string;
  description: string;
  photo: string;
  author: string;
  categories: string[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}
