from pathlib import Path
import json,re,subprocess
root=Path(__file__).parent
# Frases curtas para até duas linhas na área de legendas.
phrases=[
['Seu filho ainda nem nasceu…','mas o planejamento para o futuro dele','já pode começar.'],
['Já pensou em separar','dez reais por dia para esse objetivo?'],
['Isso representa cerca de','trezentos reais por mês.','Um pequeno hábito hoje','que pode fazer parte de um projeto muito maior:','construir um patrimônio','para quem você ama.'],
['O consórcio pode ser','uma das ferramentas desse planejamento.'],
['Com contribuições mensais e,','após a contemplação por sorteio ou lance,','a carta de crédito pode ser utilizada','para adquirir um bem, conforme o contrato.'],
['Imagine seu filho chegando à vida adulta','com um imóvel no patrimônio da família.','Um bem que, no futuro,','pode servir de moradia','ou gerar renda com aluguel.'],
['Tudo começa com organização,','constância e uma escolha','que cabe no seu orçamento.'],
['Lembre-se: a contemplação não é imediata','nem garantida em uma data específica.','Existem taxa de administração,','possíveis custos e reajustes.','Valores e condições dependem','do plano contratado.'],
['Quer descobrir como começar?'],
['Fale com a PSC Consórcios','e planeje hoje novas possibilidades','para o futuro.']]
scenes=json.loads((root/'timing.json').read_text());out=[]
for scene,parts in zip(scenes,phrases):
 a=scene['a']; end=52.55 if scene is scenes[-1] else scene['b']
 weights=[len(re.sub(r'[^\w]','',x)) for x in parts]
 for phrase,w in zip(parts,weights):
  b=a+(end-scene['a'])*w/sum(weights)
  out.append([round(a,3),round(b,3),phrase]);a=b
# A primeira pausa da locução separa “nasceu” e “mas”.
out[0][1]=1.551;out[1][0]=1.551
(root/'captions.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
def stamp(t):
 ms=round(t*1000);return f'{ms//3600000:02}:{ms//60000%60:02}:{ms//1000%60:02},{ms%1000:03}'
(root/'legendas.srt').write_text('\n\n'.join(f'{i+1}\n{stamp(a)} --> {stamp(b)}\n{s}' for i,(a,b,s) in enumerate(out))+'\n')
