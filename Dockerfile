FROM node:20.5.1-slim

USER node

WORKDIR /home/node/app

# manter o container executando
CMD ["tail", "-f", "/dev/null"]