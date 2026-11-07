# PSC Consórcios — planejamento para o futuro

Vídeo vertical de 54 segundos, 1080 × 1920, 30 fps. Narração original de aproximadamente 53 segundos, mantida na velocidade enviada, com breve permanência da tela final.

Visual preto/cinza quadriculado, tipografia branca e dourada, logo PSC enviada anteriormente e ilustrações vetoriais coloridas. A narrativa passa por berço, hábito diário, calendário, fundo comum, contemplação, carta de crédito, imóvel, organização e condições do contrato. São dez composições, com elementos que se movimentam e se transformam durante os trechos.

R$ 10 por dia e cerca de R$ 300 por mês são apresentados como exemplo de organização do orçamento, e não como oferta de parcela. Não há promessa de aposentadoria, contemplação em data definida, valorização ou renda garantida. A cena do imóvel mostra possibilidades de uso; as condições dependem do plano contratado.

`script.txt` contém o texto fornecido. `timing.json` define os blocos da montagem. `scenes.js` desenha e anima os SVGs; `video.html` apresenta a identidade visual, textos de apoio e condições; `render.cjs` gera o MP4 usando Playwright, Chromium e FFmpeg. Não usa serviços pagos ou credenciais no código.

Para renderizar em outra máquina, forneça o áudio original e ajuste os caminhos do áudio, Playwright, Chromium e fontes. Execute `node render.cjs --preview` para revisar imagens ou `node render.cjs` para gerar o vídeo. O áudio separado não é distribuído neste diretório.
