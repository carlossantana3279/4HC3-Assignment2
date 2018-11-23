// renderer process
var ipcRenderer = require('electron').ipcRenderer;

var globalState = {
  test: "has things",
  events: {
    insertTicket: [
        {
            id: "example, this doesn't do anything",
            cb: function() {/* Would do something */}
        }
    ],
    tapCredit: [],
    insertCredit: [],
    insertCoins: [],
  },
  cost: 0,
  singleParkingSpotCost: 0,
  hours: 0,
  minutes: 0,
  spots: 1,
  electricSpots: [],
  paymentMethod: "",
  printReceipt: function (message){
    ipcRenderer.send('print-ticket', message);
    console.log('sent the event');
  },
  sendText: function (message){
    ipcRenderer.send('send-text', message);
    console.log('sent the event');
  }
}


ipcRenderer.on('insert-ticket', function (event,store) {
    globalState.events.insertTicket.forEach(it => {
        it.cb(store);
    });
});
ipcRenderer.on('tap-credit', function (event,store) {
    globalState.events.tapCredit.forEach(tc => {
        tc.cb(store);
    });
});
ipcRenderer.on('insert-credit', function (event,store) {
    globalState.events.insertCredit.forEach(ic => {
        ic.cb(store);
    });
});
ipcRenderer.on('insert-coins', function (event,store) {
    globalState.events.insertCoins.forEach(ico => {
        ico.cb(store);
    });
});