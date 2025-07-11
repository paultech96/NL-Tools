const express = require('express');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');
const removeBgRoutes = require('./routes/removeBgRoutes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/converted', express.static('converted'));

app.use('/api', imageRoutes);
app.use('/converted', express.static('converted'));
app.use('/api', removeBgRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
