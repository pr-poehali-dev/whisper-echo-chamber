import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Замер и проектирование",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Замерщик приезжает в удобное для вас время. Дизайнер разрабатывает проект с учётом освещения,
            эргономики и ваших пожеланий. Вы получаете 3D-визуализацию до подписания договора.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Бесплатный выезд замерщика
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Фотореалистичная 3D-визуализация
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Подбор материалов и фурнитуры
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Производство",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Собственный цех площадью 2000 м² с ЧПУ-оборудованием. Каждая деталь изготавливается
            под ваш проект — никакого серийного производства, только индивидуальные размеры.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ЧПУ-раскрой с точностью до 0,1 мм
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Контроль качества на каждом этапе
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Срок изготовления от 14 дней
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Доставка и монтаж",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Наши монтажники собирают мебель аккуратно и в срок. После установки проводим финальную
            проверку всех механизмов и передаём гарантийный талон на 3 года.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Доставка и подъём в квартиру
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Монтаж нашими специалистами
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Гарантия 3 года на всю мебель
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как мы работаем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Простой процесс от первого звонка до готовой кухни или шкафа в вашем доме — без лишних шагов и сюрпризов.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
