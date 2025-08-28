<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h2 align="center">VELORA-FRONTEND</h2>

  <p align="center">
   Welcome to the <strong>VELORA</strong> frontend repository! This modern mobile application provides an intuitive interface for news discovery, article bookmarking, and seamless user experience across all platforms.
    <br />
    <a href="https://github.com/sasmithx/VELORA-FRONTEND"><strong>Explore the project »</strong></a>
    <br />
  </p>
</div>

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
    </li>
    <li>
      <a href="#app-structure">App Structure</a>
    </li>
    <li>
      <a href="#backend-repository">Backend Repository</a>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

---

## **📌 About The Project**

VELORA is a **modern cross-platform news application** built with React Native and Expo that allows users to:

✅ **Discover Latest News** from various sources worldwide  
✅ **Search & Filter** articles by keywords and categories  
✅ **Bookmark Articles** for reading later  
✅ **Secure Authentication** with JWT-based login system  
✅ **Beautiful Dark Theme** with modern UI/UX design  
✅ **Cross-Platform Support** for iOS, Android, and Web

This project ensures a **seamless, responsive, and engaging user experience** for news consumption and management.

---

### **📌 Key Features & Screens**

The frontend consists of multiple screens and components to handle core functionalities:

- **Authentication**: Secure sign-in/sign-up with form validation
- **Home Feed**: Discover trending news with search and category filters
- **Article Detail**: Read full articles with sharing capabilities
- **Bookmarks**: Save and manage favorite articles
- **Profile**: User account management and settings
- **Responsive Design**: Optimized for all screen sizes and orientations

Each screen ensures **optimal performance, intuitive navigation, and modern aesthetics**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

### Built With

This project leverages cutting-edge technologies to ensure cross-platform compatibility, performance, and modern user experience.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## **🚀 Getting Started**

Follow these steps to set up the project locally and start running the mobile application.

### **🔹 Prerequisites**

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)
- **Mobile device** or **emulator** for testing

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sasmithx/VELORA-FRONTEND.git
   cd VELORA-FRONTEND
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure API Base URL:**

   Update the API configuration in `utils/apiConfig.ts` to point to your backend server:

   ```typescript
   export const getApiBaseUrl = () => {
     return "http://your-backend-url:3000"; // Replace with your backend URL
   };
   ```

4. **Start the Development Server:**

   ```bash
   npm start
   ```

---

### **🔹 Running on Different Platforms**

- **iOS Simulator:**

  ```bash
  npm run ios
  ```

- **Android Emulator:**

  ```bash
  npm run android
  ```

- **Web Browser:**

  ```bash
  npm run web
  ```

- **Physical Device:**
  Use the Expo Go app and scan the QR code displayed in the terminal

---

## **✨ Features**

### **Authentication System**

- Secure JWT-based authentication
- Form validation with real-time error feedback
- Auto-login with stored credentials
- Protected routes and navigation guards

### **News Discovery**

- Latest news from multiple sources
- Search functionality with keyword filtering
- Category-based news filtering
- Infinite scroll with pagination
- Pull-to-refresh functionality

### **Article Management**

- Detailed article view with full content
- Bookmark/unbookmark articles
- Share articles with external apps
- Reading time estimation
- Beautiful image galleries

### **User Experience**

- Dark theme with modern UI design
- Smooth animations and transitions
- Responsive design for all screen sizes
- Loading states and error handling
- Network status monitoring

### **State Management**

- Redux Toolkit for predictable state updates
- Persistent storage for user sessions
- Optimistic UI updates
- Error boundary handling

---

## **📁 App Structure**

```
VELORA-FRONTEND/
├── app/                          # Expo Router app directory
│   ├── (auth)/                   # Authentication screens
│   │   ├── signIn.tsx           # Sign in screen
│   │   └── signUp.tsx           # Sign up screen
│   ├── (tabs)/                   # Main tab navigation
│   │   ├── index.tsx            # Home feed screen
│   │   ├── bookmarks.tsx        # Bookmarks screen
│   │   └── profile.tsx          # Profile screen
│   ├── article/                  # Article detail screens
│   └── _layout.tsx              # Root layout with navigation
├── components/                   # Reusable UI components
│   ├── home/                    # Home screen components
│   ├── profile/                 # Profile screen components
│   └── registration/            # Authentication components
├── api/                         # API configuration
├── store/                       # Redux store configuration
├── reducers/                    # Redux slices
├── model/                       # TypeScript interfaces
├── utils/                       # Utility functions
└── assets/                      # Static assets
```

### **Key Technologies**

- **Expo Router**: File-based routing system
- **NativeWind**: TailwindCSS for React Native
- **Redux Toolkit**: State management
- **Expo SecureStore**: Secure token storage
- **Lucide React Native**: Modern icon library
- **React Native Reanimated**: Smooth animations

---

## **🔗 Backend Repository**

Access the backend repository on GitHub [here](https://github.com/sasmithx/VELORA-BACKEND.git).

## **📄 License**

Distributed under the MIT License. See [License](LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<div align="center">
  <img src="https://img.shields.io/badge/Git-black?style=for-the-badge&logo=git&logoColor=F05032" />
  <img src="https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/Cursor-000000?style=for-the-badge&logo=jetbrains&logoColor=white" />
</div> <br>
