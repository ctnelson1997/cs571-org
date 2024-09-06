FROM nginx:stable-alpine
RUN mkdir /usr/share/nginx/html/ui
COPY dist /usr/share/nginx/html/ui
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Ask cs571api.cs.wisc.edu not to be indexed; encourage traffic to cs571.org
RUN apk add --no-cache sed
RUN sed -i '12i <meta name="robots" content="noindex, nofollow" />' /usr/share/nginx/html/ui/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]