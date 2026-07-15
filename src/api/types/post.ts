export interface Post {
  id: number;
  user_id: number;
  content: string;
  image?: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };
  reactions?: {
    likes: number;
    comments: number;
    shares: number;
  };
  comments?: Comment[];
}

export interface Comment {
  id: number;
  post_id: number;
  user_id: number;
  content: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
}

export interface CreatePostData {
  content: string;
  image?: string;
}
