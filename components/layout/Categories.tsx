import { Card } from "../retroui/Card";

export default function Categories() {

  const categories = [                                                                                           
      { label: "Mugs", bg: "bg-pink" },
      { label: "Shirts", bg:"bg-lime" },
      { label: "Hoodies", bg: "bg-orange" },
    ];

  return (
    <section className="grid w-full grid-cols-3 h-160 bg-foreground">
      {categories.map((category) => (
        <Card key={category.label} className={`m-4 ${category.bg}`}></Card>
      ))}
    </section>
  )
}