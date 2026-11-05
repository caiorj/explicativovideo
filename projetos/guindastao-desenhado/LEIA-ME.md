# Guindastão — explicação desenhada

Vídeo vertical de 78 segundos, 1080 × 1920 e 30 fps, com a narração original enviada pelo usuário.

São 28 quadros em SVG. Os contornos aparecem progressivamente, seguidos das cores, enquanto uma caneta acompanha os pontos dos traços. Setas, medidas, esquemas e marcações ilustram cada parte da explicação. Mantém a logo oficial enviada, fundo off-white, verde e amarelo, sem personagem e sem 3D.

`boards.json` controla os tempos e títulos; `captions.json` contém as legendas; `drawing.js` contém os desenhos; `video.html` anima os traços e a caneta. `render.cjs` usa Playwright, Chromium e FFmpeg para gerar o MP4.

Para reproduzir em outra máquina, ajuste os caminhos locais do áudio, Playwright, Chromium e fontes no renderizador. A narração não é distribuída separadamente neste projeto. As ilustrações são esquemáticas, sem parâmetros de dimensionamento operacional.
