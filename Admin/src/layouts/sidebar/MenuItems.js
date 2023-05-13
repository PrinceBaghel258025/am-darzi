const Menuitems = [
  {
    title: "Dashbaord",
    icon: "home",
    href: "/",
  },
  {
    title: "Products",
    icon: "disc",
    href: "/products",
    subMenuItems: [
      {
        title: "All Products",
        icon: "home",
        href: "/products/",
      },
      {
        title: "Attributes",
        icon: "home",
        href: "/attributes",
      },
      {
        title: "Tax",
        icon: "home",
        href: "/tax",
      },
      {
        title: "Add Products",
        icon: "home",
        href: "/products/create-product",
      },
      {
        title: "Bulk Upload",
        icon: "home",
        href: "/product/bulk-upload",
      },
    ],
  },
  {
    title: "Category",
    icon: "disc",
    href: "/category"
    // href: "/category",( create , view, update(((add new subcategory))) (handle subcategories))
  },
  {
    title: "Orders",
    icon: "disc",
    href: "/orders", // show filters
    // href: "/category",( create , view, update(((add new subcategory))) (handle subcategories))
  },
  {
    title: "Users",
    icon: "disc",
    href: "/users", // (show all users)
  },
  {
    title: "Settings",
    icon: "disc",
    href: "/settings" //( change hero image, change some text)
  },
  {
    title: "Forms",
    icon: "layout",
    href: "/forms",
  },
  {
    title: "Alerts",
    icon: "info",
    href: "/alerts",
  },
  {
    title: "Ratings",
    icon: "star",
    href: "/rating",
  },
  {
    title: "Images",
    icon: "image",
    href: "/image",
  },
  {
    title: "Pagination",
    icon: "user",
    href: "/pagination",
  },
  {
    title: "Tables",
    icon: "grid",
    href: "/table",
  },
];

export default Menuitems;
