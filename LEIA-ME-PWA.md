# Guia Estudantil Prático — pacote instalável (PWA)

## Arquivos

- `index.html`: aplicação completa.
- `manifest.webmanifest`: nome, ícones, cores e modo de exibição do aplicativo.
- `sw.js`: cache do aplicativo e estratégia offline.
- `icons/`: ícones para Android, navegadores e iPhone/iPad.

## Publicação obrigatória

O PWA precisa ser publicado em um endereço **HTTPS** (ou aberto em `localhost` durante testes). Abrir `index.html` diretamente com `file://` não permite instalar o service worker.

Envie **todos os arquivos e a pasta `icons/`**, mantendo a estrutura:

```
/index.html
/manifest.webmanifest
/sw.js
/icons/icon-192.png
/icons/icon-512.png
/icons/apple-touch-icon.png
```

Hospede a pasta na raiz do site ou em uma subpasta, sem separar `index.html`, `manifest.webmanifest`, `sw.js` e `icons/`.

## Instalação

- **Android (Chrome):** abra o endereço HTTPS, toque no menu ⋮ e escolha `Instalar aplicativo` ou `Adicionar à tela inicial`.
- **Computador (Chrome/Edge):** use o ícone de instalação na barra de endereço ou o menu do navegador.
- **iPhone/iPad (Safari):** toque em `Compartilhar` → `Adicionar à Tela de Início`.

O aviso de instalação também aparece dentro do Guia quando o navegador oferece suporte.

## Uso offline e limites

1. Abra o site uma primeira vez com internet para que a aplicação e os recursos estáticos sejam armazenados.
2. Depois disso, as páginas do Guia e os materiais que já vieram no HTML podem abrir sem conexão.
3. O progresso continua usando o armazenamento local do navegador. Faça backups periódicos nas Configurações.
4. Login, cadastro, recuperação de senha, avaliações compartilhadas e sincronização Supabase precisam de internet. Quando estiver offline, os dados locais continuam disponíveis e a sincronização poderá ocorrer quando a conexão voltar.
5. Não limpe os dados do navegador se ainda não tiver exportado um backup.

O service worker não armazena respostas do banco, tokens, dados de autenticação ou requisições de escrita. Apenas o shell do aplicativo e recursos estáticos selecionados são armazenados.

## Atualizações futuras

Quando publicar uma nova versão, substitua `index.html` e, se mudar recursos, incremente a constante `VERSION` no início de `sw.js` (por exemplo, `v2`). O aplicativo identificará a atualização e oferecerá o botão `Atualizar`.

## Verificação após publicar

1. Abra o endereço HTTPS e confirme que o navegador carrega o site.
2. No Chrome, abra DevTools → Application → Manifest e confirme o nome e os ícones.
3. Em Application → Service Workers, confirme que `sw.js` está ativo.
4. Em Application → Storage, marque Offline ou desconecte a internet e recarregue a página.
5. Teste o botão de instalação em um navegador compatível.

## Biblioteca de conhecimento por assunto

Cada ficha apresenta dez seções: introdução, explicação completa, exemplos, aplicações no cotidiano, imagem/diagrama, três níveis de exercício, resumo e referências.

No Painel administrativo, os campos específicos permitem substituir os modelos gerais por material próprio. Para cadastrar referências, use uma linha por fonte no formato `Instituição ou autor | https://endereco | descrição`. Imagens precisam ter URL HTTPS e texto alternativo. Se não houver imagem, o Guia cria um diagrama de conceitos a partir dos pontos-chave.

O indicador da biblioteca distingue `conteúdo específico` de `rascunho estruturado`. Uma ficha pode mostrar 10/10 seções preenchidas sem estar editorialmente revisada: quando o conteúdo foi montado por modelos, a página exibe um aviso explícito de que exemplos, explicações e referências ainda precisam de conferência por professor ou editor.


## Conteúdo editorial ampliado

