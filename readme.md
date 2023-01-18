# Welcome to PixPlore!

**PixPlore** is a skill assessment project that wrote to avoid rewriting home skill assessment task for hiring processes.


# Install

Clone the project

    git clone git@github.com:goff-studio/pixplore.git
  
  **Install dependencies**

    npm install

    npx pod-install

    
**Run on platforms**

    npm run android

    npm run ios

    
**Troubleshooting**
Incase of having between dependencies and globally installed packages, you can use `--legacy-peer-deps` flag

    npm install --legacy-peer-deps

## Dependencies

 1. `redux`: I tried to use `redux` without any middleware only to show the abilities in a tiny project
 2. `react-native-toast-message` to simply show toast message on network errors
 3. `react-navigation` to implement a super simple navigation system.
 4. `react-native-auto-height-image` to calculate the height of images based on their width without adding any extra utils


## Whats covered

 - App should run on both Android and iOS
 - Search on Pixabay and see the preview of images
 - Infinity scroll
 - Saving state of results screen
 - Rotation supports. Fully support Portrait and on Landscape,... meh!
 - With ability to filter results based on users

## Tested on

- Android Emulator API level 29
- Android Emulator API level 31
- iOS Simulator 16.2
- iPhone 12 Pro Max 16.0.2
- Samsung S8

## To-Do List

 - [ ] Add ability to download images
 - [ ] Add some wow moments using small animations
 - [ ] Support both dark and light mode
