// ./flow.js
const {app, BrowserWindow} = require('electron')
var path = require('path')

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({frame: false,
    width: 450, 
    height: 700,
    minWidth: 450,
    minHeigth: 700,
    maxWidth: 450,
    maxHeight: 700,
    backgroundColor: '#fff',
    icon: path.join(__dirname, 'assets/icons/png/64x64.png')
  });

  // Specify entry point to default entry point of vue.js
  win.loadURL('http://localhost:8080');

  // Remove window once app is closed
  win.on('closed', function () {
  win = null;
  });

});
//create the application window if the window variable is null
app.on('activate', () => {
  if (win === null) {
  createWindow()
  }
})
//quit the app once closed
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
  app.quit();
  }
});