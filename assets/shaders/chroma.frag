// Simple fragment shader: chroma key + small LUT (demo)
precision mediump float;
varying vec2 v_uv; uniform sampler2D u_tex; uniform vec3 keyColor; uniform float similarity; uniform float smoothness;
void main(){ vec4 c = texture2D(u_tex, v_uv); float d = distance(c.rgb, keyColor); float a = smoothstep(similarity, similarity+smoothness, d); vec3 outc = mix(vec3(0.0), c.rgb, a); gl_FragColor = vec4(outc,1.0); }
