import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    title: 'Ремонт квартир',
    description: 'Капитальный и косметический ремонт любой сложности',
    icon: 'Paintbrush',
    features: ['Дизайн-проект', 'Отделочные работы', 'Электрика и сантехника']
  },
  {
    title: 'Строительство домов',
    description: 'Строительство загородных домов под ключ',
    icon: 'Home',
    features: ['Фундамент', 'Коробка дома', 'Кровля']
  },
  {
    title: 'Реставрация',
    description: 'Восстановление исторических зданий и фасадов',
    icon: 'Building2',
    features: ['Фасады', 'Лепнина', 'Антикварная мебель']
  }
];

const prices = [
  { service: 'Косметический ремонт', price: 'от 2 500 ₽/м²' },
  { service: 'Капитальный ремонт', price: 'от 5 000 ₽/м²' },
  { service: 'Строительство дома', price: 'от 25 000 ₽/м²' },
  { service: 'Реставрация фасада', price: 'от 3 500 ₽/м²' }
];

const reviews = [
  {
    name: 'Александр Петров',
    rating: 5,
    text: 'Отличная работа! Сделали ремонт квартиры быстро и качественно. Все точно в срок.',
    date: '15.12.2023'
  },
  {
    name: 'Марина Соколова',
    rating: 5,
    text: 'Построили нам дом мечты! Профессиональная команда, внимание к деталям. Рекомендую!',
    date: '08.11.2023'
  },
  {
    name: 'Дмитрий Иванов',
    rating: 4,
    text: 'Качественная реставрация старого дома. Небольшие задержки по срокам, но результат отличный.',
    date: '22.10.2023'
  }
];

const galleryImages = [
  'https://cdn.poehali.dev/projects/b4a2d7e6-9523-4afe-b574-010972bf2808/files/05ff1ac2-f2d0-4e27-baab-80f01aea9331.jpg',
  'https://cdn.poehali.dev/projects/b4a2d7e6-9523-4afe-b574-010972bf2808/files/255a1d86-3f95-46f0-8445-b91eba5b6b7c.jpg',
  'https://cdn.poehali.dev/projects/b4a2d7e6-9523-4afe-b574-010972bf2808/files/1a0937ed-a98b-4efd-8713-bcae230aa7fe.jpg',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.'
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={28} className="text-primary" />
            <span className="text-xl font-bold">СтройМастер НСК</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center animate-fade-in">
          <Badge className="mb-4 text-sm">Работаем в Новосибирске и НСО</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Строим. Ремонтируем. Реставрируем.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Профессиональное строительство и ремонт с 2010 года. Более 500 успешных проектов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Images" size={20} className="mr-2" />
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр строительных и ремонтных работ
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры наших реализованных проектов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Проект ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-semibold text-lg">Проект {index + 1}</p>
                    <p className="text-sm">Новосибирск</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {prices.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{item.service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            * Точная стоимость рассчитывается индивидуально после осмотра объекта
          </p>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши заказчики
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О компании</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">СтройМастер НСК</h3>
              <p className="text-muted-foreground mb-6">
                Мы специализируемся на строительстве, ремонте и реставрации объектов в Новосибирске и Новосибирской области.
                С 2010 года мы реализовали более 500 проектов различной сложности.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={24} className="text-primary" />
                  <span className="font-semibold">14 лет на рынке</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={24} className="text-secondary" />
                  <span className="font-semibold">Команда из 45 специалистов</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-accent" />
                  <span className="font-semibold">Гарантия на все работы</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
                <p className="text-4xl font-bold mb-2">500+</p>
                <p className="text-sm">Завершенных проектов</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-secondary to-secondary/80 text-white">
                <p className="text-4xl font-bold mb-2">98%</p>
                <p className="text-sm">Довольных клиентов</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-accent to-accent/80 text-white">
                <p className="text-4xl font-bold mb-2">14</p>
                <p className="text-sm">Лет опыта</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-primary via-secondary to-accent text-white">
                <p className="text-4xl font-bold mb-2">45</p>
                <p className="text-sm">Специалистов</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Оставить заявку</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите ваш проект"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
                <CardDescription>Свяжитесь с нами напрямую</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <a href="tel:+73832000000" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (383) 200-00-00
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@stroymaster-nsk.ru" className="text-muted-foreground hover:text-secondary transition-colors">
                      info@stroymaster-nsk.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">
                      г. Новосибирск, ул. Красный проспект, 1
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="font-bold text-lg">СтройМастер НСК</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональное строительство и ремонт в Новосибирске
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Ремонт квартир</li>
                <li>Строительство домов</li>
                <li>Реставрация</li>
                <li>Дизайн интерьера</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Наши работы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (383) 200-00-00</li>
                <li>info@stroymaster-nsk.ru</li>
                <li>г. Новосибирск</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            © 2024 СтройМастер НСК. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}