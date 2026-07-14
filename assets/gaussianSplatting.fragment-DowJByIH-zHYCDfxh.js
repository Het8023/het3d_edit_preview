import{I as a,e as i,q as r,a as o,Z as s,K as f,o as l,D as u,t as c}from"./index-DdEn_fc_.js";const n="gaussianSplattingPixelShader",t=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#ifdef GPUPICKER_PACK_DEPTH
#include<packingFunctions>
#endif
varying vColor: vec4f;varying vPosition: vec2f;
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<gaussianSplattingFragmentDeclaration>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var finalColor: vec4f=gaussianColor(input.vColor,input.vPosition);
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef GPUPICKER_DEPTH
fragmentOutputs.fragData0=finalColor;
#ifdef GPUPICKER_PACK_DEPTH
fragmentOutputs.fragData1=pack(fragmentInputs.position.z);
#else
fragmentOutputs.fragData1=vec4f(fragmentInputs.position.z,0.0,0.0,1.0);
#endif
#else
fragmentOutputs.color=finalColor;
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;a.ShadersStoreWGSL[n]||(a.ShadersStoreWGSL[n]=t);const g=[i,r,o,s,f,l,u,c];for(const e of g)a.IncludesShadersStoreWGSL[e.name]||(a.IncludesShadersStoreWGSL[e.name]=e.shader);const S={name:n,shader:t};export{S as gaussianSplattingPixelShaderWGSL};
