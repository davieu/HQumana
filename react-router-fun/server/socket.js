import io from "socket.io-client"

const wsPort = location.hostname === "localhost" ? ":8000" : ""

// local is http://localhost:8000
const wsUrl = location.protocol + "//" + location.hostname + wsPort
console.log(`Making WebSockets connection to ${wsUrl}`)
let socket = io(wsUrl)

window.socket = socket
export default socket