Esta versão contém 25 fichas aprofundadas, cinco em cada disciplina prioritária: Matemática, Português, Física, Química e Biologia. As fichas foram selecionadas entre os assuntos curriculares existentes e receberam introdução, explicação específica, exemplos resolvidos, aplicações, diagrama conceitual, três exercícios por dificuldade, resumo e referências.

Os exercícios foram redigidos para esta plataforma. As fontes externas são indicadas para aprofundamento; elas não significam que cada frase do texto seja transcrição dessas fontes. As demais fichas permanecem no acervo e devem ser desenvolvidas em etapas posteriores, sem confundir modelos gerais com conteúdo editorial completo.


## Expansão curricular do 6º e 7º ano

O acervo contém 8 fichas por componente em cada ano, distribuídas em dois assuntos por bimestre, para nove componentes já presentes no Guia: Língua Portuguesa, Matemática, Ciências, História, Geografia, Inglês, Arte, Educação Física e Cultura Digital/Computação. Isso corresponde a 144 fichas.

As fichas passaram a apresentar introdução, explicação ampliada, exemplos orientados, aplicações cotidianas, mapa conceitual, exercícios básico/intermediário/avançado, resumo e fontes. Nos registros sem aprofundamento editorial anterior, esses blocos são rascunhos estruturados a partir do objetivo, resumo e pontos-chave curriculares; o Guia os identifica e recomenda revisão por professor. Eles não devem ser tratados como material formal revisado apenas por exibirem 10/10 campos.

Os códigos BNCC que já aparecem em várias fichas continuam marcados como sugestões temáticas quando não houve conferência integral da habilidade. Consulte o documento e o currículo da rede antes de usar para planejamento formal.

## Conteúdo editorial — Português e Matemática do 6º ano

Esta edição aprofunda 16 fichas já existentes (oito de Língua Portuguesa e oito de Matemática), com explicações específicas, exemplos resolvidos, aplicações, diagramas conceituais, exercícios por nível e gabaritos comentados opcionais. As referências priorizam a BNCC, o Portal da OBMEP e a Academia Brasileira de Letras. Os vínculos de códigos BNCC devem ser conferidos com o documento oficial e o currículo da rede.


## Revisão da biblioteca — versão de novembro de 2026

O catálogo foi verificado e contém **1.243 assuntos**. As dez partes da biblioteca agora têm conteúdo disponível em todos os registros: introdução, explicação, exemplos, cotidiano, diagrama, três níveis de exercícios, resumo e referências. Os pontos-chave dos anos iniciais foram ajustados para remover instruções repetitivas e usar orientações mais adequadas à disciplina.

Há **47 fichas com conteúdo específico** e **1.196 fichas com rascunho estruturado automaticamente** a partir do título, resumo, objetivo, pontos-chave e orientações de cada disciplina. Os rascunhos têm explicações de como estudar, aplicação prática, mapa conceitual sugerido, exercícios graduados e fontes gerais da área. Eles são uma base de desenvolvimento, não uma revisão factual ou pedagógica concluída. A própria interface identifica esses registros como `rascunho estruturado` e recomenda conferência docente.

Foram acrescentadas nove fichas de aprofundamento com conteúdo específico em Filosofia, Sociologia e Projeto de Vida, com exercícios e gabaritos comentados. As referências dessas fichas são apresentadas por tema; nos demais rascunhos, as referências servem como pontos de partida da disciplina e precisam ser conferidas quanto à relação direta com o assunto.

Os diagramas apresentados automaticamente são organizadores conceituais montados a partir dos pontos-chave; não substituem imagens científicas, mapas, gráficos, esquemas ou ilustrações específicas quando estes forem necessários. A correspondência de códigos BNCC e o alinhamento ao currículo local também devem ser conferidos antes de uso formal.

Nesta versão, o cache do PWA foi atualizado para `v8-knowledge-library`. Ao publicar, substitua a pasta completa mantendo os nomes e caminhos dos arquivos.


