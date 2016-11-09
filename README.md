# README #

Proyecto de pro-gramadores desarrollado en angular para la pagina de pro-gramadores.org

Sitio desarrollado con AngularJS

### Distribución de tareas ####

* Andres Rodriguez :: Inicio | Noticias
* Juan Mora :: Trabajos | Contacto
* Gerardo Calfulef :: Foros
* Sin Asignar :: Educación


### Uso de datos ###

El nombre de las colecciones de mongodb esta definida con la siguiente lógica:

ModuloNombre

Ejemplo:

* Ofertas
* Foros
* Noticias
* Educacion

### Configuracion de acceso a las rutas ###

Cambiar el acceso de AllowOverride none a AllowOverride All en el archivo de configuracion de apache o el en archivo de configuracion del sitio

/etc/apache2/apache2.conf

https://www.digitalocean.com/community/questions/htaccess-not-working-on-my-ubuntu-14-04-lamp-stack

Ademas habilitar el modo de re-escritura de los directorios con directivas .htaccess

https://www.dev-metal.com/enable-mod_rewrite-ubuntu-12-04-lts/



### Otros ###

La versión de todos los modulos estan en su respectivo archivo package.json

Las librerías de angular que se están usando en este proyecto están disponibles para ser incluidas en esta url, favor usar solo librerías de esta versión 1.5.3.

https://code.angularjs.org/1.5.3/

Además todas las librerías deben ser incluidas en el index.html principal de la carpeta raíz y deben ser configuradas he incluidas en los controladores a través del archivo main.js en la carpeta js.

### Errores o solicitudes ###

Cualquier error que encuentren y deseen reportar háganlo a través de la herramienta de errores de github


### Recomendaciones ###

Antes de empezar a trabajar en sus locales siempre ejecutar el comando "git pull origin master" para descargar los últimos cambios realizados por el equipo de desarrolladores, así se mantendrán los repositorios locales actualizados evitando problemas de merge futuros
