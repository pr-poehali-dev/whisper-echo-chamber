import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Индивидуальный проект",
    description: "Разрабатываем мебель под размеры вашего пространства — каждый сантиметр используется с умом.",
    icon: "ruler",
    badge: "На заказ",
  },
  {
    title: "Немецкая фурнитура",
    description: "Петли и направляющие Blum, Hettich — плавное закрывание и срок службы более 20 лет.",
    icon: "star",
    badge: "Качество",
  },
  {
    title: "3D-визуализация",
    description: "Увидите свою кухню или шкаф в фотореалистичном 3D до начала производства.",
    icon: "cube",
    badge: "Бесплатно",
  },
  {
    title: "Быстрое производство",
    description: "Изготовление от 14 дней. Собственный цех позволяет держать сроки без посредников.",
    icon: "zap",
    badge: "14 дней",
  },
  {
    title: "Замер и монтаж",
    description: "Выезжаем на замер бесплатно. Монтаж выполняют наши специалисты с гарантией.",
    icon: "tools",
    badge: "Гарантия",
  },
  {
    title: "Широкий выбор фасадов",
    description: "Более 200 цветов и фактур: матовые эмали, шпон, акрил, МДФ под дерево и бетон.",
    icon: "palette",
    badge: "200+ цветов",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мебель ручной работы с немецкой точностью — от проекта до монтажа под ключ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "ruler" && "📐"}
                    {feature.icon === "star" && "⭐"}
                    {feature.icon === "cube" && "🧊"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "tools" && "🔧"}
                    {feature.icon === "palette" && "🎨"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
