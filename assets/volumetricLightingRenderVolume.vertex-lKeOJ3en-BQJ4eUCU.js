import{I as e,a9 as t,m as d,aa as a,p as i}from"./index-BrdItevI.js";const r="volumetricLightingRenderVolumeVertexShader",s=`#include<__decl__sceneVertex>
#include<__decl__meshVertex>
attribute vec3 position;varying vec4 vWorldPos;void main(void) {vec4 worldPos=world*vec4(position,1.0);vWorldPos=worldPos;gl_Position=viewProjection*worldPos;}
`;e.ShadersStore[r]||(e.ShadersStore[r]=s);const n=[t,d,a,i];for(const o of n)e.IncludesShadersStore[o.name]||(e.IncludesShadersStore[o.name]=o.shader);const c={name:r,shader:s};export{c as volumetricLightingRenderVolumeVertexShader};
