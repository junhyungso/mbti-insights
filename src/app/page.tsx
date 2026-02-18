'use client';

import { Header } from '@/components/Header/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Brain, Heart, TrendingUp, Users } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Brain,
      title: '16 Personality Types',
      description:
        'Explore detailed information about all MBTI personality types',
    },
    {
      icon: Heart,
      title: 'Compatibility Analysis',
      description: 'Discover which types complement each other best',
    },
    {
      icon: Users,
      title: 'Interactive Dashboard',
      description: 'Compare any two types and see their compatibility ratings',
    },
    {
      icon: TrendingUp,
      title: 'Growth Insights',
      description:
        'Learn about strengths, weaknesses, and areas for development',
    },
  ];

  return (
    <div className='min-h-[calc(100vh-64px)]'>
      {/* Hero Section */}
      <Header currentTab='' onTabChange={onNavigate} />
      <section className='bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white py-20 px-4'>
        <div className='container mx-auto text-center max-w-4xl'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Discover Your Perfect MBTI Match
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-purple-100'>
            Explore personality compatibility and deepen your understanding of
            the 16 Myers-Briggs types
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              variant='secondary'
              onClick={() => onNavigate('dashboard')}
              className='text-lg'
            >
              Try Dashboard
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              onClick={() => onNavigate('types')}
              className='text-lg bg-white/10 hover:bg-white/20 text-white border-white/30'
            >
              Explore Types
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-6xl'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Why Use MBTI Match?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='border-2 hover:border-purple-300 transition-colors'
              >
                <CardContent className='pt-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4'>
                    <feature.icon className='h-6 w-6 text-white' />
                  </div>
                  <h3 className='font-bold text-lg mb-2'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4'>
        <div className='container mx-auto max-w-4xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Explore Compatibility?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Start by selecting your MBTI type and discover which personalities
            complement you best
          </p>
          <Button
            size='lg'
            onClick={() => onNavigate('dashboard')}
            className='text-lg'
          >
            Get Started
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </div>
      </section>
    </div>
  );
}
