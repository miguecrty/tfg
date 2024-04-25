from flask import Flask, render_template, jsonify, request
import requests
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/obtenerMsgBack', methods=['GET'])
def obtenerMsgBack():
    backend_url = 'http://backend:5000/api'
    try:
        response = requests.get(backend_url)
        if response.status_code == 200:
            return jsonify({'mensaje': response.text}), 200
        else:
            return jsonify({'error': 'Error al obtener el mensaje del backend'}), 500
    except requests.RequestException as e:
        return jsonify({'error': 'Error de conexión con el backend'}), 500
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
