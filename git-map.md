# Controle de Versão:
 
 ## -> Registro de alterações em um ou mais arquivos!
 
 ## -> Lembrar versões específicas mais tarde
 
 ## -> Reverter para estado anterior determinados arquivos ou um projeto inteiro
 
 ## -> Compare as mudanças ao longo do tempo

 ## -> Veja quem modificou pela últimas vez algo que pode estar causando problema

 ## ->  Quem introduziu um problema ou quando

 ## -> Se você estragar tudo, ou perder arquivos, você pode facilmente recuperar 

 ## -> VCS => Version Control System

# Tipos de Controle de Versão:

  ## -> Sistemas locais (Local sem ferramenta):
   ### -> Copiar os arquivos para outro diretório
   ### Muito comum e muito simples
   ### -> Incrivelmente propensa a erros
   ### -> Fácil de sobre-escrever arquivos, casos haja feito uma cópia errada

  ## RCS => Revision Control System (Local com ferramenta)
   ### -> Ferramenta popular(Antigamente) para controle de versão
   ### -> Mantém conjuntos de alterações, ou seja, as diferenças entre os arquivos
   ### -> Formato especial no disco
   ### -> Re-criar como qualquer arquivo se parecia em qualquer ponto no tempo, adicionando-se todas as alterações ao arquivo

  ## Sistemas Centralizados (Servidor com Ferramenta):
   ### Por muito tempo foi a principal ferramenta 
   ### CVS, Subversion e Perforce
   ### Um único servidor que contém todos os arquivos de controle de versão
   ### Vários clientes usam arquivos a partir desse lugar central
   
   ### Vantagens sobre VCSs locais:
   #### -> Controle sobre atividades dos colaboradores do projeto
   #### -> Os administradores têm controle refinado sobre quem pode fazer o que
   #### -> Mais fácil de administrar um CVCS do que lidar com bancos de dados locais em cada cliente

   ### Desvantagens: 
   #### -> Se esse servidor dar problema  por uma hora, durante essa hora ninguém pode colaborar ou salvar as alterações de versão para o que quer que eles estejam trabalhando. 
   #### -> Se o disco rígido do banco de dados central for corrompido, você perde absolutamente tudo 
   #### -> Sistemas VCS locais sofrem com esse mesmo problema

  ## Sempre que você ter toda a história do projeto em um único lugar, há o risco de perder tudo

  ## Sistema distribuídos: 

   ### Exemplos: GIT, Mercurial, Bazaar ou Darcs

   ### Duplicar(clonar) localmente o repositório completo.
   ### Se qualquer servidor morrer, e esses sistemas estiverem colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor 
   ### Cada clone é de fato um backup completo de todos os dados
   ### Clientes usam o estado mais recente dos arquivos

 ## O que é o GIT? 
  ### -> Sistema de Controle de Versão distribuido
  ### -> Open-source
  ### -> Pontos na história: commit(viagem no tempo)
   #### -> Histórico de alterações no código  
   #### -> voltar ára qualquer ponto na história
  ### -> Controlar o fluxo de novas funcionalidades
   #### -> ramificações: branch(Universos paralelos)
   #### -> Vários devs no mesmo projeto
   #### -> Análise e resolução de conflitos


 ## Comandos : 

  ### -> `Git init` : Inicia um novo repositório GIT
  ### ls -al .git : Mostra exatamente onde está todo o histórico do projeto
  ### -> `git add` . : Adiciona ao histórico tudo que estiver no diretório 
  ### -> `git commit -m "Mensagem de inicialização do commit"` : Dessa forma  marcamos o ponto  na linha do tempo
  ### -> `Git log` : Retorna o nome do commit, nome e email do autor e a HEAD, que aponta exatamente em que ponto da história nós estamos(BRAND -> LINHA DO TEMPO PRINCIPAL - sempre começa na `master`- ), como também a data
  ### -> `git rm --cached name-archive` : Remove o arquivo da Stage Area 
  #### Parâmetros a mais do `GIT LOG`
  ##### -> `git log -oneline` : Retorna os dados de forma reduzida   
  ##### -> `git log -n 5` : Nesse caso irá retornar os últimos 5 commit 
  ##### -> `git log --since=2022-07-01`:Nesse caso irá retornar os commit desde o dia 01/07/22
  ##### -> `git log --until=2022-07-01` : Nesse caso irá retornar os commit anteriores ao dia 
  ##### -> `git log --author=Filipe` : Nesse caso irá retornar os commit do autor em questão
  ##### -> `git log --grep="Initial"`

 ## Conceitos: 
  
  ### -> Estágios do arquivo: 
  #### -> Com o `GIT INIT|CLONE`Quando o projeto é iniciado, os arquivos estarão na pasta Working Directory -> (Modified)
  #### -> Com o `GIT ADD`os arquivos serão direcionados a Stage Area -> (Staged)
  #### -> Com o `GIT COMMIT` eles serão levados ao Local Repository -> (Commited)

  ### Git Worflow:
  #### Working Directory (1) -> Production
  #### Stage Area (2) -> Middle 
  #### Local Repository (3) -> Timeline

  ### Hash(SHA-1): Checksum - converte dados em número
  #### Logo, o git 'tira uma foto' do projeto e o converte em metadados(HASH), e, dessa forma, a integridade dos dados serão mantidas e a única maneira de ser ter os mesmos metadados, é se a pessoa não alterar nada e criar outra hash
  #### Snapshot A -> 6fd78a0ct -> {parent: null, author: 'Filipe',message: '', InitialCommit}
  #### Snapshot B -> 8d9e0a9f4 -> {parent: '6fd78a0ct ', author: 'Filipe',message: '', SecondCommit}
  #### Snapshot C -> 56dec34a2 -> {parent: '8d9e0a9f4', author: 'Filipe',message: '', ThirdCommit}

  ### HEAD -> Ponteiro que aponta aonde estamos no projeto
  #### `MASTER` -> Name of timeline

 ## Alterando arquivos
  ### Adicionando arquivos com git add
   #### `git add name-file` -> Adiciona o arquivo ao `Stage Area`
   #### `git add .` -> Adiciona todos os arquivo do diretório no `Stage Area`
   #### `git add *.html` -> Adiciona todos os arquivos que terminam com .html `Stage Area`
   #### `git diff` -> Mostra tudo que foi alterado no projeto que já passou pelo commit por meio de comparação (Pega o que tem no Working Directory)
   #### `git diff --staged` -> Mostra tudo que foi alterado no projeto que já passou pelo commit por meio de comparação (Pega o que você tem no Stage Area)
   #### `git rm name-file` -> Exclui o arquivo (Depois você terá que criar o commit para ter a sua timeline organizada)
   #### `git mv new-name-file` -> Renomear arquivos
   #### `git mv pasta/name-file` -> Mover arquivos
   #### `git restore name-file` -> Desfaz modificações 
   #### `git restore --stage name-file` -> Desfaz modificação de um arquivo que está na `Stage Area`
   #### `git restore --stage . ` -> Desfaz todas as modificações
   #### `git commit --amend -m "Alterando o conteúdo"` -> Corrige um Commit
   #### `git checkout hash(começo do nome do commit) -- name-file` -> Traz um arquivo de um commit antigo de volta ao diretório
   #### `git clean -f` -> Remove arquivos não rastreados `NÃO TEM COMO RECUPERAR! DE NENHUMA FORMA!`
   #### `git revert HEAD~nro_do_commit` -> Traz um commit para a working stage 
   #### `git show d01eedd78 -- src/views/*`
   #### `git show d01eedd78 `