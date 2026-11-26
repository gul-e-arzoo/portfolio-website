"use client";

import { useEffect, useRef } from "react";

/**
 * Silky, slowly folding ribbons of brand-pink light behind the whole site.
 * Drawn with a tiny WebGL shader at half resolution, then laid over the page
 * with `mix-blend-mode: screen`: black adds nothing, so only the glow shows
 * and it never covers text or blocks clicks.
 */

const VERT = `
attribute vec2 pos;
void main() { gl_Position = vec4(pos, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform vec2 res;
uniform float t;

float ribbon(vec2 p, float i) {
  float y = 0.26 * sin(p.x * 1.5 + t * 0.22 + i * 2.1)
          + 0.11 * sin(p.x * 3.2 - t * 0.17 + i * 1.3)
          + (i - 1.0) * 0.38;
  float d = p.y - y;
  // sharp fold on one side, soft falloff on the other (silk look)
  float edge = d > 0.0 ? exp(-d * 26.0) : exp(d * 6.0);
  float spread = p.x * 0.85 + 0.35 * sin(t * 0.09 + i * 1.7);
  float fade = exp(-spread * spread * 2.4);
  return edge * fade;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * res) / res.y;
  float a = -0.62;
  mat2 r = mat2(cos(a), -sin(a), sin(a), cos(a));
  vec2 p = r * uv;

  float g = 0.0;
  g += ribbon(p, 0.0) * 0.4;
  g += ribbon(p, 1.0) * 0.6;
  g += ribbon(p, 2.0) * 0.32;

  vec3 rose = vec3(0.76, 0.22, 0.35);   // #C2395A
  vec3 pink = vec3(1.0, 0.48, 0.55);    // #FF7B8C
  vec3 col = mix(rose, pink, clamp(g * 1.2, 0.0, 1.0)) * clamp(g, 0.0, 1.2);
  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
}

const AmbientBackground = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return undefined;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return undefined;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, "pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, "res");
    const uT = gl.getUniformLocation(prog, "t");

    const SCALE = 0.5; // half resolution: soft anyway, much cheaper
    const resize = () => {
      canvas.width = Math.max(1, Math.round(window.innerWidth * SCALE));
      canvas.height = Math.max(1, Math.round(window.innerHeight * SCALE));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = performance.now();
    let raf = 0;
    let last = 0;

    const draw = (now) => {
      gl.uniform1f(uT, (now - start) / 1000 + 8);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return; // ~30 fps is plenty for slow motion
      last = now;
      draw(now);
    };

    const startLoop = () => {
      cancelAnimationFrame(raf);
      if (reduce.matches || document.hidden) {
        draw(performance.now());
      } else {
        raf = requestAnimationFrame(loop);
      }
    };
    startLoop();
    document.addEventListener("visibilitychange", startLoop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", startLoop);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.45] mix-blend-screen"
    />
  );
};

export default AmbientBackground;
