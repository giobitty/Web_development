from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:fag1ol1@localhost/ecommerce'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


@app.route('/addproduct', methods=['POST'])
def add_product():
    if request.method == 'POST':
        product_name = request.form['productname']
        product_img = request.form['productimg']
        product_description = request.form['productdescription']
        product_price = request.form['productprice']
        product_quantity = request.form['productquantity']

        new_product = Product(product_name=product_name,
                              product_img=product_img,
                              product_description=product_description,
                              product_price=product_price,
                              product_quantity=product_quantity)

        db.session.add(new_product)
        db.session.commit()

        return redirect(url_for('show_products'))  # Redirect to product listing page
    else:
        return render_template('inventory.html')  # Handle GET request properly
    
# Define the model for the database table
class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(100), nullable=False)
    product_description = db.Column(db.Text, nullable=False)
    product_img = db.Column(db.String(100), nullable=False)
    product_price = db.Column(db.Float, nullable=False)
    product_quantity = db.Column(db.Integer)

    def __repr__(self):
        return f'<Product {self.id} - {self.product}>'

with app.app_context():
    db.create_all()

# Routes and view functions

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/products')
def show_products():
    products = Products.query.all()
    return render_template('products.html', products=products)

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/cart')
def show_cart():
    return render_template('cart.html')

@app.route('/inventory')
def inventory():
    return render_template('inventory.html')

if __name__ == '__main__':
    app.run(debug=True)