## Revisão aprofundada de Matemática e Língua Portuguesa

A versão v15 amplia as fichas existentes de Matemática e Língua Portuguesa com exemplos resolvidos, aplicações, diagramas descritos, exercícios básicos/intermediários/avançados e gabaritos comentados. O selo “revisão ampliada · validar” identifica material editorial assistido; ele não significa homologação por professor. Antes de uso formal, confira a adequação à turma, o currículo local e as referências.


## Complemento de Matemática — conteúdo específico por assunto

Na versão v10, foram substituídos os exemplos e exercícios genéricos identificados em 46 fichas de Matemática por explicações, aplicações, diagramas conceituais, atividades graduadas e gabaritos numéricos ligados ao tema (números naturais, operações, frações, medidas, decimais, porcentagem, divisibilidade, álgebra e funções, entre outros). As 165 fichas de Matemática e as 152 de Língua Portuguesa mantêm o indicador de revisão ampliada, que significa revisão editorial assistida, não homologação docente. A equipe pedagógica deve validar linguagem, progressão por série, precisão e referências antes do uso institucional.


## Motor de aulas completas

Esta edição acrescenta explicações guiadas específicas por assunto para Ciências, Biologia, Física, Química, História, Geografia, Inglês, Filosofia, Sociologia, Arte, Educação Física, Computação e Projeto de Vida. As fichas de Matemática e Língua Portuguesa mantêm a revisão aprofundada já existente. As fichas editoriais próprias foram preservadas.

Algumas fichas recebem um roteiro orientado pelo resumo e pelos pontos-chave quando não há perfil específico para o tema. Os materiais gerados por apoio automatizado são identificados como revisão assistida e devem passar por conferência docente e checagem de fontes antes de uso oficial.


## Organização da interface (v12)

A navegação principal foi simplificada para quatro áreas: Conteúdos, Perfil, Planejamento e Configurações. A página inicial apresenta somente Matérias escolares, Cursos livres e Faculdade. Progressão, conquistas, coleção e estatísticas ficam em Perfil; tarefas, flashcards, caderno e simulados ficam em Planejamento; preferências, backup e administração ficam em Configurações. O perfil é local ao navegador e não representa uma conta sincronizada.


## Versão 13 — tela inicial, apoio por Pix e caderno flutuante

- A tela inicial apresenta o botão **Vamos estudar** e três entradas: matérias escolares, cursos livres e faculdade.
- A seção de pesquisa resume indicadores da OCDE (Education at a Glance 2026). Os dados são apresentados como associação estatística, não como promessa de resultado individual.
- Em Configurações, a seção **Apoie o projeto** exibe o QR Code Pix e permite copiar a chave ou o código Pix copia e cola. O QR Code fornecido foi incluído em `assets/pix-qr-memorizeai.png`.
- Um aviso discreto de doação aparece até ser dispensado; a escolha fica salva neste navegador.
- Nas páginas de matéria, assunto, curso e formação superior, aparece um botão flutuante do Caderno Digital. Ele abre um formulário rápido e associa a anotação à área atualmente aberta. As anotações continuam no armazenamento local e entram no backup já existente.
- O cache do service worker foi atualizado para incluir o QR Code.


## Versão 14 — perfil, salvos e caderno arrastável

- O botão flutuante do Caderno Digital permanece disponível em todas as telas e pode ser arrastado com mouse ou toque. Sua posição fica salva neste navegador.
- O Perfil permite escolher nome de usuário e enviar foto própria; a imagem é reduzida no navegador e salva localmente.
- Matérias escolares, assuntos, cursos livres e cursos superiores têm bandeirinha para salvar/remover. A página `#salvos` reúne os itens.
- O estado de conteúdos salvos é incluído no backup local.
- O perfil e as listas continuam locais neste navegador; não são contas sincronizadas.
- A tela inicial inclui um formulário breve que recomenda e salva automaticamente uma matéria, curso ou graduação com base nas respostas.
