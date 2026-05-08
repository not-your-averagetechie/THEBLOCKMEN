"use client";

import { Line, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

/* ── Procedural planet texture generator ─────────────────── */
function buildPlanetTexture(bands: string[], accentColor: string): THREE.CanvasTexture {
  const W = 512, H = 256;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // base gradient
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bands.forEach((c, i) => bg.addColorStop(i / (bands.length - 1), c));
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // horizontal wavy bands (gas-giant style)
  const numBands = 14;
  for (let b = 0; b < numBands; b++) {
    const y = (b / numBands) * H;
    const bH = H / numBands;
    const alpha = 0.1 + (b % 3 === 0 ? 0.22 : 0.1);
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let x = 0; x <= W + 4; x += 3) {
      const w1 = Math.sin(x * 0.018 + b * 1.4) * 14;
      const w2 = Math.sin(x * 0.05 + b * 0.7) * 5;
      ctx.lineTo(x, y + w1 + w2);
    }
    for (let x = W; x >= -4; x -= 3) {
      const w1 = Math.sin(x * 0.018 + b * 1.4 + Math.PI) * 14;
      const w2 = Math.sin(x * 0.05 + b * 0.7) * 5;
      ctx.lineTo(x, y + bH + w1 + w2);
    }
    ctx.closePath();
    ctx.fillStyle = bands[b % bands.length];
    ctx.fill();
  }

  // swirling storm eye
  ctx.globalAlpha = 0.55;
  const sx = W * 0.68, sy = H * 0.48;
  const storm = ctx.createRadialGradient(sx, sy, 0, sx, sy, 36);
  storm.addColorStop(0, "#ffffff22");
  storm.addColorStop(0.4, accentColor + "88");
  storm.addColorStop(1, "transparent");
  ctx.fillStyle = storm;
  ctx.save();
  ctx.translate(sx, sy);
  ctx.rotate(-0.25);
  ctx.scale(1.6, 1);
  ctx.beginPath();
  ctx.arc(0, 0, 36, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // subtle noise overlay
  ctx.globalAlpha = 0.06;
  for (let i = 0; i < 2400; i++) {
    const nx = Math.random() * W;
    const ny = Math.random() * H;
    const nr = Math.random() * 1.5;
    ctx.beginPath();
    ctx.arc(nx, ny, nr, 0, Math.PI * 2);
    ctx.fillStyle = Math.random() > 0.5 ? "#ffffff" : "#000000";
    ctx.fill();
  }

  ctx.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/* Bump map from same canvas but grayscale swirls */
function buildBumpTexture(bands: string[]): THREE.CanvasTexture {
  const W = 256, H = 128;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, W, H);
  for (let b = 0; b < 10; b++) {
    const y = (b / 10) * H;
    ctx.globalAlpha = 0.18 + (b % 2) * 0.12;
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let x = 0; x <= W; x += 3) {
      ctx.lineTo(x, y + Math.sin(x * 0.04 + b) * 6);
    }
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.closePath();
    ctx.fillStyle = b % 2 === 0 ? "#888" : "#222";
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  return new THREE.CanvasTexture(canvas);
}

const PLANET_TEXTURE_DEFS = [
  { bands: ["#1e0533", "#4c1d95", "#2e1065", "#6d28d9", "#1e0533"], accent: "#a78bfa" },
  { bands: ["#042f2e", "#0e7490", "#083344", "#06b6d4", "#042f2e"], accent: "#67e8f9" },
  { bands: ["#1a0533", "#581c87", "#2d1b69", "#7c3aed", "#1a0533"], accent: "#c4b5fd" },
];

/* ── planet configs ─────────────────────────────────────── */
const PLANET_CONFIGS = [
  {
    orbitRadius: 4,
    size: 0.55,
    color: "#7c3aed",
    emissive: "#5b21b6",
    speed: 0.35,
    initialAngle: 0,
  },
  {
    orbitRadius: 6.8,
    size: 0.72,
    color: "#06b6d4",
    emissive: "#0891b2",
    speed: 0.2,
    initialAngle: 2.1,
  },
  {
    orbitRadius: 9.5,
    size: 0.6,
    color: "#a855f7",
    emissive: "#7e22ce",
    speed: 0.13,
    initialAngle: 4.2,
  },
] as const;

const DEFAULT_CAM = new THREE.Vector3(0, 16, 24);
const DEFAULT_TARGET = new THREE.Vector3(0, 0, 0);

type Project = { readonly title: string; readonly description: string; readonly link: string };

/* ── Sun ───────────────────────────────────────────────── */
function Sun() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => { ref.current.rotation.y += dt * 0.08; });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.4, 32, 32]} />
      <meshStandardMaterial color="#f59e0b" emissive="#fbbf24" emissiveIntensity={4} />
      <pointLight color="#FFF3B0" intensity={500} distance={70} decay={2} />
    </mesh>
  );
}

