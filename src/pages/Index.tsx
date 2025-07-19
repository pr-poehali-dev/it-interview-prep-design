import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const questionCategories = [
    { id: 'all', name: 'Все', count: 156 },
    { id: 'javascript', name: 'JavaScript', count: 45 },
    { id: 'react', name: 'React', count: 32 },
    { id: 'algorithms', name: 'Алгоритмы', count: 28 },
    { id: 'system-design', name: 'System Design', count: 18 },
    { id: 'databases', name: 'БД', count: 23 },
    { id: 'css', name: 'CSS', count: 10 }
  ];

  const questionCards = [
    {
      id: 1,
      title: 'Что такое замыкания в JavaScript?',
      description: 'Объясните концепцию замыканий и приведите примеры использования',
      category: 'javascript',
      difficulty: 'Medium',
      tags: ['Функции', 'Scope'],
      answer: 'Замыкание - это функция, которая имеет доступ к переменным из внешней области видимости даже после того, как внешняя функция завершила выполнение.'
    },
    {
      id: 2,
      title: 'Разница между var, let и const',
      description: 'Объясните различия в области видимости и поведении',
      category: 'javascript',
      difficulty: 'Easy',
      tags: ['Переменные', 'ES6'],
      answer: 'var имеет функциональную область видимости, let и const - блочную. const нельзя переопределить, var поднимается наверх.'
    },
    {
      id: 3,
      title: 'Жизненный цикл React компонента',
      description: 'Опишите основные методы жизненного цикла',
      category: 'react',
      difficulty: 'Medium',
      tags: ['Lifecycle', 'Hooks'],
      answer: 'Основные этапы: mounting (componentDidMount), updating (componentDidUpdate), unmounting (componentWillUnmount). В функциональных компонентах используется useEffect.'
    },
    {
      id: 4,
      title: 'Алгоритм сортировки пузырьком',
      description: 'Реализуйте bubble sort и объясните временную сложность',
      category: 'algorithms',
      difficulty: 'Easy',
      tags: ['Сортировка', 'O(n²)'],
      answer: 'Bubble sort сравнивает соседние элементы и меняет их местами. Временная сложность O(n²), пространственная O(1).'
    },
    {
      id: 5,
      title: 'Что такое SQL индексы?',
      description: 'Объясните назначение и типы индексов в базах данных',
      category: 'databases',
      difficulty: 'Medium',
      tags: ['SQL', 'Производительность'],
      answer: 'Индексы ускоряют поиск данных, создавая структуру для быстрого доступа. Типы: B-tree, Hash, Bitmap.'
    },
    {
      id: 6,
      title: 'CSS Grid vs Flexbox',
      description: 'Когда использовать Grid, а когда Flexbox?',
      category: 'css',
      difficulty: 'Medium',
      tags: ['Layout', 'CSS Grid'],
      answer: 'Flexbox для одномерных макетов (строка или столбец), Grid для двумерных (строки и столбцы одновременно).'
    }
  ];

  const filteredQuestions = selectedCategory === 'all' 
    ? questionCards 
    : questionCards.filter(q => q.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-secondary text-secondary-foreground';
      case 'Medium': return 'bg-muted text-muted-foreground';
      case 'Hard': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-semibold text-foreground">
              Interview Prep
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#questions" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Вопросы</a>
              <a href="#practice" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Практика</a>
              <a href="#progress" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Прогресс</a>
              <Button variant="ghost" size="sm" className="text-sm">
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
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground">
              Подготовка к собеседованию
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Структурированная база знаний для успешного прохождения интервью в IT
            </p>
            <div className="pt-4">
              <Button size="lg" className="text-base px-8 py-3">
                Начать изучение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-foreground">156</div>
              <div className="text-sm text-muted-foreground">Вопросов</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-foreground">50</div>
              <div className="text-sm text-muted-foreground">Алгоритмов</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-foreground">1,2k</div>
              <div className="text-sm text-muted-foreground">Студентов</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-foreground">89%</div>
              <div className="text-sm text-muted-foreground">Успеха</div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section id="questions" className="py-20 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-light text-foreground">Банк вопросов</h2>
              <p className="text-muted-foreground">
                Часто задаваемые вопросы на собеседованиях
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {questionCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                  size="sm"
                >
                  {category.name} <span className="ml-1 text-xs opacity-60">{category.count}</span>
                </Button>
              ))}
            </div>

            {/* Questions Grid */}
            <div className="space-y-4">
              {filteredQuestions.map((question) => (
                <Card key={question.id} className="border border-border hover:shadow-sm transition-shadow duration-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-lg font-medium leading-snug">
                          {question.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {question.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {question.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {question.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Accordion type="single" collapsible>
                        <AccordionItem value="answer" className="border-none">
                          <AccordionTrigger className="text-sm hover:no-underline py-3 text-muted-foreground">
                            Показать ответ
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                            {question.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="ghost" size="sm">
                Показать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="max-w-lg mx-auto space-y-6">
            <h2 className="text-2xl font-light text-foreground">Начните подготовку</h2>
            <p className="text-muted-foreground text-sm">
              Присоединяйтесь к сообществу разработчиков
            </p>
            <Button className="text-sm px-6">
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-3">
                <div className="font-medium text-foreground text-sm">
                  Interview Prep
                </div>
                <p className="text-xs text-muted-foreground">
                  Платформа для подготовки к собеседованиям
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Материалы</h3>
                <div className="space-y-2 text-xs">
                  <div><a href="#" className="text-muted-foreground hover:text-foreground">Вопросы</a></div>
                  <div><a href="#" className="text-muted-foreground hover:text-foreground">Алгоритмы</a></div>
                  <div><a href="#" className="text-muted-foreground hover:text-foreground">Системы</a></div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Контакты</h3>
                <div className="space-y-2 text-xs">
                  <div><a href="#" className="text-muted-foreground hover:text-foreground">Поддержка</a></div>
                  <div><a href="#" className="text-muted-foreground hover:text-foreground">Telegram</a></div>
                  <div><a href="#" className="text-muted-foreground hover:text-foreground">GitHub</a></div>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs text-muted-foreground text-center">
                © 2024 Interview Prep
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;