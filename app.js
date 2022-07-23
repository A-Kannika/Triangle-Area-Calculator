var productName = document.querySelector('.name');
var productImage = document.querySelector('.image');
var productCompany = document.querySelector('.company');
const url = 'http://127.0.0.1:3000/products';
console.log(fetch(url));
fetch(url)
.then(res => res.json())
.then(data => 
 {
        console.log(data);
        var nameValue = data[0]['name'];
        var imgSrc = data[0]['image'];
        var companyValue = data[0]['company'];

        productName.innerHTML = nameValue;
        productImage.src = imgSrc;
        productCompany.innerHTML = companyValue;
});
