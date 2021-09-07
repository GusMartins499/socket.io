const { serverHttp } = require("./http.js");
require("./websocket.js");

serverHttp.listen(3000, () => console.log("Server is runnig on 3000"));
