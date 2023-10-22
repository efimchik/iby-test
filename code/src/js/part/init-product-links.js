let productLinkList = document.querySelectorAll('.product-links__item');

// if(productLinkList) {
//     productLinkList.addEventListener('click', initLinks);
// }


// function initLinks(event) {
//     console.log(event.target)
//     if(event.target.classList.contains('product-links__item')) {
//         console.log(event.target)
//     } else {
//         console.log('nonono')
//     }
// }


if(productLinkList) {
    productLinkList.forEach(item => {
        item.addEventListener('click', function() {
            let curentLink = this.getAttribute('data-link');
            let btn = document.querySelector('.btn');

            for(let i = 0; i < productLinkList.length; i++) {
                productLinkList[i].classList.remove('active');
            }

            this.classList.add('active');
            btn.setAttribute('href', curentLink)
        });
    })
}
