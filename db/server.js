const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5173;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'frontend/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

// Route to get all events
app.get('/api/events', (req, res) => {
  fs.readFile('frontend/public/events.json', (err, data) => {
    if (err) {
      console.error('Error reading events file:', err);
      res.status(500).json({ error: 'Failed to fetch events' });
      return;
    }

    try {
      const events = JSON.parse(data);
      res.json(events);
    } catch (error) {
      console.error('Error parsing events data:', error);
      res.status(500).json({ error: 'Failed to parse events data' });
    }
  });
});

// Route to add a new event
app.post('/api/events', upload.single('poster'), (req, res) => {
  const { title } = req.body;
  const poster = req.file.filename;

  if (!title || !poster) {
    return res.status(400).json({ error: 'Title and poster are required' });
  }

  fs.readFile('frontend/public/events.json', (err, data) => {
    if (err) {
      console.error('Error reading events file:', err);
      res.status(500).json({ error: 'Failed to read events file' });
      return;
    }

    let events = [];
    try {
      events = JSON.parse(data);
    } catch (error) {
      console.error('Error parsing events data:', error);
      res.status(500).json({ error: 'Failed to parse events data' });
      return;
    }

    events.push({ title, poster });

    fs.writeFile('frontend/public/events.json', JSON.stringify(events), (err) => {
      if (err) {
        console.error('Error writing events file:', err);
        res.status(500).json({ error: 'Failed to write events file' });
        return;
      }

      res.status(201).json({ message: 'Event added successfully' });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
