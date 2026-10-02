# HORARIO-DE-MARIO
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/mjimenezf08/HORARIO-DE-MARIO)

This repository contains a personal schedule application for the 2º SMR (Sistemas Microinformáticos y Redes) course. It's designed as both a web application and a cross-platform desktop application using Electron.

## Features

*   **🗓️ Interactive Schedule:** View the full weekly class schedule. Click on any class to add personal notes.
*   **📅 Event Calendar:** Add and track important dates like exams, project deadlines, and presentations.
*   **📚 To-Do List:** Manage homework assignments with due dates.
*   **🔔 Notifications:** Get desktop alerts for upcoming classes, exams, and homework.
*   **⌚ Real-Time Status:** A live clock shows the current time and which class is in session, including time remaining.
*   **🔗 Quick Links:** Direct links to Moodle, Rayuela, and Classroom.
*   **💾 Data Persistence:** All your notes, events, and tasks are saved locally in your browser or app.
*   **⚙️ Customization:** Switch between light/dark themes and a high-contrast mode.
*   **📲 PWA Support:** Install the web version as an app on your mobile device or desktop.
*   **🗓️ Calendar Export:** Download your schedule, events, and deadlines as an `.ics` file to import into your mobile or desktop calendar app for reliable notifications.

## Usage

You can use this application directly in your web browser or run it as a standalone desktop application.

### Web Application (PWA)

Simply open the `index.html` file in a modern web browser.

To receive notifications and for a better experience, you can install it as a Progressive Web App (PWA):
*   **Android (Chrome):** Open the menu (⋮) and select **Instalar aplicación**.
*   **iPhone (Safari):** Tap the Share button and select **Añadir a pantalla de inicio**.

### Desktop Application

The desktop version provides a more integrated experience, including running in the system tray and starting on login.

#### Prerequisites

*   [Node.js](https://nodejs.org) version 18 or higher.

#### Installation

1.  Clone or download the repository.
2.  Open a terminal inside the project folder.
3.  Install the necessary dependencies:
    ```sh
    npm install
    ```

#### Running the App

To run the application in development mode:
```sh
npm start
```

#### Building the Installer

To create a distributable installer for your operating system:
```sh
npm run dist
```
This command will generate the installer files inside a new `dist/` directory.
*   **Linux:** Creates `.AppImage` and `.deb` files.
*   **Windows:** Creates an `.exe` installer.

### Desktop App Behavior

*   **System Tray:** When you close the window, the application minimizes to the system tray to continue sending notifications.
*   **Exiting the App:** To close the application completely, right-click the tray icon and select "Salir del todo".
*   **External Links:** Links to Moodle, Rayuela, and Classroom will open in your default web browser.
*   **Auto-Start:** The application is configured to start automatically when you log in to your computer.