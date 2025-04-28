# TP_05_PrimerServer


En time empiezo haciendo una function para obtener hora, minutos y segundos, y asi ya tener la hora

despues hago otra funcion donde creo otra fecha (necesite que chat me ayude con esto porque no lo entendia:  const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };) En esa fecha, obtengo el dia mes y año


Despues en app, importo el archivo time y express

y empiezo a los distintos gets, el primero el usuario simplemente va a recibir un hola, en el segundo, cuando este en la raiz /hora, va a tener la fecha completa, en el tercero, cuando este en la raiz fecha-completa, va a recibir fecha y hora

Y despues agregue como extra en caso de que la ruta no la encuentre, que tire un error 404 con use.


Y por ultimo en el index simplemente importo la app, creo el puerto donde va a estar y hago el listen port, para que pueda levantar el servidor

