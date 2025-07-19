import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const questionCategories = [
    { id: 'all', name: 'Все вопросы', count: 156 },
    { id: 'javascript', name: 'JavaScript', count: 45 },
    { id: 'react', name: 'React', count: 32 },
    { id: 'algorithms', name: 'Алгоритмы', count: 28 },
    { id: 'system-design', name: 'System Design', count: 18 },
    { id: 'databases', name: 'Базы данных', count: 23 },
    { id: 'css', name: 'CSS/HTML', count: 10 }
  ];

  const questionCards = [
    {
      id: 1,
      title: 'Что такое замыкания в JavaScript?',
      description: 'Объясните концепцию замыканий и приведите примеры использования',
      category: 'javascript',
      difficulty: 'Medium',
      tags: ['Функции', 'Scope', 'Основы'],
      answer: 'Замыкание - это функция, которая имеет доступ к переменным из внешней области видимости даже после того, как внешняя функция завершила выполнение.'
    },
    {
      id: 2,
      title: 'Разница между var, let и const',
      description: 'Объясните различия в области видимости и поведении',
      category: 'javascript',
      difficulty: 'Easy',
      tags: ['Переменные', 'ES6', 'Основы'],
      answer: 'var имеет функциональную область видимости, let и const - блочную. const нельзя переопределить, var поднимается наверх.'
    },
    {
      id: 3,
      title: 'Жизненный цикл React компонента',
      description: 'Опишите основные методы жизненного цикла',
      category: 'react',
      difficulty: 'Medium',
      tags: ['Lifecycle', 'Hooks', 'Компоненты'],
      answer: 'Основные этапы: mounting (componentDidMount), updating (componentDidUpdate), unmounting (componentWillUnmount). В функциональных компонентах используется useEffect.'
    },
    {
      id: 4,
      title: 'Алгоритм сортировки пузырьком',
      description: 'Реализуйте bubble sort и объясните временную сложность',
      category: 'algorithms',
      difficulty: 'Easy',
      tags: ['Сортировка', 'O(n²)', 'Базовые алгоритмы'],
      answer: 'Bubble sort сравнивает соседние элементы и меняет их местами. Временная сложность O(n²), пространственная O(1).'
    },
    {
      id: 5,
      title: 'Что такое SQL индексы?',
      description: 'Объясните назначение и типы индексов в базах данных',
      category: 'databases',
      difficulty: 'Medium',
      tags: ['SQL', 'Производительность', 'Индексирование'],
      answer: 'Индексы ускоряют поиск данных, создавая структуру для быстрого доступа. Типы: B-tree, Hash, Bitmap.'
    },
    {
      id: 6,
      title: 'CSS Grid vs Flexbox',
      description: 'Когда использовать Grid, а когда Flexbox?',
      category: 'css',
      difficulty: 'Medium',
      tags: ['Layout', 'CSS Grid', 'Flexbox'],
      answer: 'Flexbox для одномерных макетов (строка или столбец), Grid для двумерных (строки и столбцы одновременно).'
    }
  ];

  const filteredQuestions = selectedCategory === 'all' 
    ? questionCards 
    : questionCards.filter(q => q.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-secondary text-secondary-foreground';
      case 'Medium': return 'bg-primary text-primary-foreground';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-mono font-bold text-primary flex items-center">
                <Icon name="Terminal" className="mr-2" />
                IT Interview Prep
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#questions" className="text-foreground hover:text-primary transition-colors">Вопросы</a>
              <a href="#practice" className="text-foreground hover:text-primary transition-colors">Практика</a>
              <a href="#progress" className="text-foreground hover:text-primary transition-colors">Прогресс</a>
              <Button variant="outline" size="sm">
                <Icon name="User" className="mr-2 h-4 w-4" />
                Вход
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Menu" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Подготовься к IT-собеседованию
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Изучай вопросы, практикуйся в решении задач и получай оферы в топовых IT-компаниях
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="Play" className="mr-2" />
                Начать подготовку
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="BookOpen" className="mr-2" />
                Посмотреть вопросы
              </Button>
            </div>
          </div>
        </div>
        
        {/* Code decoration */}
        <div className="absolute top-10 left-10 opacity-20 font-mono text-sm">
          <pre>{`const interview = {
  prepare: true,
  practice: 'daily',
  success: 100
};`}</pre>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 font-mono text-sm">
          <pre>{`function getJob() {
  return 'dream offer';
}`}</pre>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">156+</div>
              <div className="text-muted-foreground">Вопросов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Алгоритмов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1200+</div>
              <div className="text-muted-foreground">Студентов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">89%</div>
              <div className="text-muted-foreground">Успешных собеседований</div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section id="questions" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Банк вопросов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Изучай популярные вопросы с собеседований в ведущих IT-компаниях
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {questionCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuestions.map((question) => (
              <Card key={question.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg leading-tight pr-2">
                      {question.title}
                    </CardTitle>
                    <Badge className={getDifficultyColor(question.difficulty)}>
                      {question.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {question.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {question.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value="answer" className="border-none">
                        <AccordionTrigger className="text-sm hover:no-underline py-2">
                          <div className="flex items-center">
                            <Icon name="Eye" className="mr-2 h-4 w-4" />
                            Показать ответ
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground pt-2">
                          {question.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="Bookmark" className="mr-1 h-3 w-3" />
                        Сохранить
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="Share" className="mr-1 h-3 w-3" />
                        Поделиться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Icon name="Plus" className="mr-2" />
              Загрузить ещё вопросы
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готов начать подготовку?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйся к тысячам разработчиков, которые уже получили работу мечты
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            <Icon name="Rocket" className="mr-2" />
            Начать бесплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="font-mono font-bold text-xl text-primary">
                IT Interview Prep
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для подготовки к собеседованиям в IT
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Продукт</h3>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-muted-foreground hover:text-foreground">Вопросы</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-foreground">Алгоритмы</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-foreground">Системное проектирование</a></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Ресурсы</h3>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-muted-foreground hover:text-foreground">Блог</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-foreground">Гайды</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Связь</h3>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-muted-foreground hover:text-foreground">Поддержка</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-foreground">Telegram</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-foreground">GitHub</a></div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 IT Interview Prep. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;