body{
    font-family: Arial, sans-serif;
    background: #f4f6f9;
    margin: 0;
    padding: 20px;
}

.container{
    max-width: 1200px;
    margin: auto;
}

h1{
    text-align: center;
    color: #1e3a8a;
    margin-bottom: 30px;
}

/* CATEGORY BOX */
.category{
    background: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.category h2{
    color: #2563eb;
    margin-bottom: 15px;
}

/* PRODUCT GRID */
.products{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
}

/* BUTTONS */
button{
    padding: 12px;
    border: none;
    background: #2563eb;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
    transition: 0.3s;
}

button:hover{
    background: #1e40af;
}

/* CART */
.cart{
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    margin-top: 30px;
}

.cart h2{
    color: #2563eb;
}

ul{
    list-style: none;
    padding: 0;
}

li{
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
}

input{
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
    box-sizing: border-box;
}

h3{
    margin-top: 15px;
}

/* MOBILE RESPONSIVE */
@media(max-width:600px){

    button{
        font-size: 14px;
        padding: 10px;
    }

}
