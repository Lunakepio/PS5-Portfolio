import React, { useMemo, useRef } from 'react'
import { shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { Color, DoubleSide, AdditiveBlending, FrontSide } from 'three'

export default function Reflexion({ falloff = 3, glowInternalRadius = 1.0, glowColor = 'orange', glowSharpness = 1.0 , isBoosting,}) {
  const Reflexion = useMemo(() => {
    return shaderMaterial(
      {
        falloffAmount: falloff,
        glowInternalRadius: glowInternalRadius,
        glowColor: new Color(glowColor),
        glowSharpness: glowSharpness,
        time: 0,
        isBoosting: isBoosting,
      },/*GLSL*/
      `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vPattern;
      varying vec2 vUv;
      uniform float time;
      uniform vec3 glowColor;
      uniform float falloffAmount;
      uniform float glowSharpness;
      uniform float glowInternalRadius;
      uniform float opacity;
      #define PI 3.14159265358979
      #define MOD3 vec3(.1031,.11369,.13787)
      
      vec3 hash33(vec3 p3) {
        p3 = fract(p3 * MOD3);
          p3 += dot(p3, p3.yxz+19.19);
          return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
      }
float pnoise(vec3 p) {
  vec3 pi = floor(p);
  vec3 pf = p - pi;
  vec3 w = pf * pf * (3. - 2.0 * pf);
  return 	mix(
          mix(
                mix(dot(pf - vec3(0, 0, 0), hash33(pi + vec3(0, 0, 0))),
                      dot(pf - vec3(1, 0, 0), hash33(pi + vec3(1, 0, 0))),
                       w.x),
                mix(dot(pf - vec3(0, 0, 1), hash33(pi + vec3(0, 0, 1))),
                      dot(pf - vec3(1, 0, 1), hash33(pi + vec3(1, 0, 1))),
                       w.x),
                w.z),
          mix(
                  mix(dot(pf - vec3(0, 1, 0), hash33(pi + vec3(0, 1, 0))),
                      dot(pf - vec3(1, 1, 0), hash33(pi + vec3(1, 1, 0))),
                       w.x),
                   mix(dot(pf - vec3(0, 1, 1), hash33(pi + vec3(0, 1, 1))),
                      dot(pf - vec3(1, 1, 1), hash33(pi + vec3(1, 1, 1))),
                       w.x),
                w.z),
        w.y);
}
    float random2D(vec2 value)
    {
        return fract(sin(dot(value.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
      void main() {
          // Position
          vUv = uv;
          vec3 newPosition = vPosition + vNormal;
          vec4 modelPosition = vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * modelPosition;
          vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
          vPosition = modelPosition.xyz;
          vNormal = modelNormal.xyz;
      }`,
/*GLSL*/`
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vPattern;
      varying vec2 vUv;
      uniform float time;
      uniform vec3 glowColor;
      uniform float falloffAmount;
      uniform float glowSharpness;
      uniform float glowInternalRadius;
      uniform float opacity;
      #define PI 3.14159265358979
      #define MOD3 vec3(.1031,.11369,.13787)
      vec3 hash33(vec3 p3) {
        p3 = fract(p3 * MOD3);
          p3 += dot(p3, p3.yxz+19.19);
          return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
      }
float pnoise(vec3 p) {
  vec3 pi = floor(p);
  vec3 pf = p - pi;
  vec3 w = pf * pf * (3. - 2.0 * pf);
  return 	mix(
          mix(
                mix(dot(pf - vec3(0, 0, 0), hash33(pi + vec3(0, 0, 0))),
                      dot(pf - vec3(1, 0, 0), hash33(pi + vec3(1, 0, 0))),
                       w.x),
                mix(dot(pf - vec3(0, 0, 1), hash33(pi + vec3(0, 0, 1))),
                      dot(pf - vec3(1, 0, 1), hash33(pi + vec3(1, 0, 1))),
                       w.x),
                w.z),
          mix(
                  mix(dot(pf - vec3(0, 1, 0), hash33(pi + vec3(0, 1, 0))),
                      dot(pf - vec3(1, 1, 0), hash33(pi + vec3(1, 1, 0))),
                       w.x),
                   mix(dot(pf - vec3(0, 1, 1), hash33(pi + vec3(0, 1, 1))),
                      dot(pf - vec3(1, 1, 1), hash33(pi + vec3(1, 1, 1))),
                       w.x),
                w.z),
        w.y);
}
    float random2D(vec2 value)
    {
        return fract(sin(dot(value.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
      void main()
      {
        
        vec3 normal = normalize(vNormal);
        if(!gl_FrontFacing)
            normal *= - 1.0;
        vec3 viewDirection = normalize(cameraPosition - vPosition);
        float fresnel = dot(viewDirection, normal);
        fresnel = pow(fresnel, glowInternalRadius + 0.5);
        float falloff = smoothstep(0., 1.5, fresnel);
   
        vec3 lightColor = vec3(1., 0.85, 0.75);
        vec2 center = vec2(0.5, 0.5);
        float opacity = 0.5 - pow(distance(vUv, center), 1.);

        gl_FragColor = vec4(lightColor, opacity * 0.1 );
        
      }`
    )
  }, [falloff, glowInternalRadius, glowColor, glowSharpness, isBoosting])

  extend({ Reflexion })


  const ref = useRef()

  return (
    <reflexion
      key={Reflexion.key}
      side={DoubleSide}
      transparent={true}
      blending={AdditiveBlending}
      depthTest={false}
      ref={ref}
    />
  )
}