export interface Post {
  id: number;
  user_id: number;
  content: string;
  image_path?: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar?: string;
  };
  reactions?: {
    likes: number;
    comments: number;
    shares: number;
  };
  likes?: Likes[];
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
    first_name: string;
    last_name: string;
  };
}

export interface Likes {
  id: number;
  user: {
    first_name: string;
    last_name: string;
  }
}

export interface CreatePostData {
  content: string;
  image?: File | string;
  is_private?: boolean;
}
