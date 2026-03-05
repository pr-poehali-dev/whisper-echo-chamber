import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит замер и проект?",
      answer:
        "Выезд замерщика и разработка проекта с 3D-визуализацией — бесплатно. Вы ничего не платите до подписания договора.",
    },
    {
      question: "Сколько времени занимает изготовление?",
      answer:
        "Стандартный срок производства — от 14 до 21 дня после подписания договора и согласования проекта. Сложные заказы с нестандартными материалами могут занять до 30 дней.",
    },
    {
      question: "Какая гарантия на мебель?",
      answer:
        "Мы даём гарантию 3 года на всю мебель: корпус, фасады и фурнитуру. При возникновении любых вопросов выезжаем и устраняем бесплатно.",
    },
    {
      question: "Работаете ли вы с нестандартными размерами?",
      answer:
        "Да, это наша специализация. Делаем кухни и шкафы под любые ниши, скошенные потолки, колонны и другие сложности вашей квартиры.",
    },
    {
      question: "Можно ли внести изменения после согласования проекта?",
      answer:
        "Изменения можно вносить до запуска заказа в производство. После запуска — только незначительные правки, которые не затрагивают раскрой материала.",
    },
    {
      question: "Из каких материалов вы работаете?",
      answer:
        "Используем ЛДСП класса E1, МДФ, массив дерева, акрил и стекло. Фурнитура — Blum и Hettich. Все материалы сертифицированы и безопасны для использования на кухне.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на вопросы, которые чаще всего задают перед первым заказом.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
