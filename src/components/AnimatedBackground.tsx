import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadThreeJS = async () => {
      // Dynamic import of Three.js
      const THREE = await import('three');
      
      if (!canvasRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      canvasRef.current.appendChild(renderer.domElement);

      // Create ocean-like geometry
      const geometry = new THREE.PlaneGeometry(20, 20, 32, 32);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          colorA: { value: new THREE.Color(0x0A1B2A) },
          colorB: { value: new THREE.Color(0x1E40AF) }
        },
        vertexShader: `
          uniform float time;
          varying vec2 vUv;
          varying float vWave;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            
            float wave1 = sin(pos.x * 0.5 + time * 0.8) * 0.3;
            float wave2 = sin(pos.y * 0.3 + time * 0.5) * 0.2;
            float wave3 = sin((pos.x + pos.y) * 0.4 + time * 1.2) * 0.1;
            
            pos.z = wave1 + wave2 + wave3;
            vWave = pos.z;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 colorA;
          uniform vec3 colorB;
          varying vec2 vUv;
          varying float vWave;
          
          void main() {
            vec3 color = mix(colorA, colorB, vWave * 0.5 + 0.5);
            gl_FragColor = vec4(color, 0.8);
          }
        `,
        transparent: true
      });

      const ocean = new THREE.Mesh(geometry, material);
      ocean.rotation.x = -Math.PI / 2;
      ocean.position.z = -2;
      scene.add(ocean);

      // Add particles
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 100;
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: 0x60A5FA,
        size: 0.02,
        transparent: true,
        opacity: 0.6
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      camera.position.z = 5;

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        
        material.uniforms.time.value += 0.01;
        particles.rotation.y += 0.001;
        
        renderer.render(scene, camera);
      }

      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (canvasRef.current && renderer.domElement) {
          canvasRef.current.removeChild(renderer.domElement);
        }
      };
    };

    loadThreeJS();
  }, []);

  return <div ref={canvasRef} className="ocean-background" />;
}