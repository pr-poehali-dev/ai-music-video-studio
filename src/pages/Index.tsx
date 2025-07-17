import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Электронная мечта",
      description: "Синтез-поп трек с футуристическими визуальными эффектами",
      image: "/img/fab7c992-f93e-46ab-8cf9-3b00e6448ff6.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Космическая одиссея",
      description: "Эмбиент композиция с визуализацией космоса",
      image: "/img/b6632e8a-270a-42e3-a663-03b3cf3cb680.jpg",
      videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE"
    },
    {
      id: 3,
      title: "Неоновый город",
      description: "Динамичный хип-хоп клип с киберпанк эстетикой",
      image: null,
      videoUrl: "https://www.youtube.com/embed/ZZ5LpwO-An4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-coral to-ai-blue rounded-lg flex items-center justify-center">
                <Icon name="Brain" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-montserrat font-bold text-dark-gray">AI Music Studio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-dark-gray transition-colors font-open-sans">О нас</a>
              <a href="#portfolio" className="text-gray-600 hover:text-dark-gray transition-colors font-open-sans">Портфолио</a>
              <a href="#pricing" className="text-gray-600 hover:text-dark-gray transition-colors font-open-sans">Цены</a>
              <Button className="bg-coral hover:bg-coral/90 text-white font-open-sans">Заказать</Button>
            </div>
            <div className="md:hidden">
              <Icon name="Menu" className="w-6 h-6 text-dark-gray" />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coral/5 via-transparent to-ai-blue/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-coral to-ai-blue text-white border-0 animate-fade-in">
              Новое поколение музыкальных клипов
            </Badge>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-dark-gray mb-6 animate-fade-in">
              Создаем клипы будущего с{" "}
              <span className="bg-gradient-to-r from-coral to-ai-blue bg-clip-text text-transparent">
                искусственным интеллектом
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-open-sans animate-fade-in">
              Инновационная студия, которая объединяет творчество музыкантов и мощь ИИ-технологий для создания уникальных визуальных историй
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="bg-gradient-to-r from-coral to-ai-blue hover:from-coral/90 hover:to-ai-blue/90 text-white font-open-sans">
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Посмотреть работы
              </Button>
              <Button size="lg" variant="outline" className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white font-open-sans">
                <Icon name="Calendar" className="w-5 h-5 mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark-gray mb-6">
              О нашей студии
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Мы создаем музыкальные клипы нового поколения, используя передовые ИИ-технологии для воплощения самых смелых творческих идей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-coral to-ai-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-montserrat text-dark-gray">ИИ-технологии</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-open-sans">
                  Используем нейронные сети для генерации визуальных эффектов, синхронизации с музыкой и создания уникальных сцен
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-ai-blue to-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Music" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-montserrat text-dark-gray">Музыкальность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-open-sans">
                  Каждый кадр идеально синхронизирован с ритмом и настроением музыки благодаря глубокому анализу аудиодорожки
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-turquoise to-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-montserrat text-dark-gray">Креативность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-open-sans">
                  Воплощаем любые творческие идеи: от фантастических миров до абстрактных визуализаций музыки
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark-gray mb-6">
              Наше портфолио
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Примеры работ, созданных с применением ИИ-технологий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in">
                <div className="relative overflow-hidden rounded-t-lg">
                  {item.image ? (
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-turquoise to-coral flex items-center justify-center">
                      <Icon name="Zap" className="w-16 h-16 text-white opacity-50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="bg-white text-dark-gray hover:bg-gray-100 font-open-sans">
                            <Icon name="Play" className="w-4 h-4 mr-2" />
                            Смотреть
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle className="font-montserrat text-dark-gray">{item.title}</DialogTitle>
                          </DialogHeader>
                          <div className="aspect-video">
                            <iframe
                              src={item.videoUrl}
                              title={item.title}
                              className="w-full h-full rounded-lg"
                              allowFullScreen
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-dark-gray mb-2">{item.title}</h3>
                  <p className="text-gray-600 font-open-sans text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark-gray mb-6">
              Цены на услуги
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Выберите подходящий пакет для вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-coral transition-colors duration-300 animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-dark-gray text-xl">Базовый</CardTitle>
                <div className="text-3xl font-bold text-coral font-montserrat">150 000 ₽</div>
                <CardDescription className="font-open-sans">До 3 минут видео</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-coral" />
                  <span className="font-open-sans">Базовые ИИ-эффекты</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-coral" />
                  <span className="font-open-sans">HD качество</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-coral" />
                  <span className="font-open-sans">3 правки</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-coral" />
                  <span className="font-open-sans">Срок: 2 недели</span>
                </div>
                <Button className="w-full bg-coral hover:bg-coral/90 text-white font-open-sans">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-coral shadow-lg transform scale-105 animate-scale-in">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-coral text-white">Популярный</Badge>
                <CardTitle className="font-montserrat text-dark-gray text-xl">Профессиональный</CardTitle>
                <div className="text-3xl font-bold text-coral font-montserrat">350 000 ₽</div>
                <CardDescription className="font-open-sans">До 5 минут видео</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-coral" />
                  <span className="font-open-sans">Продвинутые ИИ-эффекты</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-coral" />
                  <span className="font-open-sans">4K качество</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-coral" />
                  <span className="font-open-sans">5 правок</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-coral" />
                  <span className="font-open-sans">Срок: 3 недели</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-coral" />
                  <span className="font-open-sans">Персональный менеджер</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-coral to-ai-blue hover:from-coral/90 hover:to-ai-blue/90 text-white font-open-sans">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-ai-blue transition-colors duration-300 animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-dark-gray text-xl">Премиум</CardTitle>
                <div className="text-3xl font-bold text-ai-blue font-montserrat">750 000 ₽</div>
                <CardDescription className="font-open-sans">Без ограничений</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-ai-blue" />
                  <span className="font-open-sans">Эксклюзивные ИИ-эффекты</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-ai-blue" />
                  <span className="font-open-sans">8K качество</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-ai-blue" />
                  <span className="font-open-sans">Безлимитные правки</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-ai-blue" />
                  <span className="font-open-sans">Срок: 1 месяц</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="w-5 h-5 text-ai-blue" />
                  <span className="font-open-sans">Команда специалистов</span>
                </div>
                <Button className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white font-open-sans">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-coral via-ai-blue to-turquoise">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
            Готовы создать клип будущего?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-open-sans">
            Свяжитесь с нами для консультации и обсуждения вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-dark-gray hover:bg-gray-100 font-open-sans">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Написать нам
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-gray font-open-sans">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-gray text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-coral to-ai-blue rounded-lg flex items-center justify-center">
                  <Icon name="Brain" className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-montserrat font-bold">AI Music Studio</span>
              </div>
              <p className="text-gray-400 font-open-sans">
                Создаем музыкальные клипы нового поколения с помощью искусственного интеллекта
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li>Создание клипов</li>
                <li>ИИ-эффекты</li>
                <li>Постпродакшн</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li>+7 (999) 123-45-67</li>
                <li>info@aimusic.studio</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Соцсети</h3>
              <div className="flex space-x-4">
                <Icon name="Instagram" className="w-6 h-6 text-gray-400 hover:text-coral transition-colors cursor-pointer" />
                <Icon name="Youtube" className="w-6 h-6 text-gray-400 hover:text-coral transition-colors cursor-pointer" />
                <Icon name="Twitter" className="w-6 h-6 text-gray-400 hover:text-coral transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-open-sans">
            <p>&copy; 2024 AI Music Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}