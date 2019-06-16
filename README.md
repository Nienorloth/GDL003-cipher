# Club secreto "Treehouse"

Aplicación lúdica para generar mensajes cifrados y descifrar mensajes recibidos, donde el usuario podrá elegir un personaje como identidad secreta, así como crear una lista de amigos ingresando el nombre de 3 amigos para asignarles un personaje y así definir un código secreto para cada uno de ellos. De este modo el usuario podrá enviar y recibir mensajes con un código secreto personalizado para cada uno de los amigos que ingresó en su "lista de amigos".

## Cifrado
Los mensajes de codificarán utilizando el cifrado César, que consiste en desplazar cada letra un determinado número de lugares. El número de desplazamientos (offset) es determinado por el personaje seleccionado por el usuario y el amigo (de su lista de amigos) seleccionado para enviar o recibir mensajes, permitiendo así que los mensajes escritos para un amigo en particular no puedan ser descifrados por alguien más, pues cada amigo tiene un offset diferente.

## Usuario
El producto está dirigido a niños de alrededor de 7 años, por lo que el offset se define automáticamente dependiendo del amigo con quien el usuario esté enviando y recibiendo mensajes y así el niño no tenga que elegir un número de desplazamientos que después debería recordar bien para que los mensajes puedan ser descifrados correctamente.

El diseño general cuenta con botones grandes, espacios amplios para ingresar texto,poco texto explicatorio (también con letras grandes), imágenes coloridas y atractivas y opciones de interactividad, con la intención de ser una aplicación atractiva y entretenida para niños.

## Interfaz de usuario (UI)
La interfaz permite al usuario:

* Elegir un personaje como identidad secreta.
* Crear una lista donde puede ingresar hasta 3 amigos y asignar un personaje a cada uno.
* Elegir uno de los amigos de su lista para enviar o recibir mensajes, lo cual definirá el offset para cifrar y descifrar.
* Ingresar un mensaje (texto) para cifrar.
* Ver y copiar el resultado del mensaje cifrado.
* Ingresar un mensaje (texto) para descifrar.
* Ver y copiar el resultado del mensaje descifrado.

# Instrucciones de ejecución
Para ejecutar la aplicación tan solo hay que abrir el sitio web https://nienorloth.github.io/GDL003-cipher/src/

# Instrucciones de uso
* Seleccionar un personaje como identidad secreta. Esto te llevará a una pantalla de menú.
* Elegir una de las acciones señaladas en los botones: 
  * "Invitar amigos". Aquí puedes crear una lista de hasta 3 amigos, a quien enviarás mensajes secretos, ingresando su nombre y asignando un personaje a cada uno.
  * "Cifrar un mensaje". Aquí debes elegir el personaje (amigo de tu lista) al que quieres enviar un mensaje secreto. Una vez seleccionado el personaje se mostrará una caja de texto para que escribas el mensaje y una caja de texto donde se mostrará el mensaje ya cifrado. En la parte inferior de la pantalla se mostrará un botón que te permite copiar el restultado (tu mensaje cifrado).
  * "Descifrar un mensaje". De igual manera aquí debes seleccionar el personaje que te envió el mensaje secreto para que se muestren las cajas de texto donde debes ingresar el mensaje y donde se mostrará tu mensaje ya descifrado. En la parte inferior de la pantalla se mostrará un botón que te permite copiar el restultado (tu mensaje descifrado).