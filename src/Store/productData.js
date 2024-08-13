// src/productData.js

// Import gambar
import NotebookImage from "../assets/Homepage/notebook.jpg";
import TotebagImage from "@/assets/Homepage/totebag.jpg";
import TshirtImage from "@/assets/Homepage/kaos.jpg";
import LanyardImage from "@/assets/Homepage/lanyard.jpg";
import IDCardImage from "@/assets/Homepage/idcard.jpg";

// Ekspor array produk
export default [
  {
    id: 1,
    name: "Notebook",
    img: NotebookImage,
    price: 50000,
    link: "/notebook",
  },
  {
    id: 2,
    name: "Totebag",
    img: TotebagImage,
    price: 35000,
    link: "/totebag",
  },
  {
    id: 3,
    name: "T-shirt",
    img: TshirtImage,
    price: 75000,
    link: "/tshirt",
  },
  {
    id: 4,
    name: "Lanyard",
    img: LanyardImage,
    price: 20000,
    link: "/lanyard",
  },
  {
    id: 5,
    name: "ID Card",
    img: IDCardImage,
    price: 15000,
    link: "/idcard",
  },
];
