import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const getResponsiveSphereSize = () => {
      const containerWidth = mountRef.current?.getBoundingClientRect().width || 300;
      if (containerWidth < 150) return 0.8;
      if (containerWidth < 250) return 1.0;
      if (containerWidth < 350) return 1.2;
      return 1.4;
    };

    const getResponsiveCameraPosition = () => {
      const containerWidth = mountRef.current?.getBoundingClientRect().width || 300;
      if (containerWidth < 150) return 2.2;
      if (containerWidth < 250) return 2.4;
      if (containerWidth < 350) return 2.6;
      return 2.8;
    };

    const geometry = new THREE.SphereGeometry(getResponsiveSphereSize(), 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xf5c8bd, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = getResponsiveCameraPosition();

    const mouse = new THREE.Vector2();
    const onMouseMove = (event) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const onTouchMove = (event) => {
      if (event.touches.length > 0) {
        const rect = mountRef.current?.getBoundingClientRect();
        if (!rect) return;
        const touch = event.touches[0];
        mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    const resizeCanvas = () => {
      if (!mountRef.current) return;
      const { width, height } = mountRef.current.getBoundingClientRect();

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);

      const newSphereSize = getResponsiveSphereSize();
      const newCameraPosition = getResponsiveCameraPosition();

      sphere.geometry.dispose();
      sphere.geometry = new THREE.SphereGeometry(newSphereSize, 32, 32);
      camera.position.z = newCameraPosition;
    };

    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    window.addEventListener('resize', debouncedResize);
    resizeCanvas();

    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      const containerWidth = mountRef.current?.getBoundingClientRect().width || 300;
      const rotationSpeed = containerWidth < 200 ? 0.08 : 0.1;

      sphere.rotation.y = elapsedTime * rotationSpeed;
      sphere.rotation.x = elapsedTime * rotationSpeed;

      const sensitivity = containerWidth < 200 ? 0.03 : 0.05;
      const targetX = mouse.x * sensitivity;
      const targetY = mouse.y * sensitivity;

      sphere.position.x += (targetX - sphere.position.x) * 0.05;
      sphere.position.y += (targetY - sphere.position.y) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', debouncedResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} id="three-canvas"></div>;
};

export default Globe; 