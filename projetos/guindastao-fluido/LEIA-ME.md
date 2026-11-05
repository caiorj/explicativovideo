# Guindastão — sequência ilustrada contínua

Versão vertical de 78 segundos, 1080 × 1920, 30 fps. Mantém a narração original e a identidade off-white, verde e amarelo.

A montagem contém oito sequências, que permanecem na tela enquanto recebem novas informações:

1. Máquina, pergunta e ampliação do escopo do serviço.
2. Análise da carga: peso, dimensões, alcance, acesso e terreno.
3. Fluxo de definição do equipamento, dos recursos e das etapas.
4. Equipe, inspeção e comunicação.
5. Painel acumulativo de benefícios.
6. Linha do tempo até o içamento, destacando o planejamento.
7. Três pilares da contratação.
8. Encerramento com a marca e o perfil da empresa.

O guindaste aparece apenas na abertura. Não há redesenho completo entre frases. A caneta acompanha somente três marcações pontuais. Entradas laterais, aproximações suaves, movimento da carga na abertura e fluxo de comunicação dão variedade ao movimento. A locução mantém a mesma duração e velocidade.

`evolution.js` compõe as sequências por tempo absoluto, sem reiniciar quando o título muda. `drawing.js` contém formas SVG reutilizáveis; `video.html` apresenta títulos, legendas e a caneta; `boards.json` contém os títulos e tempos; `captions.json` contém as legendas. `render.cjs` combina imagens renderizadas pelo Playwright/Chromium com o áudio usando FFmpeg.

Para renderizar em outro computador, ajuste os caminhos locais de Playwright, Chromium, áudio e fontes. A narração original não é distribuída separadamente. Os desenhos são esquemáticos e não apresentam parâmetros de dimensionamento operacional.
