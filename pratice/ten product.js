"use strict"
let cardContainer = document.querySelector("#Cards")
let products = [
  {
    id: 1,
    proName: "Regular Polo Shirts",
    price: 16.95,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225051321/ZANDO120820255957-cr-450x672.jpg"
  },
  {
    id: 2,
    proName: "Wide Leg Cargo Trouser",
    price: 21.59,
    Image: "https://zandokh.com/image/catalog/products/2025-08/21225051320/ZANDO020820251775.jpg"
  },
  {
    id: 3,
    proName: "Regular Knee Shorts",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225061294/ZANDO140820256446-cr-450x672.jpg"
  },
  {
    id: 3,
    proName: "Regular T-Shirts With Printed",
    price: 15.95,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/21225061350/ZANDO2205202526126-cr-450x672.jpg"
  },
  {
    id: 4,
    proName: "Relaxed Long Sleeves Shirt",
    price: 19.95,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225061290/DSC07619-cr-450x672.jpg"
  },
  {
    id: 5,
    proName: "Straight Leg Trouser With Elastic Waistband",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/21225071259/ZD__5906-cr-450x672.jpg"
  },
  {
    id: 6,
    proName: "Regular T-Shirts With Printed",
    price: 15.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/21225081367/ZD__3794-cr-450x672.jpg"
  },
  {
    id: 7,
    proName: "Regular Knee Shorts",
    price: 12.95,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/21225041265/ZD__2946-cr-450x672.jpg"
  },
  {
    id: 8,
    proName: "Regular Knee Shorts",
    price: 35.95,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/21225081364/ZD__2885-cr-450x672.jpg"
  },
  {
    id: 9,
    proName: "Regular T-Shirts With Printed",
    price: 14.95,
    Image: "https://zandokh.com/image/catalog/products/2025-09/21225041220/ZD__2139.jpg"
  },
  {
    id: 10,
    proName: "Regular T-Shirts With Printed",
    price: 14.95,
    Image: "https://zandokh.com/image/catalog/products/2025-09/21225041220/ZD__2148.jpg"
  },
  {
    id: 11,
    proName: "Loose Fitted T-Shirts With Printed",
    price:13.59,
    Image: "https://zandokh.com/image/catalog/products/2025-08/21225051323/ZD__9237.jpg"
  },
  {
    id: 12,
    proName: "Oversized T-Shirts With Printed",
    price: 14.95 ,
    Image: "https://zandokh.com/image/catalog/products/2025-07/21225051246/DSC09159.jpg"
  },
  {
    id: 13,
    proName: "Regular T-Shirt With Printed",
    price: 14.95,
    Image: "https://zandokh.com/image/catalog/products/2025-07/21224121100/ZANDO190720250119.jpg"
  },
  {
    id: 14,
    proName: "Relaxed Fitted Shirts",
    price: 16.95,
    Image: "https://zandokh.com/image/catalog/products/2025-09/21225081459/ZD__5618.jpg"
  },
  {
    id: 15,
    proName: "Regular T-Shirts With Embroidery",
    price: 15.59,
    Image: "https://zandokh.com/image/catalog/products/2025-07/21225051316/ZANDO210720250244.jpg"
  },
  {
    id: 16,
    proName: "Beggy Denim Jeans",
    price: 21.59,
    Image: "https://zandokh.com/image/catalog/products/2025-09/2112506719/ZD__0694.jpg"
  },
  {
    id: 17,
    proName: "Baggy Denim Jean",
    price: 21.95,
    Image: "https://zandokh.com/image/catalog/products/2025-08/21225071322/ZANDO060820252829.jpg"
  },
  {
    id: 18,
    proName: "Loose Fit Cargo Denim Shorts",
    price: 17.59,
    Image: "https://zandokh.com/image/catalog/products/2025-04/21225031136%20reupload/TAKK025.jpg"
  },
  {
    id: 19,
    proName: "Loose Fitted Denim Shorts",
    price: 17.59,
    Image: "https://zandokh.com/image/catalog/products/2025-07/21225041239/11.jpg"
  },
  {
    id: 20,
    proName: "Baggy Denim Jean",
    price: 17.59,
    Image: "https://zandokh.com/image/catalog/products/2025-06/21225031222/ZANDO230620259079.jpg"
  },
  {
    id: 21,
    proName: "Regular Stripes Short With Elastic Waistband",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/2112506734/ZANDO120820256208-cr-450x672.jpg"
  },
  {
    id: 22,
    proName: "Straight Leg Jeans",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225061335/ZANDO190820257912%20copy-cr-450x672.jpg"
  },
  {
    id: 23,
    proName: "Mesh Jersey T-Shirt",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225061318/ZANDO180820257460-cr-450x672.jpg"
  },
  {
    id: 24,
    proName: "Regular Knee Shorts",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225051311/Untitled%20Session6080-cr-450x672.jpg"
  },
  {
    id: 25,
    proName: "Oversized T-Shirts With Printed",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225061291/ZD__2090-cr-450x672.jpg"
  },
  {
    id: 26,
    proName: "Loose Fitted T-Shirts With Pockets",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/21225041266/ZD__2072-cr-450x672.jpg"
  },
  {
    id: 27,
    proName: "Regular Polo Shirts With Zip",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225051326/ZANDO270820259793-cr-450x672.jpg"
  },
  {
    id: 28,
    proName: "Regular T-Shirts With Printed",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225051301/ZANDO140820256601-cr-450x672.jpg"
  },
  {
    id: 29,
    proName: "Regular Print T-Shirt",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/21225041219/Untitled%20Session6026-cr-450x672.jpg"
  },
  {
    id: 30,
    proName: "Loose Fitted T-Shirts",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225061450%20REPLACE/ZANDO14.08-cr-450x672.jpg"
  },
  {
    id: 31,
    proName: "Regular T-Shirt With Printed",
    price: 14.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-07/21224121127/DSC08901-cr-450x672.jpg"
  },
  {
    id: 32,
    proName: "Regular Printed T-Shirt",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-07/21225041225/DSC08820-cr-450x672.jpg"
  },
  {
    id: 33,
    proName: "Loose Fitted Shirts",
    price: 18.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-07/21225031193/ZANDO020720251569-cr-450x672.jpg"
  },
];
cardContainer.innerHTML = products.map(product => `
   <div class="flex flex-col space-y-2 container mx-auto p-4 shadow-sm hover:shadow-lg rounded-lg transform hover:scale-105 transition duration-300 border-none border" data-aos="fade-down" >
      <img 
        class=" aspect-auto object-cover w-full rounded-lg cursor-pointer" 
        src="${product.Image}" 
        alt="Regular Fitted Shirts"
      >
      <p class="font-bold text-lg line-clamp-1">${product.proName}</p>
      <div class="flex items-center mt-2.5 mb-5">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    </div>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
      <span class="flex flex-row gap-2">
        <p class="font-semibold text-lg text-red-500">price: $ ${product.price} </p>
      </span>
    </div>
`).join("");
