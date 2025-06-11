const products = [
  {
    name: 'Alurin Go Start Intel Celeron',
    price: 199,
    stars: 3.9,
    reviews: 474,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1066/10663368/2866-alurin-go-start-intel-pentium-n4020-8gb-256gb-ssd-156-mejor-precio.jpg'
  },
  {
    name: 'PcCom Revolt 4060 Intel Core Ultra 7',
    price: 1.529,
    stars: 4.3,
    reviews: 126,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1081/10813461/5578-pccom-revolt-4060-intel-core-ultra-7-155h-32gb-1tb-ssd-rtx-4060-16-windows-11-home-opiniones.jpg'
  },
  {
    name: 'Acer Gaming Nitro V 15',
    price: 879,
    stars: 4.4,
    reviews: 1387,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1084/10840369/1500-acer-nitro-v-15-anv15-41-amd-ryzen-7-7735hs-32gb-1tb-ssd-rtx-4060-156-453aa583-2c46-432f-a8a6-02abd5494d4e.jpg'
  },
  {
    name: 'MSI Cyborg 15 A13VF-879XES',
    price: 1269,
    stars: 4.6,
    reviews: 755,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1081/10812222/1834-msi-cyborg-15-a13vf-879xes-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4060-156-c61e902c-f640-48da-9f43-5bc595c18181.jpg'
  },
  {
    name: 'ASUS Vivobook F1504VA-NJ2237',
    price: 399,
    stars: 4.4,
    reviews: 40,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1086/10866783/1721-asus-vivobook-f1504va-nj2237-intel-core-i5-1334u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'MSI Thin 15 B12UC-1839XES',
    price: 879,
    stars: 4.5,
    reviews: 707,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1084/10846498/1331-msi-thin-15-b12uc-1839xes-intel-core-i7-12650h-16gb-1tb-ssd-rtx-3050-156.jpg'
  },
  {
    name: 'ASUS Vivobook 16X K3605ZF-MB484',
    price: 549,
    stars: 4.4,
    reviews: 34,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1084/10846072/1370-asus-vivobook-16x-k3605zf-mb484-intel-core-i5-12500h-16gb-512gb-ssd-rtx-2050-16.jpg'
  },
  {
    name: 'ASUS TUF Gaming A15 FA506NCR-HN006',
    price: 599,
    stars: 4.5,
    reviews: 498,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1084/10848624/1163-asus-tuf-gaming-a15-fa506ncr-hn006-amd-ryzen-7-7435hs-16gb-512gb-ssd-rtx-3050-156.jpg'
  },
  {
    name: 'ASUS TUF Gaming A15 FA507NVR-LP070',
    price: 999,
    stars: 4.6,
    reviews: 196,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1084/10848633/1120-asus-tuf-gaming-a15-fa507nvr-lp070-amd-ryzen-7-7435hs-32gb-1tb-ssd-rtx-4060-156.jpg'
  },
  {
    name: 'Lenovo IdeaPad Slim 3',
    price: 439,
    stars: 4.6,
    reviews: 262,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1084/10847189/1366-lenovo-ideapad-slim-3-gen-8-15irh8-intel-core-i5-13420h-16gb-1tb-ssd-156.jpg'
  }
];

const container = document.getElementById("product-container");

products.forEach(product => {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>Precio: ${product.price} €</p>
      <p>⭐ ${product.stars} (${product.reviews} opiniones)</p>
      <p><strong>Vendedor:</strong> ${product.seller}</p>
    </div>
  `;

  container.appendChild(card);
});
