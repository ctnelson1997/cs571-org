FROM nginx:stable-alpine
RUN mkdir /usr/share/nginx/html/ui
COPY dist /usr/share/nginx/html/ui
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]