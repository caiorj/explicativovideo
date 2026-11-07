# PSC Consórcios — bebê desenhado e legendas

Revisão de 54 segundos, 1080 × 1920, 30 fps, preservando a narração original.

A abertura substitui o berço por um rosto de bebê desenhado em SVG, com olhos castanhos, bochechas rosadas, sorriso, movimento suave e uma piscada. Os textos de apoio entre o título e as ilustrações e os textos dos rodapés foram retirados. As falas aparecem em legendas curtas na parte inferior, com fundo escuro e fonte clara. Mantém os títulos de cada cena e as informações do consórcio na narração e no quadro sobre condições de contratação.

`captions.json` contém os tempos e frases das legendas incorporadas ao vídeo; `legendas.srt` oferece as mesmas legendas em arquivo separado. `make_captions.py` reconstrói a segmentação a partir dos blocos da montagem. `timing.json` controla as cenas; `scenes.js` contém os desenhos e animações; `video.html` organiza a tela; `render.cjs` produz o MP4 com Playwright, Chromium e FFmpeg.

Para reproduzir em outra máquina, forneça o áudio original e ajuste os caminhos locais do áudio, Playwright, Chromium e fontes. Execute `node render.cjs --preview` para as prévias ou `node render.cjs` para gerar o vídeo.
