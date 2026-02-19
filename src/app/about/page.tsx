'use client';

import { Header } from '@/components/Header/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Lightbulb, Users } from 'lucide-react';

export default function AboutPage() {
  const dimensions = [
    {
      title: 'Extraversion (E) vs Introversion (I)',
      description: 'How you direct and receive energy',
      details:
        'Extraverts are energized by interaction with others and tend to be action-oriented. Introverts recharge through solitude and prefer reflection before action.',
    },
    {
      title: 'Sensing (S) vs Intuition (N)',
      description: 'How you take in information',
      details:
        'Sensors focus on concrete facts and details from their five senses. Intuitives prefer abstract concepts, patterns, and future possibilities.',
    },
    {
      title: 'Thinking (T) vs Feeling (F)',
      description: 'How you make decisions',
      details:
        'Thinkers make decisions based on logic and objective analysis. Feelers consider personal values and the impact on people when making choices.',
    },
    {
      title: 'Judging (J) vs Perceiving (P)',
      description: 'How you approach the outside world',
      details:
        'Judgers prefer structure, planning, and closure. Perceivers are more spontaneous, flexible, and open to new information.',
    },
  ];

  return (
    <>
      <Header currentTab='about' />
      <div className='container mx-auto px-4 py-8 max-w-5xl'>
        <div className='mb-12 text-center'>
          <h1 className='text-4xl font-bold mb-4'>About MBTI</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Understanding the Myers-Briggs Type Indicator and how it helps us
            understand personality
          </p>
        </div>

        {/* What is MBTI */}
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <BookOpen className='h-6 w-6' />
              What is MBTI?
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p>
              The Myers-Briggs Type Indicator (MBTI) is a psychological
              assessment tool designed to identify personality preferences and
              how people perceive the world and make decisions. Developed by
              Isabel Briggs Myers and her mother Katharine Cook Briggs, it's
              based on Carl Jung's theory of psychological types.
            </p>
            <p>
              The MBTI categorizes people into 16 distinct personality types
              based on four dichotomies, creating a four-letter code that
              represents an individual's preferences across different dimensions
              of personality.
            </p>
          </CardContent>
        </Card>

        {/* Four Dimensions */}
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Brain className='h-6 w-6' />
              The Four Dimensions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type='single' collapsible className='w-full'>
              {dimensions.map((dimension, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>
                    <div className='text-left'>
                      <div className='font-semibold'>{dimension.title}</div>
                      <div className='text-sm text-gray-600'>
                        {dimension.description}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className='text-gray-700'>{dimension.details}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Four Categories */}
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Users className='h-6 w-6' />
              The Four Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <div className='font-semibold text-purple-700'>
                  Analysts (NT)
                </div>
                <p className='text-sm text-gray-600'>
                  Rationality, logic, and competence are core values. These
                  types excel at strategic thinking and solving complex
                  problems.
                </p>
                <div className='text-xs text-gray-500'>
                  INTJ, INTP, ENTJ, ENTP
                </div>
              </div>

              <div className='space-y-2'>
                <div className='font-semibold text-green-700'>
                  Diplomats (NF)
                </div>
                <p className='text-sm text-gray-600'>
                  Empathy, cooperation, and harmony drive these types. They're
                  idealistic and seek to help others reach their potential.
                </p>
                <div className='text-xs text-gray-500'>
                  INFJ, INFP, ENFJ, ENFP
                </div>
              </div>

              <div className='space-y-2'>
                <div className='font-semibold text-blue-700'>
                  Sentinels (SJ)
                </div>
                <p className='text-sm text-gray-600'>
                  Order, security, and stability matter most. These practical
                  types value tradition and are highly reliable.
                </p>
                <div className='text-xs text-gray-500'>
                  ISTJ, ISFJ, ESTJ, ESFJ
                </div>
              </div>

              <div className='space-y-2'>
                <div className='font-semibold text-orange-700'>
                  Explorers (SP)
                </div>
                <p className='text-sm text-gray-600'>
                  Spontaneity, flexibility, and adaptability define these types.
                  They're hands-on and love living in the moment.
                </p>
                <div className='text-xs text-gray-500'>
                  ISTP, ISFP, ESTP, ESFP
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Use */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Lightbulb className='h-6 w-6' />
              How to Use MBTI Match
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className='space-y-3 list-decimal list-inside'>
              <li>
                <span className='font-semibold'>Discover Your Type:</span> If
                you don't know your MBTI type yet, take an official assessment
                or explore the type descriptions to find what resonates with
                you.
              </li>
              <li>
                <span className='font-semibold'>Use the Dashboard:</span> Select
                two types to see their compatibility rating and relationship
                dynamics.
              </li>
              <li>
                <span className='font-semibold'>Explore All Types:</span> Learn
                about all 16 types, their strengths, weaknesses, and
                characteristics.
              </li>
              <li>
                <span className='font-semibold'>Apply Insights:</span> Use
                compatibility information as a tool for understanding, not as a
                definitive guide. Every relationship is unique!
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className='mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg'>
          <p className='text-sm text-yellow-800'>
            <strong>Note:</strong> MBTI is a tool for self-understanding and
            should not be used to limit yourself or others. Compatibility
            ratings are generalizations based on type preferences. Real
            relationships depend on many factors including communication,
            values, life experiences, and personal growth.
          </p>
        </div>
      </div>
    </>
  );
}
