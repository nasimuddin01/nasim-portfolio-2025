import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const OrbitalScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const sphereRef = useRef<THREE.Mesh>();
  const particlesRef = useRef<THREE.Points>();
  const blackHoleRef = useRef<THREE.Mesh>();
  const moonRef = useRef<THREE.Mesh>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup with wider field of view
    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Main sphere (planet)
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x9b87f5,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Moon
    const moonGeometry = new THREE.SphereGeometry(0.3, 24, 24);
    const moonMaterial = new THREE.MeshPhongMaterial({
      color: 0xcccccc,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(2, 1, 1);
    scene.add(moon);
    moonRef.current = moon;

    // Black hole effect
    const blackHoleGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 100);
    const blackHoleMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.8,
    });
    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    blackHole.position.set(-3, -2, -2);
    blackHole.rotation.x = Math.PI / 4;
    scene.add(blackHole);
    blackHoleRef.current = blackHole;

    // Enhanced particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000; // Increased particle count
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      // Wider distribution of particles
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x9b87f5, 2);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.001;
        sphereRef.current.rotation.y += 0.001;
      }

      if (moonRef.current) {
        // Orbit animation for moon
        const time = Date.now() * 0.001;
        moonRef.current.position.x = Math.cos(time) * 2;
        moonRef.current.position.z = Math.sin(time) * 2;
        moonRef.current.rotation.y += 0.02;
      }

      if (blackHoleRef.current) {
        blackHoleRef.current.rotation.z += 0.005;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0002;
        particlesRef.current.rotation.y += 0.0002;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="orbital-scene" />;
};

export default OrbitalScene;