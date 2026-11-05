// Composições persistem durante vários trechos da locução.
const enter=(u,at=0)=>ease((u-at)/.65);
const layer=(u,at,body,dx=0,dy=45)=>{let p=enter(u,at);return `<g opacity="${p}" transform="translate(${dx*(1-p)} ${dy*(1-p)})">${body}</g>`};
const tile=(x,y,w,h,body,fill='#fffdf6')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="24" fill="${fill}" stroke="#bdd0bd" stroke-width="2"/>${body}`;
const line=(d,color=G,width=5)=>`<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
const tag=(x,y,s)=>label(x,y,240,s);
function annotation(u,at,d){const p=clamp((u-at)/.9);return p>0?`<path class="ink" data-progress="${p}" d="${d}" fill="none" stroke="${Y}" stroke-width="10" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="${1-p}"/>`:'';}
window.evolution=t=>{
let a=0,b=12.6,s='',u=t;
if(t<12.6){
s+=layer(u,0,gp(100,780,1,crane(t,Math.max(0,t-6.5))),260,0);
s+=layer(u,.2,tx(540,680,'O QUE VOCÊ CONTRATA?',42,G,true));
// A mesma máquina permanece enquanto o olhar se amplia para a operação.
s+=layer(u,4,`<circle cx="785" cy="927" r="102" fill="#fff9e6dd" stroke="${Y}" stroke-width="8"/>${tx(785,961,'?',110,G,true)}`,100,0);
s+=layer(u,8.8,tile(115,1280,850,120,tx(540,1355,'EQUIPAMENTO + PREPARO + RESPONSABILIDADE',34,G,true),'#efe5b7'));
s+=annotation(u,9.4,'M170 1415Q540 1431 910 1415');
}else if(t<24){a=12.6;b=24;u=t-a;
s+=tile(92,620,896,805,'','#fffdf6');
for(let x=130;x<980;x+=40)s+=line(`M${x} 645V1390`,'#e6ede0',1);
for(let y=660;y<1410;y+=40)s+=line(`M115 ${y}H965`,'#e6ede0',1);
s+=layer(u,0,tx(540,690,'ANÁLISE DA OPERAÇÃO',40,G,true));
s+=layer(u,.15,gp(510,966,1.05,crate()),-100,0);
s+=layer(u,4.1,tag(290,765,'PESO')+line('M290 795L350 851',G,3));
s+=layer(u,5.3,line('M340 1150H710m-15-12 15 12-15 12M355 1138l-15 12 15 12M766 840v240m-12-15 12 15 12-15M754 855l12-15 12 15')+tx(525,1200,'DIMENSÕES',32,G,true));
s+=layer(u,6.7,line('M280 1060Q220 850 713 760',Y,6)+tx(755,794,'ALCANCE',32,G,true),0,-30);
s+=layer(u,8.4,line('M140 1270H930M180 1300H890',G,4)+tag(300,1350,'ACESSOS')+tag(790,1350,'TERRENO'),0,65);
}else if(t<31.6){a=24;b=31.6;u=t-a;
s+=layer(u,0,tx(540,690,'DA ANÁLISE À EXECUÇÃO',43,G,true));
const items=[['EQUIPAMENTO','Adequado à operação'],['RECURSOS','Pessoas e estrutura'],['ETAPAS','Cuidados definidos']];
items.forEach(([title,sub],i)=>{const y=790+i*210;let at=[0,3.8,5.6][i];s+=layer(u,at,tile(165,y,750,165,`<circle cx="250" cy="${y+80}" r="47" fill="${i===1?Y:G}"/>${tx(250,y+96,'0'+(i+1),45,i===1?G:'white',true)}${tx(347,y+65,title,43,G,true,'start')}${tx(347,y+114,sub,27,D,false,'start')}`),i%2?120:-120,0);if(i<2)s+=layer(u,at+.3,line(`M540 ${y+174}v25m-9-9 9 9 9-9`,Y,5));});
}else if(t<42.1){a=31.6;b=42.1;u=t-a;
s+=layer(u,0,tx(540,690,'QUEM FAZ A OPERAÇÃO ACONTECER',39,G,true));
s+=layer(u,0,tile(125,760,370,420,gp(310,940,.9,helmet())+tx(310,1118,'EQUIPE',41,G,true)),-130,0);
s+=layer(u,2.4,tile(535,760,420,420,gp(745,948,.68,clipboard())+tx(745,1154,'INSPEÇÃO',36,G,true)),130,0);
s+=layer(u,5.4,check(438,810,1.1)+check(905,810,1.1));
s+=layer(u,7.7,tile(125,1225,830,180,gp(228,1322,.35,radio(t))+tx(580,1300,'COMUNICAÇÃO CLARA',42,G,true)+line('M350 1350H845',Y,5)));
// Fluxo de informação entre equipe e inspeção.
if(u>7.7){for(let j=0;j<3;j++){let x=470+((u*110+j*75)%120);s+=`<circle cx="${x}" cy="980" r="6" fill="${Y}"/>`;}}
}else if(t<52.8){a=42.1;b=52.8;u=t-a;
s+=layer(u,0,tile(105,650,870,220,gp(240,763,.36,shield())+check(240,755,.8)+tx(600,750,'MAIS SEGURANÇA',57,G,true)+tx(600,806,'PARA A OPERAÇÃO',31,G,true),'#e3ecd9'));
const benefits=[['MENOS','IMPREVISTOS',4.2],['MENOR RISCO','DE DANOS',6],['MAIS','PREVISIBILIDADE',8]];
benefits.forEach(([one,two,at],i)=>{let y=925+i*166;s+=layer(u,at,tile(135,y,810,140,check(205,y+71,.85)+tx(300,y+53,one,35,G,true,'start')+tx(300,y+106,two,48,G,true,'start'),i===2?'#f3e6b8':'#fffdf6'),100,0);});
}else if(t<58.5){a=52.8;b=58.5;u=t-a;
s+=layer(u,0,tx(540,720,'O SERVIÇO COMEÇA ANTES',49,G,true));
s+=line('M260 950H820', '#c0cdbd',8);
const progress=clamp(u/4);s+=line(`M260 950H${260+560*progress}`,Y,8);
['PLANEJAR','PREPARAR','IÇAR'].forEach((v,i)=>{let x=260+i*280;s+=layer(u,i*.6,`<circle cx="${x}" cy="950" r="42" fill="${i===0?G:Y}"/>${tx(x,964,String(i+1),36,i===0?'white':G,true)}${tx(x,1052,v,39,G,true)}`);});
s+=layer(u,3.4,tile(145,1160,790,170,tx(540,1230,'COMEÇA NO',40,G,true)+tx(540,1295,'PLANEJAMENTO.',65,G,true),'#efe4b5'));
s+=annotation(u,3.6,'M130 893Q255 845 390 897M390 897l-12-27m12 27-29 1');
}else if(t<67.4){a=58.5;b=67.4;u=t-a;
s+=layer(u,0,tx(540,715,'ESCOLHA QUEM ENTREGA MAIS',46,G,true));
// Três pilares distintos, sem retomar máquina, prancheta ou capacete.
const words=[['PREPARO','Antes de começar',0],['RESPONSABILIDADE','Em cada decisão',3.9],['COMPROMISSO','Com o resultado',5.3]];
words.forEach(([w,sub,at],i)=>{let y=800+i*197;s+=layer(u,at,`<rect x="145" y="${y}" width="790" height="161" rx="20" fill="${i===1?G:i===2?Y:'#e1ead9'}"/>${tx(193,y+60,'0'+(i+1),29,i===1?'#f6cc56':G,true,'start')}${tx(300,y+70,w,48,i===1?'white':G,true,'start')}${tx(300,y+120,sub,28,i===1?'#dce9db':G,false,'start')}`,i%2?180:-180,0);});
}else{a=67.4;b=78;u=t-a;
s+=layer(u,0,`<circle cx="540" cy="880" r="160" fill="#e2ecd9"/>${tx(540,946,'?',190,G,true)}`);
const fade=1-enter(u,2.2);s=`<g opacity="${fade}">${s}</g>`;
s+=layer(u,2.2,`<svg x="142" y="820" width="796" height="190" viewBox="50 123 2051 487"><image href="__LOGO__" width="2172" height="724"/></svg>`);
s+=layer(u,2.7,`<rect x="220" y="1135" width="640" height="105" rx="50" fill="${Y}"/>${tx(540,1205,'SIGA A GUINDASTÃO',48,G,true)}${tx(540,1335,'@guindastaologistica',36,G,true)}`);
s+=annotation(u,3.5,'M230 1043Q545 1061 850 1043');
}
let opacity=ease((t-a)/.28)*(b===78?1:clamp((b-t)/.22));const z=1+.018*ease((t-a)/(b-a));const drift=(a===12.6?-12:a===31.6?9:0)*ease((t-a)/(b-a));return {html:`<g opacity="${opacity}" transform="translate(${540+drift} 1030) scale(${z}) translate(-540 -1030)">${s}</g>`,start:a};
};