/* ── Orbit ring ─────────────────────────────────────────── */
function OrbitRing({ radius, color }: { radius: number; color: string }) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 160; i++) {
      const a = (i / 160) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);
  return (
    <Line points={points} color={color} lineWidth={2.2} transparent opacity={0.45} />
  );
}

/* ── Planet ─────────────────────────────────────────────── */
function Planet({
  cfg,
  index,
  paused,
  onSelect,
  onPositionUpdate,
}: {
  cfg: (typeof PLANET_CONFIGS)[number];
  index: number;
  paused: boolean;
  onSelect: (i: number) => void;
  onPositionUpdate: (i: number, pos: THREE.Vector3) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const angleRef = useRef(cfg.initialAngle);
  const [hovered, setHovered] = useState(false);
  const [textures, setTextures] = useState<{
    map: THREE.CanvasTexture;
    bumpMap: THREE.CanvasTexture;
  } | null>(null);

  useEffect(() => {
    const def = PLANET_TEXTURE_DEFS[index % PLANET_TEXTURE_DEFS.length];
    setTextures({
      map: buildPlanetTexture(def.bands, def.accent),
      bumpMap: buildBumpTexture(def.bands),
    });
  }, [index]);

  useFrame((_, dt) => {
    if (!paused) angleRef.current += dt * cfg.speed;
    const x = Math.cos(angleRef.current) * cfg.orbitRadius;
    const z = Math.sin(angleRef.current) * cfg.orbitRadius;
    groupRef.current.position.set(x, 0, z);
    meshRef.current.rotation.y += dt * 0.4;
    onPositionUpdate(index, groupRef.current.position.clone());
  });

  return (
    <group ref={groupRef}>
      {/* atmospheric glow */}
      <mesh scale={1.4}>
        <sphereGeometry args={[cfg.size, 32, 32]} />
        <meshStandardMaterial
          color={cfg.color}
          transparent
          opacity={hovered ? 0.22 : 0.09}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
      {/* planet body */}
      <mesh
        ref={meshRef}
        onClick={(e) => { e.stopPropagation(); onSelect(index); }}
        onPointerEnter={() => { setHovered(true); document.body.style.cursor = "pointer"; }}
        onPointerLeave={() => { setHovered(false); document.body.style.cursor = "auto"; }}
        scale={hovered ? 1.15 : 1}
      >
        <sphereGeometry args={[cfg.size, 64, 64]} />
        {textures ? (
          <meshStandardMaterial
            map={textures.map}
            bumpMap={textures.bumpMap}
            bumpScale={0.18}
            emissive={cfg.emissive}
            emissiveIntensity={hovered ? 1.2 : 0.25}
            roughness={0.75}
            metalness={0.05}
          />
        ) : (
          <meshStandardMaterial color={cfg.color} roughness={0.8} />
        )}
      </mesh>
      {/* thin cloud layer */}
      <mesh scale={1.03} rotation={[0.1, 0, 0.1]}>
        <sphereGeometry args={[cfg.size, 32, 32]} />
        <meshStandardMaterial
          color={cfg.color}
          transparent
          opacity={0.055}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ── Camera rig ─────────────────────────────────────────── */
function CameraRig({
  selectedIndex,
  planetPositions,
}: {
  selectedIndex: number | null;
  planetPositions: React.MutableRefObject<THREE.Vector3[]>;
}) {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);
  const selRef = useRef(selectedIndex);

  useEffect(() => { selRef.current = selectedIndex; }, [selectedIndex]);

  useFrame(() => {
    const sel = selRef.current;
    if (sel !== null) {
      const pos = planetPositions.current[sel];
      if (!pos) return;
      // zoom in: sit slightly above & behind the planet
      const camDest = pos.clone().add(new THREE.Vector3(0, 1.4, 3.8));
      camera.position.lerp(camDest, 0.05);
      if (controlsRef.current) {
        controlsRef.current.target.lerp(pos, 0.05);
        controlsRef.current.enabled = false;
      }
    } else {
      camera.position.lerp(DEFAULT_CAM, 0.04);
      if (controlsRef.current) {
        controlsRef.current.target.lerp(DEFAULT_TARGET, 0.04);
        controlsRef.current.enabled = true;
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.08}
      minDistance={5}
      maxDistance={50}
    />
  );
}

/* ── Scene ──────────────────────────────────────────────── */
function Scene({
  projects,
  selectedIndex,
  onSelect,
  planetPositions,
}: {
  projects: readonly Project[];
  selectedIndex: number | null;
  onSelect: (i: number) => void;
  planetPositions: React.MutableRefObject<THREE.Vector3[]>;
}) {
  const handlePos = useCallback(
    (i: number, pos: THREE.Vector3) => { planetPositions.current[i] = pos; },
    [planetPositions]
  );

  return (
    <>
      <ambientLight intensity={0.12} />
      <Stars radius={120} depth={60} count={6000} factor={4} fade />
      <Sun />
      {PLANET_CONFIGS.map((cfg, i) => (
        <OrbitRing key={`ring-${i}`} radius={cfg.orbitRadius} color={cfg.color} />
      ))}
      {projects.map((p, i) => (
        <Planet
          key={p.title}
          cfg={PLANET_CONFIGS[i % PLANET_CONFIGS.length]}
          index={i}
          paused={selectedIndex === i}
          onSelect={onSelect}
          onPositionUpdate={handlePos}
        />
      ))}
      <CameraRig selectedIndex={selectedIndex} planetPositions={planetPositions} />
    </>
  );
}

/* ── SolarSystem (exported) ─────────────────────────────── */
export function SolarSystem({ projects }: { projects: readonly Project[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const planetPositions = useRef<THREE.Vector3[]>([]);

  const handleSelect = useCallback((i: number) => {
    setSelected((prev) => (prev === i ? null : i));
  }, []);

  const handleClose = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <div className="relative w-full" style={{ height: "600px" }}>
      <Canvas camera={{ position: [0, 16, 24], fov: 50 }} gl={{ antialias: true }}>
        <Scene
          projects={projects}
          selectedIndex={selected}
          onSelect={handleSelect}
          planetPositions={planetPositions}
        />
      </Canvas>

      {/* Info panel */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-[280px] md:w-[300px] pointer-events-auto z-10"
          >
            <div
              className="relative p-8 rounded-2xl border"
              style={{
                background: "rgba(3, 0, 20, 0.88)",
                backdropFilter: "blur(24px)",
                borderColor: PLANET_CONFIGS[selected % PLANET_CONFIGS.length].color + "44",
                boxShadow: `0 0 60px ${PLANET_CONFIGS[selected % PLANET_CONFIGS.length].color}18`,
              }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-5 text-gray-500 hover:text-white transition text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>

              {/* color dot */}
              <div
                className="w-3 h-3 rounded-full mb-5"
                style={{
                  background: PLANET_CONFIGS[selected % PLANET_CONFIGS.length].color,
                  boxShadow: `0 0 10px ${PLANET_CONFIGS[selected % PLANET_CONFIGS.length].color}`,
                }}
              />

              <h2 className="text-xl font-bold text-white mb-3 leading-snug">
                {projects[selected].title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {projects[selected].description}
              </p>

              <div className="mt-6 pt-5 border-t border-white/[0.06] text-[11px] text-gray-600 tracking-widest uppercase">
                Press Esc to close
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint label */}
      {selected === null && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-600 text-[11px] tracking-[0.25em] uppercase pointer-events-none">
          Drag to explore · Click a planet
        </div>
      )}
    </div>
  );
}

