require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    console.log('Running without MongoDB - using in-memory data');
  });

// Mongoose models
const Blog = require('./models/Blog');
const Project = require('./models/Project');
const TeamMember = require('./models/TeamMember');

// Fallback in-memory data for when MongoDB is not available
const fallbackProjects = [
  {
    id: 1,
    name: "AI-Powered Chatbot",
    description: "An intelligent chatbot using natural language processing to assist users with queries and provide automated support.",
    status: "Completed",
    techStack: ["Python", "TensorFlow", "Flask", "React"],
    members: ["John Doe", "Jane Smith"],
    links: {
      github: "https://github.com/example/chatbot",
      demo: "https://chatbot-demo.com"
    },
    image: "/api/placeholder/400/200"
  },
  {
    id: 2,
    name: "Computer Vision System",
    description: "A real-time object detection and recognition system using deep learning algorithms for industrial applications.",
    status: "In Progress",
    techStack: ["Python", "OpenCV", "PyTorch", "Docker"],
    members: ["Mike Johnson", "Sarah Wilson"],
    links: {
      github: "https://github.com/example/cv-system"
    },
    image: "/api/placeholder/400/200"
  }
];

const fallbackBlogs = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    excerpt: "A comprehensive guide to getting started with machine learning concepts and applications.",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Machine Learning",
    tags: ["ML", "AI", "Beginner"],
    image: "/api/placeholder/400/200",
    content: "<h2>Getting Started with ML</h2><p>Machine learning is...</p>"
  }
];

const fallbackTeam = [
  {
    id: 1,
    name: "John Doe",
    role: "AI Research Lead",
    details: "PhD in Computer Science",
    description: "Specializes in deep learning and neural networks",
    avatar: "/api/placeholder/150/150"
  }
];

app.get('/', (req, res) => {
  res.send('Kali Website Backend Server is running!');
});

// API routes for dynamic components

// Projects CRUD
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.log('Using fallback projects data');
    res.json(fallbackProjects);
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    const newProject = { ...req.body, id: Date.now() };
    fallbackProjects.push(newProject);
    res.status(201).json(newProject);
  }
});

app.put('/api/projects/:id', async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
});

app.delete('/api/projects/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.status(204).end();
});


// Blogs CRUD
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.log('Using fallback blogs data');
    res.json(fallbackBlogs);
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    const newBlog = { ...req.body, id: Date.now() };
    fallbackBlogs.push(newBlog);
    res.status(201).json(newBlog);
  }
});

app.put('/api/blogs/:id', async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(blog);
});

app.delete('/api/blogs/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).end();
});


// Team Members CRUD
app.get('/api/team', async (req, res) => {
  try {
    const team = await TeamMember.find();
    res.json(team);
  } catch (error) {
    console.log('Using fallback team data');
    res.json(fallbackTeam);
  }
});

app.post('/api/team', async (req, res) => {
  try {
    const member = new TeamMember(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    const newMember = { ...req.body, id: Date.now() };
    fallbackTeam.push(newMember);
    res.status(201).json(newMember);
  }
});

app.put('/api/team/:id', async (req, res) => {
  const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(member);
});

app.delete('/api/team/:id', async (req, res) => {
  await TeamMember.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
