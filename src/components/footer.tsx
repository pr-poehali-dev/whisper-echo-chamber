import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Artel<span className="text-red-500">Мебель</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Изготавливаем кухни и шкафы на заказ с 2012 года. Собственное производство, немецкая фурнитура, гарантия 3 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="tel:+78001234567" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Phone size={20} />
              </a>
              <a href="mailto:info@artelmebel.ru" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Кухни
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Шкафы-купе
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Гардеробные
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 font-space-mono text-sm">
                <Phone size={16} className="mt-0.5 text-red-500 flex-shrink-0" />
                8 800 123-45-67
              </li>
              <li className="flex items-start gap-2 text-gray-400 font-space-mono text-sm">
                <Mail size={16} className="mt-0.5 text-red-500 flex-shrink-0" />
                info@artelmebel.ru
              </li>
              <li className="flex items-start gap-2 text-gray-400 font-space-mono text-sm">
                <MapPin size={16} className="mt-0.5 text-red-500 flex-shrink-0" />
                Москва, ул. Примерная, 1
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 ArtelМебель. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Конфиденциальность
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
