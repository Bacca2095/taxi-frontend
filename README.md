## Caracteristicas
Las características  principales de este bloque son: 

- Uso del CLI [create-react-app](https://github.com/facebook/create-react-app)
- Construido con [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- Soporte para enrutamiento con [react-router](https://reacttraining.com/react-router/web/guides/quick-start). 
- Manejo del estado global con [Context API](https://es.reactjs.org/docs/context.html).
- Uso de [Material-UI](https://material-ui.com/) como sistema de UI y encapsulado de clases css-in-js.
- Soporte para peticiones Http con [axios](https://github.com/axios/axios).
- Soporte de pruebas unitarias con [testing-library](https://testing-library.com/).
- Uso de [nock](https://github.com/nock/nock) para mockear peticiones http en las pruebas unitarias.
- Patrón [fixtures](https://medium.com/flawless-app-stories/swift-tests-tips-tricks-fixture-object-pattern-5decefe6f10c) para construir objetos de prueba.

## Preview

Este bloque consiste en una aplicación para visualizar la carta de un restaurant, seleccionar platos y realizar pedidos.

![Estructura de carpetas del bloque](https://drive.google.com/uc?id=1hOI87rXHf5C5sQTsvkTFhNjspvreR2Ea)
## Estructura del proyecto

Se utiliza una estructura que recopila diferentes recomendaciones de la comunidad y de nuestros clientes.

![Estructura de carpetas del bloque](https://drive.google.com/uc?id=1RqkJei7nxqABk2t3SFfWIN59-ItGWvw6)

## Para instalar este bloque se deben ejecutar los siguientes comandos

- `yarn install` para descargar las dependencias
- `yarn server` para iniciar mockserver
- `yarn start` inicia la aplicación en modo desarrollo, puede abrir el navegador en la siguiente url [http://localhost:3000](http://localhost:3000)
- `yarn test` para ejecutar las pruebas
- `yarn test:coverage` para ejecutar las pruebas con cobertura de código
- `yarn build` para generar el artefacto distribuible para producción 
