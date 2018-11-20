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
    insertCoins: []
  },
  paymentMethod: ""
};

// renderer process
var ipcRenderer = require('electron').ipcRenderer;
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