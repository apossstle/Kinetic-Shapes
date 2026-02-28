# Kinetic Shapes - 2D Physics Sandbox

Kinetic Shapes is an interactive, high-performance 2D physics simulation playground built with React, TypeScript, and the HTML5 Canvas API. It features multiple simulation presets that demonstrate complex collision dynamics, variable gravity, and rotational mechanics in a modern, neon-inspired interface.

## 🚀 Features

- **Real-time Physics Engine**: Custom-built collision detection and response for circle-to-circle and circle-to-polygon interactions.
- **Interactive Global Controls**:
  - **Sim Speed**: Adjust the time scale or pause the simulation.
  - **Gravity Multiplier**: Scale the environmental gravity in real-time.
  - **Rotation Multiplier**: Increase or decrease the angular velocity of the containers.
  - **Bounciness**: Global control over the restitution coefficient.
- **16+ Simulation Presets**: Ranging from "Zero-G Hexagons" to "High-Friction Nano Bots," each with unique properties and descriptions.
- **Responsive Design**: Fluid grid layout that adapts to all screen sizes.
- **Performance Optimized**: Efficient rendering loop using `requestAnimationFrame` for buttery-smooth 60 FPS simulations.

## 🚀 Getting Started

To run this project locally, you need **Node.js** installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/kinetic-shapes.git
   cd kinetic-shapes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open the link shown in your terminal (usually `http://localhost:5173`).

> **Note:** This project uses an `importmap` in `index.html` to load React from a CDN for instant previewing in some environments. For a standard local production build, ensure your `vite.config.ts` handles the build process correctly.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Graphics**: HTML5 Canvas API
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 🕹️ Controls

- **Sim Speed Slider**: Controls the `timeScale` of the physics update.
- **Gravity Slider**: Multiplies the base gravity of each simulation.
- **Rotation Slider**: Controls the speed at which the container shapes rotate.
- **Bounciness Slider**: Adjusts how much energy is conserved during collisions.
- **Restart Button**: Click the refresh icon on any card to reset that specific simulation.

## 📁 Project Structure

```text
├── components/
│   ├── Canvas.tsx          # Core physics loop and rendering logic
│   ├── SimulationCard.tsx  # Container for individual simulations
├── utils/
│   ├── math.ts            # Vector math and collision geometry utilities
│   ├── presets.ts         # Configuration data for the 16 presets
├── types.ts               # TypeScript interfaces and types
├── App.tsx                # Main layout and global state management
└── index.html             # Entry point with Tailwind and React config
```
