import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import path from "path";
import { fileURLToPath } from "url";

// Recréer __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 920,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Tu peux créer un fichier preload.js vide ou avec tes scripts
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false, // désactivé pour développement, active-le si tu veux plus de sécurité
    },
  });

  const appURL = isDev
    ? "http://localhost:5173"
    : `file://${path.join(__dirname, "dist/index.html")}`;

  mainWindow.loadURL(appURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// Événements de
