<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  
## Ejecutar en desarrollo

1. Clonar le repositorio
2. ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @ nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Conar el archivo __.env.template__ y renombrar la cópia a __.env__

6. Reconstruir la base de datos con la semilla
```
http://loaclhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest




