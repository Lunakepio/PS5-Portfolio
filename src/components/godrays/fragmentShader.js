const fragmentShader = /*glsl*/ `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

#define PI 3.14159265358979

#define MOD3 vec3(.1031,.11369,.13787)

    
vec3 hash33(vec3 p3) {
    p3 = fract(p3 * MOD3);
    p3 += dot(p3, p3.yxz+19.19);
    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0,1.0);
}

`;

export default fragmentShader;
