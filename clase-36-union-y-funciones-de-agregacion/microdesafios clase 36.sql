/*Micro desafío - Paso 1:
Utilizando la base de datos de películas queremos conocer, por un lado, los títulos y el
nombre del género de todas las series de la base de datos. Por otro, necesitamos listar los
títulos de los episodios junto con el nombre y apellido de los actores que trabajan en cada
uno de ellos.*/

select series.title, genres.name
from series
left join genres on series.genre_id = genres.id;

select episodes.title, actors.first_name, actors.last_name
from episodes
left join actor_episode on actor_episode.episode_id = episodes.id
left join actors on actor_episode.actor_id = actors.id;

/*Micro desafío - Paso 2:
Para nuestro próximo desafío necesitamos obtener a todos los actores o actrices (mostrar
nombre y apellido) que han trabajado en cualquier película de la saga de la Guerra de las
galaxias, pero ¡cuidado!: debemos asegurarnos de que solo se muestre una sola vez cada
actor/actriz.*/

select distinct actors.first_name, actors.last_name
from actors
inner join actor_movie on actor_movie.actor_id = actors.id
inner join movies on actor_movie.movie_id = movies.id
where movies.title like "%galaxia%";

/*Micro desafío - Paso 3:
Debemos listar los títulos de cada película con su género correspondiente. En el caso de
que no tenga género, mostraremos una leyenda que diga "no tiene género". Como ayuda
podemos usar la función COALESCE() que retorna el primer valor no nulo de una lista.
Podemos encontrar más información con este link: https://www.w3schools.com/sql/func_mysql_coalesce.asp.*/

select movies.title, COALESCE(genres.name, "No tiene genero") as genero
from movies
left join genres on movies.genre_id = genres.id;

/*Micro desafío - Paso 4:
Necesitamos mostrar, de cada serie, la cantidad de días desde su estreno hasta su fin, con
la particularidad de que a la columna que mostrará dicha cantidad la renombraremos:
“Duración”. Por ejemplo:
Título       |Duración
             |
Supernatural | 130*/

select title as tiutlo, datediff(end_date, release_date) as duracion
from series;

/*Micro desafío - Paso 5:
Listar los actores ordenados alfabéticamente cuyo nombre sea mayor a 6 caracteres.*/
select *
from actors
where length(first_name) > 6
order by first_name;

/*Debemos mostrar la cantidad total de los episodios guardados en la base de datos.*/
select count(*) as "cantidad de episodios en la DB"
from episodes;

/*Para el siguiente desafío nos piden que obtengamos el título de todas las series y el total
de temporadas que tiene cada una de ellas.*/
select series.title, count(seasons.number) as "cantidad de espisodios"
from series
inner join seasons on seasons.serie_id = series.id
group by series.title;

/*Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea mayor
o igual a 3.*/
select genres.name as genero, count(movies.genre_id) as "cantidad de peliculas con ese genero"
from genres
left join movies on movies.genre_id = genres.id
group by genres.name
