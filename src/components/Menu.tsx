import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

const hardCodedItems = [
  {
    id: "1",
    name: "Grilled Chicken Burger",
    description: "Juicy grilled chicken with fresh lettuce and spicy mayo.",
    image: "burger.jpg",
    price: "55",
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
    image: "pizza.jpg",
    price: "85",
  },
  {
    id: "3",
    name: "Beef Steak",
    description: "Tender beef steak served with mashed potatoes.",
    image: "steak.jpg",
    price: "120",
  },
  {
    id: "4",
    name: "Pasta Alfredo",
    description: "Creamy Alfredo pasta with parmesan and herbs.",
    image: "pasta.jpg",
    price: "70",
  },
  {
    id: "5",
    name: "Vegan Salad Bowl",
    description: "Fresh greens, chickpeas, and a lemon-tahini dressing.",
    image: "salad.jpg",
    price: "45",
  },
  {
    id: "6",
    name: "Chocolate Milkshake",
    description: "Rich chocolate milkshake with whipped cream.",
    image: "milshake.jpg",
    price: "35",
  },
];


export default function Menu() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(hardCodedItems.length / itemsPerPage);
  const currentItems = hardCodedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="space-y-10 p-4 py-32 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#800000]">
        Our Menu
      </h2>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {currentItems.map((item) => (
        <Card key={item.id} className="p-0 gap-0 border-0 shadow-lg rounded-lg overflow-hidden flex flex-col">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
          />

          <CardContent className="p-4 flex flex-col justify-between space-y-3">
            <div>
              <h3 className="font-bold text-xl">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-950">M{item.price}</span>
              <Button className="bg-[#800000] text-white hover:bg-gray-600">
                Order Now
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {hardCodedItems.length > itemsPerPage && (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goToPage(currentPage - 1);
              }}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i + 1}
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(i + 1);
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goToPage(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )}
  </div>
  );
}