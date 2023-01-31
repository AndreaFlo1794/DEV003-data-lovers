# Data Lovers - Studio Ghibli

### Definición del Producto
Está página ha sido creada para todos los fans de Studio Ghibli, con la finalidad de que puedan encontrar toda la información relevante acerca de cada uno de los films y personajes, mediante interfaces amigables y de fácil lectura para que la experiencia Ghibli sea más amena.

### Historias de Usuario 

#### H.1 Visualizar la data
Como fanático de los films de Studio Ghibli quiero ver la información de los films para saber cuáles son.

Criterios de aceptación: dado que quisiera ver todos los films que ha hecho el estudio, cuando le de clic al botón films, entonces podré visualizar la información a través de las cards.

#### H.2 Ordenar Datos (score)
Como fanático de los films de Studio Ghibli quiero ver los films por rating para saber cuál es el film más popular.

Criterios de aceptación: dado que quisiera ver todos los films, partiendo de los más populares, cuando seleccione la opción ordenar por rating, entonces podré visualizar las cards con los films ordenadas por score.

Añadimos el orden inverso para que el usuario también pueda acceder rápidamente a aquellos films que no han recibido una valoración tan alta.

##### H.2.1 Ordenar Datos (release date)
Como fanático de los films de Studio Ghibli quiero ordenar los films por año de lanzamiento para ver cuáles son los films más recientes.

Criterios de aceptación: dado que quisiera ver todos los films, partiendo de los más recientes, cuando seleccione la opción ordenar por año de lanzamiento

Entonces podré visualizar las cards con los films ordenados por año de lanzamiento.

Añadimos el orden inverso para que el usuario también pueda acceder rápidamente a los primeros films desarrollados por el estudio.

#### H.3 Buscar (director-título)
Como fanático de Studio Ghibli quiero buscar en la barra de búsqueda los films para acceder a una información en específico.

Criterios de aceptación: dado que quiero ir directamente al dato que estoy buscando (título/director), cuando ingrese una palabra en la barra de búsqueda, entonces podré visualizar las cards con los films/director con la palabra ingresada.

#### H.4 Filtrar Personajes (género)
Como fanático de los films de Studio Ghibli quiero filtrar los personajes por género para identificar cuáles son hombres o mujeres y a qué película pertenecen.

Criterios de aceptación: dado que quisiera ver todos los personajes según alguna de sus características, cuando seleccione el filtro de género, entonces podrá visualizar las cards con los personajes filtrados (hombre - mujer).

#### H.5 Cálculo agregado (porcentaje)
Como fanático de los films de Studio Ghibli quiero ver el porcentaje de personajes por género para saber cuántos personajes son hombres y cuántas son mujeres.

Criterios de aceptación: dado que quisiera conocer características únicas de cada personaje, cuando seleccione la opción filtrar por género (female/male), entonces podré visualizar el porcentaje en una casilla como información adicional.

La definición de terminado es la misma para todas las HU:

  - El código ha sido hecho en peer programming
  - El código cuenta con la funcionalidad definida
  - Las cards cuentan con la información definida en el prototipo
  - La HU ha sido testeada por 3 usuarios y se han realizado las mejoras correspondientes
  - El código se aloja en el repositorio y está incluida en el ReadMe

### Diseño de la interfaz de Usuario

#### Prototipo de baja fidelidad
Este prototipo fue diseñado en base a la información brindada por las investigaciones, tomando en cuenta las necesidades del usuario es que decidimos hacer lo siguiente:

[![Prototipo-de-baja.jpg](https://i.postimg.cc/CMj4931j/Prototipo-de-baja.jpg)](https://postimg.cc/z3GWgPTB)

#### Prototipo de media fidelidad
Para tener un prototipo más sólido antes de pasar al que se haría en Figma, decidimos mediante un whiteboard, realizar uno de media, quedando de la siguiente manera:

[![Prototipo-de-media.jpg](https://i.postimg.cc/2SXd4mcf/Prototipo-de-media.jpg)](https://postimg.cc/NKmrthvN)

#### Prototipo de alta fidelidad
Mediante Figma realizamos el prototipo de alta, ya habiendo elegido un fondo y paleta de posibles colores para nuestra página, añadimos cosas al diseño como tipo de fuente, logo imagenes, y como irian las cards distribuidas, teniendo el siguiente resultado:

[![bienvenidarm.jpg](https://i.postimg.cc/bJ02FjTr/bienvenidarm.jpg)](https://postimg.cc/Q9ttHwvZ)
[![Interfaz-principal.jpg](https://i.postimg.cc/Rh9wM0Fw/Interfaz-principal.jpg)](https://postimg.cc/XGHrL49v)

Paleta de colores:

[![Paleta-de-colores.jpg](https://i.postimg.cc/C13kppWB/Paleta-de-colores.jpg)](https://postimg.cc/MMYv1NZq)

https://www.figma.com/file/R6S8CLaVrcAAtlGUVjllbi/SG?node-id=0%3A1&t=gZMJv8c5VicvH431-0

### Testeos de Usabilidad
 
 - Nuestro primer test de usabilidad, lo aplicamos con la función de ordenar ya desarrollada, los usuarios que nos apoyaron, nos comentaron detalles del CSS para mejorar la interfaz principal, como de los films, en cuanto al orden y facilidad para navegar en la pagina, recibimos muy buen feedback.

 - Para el segundo testeo de usabilidad, ya teníamos la función de filtrado y de cálculo agregado, las observaciones recibidas fueron en cuanto al tamaño de la fuente que no se lograban visualizar adecuadamente, referente a la funcionalidad todo estaba ok y fue de agrado del usuario.

