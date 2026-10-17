# HoneyLeague TCG

Gerenciador de torneios em sistema suíço com OMW% e OOW%, chaves, metagame, confrontos diretos, histórico, ranking da temporada, decklists, marcação de horário, inscrição pelo jogador e premiação.

Site estático (GitHub Pages) com dados no Firebase (plano gratuito Spark).

## Publicar (cerca de 15 minutos)

### 1. Firebase
1. Em https://console.firebase.google.com crie um projeto (pode desativar o Google Analytics).
2. **Firestore Database › Criar banco de dados** (modo de produção, região `southamerica-east1`).
3. **Firestore › Regras**: apague tudo, cole o conteúdo de `firestore.rules` e clique em **Publicar**.
4. **Authentication › Começar › E-mail/senha › Ativar**.
5. **Authentication › Users › Adicionar usuário**: e-mail `admin@honeyleague.app`, senha `Honey2026` (troque depois pelo próprio site).
6. **Authentication › Configurações › Ações do usuário**: desmarque "Ativar criação (inscrição)", para ninguém criar conta.
7. **Configurações do projeto › Seus apps › Web (`</>`)**: registre o app e copie o bloco `firebaseConfig`.
8. Abra `config.js` e troque os campos `COLE_AQUI` pelos valores copiados.

### 2. GitHub Pages
1. Crie um repositório público, por exemplo `honeyleague-tcg`.
2. Envie `index.html`, `config.js`, `firestore.rules`, `README.md` e `.nojekyll` (Add file › Upload files). **Não** envie o `backup-honeyleague.json`.
3. **Settings › Pages › Build and deployment**: Source "Deploy from a branch", branch `main`, pasta `/ (root)`, **Save**.
4. Em 1 ou 2 minutos o site fica em `https://SEU-USUARIO.github.io/honeyleague-tcg/`.
5. No Firebase, **Authentication › Configurações › Domínios autorizados**: adicione `SEU-USUARIO.github.io`.

### 3. Trazer os dados atuais
1. Abra o site, toque em **Área do Admin** e entre com `admin` / `Honey2026`.
2. **Configurações › Restaurar JSON** e escolha `backup-honeyleague.json`.
3. Pronto: torneio, histórico, banco de treinadores e as 9 fotos de decklist aparecem para todos.
4. Troque a senha em **Configurações › Login e senha**.

## Segurança
- Leitura é pública. Torneio, histórico e banco de treinadores só mudam com login do organizador.
- Jogadores podem: reportar resultado da rodada, propor e confirmar horário, anexar a decklist uma única vez e enviar pedido de inscrição.
- A senha não fica no código: o login é feito pelo Firebase Authentication.
