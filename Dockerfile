FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/
COPY ./ssl/wearered.key /etc/ssl/
COPY ./ssl/wearered.pem /etc/ssl/

COPY ./dist/ /usr/share/nginx/html
