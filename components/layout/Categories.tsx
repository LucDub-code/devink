import { Card } from "../retroui/Card";

export default function Categories() {

  const categories = [                                                                                           
      { label: "Mugs", bg: "bg-pink" },
      { label: "Shirts", bg:"bg-lime" },
      { label: "Hoodies", bg: "bg-orange" },
    ];

  return (
    <section className="w-full h-180 bg-foreground grid grid-cols-3">
      {categories.map((category) => (
        <Card key={category.label} className={`m-4 ${category.bg}`}></Card>
      ))}
    </section>
  )
}