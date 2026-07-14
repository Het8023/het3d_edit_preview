import{I as e,a9 as t,C as d,aa as a,r as i}from"./index-BKqqihTF.js";const r="volumetricLightingRenderVolumeVertexShader",s=`#include<__decl__sceneVertex>
#include<__decl__meshVertex>
attribute vec3 position;varying vec4 vWorldPos;void main(void) {vec4 worldPos=world*vec4(position,1.0);vWorldPos=worldPos;gl_Position=viewProjection*worldPos;}
`;e.ShadersStore[r]||(e.ShadersStore[r]=s);const n=[t,d,a,i];for(const o of n)e.IncludesShadersStore[o.name]||(e.IncludesShadersStore[o.name]=o.shader);const l={name:r,shader:s};export{l as volumetricLightingRenderVolumeVertexShader};
