const { httpServer } = require('./http');

const PORT = process.env.API_PORT;

httpServer.listen(PORT || 3000, console.log(`Server running on port ${PORT}`));