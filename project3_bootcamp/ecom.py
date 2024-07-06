from flask import Flask, render_template, request, redirect, url_for, jsonify , session
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session


app = Flask(__name__)
app.secret_key = 'fag1olon1' 

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:fag1ol1@localhost/ecommerce'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)



# add a product to the inventory
@app.route('/addproduct', methods=['POST'])
def add_product():
    if request.method == 'POST':
        product_name = request.form['productname']
        product_img = request.form['productimg']
        product_description = request.form['productdescription']
        product_price = request.form['productprice']
        product_quantity = request.form['productquantity']

        new_product = Products(product_name=product_name,
                              product_img=str(product_img),
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
        return f'<Product {self.id} - {self.product_name}>'

with app.app_context():
    db.create_all()

# Routes and view functions

@app.route('/')
def index():
    products = Products.query.all()
    return render_template('index.html', products=products)

@app.route('/products')
def show_products():
    products = Products.query.all()
    return render_template('products.html', products=products)

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/cart', methods=['GET','POST'])
def show_cart():
    if request.method == 'POST':
        if 'emptyCartBtn' in request.form:
            session.pop('cart', None)  # Clear the cart stored in session
            session.clear()
            return redirect(url_for('show_cart'))  # Redirect back to cart page after emptying
        # Handle other form submissions or actions here

    # Retrieve cart and total
    cart = session.get('cart', [])
    total = sum(item['productprice'] if item.get('productprice') is not None else 0 for item in cart)
    products = []  # Ensure to populate products as needed
    return render_template('cart.html', cart=cart, total=total, products=products)

@app.route('/inventory')
def inventory():
    return render_template('inventory.html')

@app.route('/contactus')
def contact():
    return render_template('contactus.html')

@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    products = Products.query.all()

    if request.method == 'POST':
        product_name = request.form.get('productname')
        product_price_str = request.form.get('productprice')
        
        if product_price_str and product_price_str.replace('.', '', 1).isdigit():
            product_price = float(product_price_str)
        else:
            # Handle the case where product_price_str is not valid
            return 'Invalid product price'
        # Initialize cart in session if it's not already there
        if 'cart' not in session:
            session['cart'] = []

        # Append the selected product to cart
        session['cart'].append({
            'productname': product_name,
            'productprice': product_price
        })
        session.modified = True
        total = sum(item['productprice'] for item in session['cart'] if item.get('productprice') is not None)

        return redirect(url_for('show_cart'))
    else:
        return 'Invalid Request Method'

# emptycart NOT WORKINGS
# @app.route('/emptyCart', methods=['POST'])
# def emptyCart():
#     if 'cart' in session:
#         product_name = request.form['productname']
#         product_price = float(request.form['productprice'])
        
#         # Find and remove the item from the cart based on product name and price
#         for item in session['cart']:
#             session['cart'].remove({
#             'productname': product_name,
#             'productprice': product_price
#             })
                
#             session.modified = True
#             break  # Exit loop once item is found and removed

#     return redirect(url_for('show_cart'))

@app.route('/delete_from_cart', methods=['POST'])
def delete_from_cart():
    if 'cart' in session:
        product_name = request.form['productname']
        product_price = float(request.form['productprice'])
        
        # Find and remove the item from the cart based on product name and price
        for item in session['cart']:
            session['cart'].remove(item)
            session.modified = True

    return redirect(url_for('show_cart'))

# handle form request 
@app.route('/handle_cart_actions', methods=['POST'])
def handle_cart_actions():
    action = request.form.get('action')

    if action == 'emptyCart':
       return session.pop('cart', None)  # Clear the cart session
    elif action == 'buy':
        return redirect(url_for('payment_page'))  # Replace 'payment_page' with your actual route

    return redirect(url_for('cart'))


if __name__ == '__main__':
    app.run(debug=True)
