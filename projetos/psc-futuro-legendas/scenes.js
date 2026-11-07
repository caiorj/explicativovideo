const gold='#e9bd67',cream='#faf0d9',mint='#77c6ad',blue='#87bbd4',peach='#eab19c';
const txt=(x,y,s,size=32,color=cream,anchor='middle',bold=true)=>`<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Sans" font-weight="${bold?700:400}" font-size="${size}" fill="${color}">${s}</text>`;
const path=(d,c=gold,w=5)=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const group=(x,y,z,s)=>`<g transform="translate(${x} ${y}) scale(${z})">${s}</g>`;
const reveal=(u,at,s,x=0,y=40)=>{let p=ease((u-at)/.55);return `<g opacity="${p}" transform="translate(${x*(1-p)} ${y*(1-p)})">${s}</g>`};
const panel=(x,y,w,h,s)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="24" fill="#24282b" stroke="#9f936a" stroke-opacity=".5" stroke-width="2"/>${s}`;
const coin=(x,y,r=47)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="url(#metal)" stroke="#fae0a0" stroke-width="3"/><circle cx="${x}" cy="${y}" r="${r*.8}" fill="none" stroke="#9b7435" stroke-width="2"/>${txt(x,y+r*.25,'R$',r*.52,'#44331b')}`;
const tick=(x,y,s=1)=>group(x,y,s,`<circle r="26" fill="${mint}"/>${path('M-12 0l8 8 17-18','#173a31',5)}`);
const home=()=>`<path d="M-160 0L0-139 160 0v191h-320Z" fill="#e6b879" stroke="#f9dc9f" stroke-width="5"/><path d="M-185 3L0-160 185 3" fill="none" stroke="${cream}" stroke-width="14" stroke-linecap="round"/><rect x="-33" y="76" width="66" height="115" rx="6" fill="#39695f"/><rect x="-121" y="27" width="62" height="66" rx="5" fill="${blue}"/><rect x="61" y="27" width="62" height="66" rx="5" fill="${blue}"/>${path('M-90 28v64M62 59h60','#e8f5ee',3)}<circle cx="18" cy="137" r="5" fill="${gold}"/>`;
const key=()=>`<circle cx="0" cy="0" r="41" fill="none" stroke="${gold}" stroke-width="15"/>${path('M31 28l100 100m-23-23 20-20m-43 0 19-19',gold,16)}`;
const creditDoc=()=>`<rect x="-137" y="-180" width="274" height="360" rx="17" fill="${cream}"/><path d="M-87-108h174M-87-64h110M-87-20h174M-87 24h151" stroke="#a9b1a3" stroke-width="8"/>${txt(0,113,'CRÉDITO',34,'#354a43')}${tick(88,153,.9)}`;
const defs=`<defs><linearGradient id="metal" x2="1" y2="1"><stop stop-color="#fae3a7"/><stop offset=".5" stop-color="#e3b75e"/><stop offset="1" stop-color="#b18135"/></linearGradient></defs>`;
window.scene=(i,u,t,alpha)=>{let s='';
if(i===0){
 const breath=1+.012*Math.sin(u*2);const blink=(u>2.55&&u<2.72)?0.1:1;
 s+=`<ellipse cx="540" cy="1308" rx="260" ry="28" fill="#05060755"/>`;
 s+=reveal(u,0,group(540,1015,breath,`
 <circle r="308" fill="#e9bd670c"/>${path('M-285-45Q-246-265-40-288M286 4q-12 175-176 258','#e9bd6744',3)}
 <ellipse cx="-220" cy="28" rx="40" ry="56" fill="#edb492" stroke="#8e6251" stroke-width="4"/>
 <ellipse cx="220" cy="28" rx="40" ry="56" fill="#edb492" stroke="#8e6251" stroke-width="4"/>
 <path d="M-221-10C-241-183-139-250 0-250S241-183 221-10C246 147 157 243 0 249S-246 147-221-10Z" fill="#f4c6a5" stroke="#694e43" stroke-width="5"/>
 <path d="M-211-41Q-205-223 0-237Q200-223 211-41" fill="none" stroke="#ffe2c5" stroke-width="9" stroke-linecap="round"/>
 ${path('M-24-228q72-66 81-8 4 27-31 26q-24-1-12-20','#956549',9)}
 ${path('M-135-56q39-25 75-1M60-57q37-24 75 1','#a67658',7)}
 <g transform="translate(-94 14) scale(1 ${blink})"><ellipse rx="28" ry="37" fill="#fff9ee"/><ellipse rx="19" ry="28" fill="#795338"/><ellipse rx="12" ry="20" fill="#2c2926"/><circle cx="-7" cy="-11" r="8" fill="white"/></g>
 <g transform="translate(94 14) scale(1 ${blink})"><ellipse rx="28" ry="37" fill="#fff9ee"/><ellipse rx="19" ry="28" fill="#795338"/><ellipse rx="12" ry="20" fill="#2c2926"/><circle cx="-7" cy="-11" r="8" fill="white"/></g>
 <ellipse cx="-143" cy="96" rx="43" ry="23" fill="#ed9f91" opacity=".55"/><ellipse cx="143" cy="96" rx="43" ry="23" fill="#ed9f91" opacity=".55"/>
 ${path('M-14 60q-12 18 0 24q16 7 28-2','#cb8e6b',5)}
 <path d="M-62 132q62 69 124 0q-62 24-124 0Z" fill="#a85952" stroke="#8e4d47" stroke-width="3"/>
 <path d="M-43 141q43 12 86 0l-12 16h-62Z" fill="#fff6df"/>
 `),0,45);
}
if(i===1){s+=reveal(u,0,txt(540,950,'R$ 10',198,gold),0,60);s+=reveal(u,.3,txt(540,1045,'POR DIA',54));for(let k=0;k<5;k++){let ang=(k/5*Math.PI*2)+t*.16;s+=reveal(u,.2+k*.1,coin(540+Math.cos(ang)*325,1000+Math.sin(ang)*230,37));}s+=reveal(u,.55,path('M280 1195Q540 1230 800 1195',gold,5));}
if(i===2){const shrink=1-.28*ease((u-2.8)/.8),cx=540-170*ease((u-2.8)/.8);s+=group(cx,970,shrink,`<rect x="-300" y="-230" width="600" height="520" rx="28" fill="${cream}"/><path d="M-300-90h600v-115q0-25-25-25h-550q-25 0-25 25Z" fill="${mint}"/>${path('M-180-263v65M180-263v65','#c9ded3',14)}${txt(0,-139,'30 DIAS',42,'#24483e')}${txt(0,61,'R$ 300',94,'#29453c')}${txt(0,137,'aproximadamente',26,'#53655b', 'middle',false)}`);s+=reveal(u,3.2,group(812,1015,.6,home()),150,0);s+=reveal(u,4,txt(790,1240,'PATRIMÔNIO',31,gold));}
if(i===3){let people='';for(let k=0;k<6;k++){let a=k*Math.PI/3-Math.PI/2;let x=540+Math.cos(a)*285,y=1000+Math.sin(a)*245;people+=`<circle cx="${x}" cy="${y}" r="55" fill="#3b5953" stroke="${mint}" stroke-width="3"/>${txt(x,y+14,'R$',37,mint)}`;let p=(u*.42+k/6)%1;s+=coin(x+(540-x)*p,y+(1000-y)*p,18);}s+=reveal(u,0,people);s+=`<circle cx="540" cy="1000" r="145" fill="#263b38" stroke="${gold}" stroke-width="4"/>${txt(540,986,'FUNDO',38)}${txt(540,1043,'COMUM',38,gold)}`;}
if(i===4){const stage=ease((u-2.4)/.7);s+=reveal(u,0,panel(125,740,380,120,txt(315,815,'SORTEIO',39,mint)),-130,0);s+=reveal(u,.3,panel(575,740,380,120,txt(765,815,'LANCE',39,blue)),130,0);s+=reveal(u,.6,path('M315 872v60h450v-60M540 932v65',gold,4));s+=group(540-stage*180,1175,1-stage*.2,creditDoc());s+=reveal(u,3.1,group(805,1160,.65,key()),130,0);s+=reveal(u,4.1,txt(540,1420,'AQUISIÇÃO CONFORME O CONTRATO',29,gold));}
if(i===5){s+=reveal(u,0,group(540,945,1,home()),0,50);s+=reveal(u,1.5,panel(115,1200,400,170,txt(315,1270,'MORADIA',42,mint)+txt(315,1325,'Para a família',26)), -150,0);s+=reveal(u,3.4,panel(565,1200,400,170,txt(765,1270,'ALUGUEL',42,blue)+txt(765,1325,'Possível renda',26)),150,0);s+=path('M540 1140v35M315 1175h450',gold,4);}
if(i===6){const rows=[['ORGANIZAÇÃO','Defina seu objetivo'],['CONSTÂNCIA','Planeje as contribuições'],['ORÇAMENTO','Escolha um plano adequado']];rows.forEach(([h,v],k)=>{let y=760+k*212;s+=reveal(u,k*.72,panel(130,y,820,175,tick(215,y+86,1)+txt(295,y+70,h,42,gold,'start')+txt(295,y+125,v,29,cream,'start',false)),k%2?120:-120,0);});}
if(i===7){s+=reveal(u,0,panel(115,700,850,210,txt(540,778,'SEM GARANTIA DE',37,peach)+txt(540,844,'CONTEMPLAÇÃO IMEDIATA',44,cream)));const rows=[['TAXA DE ADMINISTRAÇÃO',2.8],['POSSÍVEIS CUSTOS E REAJUSTES',4.5],['CONDIÇÕES DO CONTRATO',6.1]];rows.forEach(([v,at],k)=>{let y=965+k*145;s+=reveal(u,at,`<circle cx="167" cy="${y+40}" r="8" fill="${gold}"/>${txt(207,y+51,v,32,cream,'start')}${path(`M145 ${y+101}H935`,'#61625b',2)}`,60,0);});}
if(i===8){s+=reveal(u,0,`<rect x="240" y="830" width="600" height="360" rx="55" fill="#324a43" stroke="${mint}" stroke-width="4"/><path d="M380 1190l-35 95 140-95" fill="#324a43" stroke="${mint}" stroke-width="4"/>${[400,540,680].map((x,k)=>`<circle cx="${x}" cy="${1005+Math.sin(u*4+k)*13}" r="24" fill="${gold}"/>`).join('')}`);}
if(i===9){s+=reveal(u,0,`<svg x="192" y="820" width="696" height="315" viewBox="335 334 856 388"><image href="__LOGO__" width="1536" height="1024"/></svg>`);s+=reveal(u,.3,`<rect x="170" y="1220" width="740" height="110" rx="18" fill="url(#metal)"/>${txt(540,1291,'FALE COM A PSC CONSÓRCIOS',35,'#27231b')}`);s+=reveal(u,.4,path('M210 1168H870',gold,3));}
return defs+`<g opacity="${alpha}">${s}</g>`;};
