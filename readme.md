## 

Dar permissão ao arquivo `start.sh`
```
chmod +x ./.docker/start.sh
```

Entrar no container
```
docker compose exec app bash
```

### Extensão dev container

#### Passo 1:
Com f1, vamos escolher essa opção e habilitar a pasta do nosso projeto
`Dev container: open folder container`

#### Passo 2:
Como pré definição, escolhemos o nosso `docker-compose.yaml`

#### Passo 3: 
Adicionar features para ficar dentro do container:
- ZSH plugins
- Common utilities
- Shell history

#### Passo 4: 
Selecionar o workspace vai ser meu container
`/home/node/app`

Obs: Sempre que editar algo de configuração, faça o rebuild

E também posso ter plugins, exemplo
```json
ghcr.io/devcontainers-contrib/features/zsh-plugins:0": {
	"plugins": "git git-flow F-Sy-H zsh-autosuggestions zsh-completions",
	"omzPlugins": "https://github.com/z-shell/F-Sy-H https://github.com/zsh-users/zsh-autosuggestions https://github.com/zsh-users/zsh-completions"
},
```


`` 
