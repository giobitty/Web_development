# these import are needed to run the flask app, get the html files , handle requests between the files, and redirect
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:fag1ol1@localhost/quotes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the model for the database table
class Favoquotes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(30))
    quotes = db.Column(db.String(2000))

# Routes and view functions

@app.route('/')
def index():
    result = Favoquotes.query.all()
    listcolors = ['magenta', 'babyblue', 'orange']
    return render_template('index.html', quote1="I cannot teach, I can only help you think", colors=listcolors, result = result)

@app.route('/quotes.html')
def quotes():
    return render_template('quotes.html')

@app.route('/process', methods=['POST'])
def process():
    author = request.form['author']
    quote = request.form['quote']
    
    # Example: Save form data to the database
    new_quote = Favoquotes(author=author, quotes=quote)
    db.session.add(new_quote)
    db.session.commit()
    
    return redirect(url_for('index'))  
    # Redirect to the index route (homepage)

if __name__ == '__main__':
    with app.app_context():db.create_all()
    app.run(debug=True)
