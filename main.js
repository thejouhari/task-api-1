
async function getProducts(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    
    const products = data.products;

    const result = products.map(function(ele){
        return `

        <div class="product">

        <h2>${ele.title}</h2>
        <img src=${ele.thumbnail} />

        </div>

        `;

      } ) .join('');

      document.querySelector(".products").innerHTML = result;
}


getProducts();
