# CS571

## dev

```
npm install
npm run dev
```

## prod-cloud

Set `CS571Configurator` to cloud

```
npm run build
```

Use winscp to drag & drop to `/var/www/html`.

## prod-onprem

Set `CS571Configurator` to onprem

```
npm run build
docker build . -t ctnelson1997/cs571-org
docker push ctnelson1997/cs571-org
```

Recreate container with the latest image.
