const express = require('express')
const app = express()
const WSServer = require('express-ws')(app) //передаем приложение в импортируемую функцию
const aWss = WSServer.getWss() //в-т объект со всеми подключенными пользователями (aWss.client)


const PORT = process.env.PORT || 5000

app.ws('/', (ws, req) => {
    console.log('connetion is success!.') 
    ws.on('message', (msg) => { //message - это тип события, на котрой можно подписаться
        msg = JSON.parse(msg)
        switch (msg.method) {
            case 'connection':
                connectionHandler(ws, msg) 
                break
        }
    })
})
app.listen(PORT, () => console.log(`server started on PORT ${PORT}...`))

const connectionHandler = (ws, msg) => {
    ws.id = msg.id // присвоение каждому вебсокету свой id
    broadcastConnection(ws,msg) // функция широковещательной рассылки 
}

const broadcastConnection = (ws, msg) => {
    // console.log(aWss.clients)df
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(`Consummer ${msg.userName} connected (message from server)`)
        }
    })
}
