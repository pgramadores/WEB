# README #

Proyecto de pro-gramadores desarrollado en angular para la pagina de pro-gramadores.org

### Distribución de tareas ####

* Andres Rodriguez :: Inicio | Noticias
* Juan Mora :: Educación | Trabajos | Contacto
* Jonathan Veliz:: Foros

### Acceso a la base de datos ###

Se recomienda como herramienta usar workbench para mysql.

Las credenciales de acceso son:

* Host   : raicerk.cl
* User   : cra16464_pro-gra
* Pass   : pro-gra
* dbname : cra16464_pro-gramadores


### Uso de datos ###

La aplicación la estamos desarrollando a través de procedimientos almacenados de mysql, la lógica de los nombres de los procedimientos par mantener el orden y entendimiento es el siguiente:

spTipo_Modulo_DescripcionDeLoQueHace

Definición de tipos:

* spRec : Consulta(Select)
* spMod : Actualización (Update)
* spIns : Inserción (Insert)
* spDel : Borrado (Delete)
* spPro : Procedimientos que hagan mezclas de ins,rec,mod,del

Ejemplos:

* spRec_Trabajos_DetalleTrabajo
* spRec_Trabajos_ConsultaTrabajosDisponibles


### Otros ###

La versión de PHP debe ser 5.6 o superior.

Las librerías de angular que se están usando en este proyecto están disponibles para ser incluidas en esta url, favor usar solo librerías de esta versión 1.5.3.

https://code.angularjs.org/1.5.3/

Además todas las librerías deben ser incluidas en el index.html principal de la carpeta raíz y deben ser configuradas he incluidas en los controladores a través del archivo main.js en la carpeta js.

### Errores o solicitudes ###

Cualquier error que encuentren y deseen reportar háganlo a través de la herramienta de bitbucket, menú lateral->incidencias, así todos estaremos en conocimiento y se asignara a algunos de los participantes para su reparación


### Recomendaciones ###

Antes de empezar a trabajar en sus locales siempre ejecutar el comando "git pull origin master" para descargar los últimos cambios realizados por el equipo de desarrolladores, así se mantendrán los repositorios locales actualizados evitando problemas de merge futuros