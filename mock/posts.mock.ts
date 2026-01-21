import { defineMock } from 'vite-plugin-mock-dev-server';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

// In-memory storage for posts
let posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React',
    content:
      'React is a powerful JavaScript library for building user interfaces...',
    author: 'John Doe',
    createdAt: new Date('2024-01-01').toISOString(),
  },
  {
    id: 2,
    title: 'Understanding TypeScript',
    content: 'TypeScript adds static typing to JavaScript, making it safer...',
    author: 'Jane Smith',
    createdAt: new Date('2024-01-02').toISOString(),
  },
  {
    id: 3,
    title: 'Vite for Fast Development',
    content:
      'Vite is a modern build tool that provides lightning-fast development...',
    author: 'Bob Johnson',
    createdAt: new Date('2024-01-03').toISOString(),
  },
];

let nextId = 4;

export default defineMock([
  // GET /api/posts - Get all posts
  {
    url: '/api/posts',
    method: 'GET',
    body: () => {
      return {
        success: true,
        data: posts,
      };
    },
  },

  // GET /api/posts/:id - Get single post
  {
    url: '/api/posts/:id',
    method: 'GET',
    body: (req) => {
      const id = parseInt(req.params.id);
      const post = posts.find((p) => p.id === id);

      if (!post) {
        return {
          success: false,
          error: 'Post not found',
        };
      }

      return {
        success: true,
        data: post,
      };
    },
  },

  // POST /api/posts - Create new post
  {
    url: '/api/posts',
    method: 'POST',
    body: (req) => {
      const { title, content, author } = req.body;

      if (!title || !content || !author) {
        return {
          success: false,
          error: 'Title, content, and author are required',
        };
      }

      const newPost: Post = {
        id: nextId++,
        title,
        content,
        author,
        createdAt: new Date().toISOString(),
      };

      posts.push(newPost);

      return {
        success: true,
        data: newPost,
      };
    },
  },

  // PUT /api/posts/:id - Update post
  {
    url: '/api/posts/:id',
    method: 'PUT',
    body: (req) => {
      const id = parseInt(req.params.id);
      const postIndex = posts.findIndex((p) => p.id === id);

      if (postIndex === -1) {
        return {
          success: false,
          error: 'Post not found',
        };
      }

      const { title, content, author } = req.body;

      posts[postIndex] = {
        ...posts[postIndex],
        ...(title && { title }),
        ...(content && { content }),
        ...(author && { author }),
      };

      return {
        success: true,
        data: posts[postIndex],
      };
    },
  },

  // DELETE /api/posts/:id - Delete post
  {
    url: '/api/posts/:id',
    method: 'DELETE',
    body: (req) => {
      const id = parseInt(req.params.id);
      const postIndex = posts.findIndex((p) => p.id === id);

      if (postIndex === -1) {
        return {
          success: false,
          error: 'Post not found',
        };
      }

      const deletedPost = posts[postIndex];
      posts.splice(postIndex, 1);

      return {
        success: true,
        data: deletedPost,
      };
    },
  },
]);
