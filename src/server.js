const { httpServer } = require('./http');

const PORT = process.env.API_PORT;

httpServer.listen(PORT, console.log(`Server running on port ${PORT}`));