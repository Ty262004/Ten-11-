"use strict"
let cardContainer = document.querySelector("#Cards")
let products = [
  {
    id: 1,
    proName: "Hem Mini Dress",
    price: 17.95,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/22225051481/ZD__5894-cr-450x672.jpg"
  },
  {
    id: 2,
    proName: "Tweed Mini Dress",
    price: 21.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/22225071529/22225081688/ZD__5963-cr-450x672.jpg"
  },
  {
    id: 3,
    proName: "Flared Fitted Denim Jeans",
    price: 21.95,
    Image: "https://zandokh.com/image/catalog/products/2025-09/22225071529/ZD__5997.jpg"
  },
  {
    id: 3,
    proName: "Regular Blouse",
    price: 15.95,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/22225061618/DSC07684-cr-450x672.jpg"
  },
  {
    id: 4,
    proName: "Two-Layer Mini Dress",
    price: 15.95 ,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/22225081604/ZD__3564-cr-450x672.jpg"
  },
  {
    id: 5,
    proName: "Hem Mini Skirt",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/22225081596/ZD__4470-cr-450x672.jpg"
  },
  {
    id: 6,
    proName: "Mini Karo Skirts",
    price: 15.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/22225051514/ZD__3307-cr-450x672.jpg"
  },
  {
    id: 7,
    proName: "Mini Denim Skirts",
    price: 17.95,
    Image: "https://zandokh.com/image/catalog/products/2025-09/22225071522/ZD__1350.jpg"
  },
  {
    id: 8,
    proName: "Lace Mini Dress",
    price: 20.59 ,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225051473/ZANDO020820251810-cr-450x672.jpg"
  },
  {
    id: 9,
    proName: "Regular Tank Top",
    price: 5.95,
    Image: "https://zandokh.com/image/catalog/products/2025-08/22225051527/ZANDO010820251313.jpg"
  },
  {
    id: 10,
    proName: "Tank Top",
    price: 14.95,
    Image: "https://zandokh.com/image/catalog/products/2025-08/22225041396/ZANDO190820258263.jpg"
  },
  {
    id: 11,
    proName: "Asymmetrical Mini Skirt",
    price: 22.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225041438/ZANDO14.08.20256762-cr-450x672.jpg"
  },
  {
    id: 12,
    proName: "Slim Fitted T-Shirts",
    price: 14.95 ,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225051464/ZD__8752-cr-450x672.jpg"
  },
  {
    id: 13,
    proName: "Asymmetrical Cropped Shirt",
    price: 15.95,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225041445/ZD__8545-cr-450x672.jpg"
  },
  {
    id: 14,
    proName: "Textured Puff Sleeves Shirts",
    price: 16.95,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225061583/ZANDO14.08.20256666-cr-450x672.jpg"
  },
  {
    id: 15,
    proName: "Mini Pleats Skirt",
    price: 15.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225051490/ZANDO160820257392-cr-450x672.jpg"
  },
  {
    id: 16,
    proName: "Cropped Shirts",
    price: 21.59,
    Image: "https://zandokh.com/image/catalog/products/2025-09/22225061642/ZD__2703.jpg"
  },
  {
    id: 17,
    proName: "Loose Fitted Shirts",
    price: 21.95,
    Image: "https://zandokh.com/image/catalog/products/2025-09/22225041425/ZD__1230.jpg"
  },
  {
    id: 18,
    proName: "Cropped Fitted Shirts",
    price: 17.59,
    Image: "https://zandokh.com/image/catalog/products/2025-09/22225051505/ZD__2805.jpg"
  },
  {
    id: 19,
    proName: "Stripe Strap Collared Shirt",
    price: 14.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/22225081606/ZD__2746-cr-450x672.jpg"
  },
  {
    id: 20,
    proName: "Wide Leg Trousers",
    price: 18.35,
    Image: "https://zandokh.com/image/catalog/products/2025-08/22225051506/ZD__8724.jpg"
  },
  {
    id: 21,
    proName: "Wide Leg Trousers With Elastic Waistband",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/22225061601/ZD__3467-cr-450x672.jpg"
  },
  {
    id: 22,
    proName: "Wide Leg Trousers",
    price: 20.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225041451/ZANDO220820259098-cr-450x672.jpg"
  },
  {
    id: 23,
    proName: "Wide Leg Trousers",
    price: 20.59,
    Image: "https://zandokh.com/image/catalog/products/2025-08/22225061452/Fitting%20runway7122.jpg"
  },
  {
    id: 24,
    proName: "Regular Floral Mini Dresses",
    price: 12.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-07/22225051520/IMG_5749-cr-450x672.jpg"
  },
  {
    id: 25,
    proName: "Halter Mini Dresses",
    price: 20.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-07/22225051416/Look1p2-cr-450x672.jpg"
  },
  {
    id: 26,
    proName: "Halter Mini Dresses",
    price: 20.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-06/22225041436/Look2p2-cr-450x672.jpg"
  },
  {
    id: 27,
    proName: "Sweet Pink Frilled Open Neck Dress",
    price: 22.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-02/2222408878%20out-door/8J6A0448-cr-450x672.jpg"
  },
  {
    id: 28,
    proName: "Asymmetrical Ruffle Skirt",
    price: 20.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-09/22225051524/8J6A9676-cr-450x672.jpg"
  },
  {
    id: 29,
    proName: "Midi Skirt",
    price: 21.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225061627/ZANDO120820256232-cr-450x672.jpg"
  },
  {
    id: 30,
    proName: "Loose Fitted T-Shirts",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225061450%20REPLACE/ZANDO14.08-cr-450x672.jpg"
  },
  {
    id: 31,
    proName: "Mini Pleats Skirt",
    price: 16.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225061544/ZANDO010820251537-cr-450x672.jpg"
  },
  {
    id: 32,
    proName: "Wide Leg Flared Jean",
    price: 17.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225061602/ZANDO070820253881-cr-450x672.jpg"
  },
  {
    id: 33,
    proName: "Mini Pleats Skirts",
    price: 18.59,
    Image: "https://zandokh.com/image/cache/catalog/products/2025-08/22225061648/ZD__0550-cr-450x672.jpg"
  },
];
cardContainer.innerHTML = products.map(product => `
   <div class="flex flex-col space-y-2 container mx-auto p-4 shadow-sm hover:shadow-lg rounded-lg transform hover:scale-105 transition duration-300 border-none border" data-aos="fade-down" >
      <img 
        class=" aspect-auto object-cover w-full rounded-lg cursor-pointer" 
        src="${product.Image}" 
        alt="Regular Fitted Shirts"
      >
      <p class="font-bold text-lg">${product.proName}</p>
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

