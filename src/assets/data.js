import ProductImage from "../assets/img/product-thumbnail.jpg";
import Logo from "../assets/img/akqa-logo.svg";
import DeleteIcon from "../assets/img/delete-icon.png";
export default {
  data: [
    {
      componentName: "Header",
      fields: {
        image: {
          url: Logo,
          alt: "logo",
        },
      },
    },
    {
      componentName: "MyCart",
      fields: {
        summaryDesc: "You have {0} items in your cart",
        columnLabels: ["Product", "Total Cost"],
        currency: "$",
        products: [
          {
            productId: "PRD1",
            title: "Product 1",
            price: 198.99,
            quantity: 2,
            minQuantity: 1,
            maxQuantity: 5,
            image: {
              url: ProductImage,
              alt: "Product 1",
            },
            deleteIcon: {
              url: DeleteIcon,
              alt: "delete",
            },
          },
          {
            productId: "PRD2",
            title: "Product 2",
            price: 198.99,
            quantity: 2,
            minQuantity: 1,
            maxQuantity: 5,
            image: {
              url: ProductImage,
              alt: "product 2",
            },
            deleteIcon: {
              url: DeleteIcon,
              alt: "delete",
            },
          },
        ],
        labels: {
          subTotal: "Subtotal",
          vat: "Vat @{0}%",
          totalCost: "Total Cost",
        },
        vatPer: 20,
        ctaLabel: "BUY NOW",
        endPointUrl: "https://jsonplaceholder.typicode.com/posts",
      },
    },
    {
      componentName: "Footer",
      fields: {
        description: "Copyright @AKQA LTD Registered in England",
      },
    },
  ],
};
