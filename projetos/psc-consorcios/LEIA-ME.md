# PSC Consórcios — como funciona

Vídeo vertical de 45 segundos, 1080 × 1920, 30 fps. Áudio fornecido pelo usuário, preservado na velocidade original (42,475 s), normalizado e seguido por um encerramento visual até 45 s.

## Direção visual

Baseada na referência enviada em 05/11/2026: fundo escuro, tipografia branca com destaques azuis, legendas em caixas escuras e animações 3D explicativas. A marca PSC aparece no alto e no encerramento. A logo foi isolada da referência visual enviada. Não há barra de progresso geral.

Os modelos representam carro, imóvel, participantes do grupo, parcelas, fundo comum, administradora, sorteio, lance, carta de crédito, prazo e custos. Não se usam personagens humanos de corpo inteiro ou anatomia desenhada à mão. O fundo comum é uma ilustração conceitual; não representa valores, rentabilidade ou prazos garantidos.

O vídeo explica: contribuições mensais; administradora autorizada pelo Banco Central (genérica, sem atribuir esse status à PSC); contemplação por sorteio ou lance; condições contratuais; ausência de contemplação imediata garantida; parcelas até a quitação; taxa de administração e possíveis custos e reajustes.

## Arquivos

- `video.html`: títulos, legendas e identidade visual.
- `scene3d.js`: modelos e animação em Three.js.
- `scenes.json`: tempos e conteúdo das cenas.
- `captions.json`: texto fornecido pelo usuário em blocos, com marcação editorial baseada nas pausas do áudio. Não houve transcrição automática.
- `assets/logo-psc.png`: ativo de marca usado na montagem.
- `render.cjs`: exportação com Chromium, Playwright e FFmpeg.

## Reprodução neste ambiente

`node /workspace/psc-consorcios/render.cjs --preview` gera imagens de conferência. `node /workspace/psc-consorcios/render.cjs` exporta o MP4.

O script usa caminhos locais para áudio, dependências e fontes. Em outro computador, forneça a gravação original e ajuste esses caminhos. A geração do vídeo não depende de serviços pagos ou credenciais.
