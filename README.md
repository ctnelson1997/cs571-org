# CS571

dev

```
npm install
npm start
```

prod

```
docker build . -t ctnelson1997/cs571-website
docker push ctnelson1997/cs571-website

docker pull ctnelson1997/cs571-website
docker run --restart=always -d -p 3891:80 --name cs571-website ctnelson1997/cs571-website
```