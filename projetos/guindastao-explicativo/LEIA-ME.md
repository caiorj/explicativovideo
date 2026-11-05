# Guindastão — versão explicativa sem personagem

Revisão solicitada: retirar completamente a cabeça da Guinda, usar a logo enviada e fazer um vídeo explicativo como o da PSC Consórcios.

## Conteúdo e visual

- Vídeo vertical, 78 segundos, 1080 × 1920, 30 fps.
- Narração original de 76,251 s, sem alteração de velocidade, com normalização de volume e encerramento visual.
- Fundo off-white, títulos condensados em verde/amarelo, legendas em verde com destaques amarelos.
- Logo isolada da imagem enviada pelo usuário, sem o emblema do capacete e sem reconstrução tipográfica do nome no HTML. A marca é aplicada como imagem no cabeçalho e no encerramento.
- Não há personagem, rosto, cabeça, animação de boca ou carregamento de imagens da Guinda nesta versão.
- Equipamentos e processos representados por modelos originais em Three.js: guindaste móvel, carga e lingas, patolas, terreno/acesso, análise de peso/dimensões/alcance, capacete, checklist de inspeção, rádio, escudo e calendário.
- Os modelos de equipamento são ilustrações conceituais; não representam especificações, capacidades, cálculos ou instruções de execução de um içamento real.
- Texto da narração e tempos de legenda preservados. Não foram inventadas credenciais, certificações, índices de acidentes ou capacidades da empresa.

## Arquivos

`video.html` cuida da identidade e das legendas; `scene3d.js` contém os modelos e a animação; `scenes.json` e `captions.json` contêm os textos e tempos; `assets/logo-guindastao.png` é o único ativo de imagem carregado pelo vídeo.

`node render.cjs --preview` gera imagens de revisão. `node render.cjs` exporta `entrega/guindastao-operacao-qualificada.mp4`. Em outro computador, fornecer o áudio original e ajustar os caminhos locais de dependências, fontes e Chromium.
