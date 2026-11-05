# Guindastão — muito além do guindaste

Vídeo vertical de 78 segundos, 1080 × 1920, 30 fps. Narração Roberta enviada pelo usuário: duração original 76,251 s, mantida na velocidade original, com normalização de volume e breve encerramento visual.

## Identidade visual e personagem

Fundo off-white, títulos em verde-escuro com amarelo de destaque, letras condensadas e ilustrações técnicas em verde e amarelo. Marca tipográfica acompanhada do emblema presente no capacete da Guinda aprovada. Perfil informado pelo usuário: @guindastaologistica.

A personagem aparece apenas com cabeça/cabelo/capacete, sem pescoço ou corpo. O rosto aprovado é preservado como base. A região da boca alterna entre três posições por máscara suave, orientada pela energia da gravação e pelas pausas. Trata-se de animação de fala baseada no áudio, não de alinhamento fonema por fonema. Movimentos suaves da cabeça acompanham a apresentação. A boca fecha nas pausas e no encerramento.

## Conteúdo

Cenas sobre equipamento, peso/dimensões/alcance, acesso/terreno, recursos e etapas, capacitação, inspeção/comunicação, benefícios, planejamento e valores. As ilustrações de guindaste são esquemáticas: não representam modelo real, dimensionamento de operação, capacidade de carga ou instrução de execução. Não foram inventadas certificações, números de segurança, capacidades ou credenciais da empresa.

A imagem da Guinda foi aprovada pelo usuário antes da produção; as variações de boca foram preparadas apenas para animar a fala. O texto das legendas é o roteiro fornecido, com marcação editorial baseada nas pausas da gravação; não houve transcrição automática.

## Arquivos e reprodução

- `video.html`: identidade visual, enquadramentos, personagem e legendas.
- `art.js`: ilustrações técnicas e cenas em SVG.
- `scenes.json` e `captions.json`: conteúdo e tempos.
- `fala.json`: energia de voz por quadro, para o movimento de boca.
- `assets/`: rosto aprovado e duas variações de boca, sem pescoço.
- `render.cjs`: exportação com Chromium, Playwright e FFmpeg.

Neste ambiente: `node render.cjs --preview` e `node render.cjs`. Em outro computador, ajustar os caminhos de dependências, fontes e áudio, e fornecer a gravação original. Não é necessária chave de serviço para renderizar com os arquivos já preparados.
