from flask import Flask
app = Flask(__name__)
@app.route('/api')
def hello():
    return "¡Hola desde el back-end!"
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
