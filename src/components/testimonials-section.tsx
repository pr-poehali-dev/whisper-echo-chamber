import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Марина Соколова",
    role: "Заказала кухню 4,2 м, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "Наконец-то кухня мечты! Замерщик приехал на следующий день, через 3 недели монтажники уже собирали. Всё идеально подогнано, фасады матовые — выглядит дорого.",
  },
  {
    name: "Алексей Громов",
    role: "Заказал гардеробную, Санкт-Петербург",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Сделали гардеробную в нишу нестандартного размера. Другие компании отказывались, а здесь взялись без проблем. Качество отличное, всё работает как часы.",
  },
  {
    name: "Ольга Ким",
    role: "Заказала кухню и шкаф-купе, Екатеринбург",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "3D-визуализация помогла выбрать цвет — в жизни выглядит именно так, как на рендере. Очень довольна сервисом и результатом. Рекомендую всем знакомым.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Более 1200 довольных клиентов по всей России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
