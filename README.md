# BreakingBadCharacter
## Prerequisites
- [Node JS > 12](https://nodejs.org/) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman/)
- [JDK >11](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Xcode 13](https://developer.apple.com/xcode)
- [Android Studio and Android SDK](https://developer.android.com/studio/index.html)

## Running the project

- Clone this project
```
git clone < https://github.com/rakeshpalotra90/BreakingBadCharacter.git >
```
- Go to your project's root folder and run `yarn install`.
- If you are using Xcode 13 or higher got to /ios and execute `pod install`
- Run `npx react-native run-ios` or `npx react-native run-android` to start your application!
- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer
> Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ``` yarn install``` command in a terminal opened in the project folder.
> This command will look into the *package.json* file and install all the dependencies listed here.

- Install react-native-cli globally on your computer(if not installed)
```
yarn global add react-native-cli

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

```
react-native run-android
```
