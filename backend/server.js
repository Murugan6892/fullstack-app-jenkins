const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Serve frontend build files
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Backend 🌐" });
});

// Catch-all route for React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
