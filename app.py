from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/')
def index():    
    return render_template('index.html')
@app.route('/teclas', methods=['GET'])
def home():
    return f'<h1>Página Inicial</h1>' \
           f'<script>' \
           f'document.addEventListener("keydown", function(event) {{' \
           f'alert("Você pressionou a tecla: " + event.key);' \
           f'}});' \
           f'</script>'


@app.route('/button', methods=['POST'])
def button():
    button_name = request.form['button_name']
    if button_name == 'Botão 1':
        response = requests.get('https://dog.ceo/api/breeds/image/random')
        image_url = response.json()['message']
        return f'<img src="{image_url}" alt="Cachorro aleatório">'\
               f'<form action="/" method="get">'\
               f'<button type="submit">Voltar</button>'\
               f'</form>'
    elif button_name == 'Botão 2':
        response = requests.get('https://aws.random.cat/meow')
        image_url = response.json()['file']
        return f'<img src="{image_url}" alt="Gato aleatório">'\
               f'<form action="/" method="get">'\
               f'<button type="submit">Voltar</button>'\
               f'</form>'
@app.route('/tree', methods=['GET'])
def tree():
    return f'<h1>Árvore</h1>'\
           f'<form action="/tree" method="post">'\
           f'<input type="submit" value="W">'\
           f'</form>'

@app.route('/tree', methods=['POST'])
def display_tree():
    return f'<img src="https://cdn.pixabay.com/photo/2016/05/25/12/49/tree-1412824_1280.png" alt="Árvore">'\
           f'<form action="/" method="get">'\
           f'<input type="submit" value="Voltar">'\
           f'</form>'
if __name__ == '__main__':
    app.run()
