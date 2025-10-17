# IT 5103 Advanced Mobile Software Development

## List of Activities

1. [Activity 1: Development Environment Setup](#activity-1-development-environment-setup)
2. [Activity 2: Component Scavenger Hunt](#activity-2-component-scavenger-hunt)
3. [Activity 3: Spotify Sign Up](#activity-3-spotify-sign-up)
4. [Week 4 Activity 1: Spotify Playlist Builder App](#week-4-activity-1-spotify-playlist-builder-app)
5. [Week 4 Activity 2: Spotify Profile Creation Form](#week-4-activity-2-spotify-profile-creation-form)

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

