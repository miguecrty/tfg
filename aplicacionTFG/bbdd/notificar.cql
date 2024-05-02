USE prueba1;

CREATE OR REPLACE FUNCTION notify_server()
  CALLED ON NULL INPUT
  RETURNS BOOLEAN
  LANGUAGE javascript
  AS '
    function notifyServer() {
        fetch("http://localhost:3000/notificar")
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("Error al enviar la notificación al servidor. Código de respuesta: " + response.status);
                }
                console.log("Notificación enviada al servidor correctamente");
            })
            .catch(function(error) {
                console.error("Error al enviar la notificación al servidor: " + error.message);
            });
    }
    
    function notify_server() {
        notifyServer();
    }
  ';

CREATE TRIGGER trigger_notify_server
ON ejemplo1
AFTER INSERT
BEGIN
    PERFORM notify_server();
END;

