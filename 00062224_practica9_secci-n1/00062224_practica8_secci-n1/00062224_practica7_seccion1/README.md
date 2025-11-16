¿Cuál es la diferencia entre autenticación y autorizacion?
R// Autenticación: Es comprobar quién eres. Ejemplo: pones usuario y contraseña y el sistema verifica que seas tú.
Autorización: Es el decidir qué puedes hacer después de entrar. Ejemplo: un usuario normal no puede borrar a otros, el administrador sí.

¿Cuál es la función del token JWT en la guía?
R// El token JWT sirve como un “pase” de acceso: después de iniciar sesión, el backend lo entrega firmado; el frontend lo envía en cada petición en Authorization: Bearer <token>; el servidor verifica su validez y fecha de vencimiento, y si todo está bien, te deja entrar a rutas protegidas sin pedir usuario y contraseña otra vez.