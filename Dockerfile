FROM node:13.2-stretch
COPY . /src
WORKDIR /src
RUN npm config set registry http://registry.npm.taobao.org/ \
    && npm install \
    && npm run build

FROM nginx:latest
COPY --from=0 /src/dist /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/