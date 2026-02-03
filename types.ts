export interface Vector2 {
  x: number;
  y: number;
}

export interface Ball {
  id: string;
  pos: Vector2;
  vel: Vector2;
  radius: number;
  color: string;
}

export interface SimulationConfig {
  id: number;
  name: string;
  shapeType: 'triangle' | 'square' | 'pentagon' | 'hexagon' | 'octagon' | 'star';
  vertexCount: number;
  gravity: number;
  friction: number;
  restitution: number;
  rotationSpeed: number;
  ballCount: number;
  ballSize: number;
  initialSpeed: number;
  nuanceDescription: string;
}

export interface GlobalSettings {
  timeScale: number;
  gravityMultiplier: number;
  rotationMultiplier: number;
  bouncinessMultiplier: number;
}