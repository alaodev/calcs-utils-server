const { httpServer } = require('./http');

httpServer.listen(process.env.PORT || 3000);