export type ProductCategory =
  | "Smartphones"
  | "Laptops"
  | "Wireless Earbuds"
  | "Smartwatches"
  | "Power Banks"
  | "Accessories";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  mrp: number;
  discountPercent: number;
  description: string;
  highlights: string[];
  badge: "Best Seller" | "Trending" | "Flash Deal";
  stockLabel: string;
  viewers: number;
  imageSrc: string;
  imageAlt: string;
  imagePrompt: string;
};

export const products: Product[] = [
  {
    id: "aerophone-x1",
    name: "AeroPhone X1",
    category: "Smartphones",
    price: 47999,
    mrp: 54999,
    discountPercent: 13,
    description:
      "Flagship-inspired smartphone with balanced cameras and long battery life.",
    highlights: ["6.5-inch AMOLED", "128 GB storage", "5000 mAh battery"],
    badge: "Best Seller",
    stockLabel: "Only 4 units left",
    viewers: 38,
    imageSrc: "/images/products/aerophone-x1.svg",
    imageAlt: "AeroPhone X1 smartphone",
    imagePrompt:
      "High-resolution studio image of a modern smartphone with a slim bezel, matte graphite finish, neutral background, realistic lighting, e-commerce product photography style, no logos",
  },
  {
    id: "nebulabook-14",
    name: "NebulaBook 14",
    category: "Laptops",
    price: 68999,
    mrp: 78999,
    discountPercent: 13,
    description:
      "Portable laptop with bright display and a quiet cooling system.",
    highlights: ["14-inch IPS display", "16 GB RAM", "512 GB SSD"],
    badge: "Trending",
    stockLabel: "Only 6 units left",
    viewers: 21,
    imageSrc: "/images/products/nebulabook-14.svg",
    imageAlt: "NebulaBook 14 laptop",
    imagePrompt:
      "High-resolution studio image of a thin 14-inch laptop opened at a slight angle, silver finish, neutral background, realistic lighting, e-commerce product photography style, no logos",
  },
  {
    id: "silentwave-pro",
    name: "SilentWave Pro",
    category: "Wireless Earbuds",
    price: 5999,
    mrp: 7999,
    discountPercent: 25,
    description:
      "Compact wireless earbuds with balanced audio and soft-touch finish.",
    highlights: ["Active noise reduction", "28-hour battery", "USB-C case"],
    badge: "Flash Deal",
    stockLabel: "Only 9 units left",
    viewers: 44,
    imageSrc: "/images/products/silentwave-pro.svg",
    imageAlt: "SilentWave Pro wireless earbuds",
    imagePrompt:
      "High-resolution studio image of a modern wireless earbud case and earbuds, black matte finish, minimalist background, realistic lighting, e-commerce product photography style, no logos",
  },
  {
    id: "pulseband-2",
    name: "PulseBand 2",
    category: "Smartwatches",
    price: 8999,
    mrp: 10999,
    discountPercent: 18,
    description:
      "Slim fitness smartwatch with easy navigation and bright display.",
    highlights: ["7-day battery", "Heart rate tracking", "Water resistant"],
    badge: "Trending",
    stockLabel: "Only 5 units left",
    viewers: 16,
    imageSrc: "/images/products/pulseband-2.svg",
    imageAlt: "PulseBand 2 smartwatch",
    imagePrompt:
      "High-resolution studio image of a sleek smartwatch with a dark band, neutral background, realistic lighting, e-commerce product photography style, no logos",
  },
  {
    id: "voltcore-20k",
    name: "VoltCore 20K",
    category: "Power Banks",
    price: 2499,
    mrp: 3299,
    discountPercent: 24,
    description:
      "High-capacity power bank built for multi-device charging.",
    highlights: ["20,000 mAh", "2 USB-C ports", "Fast charge support"],
    badge: "Best Seller",
    stockLabel: "Only 7 units left",
    viewers: 28,
    imageSrc: "/images/products/voltcore-20k.svg",
    imageAlt: "VoltCore 20K power bank",
    imagePrompt:
      "High-resolution studio image of a rectangular power bank with subtle LED indicators, dark blue finish, neutral background, realistic lighting, e-commerce product photography style, no logos",
  },
  {
    id: "arccharge-65w",
    name: "ArcCharge 65W",
    category: "Accessories",
    price: 1599,
    mrp: 2199,
    discountPercent: 27,
    description:
      "Compact fast charger with dual USB-C outputs and foldable plug.",
    highlights: ["65W max output", "Dual USB-C", "Foldable plug"],
    badge: "Flash Deal",
    stockLabel: "Only 12 units left",
    viewers: 31,
    imageSrc: "/images/products/arccharge-65w.svg",
    imageAlt: "ArcCharge 65W charger",
    imagePrompt:
      "High-resolution studio image of a compact wall charger with two USB-C ports, matte white finish, neutral background, realistic lighting, e-commerce product photography style, no logos",
  },
  {
    id: "orbitcase-armor",
    name: "OrbitCase Armor",
    category: "Accessories",
    price: 999,
    mrp: 1499,
    discountPercent: 33,
    description: "Shock-absorbent smartphone case with textured grip.",
    highlights: ["Drop tested", "Textured grip", "Slim profile"],
    badge: "Trending",
    stockLabel: "Only 15 units left",
    viewers: 19,
    imageSrc: "/images/products/orbitcase-armor.svg",
    imageAlt: "OrbitCase Armor phone case",
    imagePrompt:
      "High-resolution studio image of a rugged smartphone case with textured edges, charcoal finish, neutral background, realistic lighting, e-commerce product photography style, no logos",
  },
  {
    id: "hushpods-mini",
    name: "HushPods Mini",
    category: "Wireless Earbuds",
    price: 3999,
    mrp: 5299,
    discountPercent: 25,
    description:
      "Compact earbuds for commuting with clear voice pickup.",
    highlights: ["Pocket-sized case", "Touch controls", "Quick pairing"],
    badge: "Best Seller",
    stockLabel: "Only 10 units left",
    viewers: 27,
    imageSrc: "/images/products/hushpods-mini.svg",
    imageAlt: "HushPods Mini earbuds",
    imagePrompt:
      "High-resolution studio image of compact wireless earbuds in a small charging case, light grey finish, neutral background, realistic lighting, e-commerce product photography style, no logos",
  },
];

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);
