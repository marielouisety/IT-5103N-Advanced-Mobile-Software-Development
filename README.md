# IT 5103 Advanced Mobile Software Development

## List of Activities

1. [Activity 1: Development Environment Setup](#activity-1-development-environment-setup)
2. [Activity 2: Component Scavenger Hunt](#activity-2-component-scavenger-hunt)
3. [Activity 3: Spotify Sign Up](#activity-3-spotify-sign-up)
4. [Week 4 Activity 1: Spotify Playlist Builder App](#week-4-activity-1-spotify-playlist-builder-app)
5. [Week 4 Activity 2: Spotify Profile Creation Form](#week-4-activity-2-spotify-profile-creation-form)
6. [Week 5 Activity 1: Theme Switcher](#week-5-activity-1-theme-switcher)
7. [Week 5 Activity 2: Camera with Filters](#week-5-activity-2-camera-with-filters)
8. [Week 6 Activity 1: Building and Deploying Your Spotify-Inspired React Native App for iOS (Without Expo)](#week-6-activity-1-building-and-deploying-your-spotify-inspired-react-native-app-for-iOS-without-expo)

---

## Activity 1: Development Environment Setup

Objective: Set up your React Native development environment. <br>
Instructions:
1. Install Node.js and npm.
2. Install the React Native CLI.
3. Set up Android Studio or Xcode for mobile emulation.
4. Create a new React Native project using 'npx react-native init MyApp'.
5. Run the app on an emulator or physical device.

What challenges did you face during setup?
- errors with react-native-cli, missing template.config.js, and confusion between the old and new CLI.
- not clear at first how Expo Go relates to React Native.
- project didn’t generate Android files until setup was corrected.
- errors running expo because scripts were blocked by execution policy.
- remote README.md caused rejection when pushing local commits.

Final Output:

<img width="321" height="812" alt="image" src="https://github.com/user-attachments/assets/d3f57588-a0be-4324-ab02-baa62d27af51" />

---

## Activity 2: Component Scavenger Hunt

Objective: Explore and use basic React Native components in a single app <br>
Instructions: 
1. Create a new screen called ComponentShowcase.
2. Use the following components: Text, Button, Image, ScrollView.
3. Style the layout to be clean and readable.
4. Run the app and ensure all components are visible and functional.
5. Submit the code and a screenshot of the running app.

Assessment Criteria:
- all required components used (40%)
- layout is functional and readablle (30%)
- app runs without errors (30%)

Final Output:

<img width="321" height="812" alt="image" src="https://github.com/user-attachments/assets/a15a52e1-837f-4c62-a6e0-ccc06d25ac35" />
<img width="321" height="812" alt="image" src="https://github.com/user-attachments/assets/6eb98b4b-e6ca-4818-aa7b-3891dadb3415" />

---

## Activity 3: Spotify Sign Up

Instructions:
1. Code the UI design of Spotify's Sign Up page.

Final Output: 

<img width="221" height="712" alt="image" src="https://github.com/user-attachments/assets/a79ac72c-fa5c-4c3a-a09d-629e478338f3" />
<img width="221" height="712" alt="image" src="https://github.com/user-attachments/assets/49bfa876-5977-4880-a9d0-f1fee565b9ef" />
<img width="221" height="712" alt="image" src="https://github.com/user-attachments/assets/8129369c-4073-4907-bf94-a02f5d2f57d3" />
<img width="221" height="712" alt="image" src="https://github.com/user-attachments/assets/225f08b8-99ee-4fdd-867c-8932e4987b8d" />


---

## Week 4 Activity 1: Spotify Playlist Builder App

Objective: Build a Spotify-inspired playlist creation app with song addition, state management, animations, and persistence. <br>
Instructions: 
1. **Build Playlist Interface:** <br>
  Create a playlist app using useState and useReducer to manage a list of songs (e.g., add, remove, clear playlist, and track song history). Design a clean UI with a text input for song names, buttons for actions, and a list to display the playlist.
3. **Add Animations:** <br>
  Implement animations for adding/removing songs (e.g., fade or slide effects for list updates) using react-native-reanimated. Ensure smooth transitions when the playlist updates.
4. **Implement Undo/Redo:** <br>
  Add undo/redo functionality for playlist actions (e.g., undo adding/removing a song) using useReducer to manage state history.
6. **Add State Persistence:** <br>
  Use AsyncStorage to save the playlist and history. Restore the playlist and history on app reload.
7. **Test and Optimize:** <br>
  Test functionality to ensure consistent behavior. Optimize re-renders of the playlist using React.memo for the song list component. Verify persistence works across app restarts.
8. **Documentation and Submission:** <br>
  Capture a screenshot of the playlist interface and history. Write a 3–4 sentence note explaining your state management approach and testing process. Submit code, screenshot, and note.

Final Output:

<img width="221" height="712" alt="image" src="https://github.com/user-attachments/assets/24bbb821-075a-475d-a9d4-3913d057d33e" />
<img width="221" height="712" alt="image" src="https://github.com/user-attachments/assets/a0d1cafd-b200-43ea-bc05-3550a154950e" />
<img width="221" height="712" alt="image" src="https://github.com/user-attachments/assets/21a9229e-d3cc-4f7f-8a97-e85f9473cc08" />
<img width="221" height="712" alt="image" src="https://github.com/user-attachments/assets/64568e99-6bff-497b-a342-5ae4f6d4705f" />

<br>

For this activity, I used a reducer-based state management approach to keep playlist data predictable, centralized, and easy to update through clearly defined actions such as adding, loading, and deleting playlists. All playlist changes automatically persist to AsyncStorage, ensuring the UI stays in sync with saved data. I tested each feature incrementally by verifying that new playlists rendered correctly, swipe-to-delete triggered the right reducer action, and saved data reloaded properly on app restart. Additionally, I checked for UI stability by adding and removing multiple items to ensure no render or state errors occurred.

---

## Week 4 Activity 2: Spotify Profile Creation Form

Objective: Build a Spotify-inspired user profile creation form with real-time validation, animations, caching, and a dynamic profile preview section. <br>
Instructions:
1. **Build Profile Form with Enhanced Validation:** <br>
Create a form with fields for Username, Email, and Favorite Genre using useState.
Implement real-time validation on every input change: <br>
Username: 3–20 characters, alphanumeric and underscores only. <br>
Email: Must follow a valid email format (e.g., includes '@' and a domain). <br>
Genre: Must be selected from a predefined list (Pop, Rock, Jazz, Classical, Hip-Hop). <br>
Display error messages dynamically below each field.
3. **Add Animations:** <br>
Use react-native-reanimated to add animations: <br>
Shake effect on input fields when validation fails. <br>
Fade-in effect for error messages and the profile preview section. <br>
Ensure animations are smooth and don’t impact performance. <br>
4. **Implement Form Caching:** <br>
Use AsyncStorage to cache form data (username, email, genre) for auto-fill on app reload.
Clear the cache and reset the form upon successful submission (no backend API; submission only validates and clears cache).
5. **Build Dynamic Profile Preview:** <br>
Create a profile preview section that updates in real-time as the user types.
Display the username, email, and genre in a styled card with a placeholder profile image that changes based on the selected genre (use placeholder URLs like https://via.placeholder.com/100?text=[Genre]). Add a fade-in animation to the preview section when data is entered using react-native-reanimated. Optimize re-renders of the preview section using React.memo.
6. **Documentation and Submission:** <br>
Capture a screenshot of the form with at least one error message and the profile preview visible. Write a 3–4 sentence note explaining your validation logic, animation approach, and how the preview updates. Submit code, screenshot, and note.

Validation Logic, Animation, and Preview Update Note: <br>

**Validation Logic:** The form validates inputs in real-time: username (3–20 characters, alphanumeric and underscores), email (standard email format with '@' and domain), and genre (must be selected). Errors are displayed instantly below each field, with a shake animation triggered on invalid inputs. <br>

**Animation Approach:** react-native-reanimated is used for a shake effect on invalid inputs and a fade-in effect for the profile preview and error messages, ensuring smooth transitions with minimal performance impact. <br>

**Preview Updates:** The profile preview updates dynamically as the user types, showing the current username, email, and genre, with a genre-specific placeholder image that fades in when data is entered, optimized with React.memo to prevent unnecessary re-renders.

Final Output:

---

## Week 5 Activity 1: Theme Switcher

Objective: Implement a theme toggle with Redux, animations, and custom options. <br>
Instructions:
1. **Set Up Redux Store** <br>
   - Create a Redux store for light/dark mode using Redux Toolkit.  
   - Apply to Week 2 Spotify app’s UI.

2. **Add Animated Transitions** <br>
   - Implement animated theme transitions (e.g., fade or color interpolation) using react-native-reanimated.  
   - Ensure smooth UI updates across screens.

3. **Add Custom Theme Options** <br>
   - Implement a color picker for custom theme accents (e.g., button colors).  
   - Allow at least three preset themes (light, dark, custom).

4. **Persist Theme** <br>
   - Save theme settings with AsyncStorage.  
   - Restore on app reload.

5. **Documentation and Submission** <br>
   - Capture screenshots of light, dark, and custom themes.  
   - Write a 3–4 sentence note on theme implementation.  
   - Submit code, screenshots, and note.
  
Final Output: 

---

## Week 5 Activity 2: Camera with Filters

Objective: Integrate a camera with real-time filters and editing tools. <br>
Instructions:
1. **Set Up Camera**  
   - Use expo-camera to capture photos.  
   - Implement a camera UI with capture and toggle buttons.

2. **Apply Filters**  
   - Add real-time grayscale and sepia filters using expo-gl or shaders.  
   - Allow filter switching during preview.

3. **Add Editing Tools**  
   - Implement crop and rotate tools for captured photos.  
   - Save edited photos locally.

4. **Add Filter Intensity Sliders**  
   - Add sliders to adjust filter intensity (e.g., grayscale opacity).  
   - Ensure smooth real-time updates.

5. **Test and Optimize**  
   - Test on iOS and Android for camera and filter performance.  
   - Optimize rendering with React.memo for filter previews.

6. **Documentation and Submission**  
   - Capture a screenshot of the camera with filters applied.  
   - Write a 3–4 sentence note on camera functionality.  
   - Submit code, screenshot, and note.
  
Final Output:

---

## Week 6 Activity 1: Building and Deploying Your Spotify-Inspired React Native App for iOS (Without Expo)

Objective: In this week's activity, you'll take the simple Spotify-inspired app you built last time (e.g., with features like a playlist view, search bar, and basic audio playback mockup) and adapt it to run on iOS. We'll focus on using React Native's native tooling to build and deploy the iOS version of your existing project. This will help you understand platform-specific differences (like navigation or UI tweaks for iOS) while reusing most of your Android code. By the end, you'll deploy and test the app on an iOS simulator and (optionally) a physical iOS device.

Prerequisites:

A Mac computer (iOS builds require Xcode, which is Mac-only).
Your existing React Native project from the Android activity (cloned from GitHub or local). If using VS Code, that's fine—continue with it. Android Studio isn't needed for iOS.
Node.js (v16+), Yarn or npm, and Watchman installed (from last week's setup).
Basic familiarity with your app's code (e.g., any Android-specific imports like react-native-vector-icons might need iOS config).
For physical device deployment: An iPhone/iPad (iOS 12+), USB cable, and a free Apple ID (yes, you'll need to create one if you don't have it—more on this below).

Do You Need an Apple ID?
Yes, for deploying to a physical iOS device (not just the simulator). It's free and quick to create at appleid.apple.com. You'll use it to sign the app with a development provisioning profile. Simulator testing doesn't require it, so start there to save time.

Detailed Steps:
Follow these steps in order. I'll note time estimates and tips for common issues. Open your terminal (in VS Code or standalone) and navigate to your project root (e.g., cd my-spotify-app).

**Step 1: Set Up Your Mac for React Native iOS Development** <br>
This ensures your environment is ready. If you've done Android setup, this is similar but iOS-focused.

**Install Xcode:** <br>
Open the App Store on your Mac and search for "Xcode" (free, ~12-15 GB—download if not installed).
Once installed, open Xcode > Preferences > Locations > Command Line Tools, and select the latest version (e.g., Xcode 16.x).
Install iOS Simulator: In Xcode, go to Preferences > Platforms, and download the latest iOS simulator (e.g., iOS 18).
Tip: If download is slow, do this overnight before class.

**Install React Native CLI (if not already):** <br>
text
npm install -g @react-native-community/cli

Tip: If you get permission errors, use sudo or fix npm permissions.

**Install CocoaPods (iOS dependency manager):** <br>
CocoaPods handles native iOS libraries in your RN project.
text
sudo gem install cocoapods

Then, in your project root:
text
cd ios && pod install && cd ..


Tip: This might take 5-10 minutes the first time. If errors (e.g., Ruby issues), run sudo gem update --system first.

**Verify Setup:** <br>
Run npx react-native doctor to check for issues. Fix any red flags (e.g., missing SDKs).

**Step 2: Prepare Your Project for iOS (10-15 minutes)** <br>
Your Android project should mostly work on iOS, but let's sync it.


**Clean and Reset:** <br>
If you made Android-only changes, clean up:
text
npx react-native clean
cd ios && rm -rf Pods Podfile.lock && pod install && cd ..


**Platform-Specific Tweaks (if needed):** <br>

Open ios/YourApp.xcworkspace in Xcode (not .xcodeproj—always use the workspace after pod install).
In Xcode: Select your project > Runner (under Targets) > Build Settings > Search for "Deployment Target" and set to iOS 12.0+.
If your app uses fonts/icons (e.g., for Spotify-like UI): Add them to ios/YourApp/Info.plist under UIAppFonts.
Test for iOS incompatibilities: Run npx react-native run-ios (it'll fail gracefully and show errors). Common fixes:
For navigation (e.g., React Navigation): Ensure iOS-specific styles (e.g., safe area insets).
For audio (if you mocked Spotify playback): Use react-native-sound and link it via pods.


Example Code Tweak (in App.js or screens):
Add iOS detection for UI adjustments:
jsx
import { Platform } from 'react-native';

// In your component:
const isIOS = Platform.OS === 'ios';
<View style={{ paddingTop: isIOS ? 20 : 0 }}> {/* Extra top padding for iOS notch */ }


**Step 3: Build and Run on iOS Simulator** <br>
No device needed—great for quick testing.


**Start Metro Bundler:** <br>
In a new terminal tab (project root):
text
npx react-native start


**Run the App:** <br>
In another terminal:
text
npx react-native run-ios

This builds the app, installs it on the simulator, and launches it.
Select a simulator if prompted (e.g., iPhone 15).


**Test Core Features:** <br>

Swipe through playlists, search tracks, play a mock song.
Note iOS differences: Gestures feel smoother; adjust any Android-specific touch handlers.
Hot reload: Shake the simulator (Cmd+D) > Enable Live Reload.

Tip: If build fails (e.g., "No bundle URL"), reset simulator: Device > Erase All Content and Settings.


**Step 4: Deploy to Physical iOS Device** <br>
This is the "real" deployment—signing and installing on your phone.


**Create/Sign In to Apple ID:** <br>

Go to appleid.apple.com > Create if needed (use a real email; verify via phone).
In Xcode: Xcode > Preferences > Accounts > Add Apple ID > Sign in.


**Set Up Provisioning:** <br>

Connect your iPhone via USB (trust the computer if prompted).
In Xcode: Window > Devices and Simulators > Select your device > If not registered, Xcode will prompt to register.
Back in project: Open ios/YourApp.xcworkspace > Select Runner target > Signing & Capabilities tab:
Check "Automatically manage signing."
Select your Apple ID team (it'll create a free developer cert).
Bundle Identifier: Set to something unique like com.yourname.spotifymock (match your Android one if possible).


**Build and Install:** <br>

Ensure your iPhone is selected as the target (top-left dropdown in Xcode).
Click the Play button (▶️) or Cmd+R to build/run.
Xcode will compile (~2-5 minutes first time), sign, and install on your device. Approve any on-device prompts.


**Test on Device:** <br>

Open the app on your iPhone. Test full features (e.g., orientation changes).
For sharing: The app stays installed until you delete it; no App Store needed for personal dev.

Tip: Common issues:

"Code signing error": Double-check Apple ID and bundle ID. Revoke/recreate cert in developer.apple.com if stuck.
Slow build: Close other apps; use npx react-native run-ios --device from terminal for faster iteration.


**Step 5: Wrap-Up and Submission** <br>
**Debug & Polish:** Spend 5 minutes fixing any iOS bugs (e.g., dark mode support for Spotify vibe).
**Cross-Platform Check:** Run npx react-native run-android to ensure Android still works.
**Submit:** Push changes to GitHub. Include a screenshot/video of the app running on iOS simulator/device + a 1-paragraph reflection (e.g., "What iOS-specific changes did you make?").
